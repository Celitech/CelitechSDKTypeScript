import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { Environment } from '../../http/environment';
import { TokenOkResponse, tokenOkResponseResponse } from './models/token-ok-response';
import { _24 } from './models/_24';
import { _25 } from './models/_25';

export class IFrameService extends BaseService {
  /**
   * Generate a new token to be used in the iFrame
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<TokenOkResponse>>} Successful Response
   */
  async token(requestConfig?: RequestConfig): Promise<HttpResponse<TokenOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
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
        error: _24,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: _25,
        contentType: ContentType.Json,
        status: 401,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .build();
    return this.client.call<TokenOkResponse>(request);
  }
}
