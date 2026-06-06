import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { OAuthTokenManager } from './http/oauth/token-manager';
import { CelitechService } from './services/celitech';

export * from './services/celitech';
export * from './services/o-auth';

export * from './http';
export { Environment } from './http/environment';

export class Celitech {
  public readonly celitech: CelitechService;

  protected tokenManager: OAuthTokenManager = new OAuthTokenManager();

  constructor(public config: SdkConfig) {
    this.celitech = new CelitechService(this.config, this.tokenManager);
  }

  set baseUrl(baseUrl: string) {
    this.celitech.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.celitech.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.celitech.timeoutMs = timeoutMs;
  }

  set clientId(clientId: string) {
    this.celitech.clientId = clientId;
  }

  set clientSecret(clientSecret: string) {
    this.celitech.clientSecret = clientSecret;
  }

  set oAuthBaseUrl(oAuthBaseUrl: string) {
    this.celitech.oAuthBaseUrl = oAuthBaseUrl;
  }

  set accessToken(accessToken: string) {
    this.celitech.accessToken = accessToken;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
