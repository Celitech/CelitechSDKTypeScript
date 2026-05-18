import { SdkConfig } from '../types';
import { OAuthService } from '../../services/o-auth';

/**
 * Represents an OAuth 2.0 access token with its associated metadata.
 * Stores the token, granted scopes, and expiration time.
 */
export class OAuthToken {
  /**
   * Creates a new OAuth token.
   * @param accessToken - The access token string
   * @param scopes - Set of OAuth scopes granted to this token
   * @param expiresAt - Timestamp when the token expires (milliseconds since epoch), or null if no expiration
   */
  constructor(
    public accessToken: string,
    public scopes: Set<string>,
    public expiresAt: number | null,
  ) {}

  /**
   * Checks if this token has all the required scopes.
   * @param scopes - Set of scopes to check for
   * @returns True if the token has all required scopes, false otherwise
   */
  public hasAllScopes(scopes: Set<string>) {
    for (const scope of scopes) {
      if (!this.scopes.has(scope)) {
        return false;
      }
    }
    return true;
  }
}

/**
 * Manages OAuth 2.0 access tokens for the SDK.
 * Handles token retrieval, caching, and automatic refresh when tokens expire.
 * Implements a singleton pattern to share tokens across the SDK.
 */
export class OAuthTokenManager {
  /** Singleton instance of the token manager */
  private static instance: OAuthTokenManager;

  /** Currently cached OAuth token */
  private token?: OAuthToken;

  /**
   * Gets a valid access token for the specified scopes.
   * Returns a cached token if available and not expired, otherwise requests a new one.
   * @param scopes - Set of OAuth scopes required for the token
   * @param config - SDK configuration containing client credentials
   * @returns A promise that resolves to a valid OAuth token
   * @throws Error if client credentials are missing or token request fails
   */
  public async getToken(scopes: Set<string>, config: SdkConfig): Promise<OAuthToken> {
    if (
      this.token?.hasAllScopes(scopes) &&
      this.token?.expiresAt &&
      this.token.expiresAt - Date.now() > 5000
    ) {
      return this.token;
    }

    if (!config.clientId || !config.clientSecret) {
      throw new Error('OAuthError: clientId and clientSecret are required for token management.');
    }

    const updatedScopes = new Set([...scopes, ...(this.token?.scopes || [])]);

    const oAuth = new OAuthService(
      {
        ...config,
        baseUrl:
          config.oAuthBaseUrl ||
          config.baseUrl ||
          config.environment ||
          'https://auth.celitech.net',
      },
      this,
    );
    const response = await oAuth.getAccessToken({
      grantType: 'client_credentials',
      clientId: config.clientId,
      clientSecret: config.clientSecret,
    });

    if (!response?.accessToken) {
      throw new Error(
        `OAuthError: token endpoint response did not return access token. Response: ${(JSON.stringify(response), undefined, 2)}.`,
      );
    }

    this.token = new OAuthToken(
      response.accessToken,
      updatedScopes,
      response?.expiresIn ? response?.expiresIn * 1000 + Date.now() : null,
    );

    return this.token;
  }
}
