import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  GetAccessTokenRequest,
  getAccessTokenRequestRequest,
} from './models/get-access-token-request';
import {
  GetAccessTokenOkResponse,
  getAccessTokenOkResponseResponse,
} from './models/get-access-token-ok-response';

/**
 * Service class for OAuthService operations.
 * Provides methods to interact with OAuthService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class OAuthService extends BaseService {
  protected getAccessTokenConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getAccessToken.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAccessTokenConfig(config: Partial<SdkConfig>): this {
    this.getAccessTokenConfig = config;
    return this;
  }

  /**
   * This endpoint was added by liblab
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetAccessTokenOkResponse>>} - Successful Response
   */
  async getAccessToken(
    body: GetAccessTokenRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetAccessTokenOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getAccessTokenConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/oauth2/token')
      .setRequestSchema(getAccessTokenRequestRequest)
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.FormUrlEncoded)
      .addResponse({
        schema: getAccessTokenOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/x-www-form-urlencoded' })
      .addBody(body)
      .build();
    return this.client.callDirect<GetAccessTokenOkResponse>(request);
  }
}
