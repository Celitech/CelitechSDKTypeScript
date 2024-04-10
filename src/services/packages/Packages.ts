import BaseService from '../../BaseService';

import CustomHook from '../../hooks/CustomHook';
import { Request } from '../../hooks/Hook';

import { ListPackagesResponse } from './models/ListPackagesResponse';

import { serializeQuery } from '../../http/QuerySerializer';

const hook: CustomHook = new CustomHook();

export class PackagesService extends BaseService {
  /**
   * @summary List Packages
   * @description List of available packages

   * @param optionalParams - Optional parameters
   * @param optionalParams.destination - ISO representation of the package's destination. Optional, unless startDate and endDate are used, then it becomes mandatory.
   * @param optionalParams.startDate - Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.
   * @param optionalParams.endDate - End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 60 days after Start date.
   * @param optionalParams.afterCursor - To get the next batch of results, use this parameter. It tells the API where to start fetching data after the last item you received. It helps you avoid repeats and efficiently browse through large sets of data.
   * @param optionalParams.limit - Maximum number of packages to be returned in the response. The value must be greater than 0 and less than or equal to 160. If not provided, the default value is 20
   * @param optionalParams.startTime - Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months
   * @param optionalParams.endTime - Epoch value representing the end time of the package's validity. End time can be maximum 60 days after Start time
   * @param optionalParams.duration - Duration in seconds for the package's validity. If this parameter is present, it will override the startTime and endTime parameters. The maximum duration for a package's validity period is 60 days
   * @returns {Promise<ListPackagesResponse>} - The promise with the result
   */
  async listPackages(
    optionalParams: {
      destination?: string;
      startDate?: string;
      endDate?: string;
      afterCursor?: string;
      limit?: number;
      startTime?: number;
      endTime?: number;
      duration?: number;
    } = {},
  ): Promise<ListPackagesResponse> {
    const { destination, startDate, endDate, afterCursor, limit, startTime, endTime, duration } =
      optionalParams;

    const queryParams: string[] = [];
    const headers: { [key: string]: string } = {};
    if (destination) {
      queryParams.push(serializeQuery('form', true, 'destination', destination));
    }
    if (startDate) {
      queryParams.push(serializeQuery('form', true, 'startDate', startDate));
    }
    if (endDate) {
      queryParams.push(serializeQuery('form', true, 'endDate', endDate));
    }
    if (afterCursor) {
      queryParams.push(serializeQuery('form', true, 'afterCursor', afterCursor));
    }
    if (limit) {
      queryParams.push(serializeQuery('form', true, 'limit', limit));
    }
    if (startTime) {
      queryParams.push(serializeQuery('form', true, 'startTime', startTime));
    }
    if (endTime) {
      queryParams.push(serializeQuery('form', true, 'endTime', endTime));
    }
    if (duration) {
      queryParams.push(serializeQuery('form', true, 'duration', duration));
    }
    const urlEndpoint = '/packages';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const request: Request = { method: 'GET', url: finalUrl, headers };
    await hook.beforeRequest(request);
    const response: any = await this.httpClient.get(
      request.url,
      {},
      {
        ...request.headers,
      },
      true,
    );
    await hook.afterResponse(
      { method: 'GET', url: request.url, headers: request.headers },
      { data: response.data, headers: response.headers, status: response.status },
    );
    const responseModel = response.data as ListPackagesResponse;
    return responseModel;
  }
}
