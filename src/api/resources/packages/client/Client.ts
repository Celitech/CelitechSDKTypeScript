import * as core from '../../../../core';
import type * as CelitechApi from '../../..';
import { BaseService } from '../../../../services/base-service';
import {
  BaseClientOptions,
  BaseRequestOptions,
  ContentType,
  HttpResponse,
} from '../../../../http/types';
import { RequestBuilder } from '../../../../http/transport/request-builder';
import { SerializationStyle } from '../../../../http/serialization/base-serializer';
import { CelitechApiError } from '../../../../http/errors/throwable-error';
import { HttpResponsePromise, WithRawResponse } from '../../../../http/response-promise';
import { Supplier, resolveHeaders } from '../../../../http/utils/supplier';
import { CelitechApiEnvironment } from '../../../../http/environment';
import { ListPackagesResponse, listPackagesResponseResponse } from '../types/ListPackagesResponse';
import { ErrorResponse } from '../../../types/ErrorResponse';
import { ListPackagesRequest } from './requests';

export declare namespace PackagesClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Packages operations.
 * Provides methods to interact with Packages-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PackagesClient extends BaseService {
  protected listPackagesConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for listPackages.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setListPackagesConfig(config: Partial<BaseClientOptions>): this {
    this.listPackagesConfig = config;
    return this;
  }

  /**
   * List Packages
   * @param {CelitechApi.ListPackagesRequest} request
   * @param {PackagesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CelitechApi.ListPackagesResponse>} - Successful Response
   *
   * @throws {@link CelitechApi.BadRequestError}
   * @throws {@link CelitechApi.UnauthorizedError}
   * @throws {@link CelitechApi.ConflictError}
   * @throws {@link CelitechApi.UnprocessableEntityError}
   * @throws {@link CelitechApi.ServiceUnavailableError}
   * @throws {@link errors.CelitechApiError}
   * @throws {@link errors.CelitechApiTimeoutError}
   *
   * @example
   *     await client.packages.listPackages()
   */
  listPackages(
    request: CelitechApi.ListPackagesRequest = {},
    requestOptions?: PackagesClient.RequestOptions,
  ): HttpResponsePromise<CelitechApi.ListPackagesResponse> {
    return HttpResponsePromise.fromPromise(this.__listPackages(request, requestOptions));
  }
  private async __listPackages(
    request: CelitechApi.ListPackagesRequest = {},
    requestOptions?: PackagesClient.RequestOptions,
  ): Promise<WithRawResponse<CelitechApi.ListPackagesResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.listPackagesConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/packages')
      .setRequestSchema(core.cast.identity<unknown>())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listPackagesResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addQueryParam({
        key: 'destination',
        value: request.destination,
      })
      .addQueryParam({
        key: 'dataLimitInGB',
        value: request.dataLimitInGB,
      })
      .addQueryParam({
        key: 'startDate',
        value: request.startDate,
      })
      .addQueryParam({
        key: 'endDate',
        value: request.endDate,
      })
      .addQueryParam({
        key: 'afterCursor',
        value: request.afterCursor,
      })
      .addQueryParam({
        key: 'limit',
        value: request.limit,
      })
      .addQueryParam({
        key: 'startTime',
        value: request.startTime,
      })
      .addQueryParam({
        key: 'endTime',
        value: request.endTime,
      })
      .addQueryParam({
        key: 'includeUnlimited',
        value: request.includeUnlimited,
      })
      .build();
    return this.client.callWithRawResponse<CelitechApi.ListPackagesResponse>(_request);
  }
}
