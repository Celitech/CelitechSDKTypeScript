import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { ListPurchasesOkResponse, listPurchasesOkResponseResponse } from './models/list-purchases-ok-response';
import { ListPurchasesParams } from './request-params';
import { CreatePurchaseRequest, createPurchaseRequestRequest } from './models/create-purchase-request';
import { CreatePurchaseOkResponse, createPurchaseOkResponseResponse } from './models/create-purchase-ok-response';
import { TopUpEsimRequest, topUpEsimRequestRequest } from './models/top-up-esim-request';
import { TopUpEsimOkResponse, topUpEsimOkResponseResponse } from './models/top-up-esim-ok-response';
import { EditPurchaseRequest, editPurchaseRequestRequest } from './models/edit-purchase-request';
import { EditPurchaseOkResponse, editPurchaseOkResponseResponse } from './models/edit-purchase-ok-response';
import {
  GetPurchaseConsumptionOkResponse,
  getPurchaseConsumptionOkResponseResponse,
} from './models/get-purchase-consumption-ok-response';

export class PurchasesService extends BaseService {
  /**
   * This endpoint can be used to list all the successful purchases made between a given interval.
   * @param {string} [iccid] - ID of the eSIM
   * @param {string} [afterDate] - Start date of the interval for filtering purchases in the format 'yyyy-MM-dd'
   * @param {string} [beforeDate] - End date of the interval for filtering purchases in the format 'yyyy-MM-dd'
   * @param {string} [referenceId] - The referenceId that was provided by the partner during the purchase or topup flow.
   * @param {string} [afterCursor] - To get the next batch of results, use this parameter. It tells the API where to start fetching data after the last item you received. It helps you avoid repeats and efficiently browse through large sets of data.
   * @param {number} [limit] - Maximum number of purchases to be returned in the response. The value must be greater than 0 and less than or equal to 100. If not provided, the default value is 20
   * @param {number} [after] - Epoch value representing the start of the time interval for filtering purchases
   * @param {number} [before] - Epoch value representing the end of the time interval for filtering purchases
   * @returns {Promise<HttpResponse<ListPurchasesOkResponse>>} Successful Response
   */
  async listPurchases(
    params?: ListPurchasesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListPurchasesOkResponse>> {
    const request = new Request({
      method: 'GET',
      path: '/purchases',
      config: this.config,
      responseSchema: listPurchasesOkResponseResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('iccid', params?.iccid);
    request.addQueryParam('afterDate', params?.afterDate);
    request.addQueryParam('beforeDate', params?.beforeDate);
    request.addQueryParam('referenceId', params?.referenceId);
    request.addQueryParam('afterCursor', params?.afterCursor);
    request.addQueryParam('limit', params?.limit);
    request.addQueryParam('after', params?.after);
    request.addQueryParam('before', params?.before);
    return this.client.call<ListPurchasesOkResponse>(request);
  }

  /**
   * This endpoint is used to purchase a new eSIM by providing the package details.
   * @returns {Promise<HttpResponse<CreatePurchaseOkResponse>>} Successful Response
   */
  async createPurchase(
    body: CreatePurchaseRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CreatePurchaseOkResponse>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/purchases',
      config: this.config,
      responseSchema: createPurchaseOkResponseResponse,
      requestSchema: createPurchaseRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<CreatePurchaseOkResponse>(request);
  }

  /**
   * This endpoint is used to top-up an eSIM with the previously associated destination by providing an existing ICCID and the package details. The top-up is not feasible for eSIMs in "DELETED" or "ERROR" state.
   * @returns {Promise<HttpResponse<TopUpEsimOkResponse>>} Successful Response
   */
  async topUpEsim(body: TopUpEsimRequest, requestConfig?: RequestConfig): Promise<HttpResponse<TopUpEsimOkResponse>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/purchases/topup',
      config: this.config,
      responseSchema: topUpEsimOkResponseResponse,
      requestSchema: topUpEsimRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<TopUpEsimOkResponse>(request);
  }

  /**
   * This endpoint allows you to modify the dates of an existing package with a future activation start time. Editing can only be performed for packages that have not been activated, and it cannot change the package size. The modification must not change the package duration category to ensure pricing consistency.
   * @returns {Promise<HttpResponse<EditPurchaseOkResponse>>} Successful Response
   */
  async editPurchase(
    body: EditPurchaseRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<EditPurchaseOkResponse>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/purchases/edit',
      config: this.config,
      responseSchema: editPurchaseOkResponseResponse,
      requestSchema: editPurchaseRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<EditPurchaseOkResponse>(request);
  }

  /**
   * This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks a button). It returns the data balance (consumption) of purchased packages.
   * @param {string} purchaseId - ID of the purchase
   * @returns {Promise<HttpResponse<GetPurchaseConsumptionOkResponse>>} Successful Response
   */
  async getPurchaseConsumption(
    purchaseId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetPurchaseConsumptionOkResponse>> {
    const request = new Request({
      method: 'GET',
      path: '/purchases/{purchaseId}/consumption',
      config: this.config,
      responseSchema: getPurchaseConsumptionOkResponseResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('purchaseId', purchaseId);
    return this.client.call<GetPurchaseConsumptionOkResponse>(request);
  }
}