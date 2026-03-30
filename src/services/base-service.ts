import { Environment } from '../http/environment';
import { HttpClient } from '../http/client';
import { SdkConfig } from '../http/types';
import { OAuthTokenManager } from '../http/oauth/token-manager';

/**
 * Base service class that all API service classes extend.
 * Provides common functionality including HTTP client management and configuration.
 */
export class BaseService {
  /** The HTTP client instance used to make API requests */
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
