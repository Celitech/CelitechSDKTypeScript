import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
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
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/packages')
      .setRequestSchema(z.any())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listPackagesOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addQueryParam({
        key: 'destination',
        value: params?.destination,
      })
      .addQueryParam({
        key: 'startDate',
        value: params?.startDate,
      })
      .addQueryParam({
        key: 'endDate',
        value: params?.endDate,
      })
      .addQueryParam({
        key: 'afterCursor',
        value: params?.afterCursor,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'startTime',
        value: params?.startTime,
      })
      .addQueryParam({
        key: 'endTime',
        value: params?.endTime,
      })
      .addQueryParam({
        key: 'duration',
        value: params?.duration,
      })
      .build();
    return this.client.call<ListPackagesOkResponse>(request);
  }
}
