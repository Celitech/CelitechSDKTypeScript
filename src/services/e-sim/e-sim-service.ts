import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetEsimOkResponse, getEsimOkResponseResponse } from './models/get-esim-ok-response';
import { ErrorResponse } from '../common/error-response';
import { GetEsimParams, SuspendEsimParams } from './request-params';
import {
  GetEsimDeviceOkResponse,
  getEsimDeviceOkResponseResponse,
} from './models/get-esim-device-ok-response';
import {
  GetEsimHistoryOkResponse,
  getEsimHistoryOkResponseResponse,
} from './models/get-esim-history-ok-response';
import {
  SuspendEsimOkResponse,
  suspendEsimOkResponseResponse,
} from './models/suspend-esim-ok-response';

/**
 * Service class for ESimService operations.
 * Provides methods to interact with ESimService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ESimService extends BaseService {
  protected getEsimConfig?: Partial<SdkConfig>;

  protected getEsimDeviceConfig?: Partial<SdkConfig>;

  protected getEsimHistoryConfig?: Partial<SdkConfig>;

  protected suspendEsimConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getEsim.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEsimConfig(config: Partial<SdkConfig>): this {
    this.getEsimConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getEsimDevice.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEsimDeviceConfig(config: Partial<SdkConfig>): this {
    this.getEsimDeviceConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getEsimHistory.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEsimHistoryConfig(config: Partial<SdkConfig>): this {
    this.getEsimHistoryConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for suspendEsim.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSuspendEsimConfig(config: Partial<SdkConfig>): this {
    this.suspendEsimConfig = config;
    return this;
  }

  /**
   * Get eSIM
   * @param {string} params.iccid - ID of the eSIM
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetEsimOkResponse>>} - Successful Response
   */
  async getEsim(
    params: GetEsimParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetEsimOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getEsimConfig, requestConfig);
    z.object({ iccid: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/esim')
      .setRequestSchema(z.any())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getEsimOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 409,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 503,
      })
      .addQueryParam({
        key: 'iccid',
        value: params?.iccid,
      })
      .build();
    return this.client.callDirect<GetEsimOkResponse>(request);
  }

  /**
   * Get eSIM Device
   * @param {string} iccid - ID of the eSIM
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetEsimDeviceOkResponse>>} - Successful Response
   */
  async getEsimDevice(
    iccid: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetEsimDeviceOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getEsimDeviceConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/esim/{iccid}/device')
      .setRequestSchema(z.any())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getEsimDeviceOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 409,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 503,
      })
      .addPathParam({
        key: 'iccid',
        value: iccid,
      })
      .build();
    return this.client.callDirect<GetEsimDeviceOkResponse>(request);
  }

  /**
   * Get eSIM History
   * @param {string} iccid - ID of the eSIM
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetEsimHistoryOkResponse>>} - Successful Response
   */
  async getEsimHistory(
    iccid: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetEsimHistoryOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getEsimHistoryConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/esim/{iccid}/history')
      .setRequestSchema(z.any())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getEsimHistoryOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 409,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 503,
      })
      .addPathParam({
        key: 'iccid',
        value: iccid,
      })
      .build();
    return this.client.callDirect<GetEsimHistoryOkResponse>(request);
  }

  /**
   * Suspends an eSIM to prevent abuse. All of the eSIM's packages are terminated and its connectivity is switched off. The eSIM is not refunded: the charge stays.
   * @param {string} iccid - ID of the eSIM
   * @param {string} [params.idempotencyKey] - Optional. A unique value (for example a UUID) that makes this request safe to retry. If a request with the same `Idempotency-Key` and the same body succeeds, repeating it returns the original response instead of performing the action again, and the response includes the header `Idempotent-Replayed: true`. Keys are scoped to your credentials and remembered for 3 days. Only successful (2xx) responses are remembered, so a request that failed can be retried with the same key. Reusing a key with a different request returns `422`; sending it while the original request is still being processed returns `409`. If the idempotency store is temporarily unavailable, the request is not processed and returns `503`; retry it. Must be 1 to 255 printable ASCII characters, without spaces.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<SuspendEsimOkResponse>>} - Successful Response
   */
  async suspendEsim(
    iccid: string,
    params?: SuspendEsimParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SuspendEsimOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.suspendEsimConfig, requestConfig);
    z.object({ idempotencyKey: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/esim/{iccid}/suspend')
      .setRequestSchema(z.any())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: suspendEsimOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 409,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: ErrorResponse,
        contentType: ContentType.Json,
        status: 503,
      })
      .addPathParam({
        key: 'iccid',
        value: iccid,
      })
      .addHeaderParam({
        key: 'Idempotency-Key',
        value: params?.idempotencyKey,
      })
      .build();
    return this.client.callDirect<SuspendEsimOkResponse>(request);
  }
}
