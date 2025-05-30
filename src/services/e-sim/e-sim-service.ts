import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetEsimOkResponse, getEsimOkResponseResponse } from './models/get-esim-ok-response';
import { _16 } from './models/_16';
import { _17 } from './models/_17';
import { GetEsimParams } from './request-params';
import { GetEsimDeviceOkResponse, getEsimDeviceOkResponseResponse } from './models/get-esim-device-ok-response';
import { _18 } from './models/_18';
import { _19 } from './models/_19';
import { GetEsimHistoryOkResponse, getEsimHistoryOkResponseResponse } from './models/get-esim-history-ok-response';
import { _20 } from './models/_20';
import { _21 } from './models/_21';
import { GetEsimMacOkResponse, getEsimMacOkResponseResponse } from './models/get-esim-mac-ok-response';
import { _22 } from './models/_22';
import { _23 } from './models/_23';

export class ESimService extends BaseService {
  /**
   * Get eSIM Status
   * @param {string} iccid - ID of the eSIM
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetEsimOkResponse>>} Successful Response
   */
  async getEsim(params: GetEsimParams, requestConfig?: RequestConfig): Promise<HttpResponse<GetEsimOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
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
        error: _16,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: _17,
        contentType: ContentType.Json,
        status: 401,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addQueryParam({
        key: 'iccid',
        value: params?.iccid,
      })
      .build();
    return this.client.call<GetEsimOkResponse>(request);
  }

  /**
   * Get eSIM Device
   * @param {string} iccid - ID of the eSIM
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetEsimDeviceOkResponse>>} Successful Response
   */
  async getEsimDevice(iccid: string, requestConfig?: RequestConfig): Promise<HttpResponse<GetEsimDeviceOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
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
        error: _18,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: _19,
        contentType: ContentType.Json,
        status: 401,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'iccid',
        value: iccid,
      })
      .build();
    return this.client.call<GetEsimDeviceOkResponse>(request);
  }

  /**
   * Get eSIM History
   * @param {string} iccid - ID of the eSIM
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetEsimHistoryOkResponse>>} Successful Response
   */
  async getEsimHistory(iccid: string, requestConfig?: RequestConfig): Promise<HttpResponse<GetEsimHistoryOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
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
        error: _20,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: _21,
        contentType: ContentType.Json,
        status: 401,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'iccid',
        value: iccid,
      })
      .build();
    return this.client.call<GetEsimHistoryOkResponse>(request);
  }

  /**
   * Get eSIM MAC
   * @param {string} iccid - ID of the eSIM
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetEsimMacOkResponse>>} Successful Response
   */
  async getEsimMac(iccid: string, requestConfig?: RequestConfig): Promise<HttpResponse<GetEsimMacOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/esim/{iccid}/mac')
      .setRequestSchema(z.any())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getEsimMacOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: _22,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: _23,
        contentType: ContentType.Json,
        status: 401,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'iccid',
        value: iccid,
      })
      .build();
    return this.client.call<GetEsimMacOkResponse>(request);
  }
}
