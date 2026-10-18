import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  CreatePurchaseV2Request,
  createPurchaseV2RequestRequest,
} from './models/create-purchase-v2-request';
import {
  CreatePurchaseV2OkResponse,
  createPurchaseV2OkResponseResponse,
} from './models/create-purchase-v2-ok-response';
import { ErrorResponse } from '../common/error-response';
import {
  CreatePurchaseParams,
  CreatePurchaseV2Params,
  EditPurchaseParams,
  ListPurchasesParams,
  TopUpEsimParams,
} from './request-params';
import {
  ListPurchasesOkResponse,
  listPurchasesOkResponseResponse,
} from './models/list-purchases-ok-response';
import {
  CreatePurchaseRequest,
  createPurchaseRequestRequest,
} from './models/create-purchase-request';
import {
  CreatePurchaseOkResponse,
  createPurchaseOkResponseResponse,
} from './models/create-purchase-ok-response';
import { TopUpEsimRequest, topUpEsimRequestRequest } from './models/top-up-esim-request';
import { TopUpEsimOkResponse, topUpEsimOkResponseResponse } from './models/top-up-esim-ok-response';
import { EditPurchaseRequest, editPurchaseRequestRequest } from './models/edit-purchase-request';
import {
  EditPurchaseOkResponse,
  editPurchaseOkResponseResponse,
} from './models/edit-purchase-ok-response';
import {
  GetPurchaseConsumptionOkResponse,
  getPurchaseConsumptionOkResponseResponse,
} from './models/get-purchase-consumption-ok-response';

/**
 * Service class for PurchasesService operations.
 * Provides methods to interact with PurchasesService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PurchasesService extends BaseService {
  protected createPurchaseV2Config?: Partial<SdkConfig>;

  protected listPurchasesConfig?: Partial<SdkConfig>;

  protected createPurchaseConfig?: Partial<SdkConfig>;

  protected topUpEsimConfig?: Partial<SdkConfig>;

  protected editPurchaseConfig?: Partial<SdkConfig>;

  protected getPurchaseConsumptionConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for createPurchaseV2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreatePurchaseV2Config(config: Partial<SdkConfig>): this {
    this.createPurchaseV2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for listPurchases.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListPurchasesConfig(config: Partial<SdkConfig>): this {
    this.listPurchasesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createPurchase.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreatePurchaseConfig(config: Partial<SdkConfig>): this {
    this.createPurchaseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for topUpEsim.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTopUpEsimConfig(config: Partial<SdkConfig>): this {
    this.topUpEsimConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for editPurchase.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setEditPurchaseConfig(config: Partial<SdkConfig>): this {
    this.editPurchaseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getPurchaseConsumption.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetPurchaseConsumptionConfig(config: Partial<SdkConfig>): this {
    this.getPurchaseConsumptionConfig = config;
    return this;
  }

  /**
   * This endpoint is used to purchase a new eSIM by providing the package details.
   * @param {string} [params.idempotencyKey] - Optional. A unique value (for example a UUID) that makes this request safe to retry. If a request with the same `Idempotency-Key` and the same body succeeds, repeating it returns the original response instead of performing the action again, and the response includes the header `Idempotent-Replayed: true`. Keys are scoped to your credentials and remembered for 3 days. Only successful (2xx) responses are remembered, so a request that failed can be retried with the same key. Reusing a key with a different request returns `422`; sending it while the original request is still being processed returns `409`. If the idempotency store is temporarily unavailable, the request is not processed and returns `503`; retry it. Must be 1 to 255 printable ASCII characters, without spaces.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreatePurchaseV2OkResponse[]>>} - Successful Response
   */
  async createPurchaseV2(
    body: CreatePurchaseV2Request,
    params?: CreatePurchaseV2Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreatePurchaseV2OkResponse[]> {
    const resolvedConfig = this.getResolvedConfig(this.createPurchaseV2Config, requestConfig);
    z.object({ idempotencyKey: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
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
      .addHeaderParam({
        key: 'Idempotency-Key',
        value: params?.idempotencyKey,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreatePurchaseV2OkResponse[]>(request);
  }

  /**
   * This endpoint can be used to list all the successful purchases made between a given interval.
   * @param {string} [params.purchaseId] - ID of the purchase
   * @param {string} [params.iccid] - ID of the eSIM
   * @param {string} [params.afterDate] - Start date of the interval for filtering purchases in the format 'yyyy-MM-dd'
   * @param {string} [params.beforeDate] - End date of the interval for filtering purchases in the format 'yyyy-MM-dd'
   * @param {string} [params.email] - Email associated to the purchase.
   * @param {string} [params.referenceId] - The referenceId that was provided by the partner during the purchase or topup flow.
   * @param {string} [params.afterCursor] - To get the next batch of results, use this parameter. It tells the API where to start fetching data after the last item you received. It helps you avoid repeats and efficiently browse through large sets of data.
   * @param {number} [params.limit] - Maximum number of purchases to be returned in the response. The value must be greater than 0 and less than or equal to 100. If not provided, the default value is 20
   * @param {number} [params.after] - Epoch value representing the start of the time interval for filtering purchases
   * @param {number} [params.before] - Epoch value representing the end of the time interval for filtering purchases
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListPurchasesOkResponse>>} - Successful Response
   */
  async listPurchases(
    params?: ListPurchasesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ListPurchasesOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.listPurchasesConfig, requestConfig);
    z.object({
      purchaseId: z.string().optional(),
      iccid: z.string().optional(),
      afterDate: z.string().optional(),
      beforeDate: z.string().optional(),
      email: z.string().optional(),
      referenceId: z.string().optional(),
      afterCursor: z.string().optional(),
      limit: z.number().optional(),
      after: z.number().optional(),
      before: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
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
        key: 'purchaseId',
        value: params?.purchaseId,
      })
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
      .build();
    return this.client.callDirect<ListPurchasesOkResponse>(request);
  }

  /**
   * This endpoint is used to purchase a new eSIM by providing the package details.
   * @param {string} [params.idempotencyKey] - Optional. A unique value (for example a UUID) that makes this request safe to retry. If a request with the same `Idempotency-Key` and the same body succeeds, repeating it returns the original response instead of performing the action again, and the response includes the header `Idempotent-Replayed: true`. Keys are scoped to your credentials and remembered for 3 days. Only successful (2xx) responses are remembered, so a request that failed can be retried with the same key. Reusing a key with a different request returns `422`; sending it while the original request is still being processed returns `409`. If the idempotency store is temporarily unavailable, the request is not processed and returns `503`; retry it. Must be 1 to 255 printable ASCII characters, without spaces.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreatePurchaseOkResponse>>} - Successful Response
   */
  async createPurchase(
    body: CreatePurchaseRequest,
    params?: CreatePurchaseParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreatePurchaseOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.createPurchaseConfig, requestConfig);
    z.object({ idempotencyKey: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
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
      .addHeaderParam({
        key: 'Idempotency-Key',
        value: params?.idempotencyKey,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreatePurchaseOkResponse>(request);
  }

  /**
   * This endpoint is used to top-up an existing eSIM with the previously associated destination by providing its ICCID and package details. To determine if an eSIM can be topped up, use the Get eSIM endpoint, which returns the `isTopUpAllowed` flag.
   * @param {string} [params.idempotencyKey] - Optional. A unique value (for example a UUID) that makes this request safe to retry. If a request with the same `Idempotency-Key` and the same body succeeds, repeating it returns the original response instead of performing the action again, and the response includes the header `Idempotent-Replayed: true`. Keys are scoped to your credentials and remembered for 3 days. Only successful (2xx) responses are remembered, so a request that failed can be retried with the same key. Reusing a key with a different request returns `422`; sending it while the original request is still being processed returns `409`. If the idempotency store is temporarily unavailable, the request is not processed and returns `503`; retry it. Must be 1 to 255 printable ASCII characters, without spaces.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<TopUpEsimOkResponse>>} - Successful Response
   */
  async topUpEsim(
    body: TopUpEsimRequest,
    params?: TopUpEsimParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<TopUpEsimOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.topUpEsimConfig, requestConfig);
    z.object({ idempotencyKey: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
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
      .addHeaderParam({
        key: 'Idempotency-Key',
        value: params?.idempotencyKey,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<TopUpEsimOkResponse>(request);
  }

  /**
 * This endpoint allows you to modify the validity dates of an existing purchase.  
**Behavior:**
- If the purchase has **not yet been activated**, both the start and end dates can be updated.  
- If the purchase is **already active**, only the **end date** can be updated, while the **start date must remain unchanged** (and should be passed as originally set).  
- Updates must comply with the same pricing structure; the modification cannot alter the package size or change its duration category.  

The end date can be extended or shortened as long as it adheres to the same pricing category and does not exceed the allowed duration limits.

 * @param {string} [params.idempotencyKey] - Optional. A unique value (for example a UUID) that makes this request safe to retry. If a request with the same `Idempotency-Key` and the same body succeeds, repeating it returns the original response instead of performing the action again, and the response includes the header `Idempotent-Replayed: true`. Keys are scoped to your credentials and remembered for 3 days. Only successful (2xx) responses are remembered, so a request that failed can be retried with the same key. Reusing a key with a different request returns `422`; sending it while the original request is still being processed returns `409`. If the idempotency store is temporarily unavailable, the request is not processed and returns `503`; retry it. Must be 1 to 255 printable ASCII characters, without spaces.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<EditPurchaseOkResponse>>} - Successful Response
 */
  async editPurchase(
    body: EditPurchaseRequest,
    params?: EditPurchaseParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<EditPurchaseOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.editPurchaseConfig, requestConfig);
    z.object({ idempotencyKey: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
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
      .addHeaderParam({
        key: 'Idempotency-Key',
        value: params?.idempotencyKey,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<EditPurchaseOkResponse>(request);
  }

  /**
   * This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks a button). It returns the data balance (consumption) of purchased packages.
   * @param {string} purchaseId - ID of the purchase
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetPurchaseConsumptionOkResponse>>} - Successful Response
   */
  async getPurchaseConsumption(
    purchaseId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetPurchaseConsumptionOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getPurchaseConsumptionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
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
        key: 'purchaseId',
        value: purchaseId,
      })
      .build();
    return this.client.callDirect<GetPurchaseConsumptionOkResponse>(request);
  }
}
