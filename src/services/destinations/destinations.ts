import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { ListDestinationsOkResponse, listDestinationsOkResponseResponse } from './models/list-destinations-ok-response';

export class DestinationsService extends BaseService {
  /**
   * List Destinations
   * @returns {Promise<HttpResponse<ListDestinationsOkResponse>>} Successful Response
   */
  async listDestinations(requestConfig?: RequestConfig): Promise<HttpResponse<ListDestinationsOkResponse>> {
    const request = new Request({
      method: 'GET',
      path: '/destinations',
      config: this.config,
      responseSchema: listDestinationsOkResponseResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    return this.client.call<ListDestinationsOkResponse>(request);
  }
}
