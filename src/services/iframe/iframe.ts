import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { TokenOkResponse, tokenOkResponseResponse } from './models/token-ok-response';

export class IframeService extends BaseService {
  /**
   * Generate a new token to be used in the iFrame
   * @returns {Promise<HttpResponse<TokenOkResponse>>} Successful Response
   */
  async token(requestConfig?: RequestConfig): Promise<HttpResponse<TokenOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
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
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .build();
    return this.client.call<TokenOkResponse>(request);
  }
}
