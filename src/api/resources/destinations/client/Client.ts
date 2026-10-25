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
import {
  ListDestinationsResponse,
  listDestinationsResponseResponse,
} from '../types/ListDestinationsResponse';
import { ErrorResponse } from '../../../types/ErrorResponse';

export declare namespace DestinationsClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Destinations operations.
 * Provides methods to interact with Destinations-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class DestinationsClient extends BaseService {
  protected listDestinationsConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for listDestinations.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setListDestinationsConfig(config: Partial<BaseClientOptions>): this {
    this.listDestinationsConfig = config;
    return this;
  }

  /**
   * List Destinations
   * @param {DestinationsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CelitechApi.ListDestinationsResponse>} - Successful Response
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
   *     await client.destinations.listDestinations()
   */
  listDestinations(
    requestOptions?: DestinationsClient.RequestOptions,
  ): HttpResponsePromise<CelitechApi.ListDestinationsResponse> {
    return HttpResponsePromise.fromPromise(this.__listDestinations(requestOptions));
  }
  private async __listDestinations(
    requestOptions?: DestinationsClient.RequestOptions,
  ): Promise<WithRawResponse<CelitechApi.ListDestinationsResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.listDestinationsConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/destinations')
      .setRequestSchema(core.cast.identity<unknown>())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listDestinationsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callWithRawResponse<CelitechApi.ListDestinationsResponse>(_request);
  }
}
