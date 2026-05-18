import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { TokenOkResponse, tokenOkResponseResponse } from './models/token-ok-response';
import { BadRequest } from '../common/bad-request';
import { Unauthorized } from '../common/unauthorized';

/**
 * Service class for IFrameService operations.
 * Provides methods to interact with IFrameService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class IFrameService extends BaseService {
  protected tokenConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for token.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTokenConfig(config: Partial<SdkConfig>): this {
    this.tokenConfig = config;
    return this;
  }

  /**
   * Generate a new token to be used in the iFrame
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<TokenOkResponse>>} - Successful Response
   */
  async token(requestConfig?: Partial<SdkConfig>): Promise<TokenOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.tokenConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/iframe/token')
      .setRequestSchema(z.any())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: tokenOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: BadRequest,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Unauthorized,
        contentType: ContentType.Json,
        status: 401,
      })
      .build();
    return this.client.callDirect<TokenOkResponse>(request);
  }
}
