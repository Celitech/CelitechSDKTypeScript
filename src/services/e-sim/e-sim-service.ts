import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetEsimOkResponse, getEsimOkResponseResponse } from './models/get-esim-ok-response';
import { BadRequest } from '../common/bad-request';
import { Unauthorized } from '../common/unauthorized';
import { GetEsimParams } from './request-params';
import {
  GetEsimDeviceOkResponse,
  getEsimDeviceOkResponseResponse,
} from './models/get-esim-device-ok-response';
import {
  GetEsimHistoryOkResponse,
  getEsimHistoryOkResponseResponse,
} from './models/get-esim-history-ok-response';

/**
 * Service class for ESimService operations.
 * Provides methods to interact with ESimService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ESimService extends BaseService {
  protected getEsimConfig?: Partial<SdkConfig>;

  protected getEsimDeviceConfig?: Partial<SdkConfig>;

  protected getEsimHistoryConfig?: Partial<SdkConfig>;

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
        error: BadRequest,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Unauthorized,
        contentType: ContentType.Json,
        status: 401,
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
        error: BadRequest,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Unauthorized,
        contentType: ContentType.Json,
        status: 401,
      })
      .addPathParam({
        key: 'iccid',
        value: iccid,
      })
      .build();
    return this.client.callDirect<GetEsimHistoryOkResponse>(request);
  }
}
