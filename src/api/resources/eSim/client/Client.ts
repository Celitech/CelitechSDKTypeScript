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
import { GetEsimResponse, getEsimResponseResponse } from '../types/GetEsimResponse';
import { ErrorResponse } from '../../../types/ErrorResponse';
import {
  GetEsimDeviceRequest,
  GetEsimHistoryRequest,
  GetEsimRequest,
  SuspendEsimRequest,
} from './requests';
import {
  GetEsimDeviceResponse,
  getEsimDeviceResponseResponse,
} from '../types/GetEsimDeviceResponse';
import {
  GetEsimHistoryResponse,
  getEsimHistoryResponseResponse,
} from '../types/GetEsimHistoryResponse';
import { SuspendEsimResponse, suspendEsimResponseResponse } from '../types/SuspendEsimResponse';

export declare namespace ESimClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for ESim operations.
 * Provides methods to interact with ESim-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ESimClient extends BaseService {
  protected getEsimConfig?: Partial<BaseClientOptions>;

  protected getEsimDeviceConfig?: Partial<BaseClientOptions>;

  protected getEsimHistoryConfig?: Partial<BaseClientOptions>;

  protected suspendEsimConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getEsim.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setGetEsimConfig(config: Partial<BaseClientOptions>): this {
    this.getEsimConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getEsimDevice.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setGetEsimDeviceConfig(config: Partial<BaseClientOptions>): this {
    this.getEsimDeviceConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getEsimHistory.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setGetEsimHistoryConfig(config: Partial<BaseClientOptions>): this {
    this.getEsimHistoryConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for suspendEsim.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setSuspendEsimConfig(config: Partial<BaseClientOptions>): this {
    this.suspendEsimConfig = config;
    return this;
  }

  /**
   * Get eSIM
   * @param {CelitechApi.GetEsimRequest} request
   * @param {ESimClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CelitechApi.GetEsimResponse>} - Successful Response
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
   *     await client.eSim.getEsim({
   *         iccid: "1111222233334444555000"
   *     })
   */
  getEsim(
    request: CelitechApi.GetEsimRequest,
    requestOptions?: ESimClient.RequestOptions,
  ): HttpResponsePromise<CelitechApi.GetEsimResponse> {
    return HttpResponsePromise.fromPromise(this.__getEsim(request, requestOptions));
  }
  private async __getEsim(
    request: CelitechApi.GetEsimRequest,
    requestOptions?: ESimClient.RequestOptions,
  ): Promise<WithRawResponse<CelitechApi.GetEsimResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getEsimConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/esim')
      .setRequestSchema(core.cast.identity<unknown>())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getEsimResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addQueryParam({
        key: 'iccid',
        value: request.iccid,
      })
      .build();
    return this.client.callWithRawResponse<CelitechApi.GetEsimResponse>(_request);
  }

  /**
   * Get eSIM Device
   * @param {CelitechApi.GetEsimDeviceRequest} request
   * @param {ESimClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CelitechApi.GetEsimDeviceResponse>} - Successful Response
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
   *     await client.eSim.getEsimDevice({
   *         iccid: "1111222233334444555000"
   *     })
   */
  getEsimDevice(
    request: CelitechApi.GetEsimDeviceRequest,
    requestOptions?: ESimClient.RequestOptions,
  ): HttpResponsePromise<CelitechApi.GetEsimDeviceResponse> {
    return HttpResponsePromise.fromPromise(this.__getEsimDevice(request, requestOptions));
  }
  private async __getEsimDevice(
    request: CelitechApi.GetEsimDeviceRequest,
    requestOptions?: ESimClient.RequestOptions,
  ): Promise<WithRawResponse<CelitechApi.GetEsimDeviceResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getEsimDeviceConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/esim/{iccid}/device')
      .setRequestSchema(core.cast.identity<unknown>())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getEsimDeviceResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'iccid',
        value: request.iccid,
      })
      .build();
    return this.client.callWithRawResponse<CelitechApi.GetEsimDeviceResponse>(_request);
  }

  /**
   * Get eSIM History
   * @param {CelitechApi.GetEsimHistoryRequest} request
   * @param {ESimClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CelitechApi.GetEsimHistoryResponse>} - Successful Response
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
   *     await client.eSim.getEsimHistory({
   *         iccid: "1111222233334444555000"
   *     })
   */
  getEsimHistory(
    request: CelitechApi.GetEsimHistoryRequest,
    requestOptions?: ESimClient.RequestOptions,
  ): HttpResponsePromise<CelitechApi.GetEsimHistoryResponse> {
    return HttpResponsePromise.fromPromise(this.__getEsimHistory(request, requestOptions));
  }
  private async __getEsimHistory(
    request: CelitechApi.GetEsimHistoryRequest,
    requestOptions?: ESimClient.RequestOptions,
  ): Promise<WithRawResponse<CelitechApi.GetEsimHistoryResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getEsimHistoryConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/esim/{iccid}/history')
      .setRequestSchema(core.cast.identity<unknown>())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getEsimHistoryResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'iccid',
        value: request.iccid,
      })
      .build();
    return this.client.callWithRawResponse<CelitechApi.GetEsimHistoryResponse>(_request);
  }

  /**
   * Suspends an eSIM to prevent abuse. All of the eSIM's packages are terminated and its connectivity is switched off. The eSIM is not refunded: the charge stays.
   * @param {CelitechApi.SuspendEsimRequest} request
   * @param {ESimClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CelitechApi.SuspendEsimResponse>} - Successful Response
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
   *     await client.eSim.suspendEsim({
   *         iccid: "1111222233334444555000"
   *     })
   */
  suspendEsim(
    request: CelitechApi.SuspendEsimRequest,
    requestOptions?: ESimClient.RequestOptions,
  ): HttpResponsePromise<CelitechApi.SuspendEsimResponse> {
    return HttpResponsePromise.fromPromise(this.__suspendEsim(request, requestOptions));
  }
  private async __suspendEsim(
    request: CelitechApi.SuspendEsimRequest,
    requestOptions?: ESimClient.RequestOptions,
  ): Promise<WithRawResponse<CelitechApi.SuspendEsimResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.suspendEsimConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('POST')
      .setPath('/esim/{iccid}/suspend')
      .setRequestSchema(core.cast.identity<unknown>())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: suspendEsimResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'iccid',
        value: request.iccid,
      })
      .addHeaderParam({
        key: 'Idempotency-Key',
        value: request['Idempotency-Key'],
      })
      .build();
    return this.client.callWithRawResponse<CelitechApi.SuspendEsimResponse>(_request);
  }
}
