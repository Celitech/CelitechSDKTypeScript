import { SdkConfig } from '../types';
import { OAuthService } from '../../services/o-auth';

export class OAuthToken {
  constructor(
    public accessToken: string,
    public scopes: Set<string>,
    public expiresAt: number | null,
  ) {}

  public hasAllScopes(scopes: Set<string>) {
    for (const scope of scopes) {
      if (!this.scopes.has(scope)) {
        return false;
      }
    }
    return true;
  }
}

export class OAuthTokenManager {
  private static instance: OAuthTokenManager;

  private token?: OAuthToken;

  public async getToken(scopes: Set<string>, config: SdkConfig): Promise<OAuthToken> {
    if (this.token?.hasAllScopes(scopes)) {
      return this.token;
    }

    const updatedScopes = new Set([...scopes, ...(this.token?.scopes || [])]);

    const oAuth = new OAuthService(
      {
        ...config,
        baseUrl: config.oAuthBaseUrl || 'https://auth.celitech.net',
      },
      this,
    );
    const response = await oAuth.getAccessToken(
      {
        grantType: 'client_credentials',
        clientId: config.clientId,
        clientSecret: config.clientSecret,
      },
      {},
    );

    if (!response.data?.accessToken) {
      throw new Error(
        `OAuthError: token endpoint response did not return access token. Response: ${(JSON.stringify(response), undefined, 2)}.`,
      );
    }

    this.token = new OAuthToken(
      response.data.accessToken,
      updatedScopes,
      response.data?.expiresIn ? response.data?.expiresIn + Math.floor(Date.now() / 1000) : null,
    );

    return this.token;
  }
}
