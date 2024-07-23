import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { ListPackagesOkResponse, listPackagesOkResponseResponse } from './models/list-packages-ok-response';
import { ListPackagesParams } from './request-params';

export class PackagesService extends BaseService {
  /**
   * List Packages
   * @param {string} [destination] - ISO representation of the package's destination.
   * @param {string} [startDate] - Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.
   * @param {string} [endDate] - End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 90 days after Start date.
   * @param {string} [afterCursor] - To get the next batch of results, use this parameter. It tells the API where to start fetching data after the last item you received. It helps you avoid repeats and efficiently browse through large sets of data.
   * @param {number} [limit] - Maximum number of packages to be returned in the response. The value must be greater than 0 and less than or equal to 160. If not provided, the default value is 20
   * @param {number} [startTime] - Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months
   * @param {number} [endTime] - Epoch value representing the end time of the package's validity. End time can be maximum 90 days after Start time
   * @param {number} [duration] - Duration in seconds for the package's validity. If this parameter is present, it will override the startTime and endTime parameters. The maximum duration for a package's validity period is 90 days
   * @returns {Promise<HttpResponse<ListPackagesOkResponse>>} Successful Response
   */
  async listPackages(
    params?: ListPackagesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListPackagesOkResponse>> {
    const request = new Request({
      method: 'GET',
      path: '/packages',
      config: this.config,
      responseSchema: listPackagesOkResponseResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('destination', params?.destination);
    request.addQueryParam('startDate', params?.startDate);
    request.addQueryParam('endDate', params?.endDate);
    request.addQueryParam('afterCursor', params?.afterCursor);
    request.addQueryParam('limit', params?.limit);
    request.addQueryParam('startTime', params?.startTime);
    request.addQueryParam('endTime', params?.endTime);
    request.addQueryParam('duration', params?.duration);
    return this.client.call<ListPackagesOkResponse>(request);
  }
}
