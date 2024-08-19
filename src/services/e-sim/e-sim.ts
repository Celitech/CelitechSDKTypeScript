import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { GetEsimOkResponse, getEsimOkResponseResponse } from './models/get-esim-ok-response';
import { GetEsimParams } from './request-params';
import { GetEsimDeviceOkResponse, getEsimDeviceOkResponseResponse } from './models/get-esim-device-ok-response';
import { GetEsimHistoryOkResponse, getEsimHistoryOkResponseResponse } from './models/get-esim-history-ok-response';
import { GetEsimMacOkResponse, getEsimMacOkResponseResponse } from './models/get-esim-mac-ok-response';

export class ESimService extends BaseService {
  /**
   * Get eSIM Status
   * @param {string} iccid - ID of the eSIM
   * @returns {Promise<HttpResponse<GetEsimOkResponse>>} Successful Response
   */
  async getEsim(params: GetEsimParams, requestConfig?: RequestConfig): Promise<HttpResponse<GetEsimOkResponse>> {
    const request = new RequestBuilder<GetEsimOkResponse>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/esim')
      .setRequestSchema(z.any())
      .setResponseSchema(getEsimOkResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
   * @returns {Promise<HttpResponse<GetEsimDeviceOkResponse>>} Successful Response
   */
  async getEsimDevice(iccid: string, requestConfig?: RequestConfig): Promise<HttpResponse<GetEsimDeviceOkResponse>> {
    const request = new RequestBuilder<GetEsimDeviceOkResponse>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/esim/{iccid}/device')
      .setRequestSchema(z.any())
      .setResponseSchema(getEsimDeviceOkResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
   * @returns {Promise<HttpResponse<GetEsimHistoryOkResponse>>} Successful Response
   */
  async getEsimHistory(iccid: string, requestConfig?: RequestConfig): Promise<HttpResponse<GetEsimHistoryOkResponse>> {
    const request = new RequestBuilder<GetEsimHistoryOkResponse>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/esim/{iccid}/history')
      .setRequestSchema(z.any())
      .setResponseSchema(getEsimHistoryOkResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
   * @returns {Promise<HttpResponse<GetEsimMacOkResponse>>} Successful Response
   */
  async getEsimMac(iccid: string, requestConfig?: RequestConfig): Promise<HttpResponse<GetEsimMacOkResponse>> {
    const request = new RequestBuilder<GetEsimMacOkResponse>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/esim/{iccid}/mac')
      .setRequestSchema(z.any())
      .setResponseSchema(getEsimMacOkResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
