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

  /** Service-level configuration overrides */
  protected serviceConfig?: Partial<SdkConfig>;

  constructor(
    public config: SdkConfig,
    protected tokenManager: OAuthTokenManager,
  ) {
    this.client = new HttpClient(this.config);
  }

  /**
   * Sets service-level configuration that applies to all methods in this service.
   * @param config - Partial configuration to override SDK-level defaults
   * @returns This service instance for method chaining
   */
  setConfig(config: Partial<SdkConfig>): this {
    this.serviceConfig = config;
    return this;
  }

  /**
   * Resolves configuration from the hierarchy: requestConfig > methodConfig > serviceConfig > sdkConfig
   * Merges all config levels into a single resolved config object.
   * @param methodConfig - Method-level configuration override
   * @param requestConfig - Request-level configuration override
   * @returns Merged configuration with all overrides applied
   */
  protected getResolvedConfig(
    methodConfig?: Partial<SdkConfig>,
    requestConfig?: Partial<SdkConfig>,
  ): SdkConfig {
    return {
      ...this.config,
      ...this.serviceConfig,
      ...methodConfig,
      ...requestConfig,
    } as SdkConfig;
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
