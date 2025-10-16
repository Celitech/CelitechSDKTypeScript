import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { CreatePurchaseV2Request, createPurchaseV2RequestRequest } from './models/create-purchase-v2-request';
import {
  CreatePurchaseV2OkResponse,
  createPurchaseV2OkResponseResponse,
} from './models/create-purchase-v2-ok-response';
import { BadRequest } from '../common/bad-request';
import { Unauthorized } from '../common/unauthorized';
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
   * This endpoint is used to purchase a new eSIM by providing the package details.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreatePurchaseV2OkResponse[]>>} Successful Response
   */
  async createPurchaseV2(
    body: CreatePurchaseV2Request,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CreatePurchaseV2OkResponse[]>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/purchases/v2')
      .setRequestSchema(createPurchaseV2RequestRequest)
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.array(createPurchaseV2OkResponseResponse),
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
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<CreatePurchaseV2OkResponse[]>(request);
  }

  /**
   * This endpoint can be used to list all the successful purchases made between a given interval.
   * @param {string} [params.iccid] - ID of the eSIM
   * @param {string} [params.afterDate] - Start date of the interval for filtering purchases in the format 'yyyy-MM-dd'
   * @param {string} [params.beforeDate] - End date of the interval for filtering purchases in the format 'yyyy-MM-dd'
   * @param {string} [params.email] - Email associated to the purchase.
   * @param {string} [params.referenceId] - The referenceId that was provided by the partner during the purchase or topup flow.
   * @param {string} [params.afterCursor] - To get the next batch of results, use this parameter. It tells the API where to start fetching data after the last item you received. It helps you avoid repeats and efficiently browse through large sets of data.
   * @param {number} [params.limit] - Maximum number of purchases to be returned in the response. The value must be greater than 0 and less than or equal to 100. If not provided, the default value is 20
   * @param {number} [params.after] - Epoch value representing the start of the time interval for filtering purchases
   * @param {number} [params.before] - Epoch value representing the end of the time interval for filtering purchases
   * @param {string} [params.purchaseId] - The id of a specific purchase.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListPurchasesOkResponse>>} Successful Response
   */
  async listPurchases(
    params?: ListPurchasesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListPurchasesOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/purchases')
      .setRequestSchema(z.any())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listPurchasesOkResponseResponse,
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
        key: 'email',
        value: params?.email,
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
      .addQueryParam({
        key: 'purchaseId',
        value: params?.purchaseId,
      })
      .build();
    return this.client.call<ListPurchasesOkResponse>(request);
  }

  /**
   * This endpoint is used to purchase a new eSIM by providing the package details.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreatePurchaseOkResponse>>} Successful Response
   */
  async createPurchase(
    body: CreatePurchaseRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CreatePurchaseOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/purchases')
      .setRequestSchema(createPurchaseRequestRequest)
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createPurchaseOkResponseResponse,
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
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<CreatePurchaseOkResponse>(request);
  }

  /**
   * This endpoint is used to top-up an existing eSIM with the previously associated destination by providing its ICCID and package details. To determine if an eSIM can be topped up, use the Get eSIM Status endpoint, which returns the `isTopUpAllowed` flag.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<TopUpEsimOkResponse>>} Successful Response
   */
  async topUpEsim(body: TopUpEsimRequest, requestConfig?: RequestConfig): Promise<HttpResponse<TopUpEsimOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/purchases/topup')
      .setRequestSchema(topUpEsimRequestRequest)
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: topUpEsimOkResponseResponse,
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
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<TopUpEsimOkResponse>(request);
  }

  /**
 * This endpoint allows you to modify the validity dates of an existing purchase.  
**Behavior:**
- If the purchase has **not yet been activated**, both the start and end dates can be updated.  
- If the purchase is **already active**, only the **end date** can be updated, while the **start date must remain unchanged** (and should be passed as originally set).  
- Updates must comply with the same pricing structure; the modification cannot alter the package size or change its duration category.  

The end date can be extended or shortened as long as it adheres to the same pricing category and does not exceed the allowed duration limits.

 * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<EditPurchaseOkResponse>>} Successful Response
 */
  async editPurchase(
    body: EditPurchaseRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<EditPurchaseOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/purchases/edit')
      .setRequestSchema(editPurchaseRequestRequest)
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: editPurchaseOkResponseResponse,
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetPurchaseConsumptionOkResponse>>} Successful Response
   */
  async getPurchaseConsumption(
    purchaseId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetPurchaseConsumptionOkResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/purchases/{purchaseId}/consumption')
      .setRequestSchema(z.any())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getPurchaseConsumptionOkResponseResponse,
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
