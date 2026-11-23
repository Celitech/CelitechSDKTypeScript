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
import { TokenResponse, tokenResponseResponse } from '../types/TokenResponse';
import { ErrorResponse } from '../../../types/ErrorResponse';

export declare namespace IFrameClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for IFrame operations.
 * Provides methods to interact with IFrame-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class IFrameClient extends BaseService {
  protected tokenConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for token.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setTokenConfig(config: Partial<BaseClientOptions>): this {
    this.tokenConfig = config;
    return this;
  }

  /**
   * Generate a new token to be used in the iFrame
   * @param {IFrameClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CelitechApi.TokenResponse>} - Successful Response
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
   *     await client.iFrame.token()
   */
  token(
    requestOptions?: IFrameClient.RequestOptions,
  ): HttpResponsePromise<CelitechApi.TokenResponse> {
    return HttpResponsePromise.fromPromise(this.__token(requestOptions));
  }
  private async __token(
    requestOptions?: IFrameClient.RequestOptions,
  ): Promise<WithRawResponse<CelitechApi.TokenResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.tokenConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('POST')
      .setPath('/iframe/token')
      .setRequestSchema(core.cast.identity<unknown>())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: tokenResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callWithRawResponse<CelitechApi.TokenResponse>(_request);
  }
}
