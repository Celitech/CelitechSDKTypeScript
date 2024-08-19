import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ListDestinationsOkResponse, listDestinationsOkResponseResponse } from './models/list-destinations-ok-response';

export class DestinationsService extends BaseService {
  /**
   * List Destinations
   * @returns {Promise<HttpResponse<ListDestinationsOkResponse>>} Successful Response
   */
  async listDestinations(requestConfig?: RequestConfig): Promise<HttpResponse<ListDestinationsOkResponse>> {
    const request = new RequestBuilder<ListDestinationsOkResponse>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/destinations')
      .setRequestSchema(z.any())
      .setResponseSchema(listDestinationsOkResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .build();
    return this.client.call<ListDestinationsOkResponse>(request);
  }
}
