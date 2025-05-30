import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { ListDestinationsOkResponse, listDestinationsOkResponseResponse } from './models/list-destinations-ok-response';
import { __ } from './models/__';
import { _1 } from './models/_1';

export class DestinationsService extends BaseService {
  /**
   * List Destinations
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListDestinationsOkResponse>>} Successful Response
   */
  async listDestinations(requestConfig?: RequestConfig): Promise<HttpResponse<ListDestinationsOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/destinations')
      .setRequestSchema(z.any())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listDestinationsOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: __,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: _1,
        contentType: ContentType.Json,
        status: 401,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .build();
    return this.client.call<ListDestinationsOkResponse>(request);
  }
}
