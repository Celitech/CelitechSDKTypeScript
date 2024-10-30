import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
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
    const request = new RequestBuilder<ListPurchasesOkResponse>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/purchases')
      .setRequestSchema(z.any())
      .setResponseSchema(listPurchasesOkResponseResponse)
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addQueryParam({
        key: 'iccid',
        value: params?.iccid,
      })
      .addQueryParam({
        key: 'afterDate',
        value: params?.afterDate,
      })
      .addQueryParam({
        key: 'beforeDate',
        value: params?.beforeDate,
      })
      .addQueryParam({
        key: 'referenceId',
        value: params?.referenceId,
      })
      .addQueryParam({
        key: 'afterCursor',
        value: params?.afterCursor,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'after',
        value: params?.after,
      })
      .addQueryParam({
        key: 'before',
        value: params?.before,
      })
      .build();
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
    const request = new RequestBuilder<CreatePurchaseOkResponse>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/purchases')
      .setRequestSchema(createPurchaseRequestRequest)
      .setResponseSchema(createPurchaseOkResponseResponse)
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<CreatePurchaseOkResponse>(request);
  }

  /**
   * This endpoint is used to top-up an eSIM with the previously associated destination by providing an existing ICCID and the package details. The top-up is not feasible for eSIMs in "DELETED" or "ERROR" state.
   * @returns {Promise<HttpResponse<TopUpEsimOkResponse>>} Successful Response
   */
  async topUpEsim(body: TopUpEsimRequest, requestConfig?: RequestConfig): Promise<HttpResponse<TopUpEsimOkResponse>> {
    const request = new RequestBuilder<TopUpEsimOkResponse>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/purchases/topup')
      .setRequestSchema(topUpEsimRequestRequest)
      .setResponseSchema(topUpEsimOkResponseResponse)
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
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
    const request = new RequestBuilder<EditPurchaseOkResponse>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/purchases/edit')
      .setRequestSchema(editPurchaseRequestRequest)
      .setResponseSchema(editPurchaseOkResponseResponse)
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
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
    const request = new RequestBuilder<GetPurchaseConsumptionOkResponse>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/purchases/{purchaseId}/consumption')
      .setRequestSchema(z.any())
      .setResponseSchema(getPurchaseConsumptionOkResponseResponse)
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'purchaseId',
        value: purchaseId,
      })
      .build();
    return this.client.call<GetPurchaseConsumptionOkResponse>(request);
  }
}
