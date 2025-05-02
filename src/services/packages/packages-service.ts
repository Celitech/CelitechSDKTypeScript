import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { Environment } from '../../http/environment';
import { ListPackagesOkResponse, listPackagesOkResponseResponse } from './models/list-packages-ok-response';
import { _2 } from './models/_2';
import { _3 } from './models/_3';
import { ListPackagesParams } from './request-params';

export class PackagesService extends BaseService {
  /**
 * List Packages
 * @param {string} [params.destination] - ISO representation of the package's destination.
 * @param {string} [params.startDate] - Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.
 * @param {string} [params.endDate] - End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 90 days after Start date.
 * @param {number} [params.dataLimitInGb] - Size of the package in GB.
- **Limited Packages (0.5, 1, 2, 3, 5, 8, 20GB)**
- **Unlimited Packages (available for Region-3):** Use **-1** for unlimited.

 * @param {boolean} [params.includeUnlimited] - A boolean flag to include the unlimited packages in the response. The flag is false by default.
 * @param {string} [params.afterCursor] - To get the next batch of results, use this parameter. It tells the API where to start fetching data after the last item you received. It helps you avoid repeats and efficiently browse through large sets of data.
 * @param {number} [params.limit] - Maximum number of packages to be returned in the response. The value must be greater than 0 and less than or equal to 160. If not provided, the default value is 20
 * @param {number} [params.startTime] - Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months
 * @param {number} [params.endTime] - Epoch value representing the end time of the package's validity. End time can be maximum 90 days after Start time
 * @param {number} [params.duration] - Duration in seconds for the package's validity. If this parameter is present, it will override the startTime and endTime parameters. The maximum duration for a package's validity period is 90 days
 * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ListPackagesOkResponse>>} Successful Response
 */
  async listPackages(
    params?: ListPackagesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListPackagesOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
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
      .addError({
        error: _2,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: _3,
        contentType: ContentType.Json,
        status: 401,
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
        key: 'dataLimitInGB',
        value: params?.dataLimitInGb,
      })
      .addQueryParam({
        key: 'includeUnlimited',
        value: params?.includeUnlimited,
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
