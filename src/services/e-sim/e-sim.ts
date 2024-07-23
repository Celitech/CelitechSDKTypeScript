import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
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
    const request = new Request({
      method: 'GET',
      path: '/esim',
      config: this.config,
      responseSchema: getEsimOkResponseResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('iccid', params?.iccid);
    return this.client.call<GetEsimOkResponse>(request);
  }

  /**
   * Get eSIM Device
   * @param {string} iccid - ID of the eSIM
   * @returns {Promise<HttpResponse<GetEsimDeviceOkResponse>>} Successful Response
   */
  async getEsimDevice(iccid: string, requestConfig?: RequestConfig): Promise<HttpResponse<GetEsimDeviceOkResponse>> {
    const request = new Request({
      method: 'GET',
      path: '/esim/{iccid}/device',
      config: this.config,
      responseSchema: getEsimDeviceOkResponseResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('iccid', iccid);
    return this.client.call<GetEsimDeviceOkResponse>(request);
  }

  /**
   * Get eSIM History
   * @param {string} iccid - ID of the eSIM
   * @returns {Promise<HttpResponse<GetEsimHistoryOkResponse>>} Successful Response
   */
  async getEsimHistory(iccid: string, requestConfig?: RequestConfig): Promise<HttpResponse<GetEsimHistoryOkResponse>> {
    const request = new Request({
      method: 'GET',
      path: '/esim/{iccid}/history',
      config: this.config,
      responseSchema: getEsimHistoryOkResponseResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('iccid', iccid);
    return this.client.call<GetEsimHistoryOkResponse>(request);
  }

  /**
   * Get eSIM MAC
   * @param {string} iccid - ID of the eSIM
   * @returns {Promise<HttpResponse<GetEsimMacOkResponse>>} Successful Response
   */
  async getEsimMac(iccid: string, requestConfig?: RequestConfig): Promise<HttpResponse<GetEsimMacOkResponse>> {
    const request = new Request({
      method: 'GET',
      path: '/esim/{iccid}/mac',
      config: this.config,
      responseSchema: getEsimMacOkResponseResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('iccid', iccid);
    return this.client.call<GetEsimMacOkResponse>(request);
  }
}
