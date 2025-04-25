import { Environment } from '../http/environment';
import { HttpClient } from '../http/client';
import { SdkConfig } from '../http/types';
import { OAuthTokenManager } from '../http/oauth/token-manager';

export class BaseService {
  public client: HttpClient;

  constructor(
    public config: SdkConfig,
    protected tokenManager: OAuthTokenManager,
  ) {
    this.client = new HttpClient(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.config.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.config.environment = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.config.timeoutMs = timeoutMs;
  }

  set clientId(clientId: string) {
    this.config.clientId = clientId;
  }

  set clientSecret(clientSecret: string) {
    this.config.clientSecret = clientSecret;
  }

  set oAuthBaseUrl(oAuthBaseUrl: string) {
    this.config.oAuthBaseUrl = oAuthBaseUrl;
  }

  set accessToken(accessToken: string) {
    this.config.accessToken = accessToken;
  }
}
