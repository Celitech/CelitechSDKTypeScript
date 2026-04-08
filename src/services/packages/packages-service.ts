import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  ListPackagesOkResponse,
  listPackagesOkResponseResponse,
} from './models/list-packages-ok-response';
import { BadRequest } from '../common/bad-request';
import { Unauthorized } from '../common/unauthorized';
import { ListPackagesParams } from './request-params';

/**
 * Service class for PackagesService operations.
 * Provides methods to interact with PackagesService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PackagesService extends BaseService {
  protected listPackagesConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for listPackages.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListPackagesConfig(config: Partial<SdkConfig>): this {
    this.listPackagesConfig = config;
    return this;
  }

  /**
   * List Packages
   * @param {string} [params.destination] - ISO representation of the package's destination. Supports both ISO2 (e.g., 'FR') and ISO3 (e.g., 'FRA') country codes.
   * @param {string} [params.startDate] - Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.
   * @param {string} [params.endDate] - End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 90 days after Start date.
   * @param {string} [params.afterCursor] - To get the next batch of results, use this parameter. It tells the API where to start fetching data after the last item you received. It helps you avoid repeats and efficiently browse through large sets of data.
   * @param {number} [params.limit] - Maximum number of packages to be returned in the response. The value must be greater than 0 and less than or equal to 160. If not provided, the default value is 20
   * @param {number} [params.startTime] - Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months
   * @param {number} [params.endTime] - Epoch value representing the end time of the package's validity. End time can be maximum 90 days after Start time
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListPackagesOkResponse>>} - Successful Response
   */
  async listPackages(
    params?: ListPackagesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ListPackagesOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.listPackagesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
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
        error: BadRequest,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Unauthorized,
        contentType: ContentType.Json,
        status: 401,
      })
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
      .build();
    return this.client.callDirect<ListPackagesOkResponse>(request);
  }
}
