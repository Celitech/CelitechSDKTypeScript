import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetAccessTokenRequest, getAccessTokenRequestRequest } from './models/get-access-token-request';
import { GetAccessTokenOkResponse, getAccessTokenOkResponseResponse } from './models/get-access-token-ok-response';

export class OAuthService extends BaseService {
  /**
   * This endpoint was added by liblab
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetAccessTokenOkResponse>>} Successful Response
   */
  async getAccessToken(
    body: GetAccessTokenRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetAccessTokenOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
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
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/x-www-form-urlencoded' })
      .addBody(body)
      .build();
    return this.client.call<GetAccessTokenOkResponse>(request);
  }
}
