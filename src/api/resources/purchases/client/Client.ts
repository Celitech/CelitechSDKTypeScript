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
import { createPurchaseV2RequestRequest } from '../types/CreatePurchaseV2Request';
import {
  CreatePurchaseV2ResponseItem,
  createPurchaseV2ResponseItemResponse,
} from '../types/CreatePurchaseV2ResponseItem';
import { ErrorResponse } from '../../../types/ErrorResponse';
import {
  CreatePurchaseRequest,
  CreatePurchaseV2Request,
  EditPurchaseRequest,
  GetPurchaseConsumptionRequest,
  ListPurchasesRequest,
  TopUpEsimRequest,
} from './requests';
import {
  ListPurchasesResponse,
  listPurchasesResponseResponse,
} from '../types/ListPurchasesResponse';
import { createPurchaseRequestRequest } from '../types/CreatePurchaseRequest';
import {
  CreatePurchaseResponse,
  createPurchaseResponseResponse,
} from '../types/CreatePurchaseResponse';
import { topUpEsimRequestRequest } from '../types/TopUpEsimRequest';
import { TopUpEsimResponse, topUpEsimResponseResponse } from '../types/TopUpEsimResponse';
import { editPurchaseRequestRequest } from '../types/EditPurchaseRequest';
import { EditPurchaseResponse, editPurchaseResponseResponse } from '../types/EditPurchaseResponse';
import {
  GetPurchaseConsumptionResponse,
  getPurchaseConsumptionResponseResponse,
} from '../types/GetPurchaseConsumptionResponse';

export declare namespace PurchasesClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Purchases operations.
 * Provides methods to interact with Purchases-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PurchasesClient extends BaseService {
  protected createPurchaseV2Config?: Partial<BaseClientOptions>;

  protected listPurchasesConfig?: Partial<BaseClientOptions>;

  protected createPurchaseConfig?: Partial<BaseClientOptions>;

  protected topUpEsimConfig?: Partial<BaseClientOptions>;

  protected editPurchaseConfig?: Partial<BaseClientOptions>;

  protected getPurchaseConsumptionConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for createPurchaseV2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setCreatePurchaseV2Config(config: Partial<BaseClientOptions>): this {
    this.createPurchaseV2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for listPurchases.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setListPurchasesConfig(config: Partial<BaseClientOptions>): this {
    this.listPurchasesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createPurchase.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setCreatePurchaseConfig(config: Partial<BaseClientOptions>): this {
    this.createPurchaseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for topUpEsim.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setTopUpEsimConfig(config: Partial<BaseClientOptions>): this {
    this.topUpEsimConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for editPurchase.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setEditPurchaseConfig(config: Partial<BaseClientOptions>): this {
    this.editPurchaseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getPurchaseConsumption.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setGetPurchaseConsumptionConfig(config: Partial<BaseClientOptions>): this {
    this.getPurchaseConsumptionConfig = config;
    return this;
  }

  /**
   * This endpoint is used to purchase a new eSIM by providing the package details.
   * @param {CelitechApi.CreatePurchaseV2Request} request
   * @param {PurchasesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CelitechApi.CreatePurchaseV2ResponseItem[]>} - Successful Response
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
   *     await client.purchases.createPurchaseV2({
   *         destination: "FRA",
   *         dataLimitInGB: 1,
   *         quantity: 1
   *     })
   */
  createPurchaseV2(
    request: CelitechApi.CreatePurchaseV2Request,
    requestOptions?: PurchasesClient.RequestOptions,
  ): HttpResponsePromise<CelitechApi.CreatePurchaseV2ResponseItem[]> {
    return HttpResponsePromise.fromPromise(this.__createPurchaseV2(request, requestOptions));
  }
  private async __createPurchaseV2(
    request: CelitechApi.CreatePurchaseV2Request,
    requestOptions?: PurchasesClient.RequestOptions,
  ): Promise<WithRawResponse<CelitechApi.CreatePurchaseV2ResponseItem[]>> {
    const resolvedConfig = this.getResolvedConfig(this.createPurchaseV2Config, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('POST')
      .setPath('/purchases/v2')
      .setRequestSchema(createPurchaseV2RequestRequest)
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.list(createPurchaseV2ResponseItemResponse),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({
        key: 'Idempotency-Key',
        value: request['Idempotency-Key'],
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody({
        destination: request.destination,
        dataLimitInGB: request.dataLimitInGB,
        startDate: request.startDate,
        endDate: request.endDate,
        duration: request.duration,
        quantity: request.quantity,
        email: request.email,
        referenceId: request.referenceId,
        networkBrand: request.networkBrand,
        emailBrand: request.emailBrand,
        language: request.language,
      })
      .build();
    return this.client.callWithRawResponse<CelitechApi.CreatePurchaseV2ResponseItem[]>(_request);
  }

  /**
   * This endpoint can be used to list all the successful purchases made between a given interval.
   * @param {CelitechApi.ListPurchasesRequest} request
   * @param {PurchasesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CelitechApi.ListPurchasesResponse>} - Successful Response
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
   *     await client.purchases.listPurchases()
   */
  listPurchases(
    request: CelitechApi.ListPurchasesRequest = {},
    requestOptions?: PurchasesClient.RequestOptions,
  ): HttpResponsePromise<CelitechApi.ListPurchasesResponse> {
    return HttpResponsePromise.fromPromise(this.__listPurchases(request, requestOptions));
  }
  private async __listPurchases(
    request: CelitechApi.ListPurchasesRequest = {},
    requestOptions?: PurchasesClient.RequestOptions,
  ): Promise<WithRawResponse<CelitechApi.ListPurchasesResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.listPurchasesConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/purchases')
      .setRequestSchema(core.cast.identity<unknown>())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listPurchasesResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addQueryParam({
        key: 'purchaseId',
        value: request.purchaseId,
      })
      .addQueryParam({
        key: 'iccid',
        value: request.iccid,
      })
      .addQueryParam({
        key: 'afterDate',
        value: request.afterDate,
      })
      .addQueryParam({
        key: 'beforeDate',
        value: request.beforeDate,
      })
      .addQueryParam({
        key: 'email',
        value: request.email,
      })
      .addQueryParam({
        key: 'referenceId',
        value: request.referenceId,
      })
      .addQueryParam({
        key: 'afterCursor',
        value: request.afterCursor,
      })
      .addQueryParam({
        key: 'limit',
        value: request.limit,
      })
      .addQueryParam({
        key: 'after',
        value: request.after,
      })
      .addQueryParam({
        key: 'before',
        value: request.before,
      })
      .build();
    return this.client.callWithRawResponse<CelitechApi.ListPurchasesResponse>(_request);
  }

  /**
   * This endpoint is used to purchase a new eSIM by providing the package details.
   * @param {CelitechApi.CreatePurchaseRequest} request
   * @param {PurchasesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CelitechApi.CreatePurchaseResponse>} - Successful Response
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
   *     await client.purchases.createPurchase({
   *         destination: "FRA",
   *         dataLimitInGB: 1,
   *         startDate: "2023-11-01",
   *         endDate: "2023-11-20"
   *     })
   */
  createPurchase(
    request: CelitechApi.CreatePurchaseRequest,
    requestOptions?: PurchasesClient.RequestOptions,
  ): HttpResponsePromise<CelitechApi.CreatePurchaseResponse> {
    return HttpResponsePromise.fromPromise(this.__createPurchase(request, requestOptions));
  }
  private async __createPurchase(
    request: CelitechApi.CreatePurchaseRequest,
    requestOptions?: PurchasesClient.RequestOptions,
  ): Promise<WithRawResponse<CelitechApi.CreatePurchaseResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.createPurchaseConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('POST')
      .setPath('/purchases')
      .setRequestSchema(createPurchaseRequestRequest)
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createPurchaseResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({
        key: 'Idempotency-Key',
        value: request['Idempotency-Key'],
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody({
        destination: request.destination,
        dataLimitInGB: request.dataLimitInGB,
        startDate: request.startDate,
        endDate: request.endDate,
        email: request.email,
        referenceId: request.referenceId,
        networkBrand: request.networkBrand,
        emailBrand: request.emailBrand,
        language: request.language,
        startTime: request.startTime,
        endTime: request.endTime,
      })
      .build();
    return this.client.callWithRawResponse<CelitechApi.CreatePurchaseResponse>(_request);
  }

  /**
   * This endpoint is used to top-up an existing eSIM with the previously associated destination by providing its ICCID and package details. To determine if an eSIM can be topped up, use the Get eSIM endpoint, which returns the `isTopUpAllowed` flag.
   * @param {CelitechApi.TopUpEsimRequest} request
   * @param {PurchasesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CelitechApi.TopUpEsimResponse>} - Successful Response
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
   *     await client.purchases.topUpEsim({
   *         iccid: "1111222233334444555000",
   *         dataLimitInGB: 1
   *     })
   */
  topUpEsim(
    request: CelitechApi.TopUpEsimRequest,
    requestOptions?: PurchasesClient.RequestOptions,
  ): HttpResponsePromise<CelitechApi.TopUpEsimResponse> {
    return HttpResponsePromise.fromPromise(this.__topUpEsim(request, requestOptions));
  }
  private async __topUpEsim(
    request: CelitechApi.TopUpEsimRequest,
    requestOptions?: PurchasesClient.RequestOptions,
  ): Promise<WithRawResponse<CelitechApi.TopUpEsimResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.topUpEsimConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('POST')
      .setPath('/purchases/topup')
      .setRequestSchema(topUpEsimRequestRequest)
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: topUpEsimResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({
        key: 'Idempotency-Key',
        value: request['Idempotency-Key'],
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody({
        iccid: request.iccid,
        dataLimitInGB: request.dataLimitInGB,
        startDate: request.startDate,
        endDate: request.endDate,
        duration: request.duration,
        email: request.email,
        referenceId: request.referenceId,
        emailBrand: request.emailBrand,
        startTime: request.startTime,
        endTime: request.endTime,
      })
      .build();
    return this.client.callWithRawResponse<CelitechApi.TopUpEsimResponse>(_request);
  }

  /**
 * This endpoint allows you to modify the validity dates of an existing purchase.  
**Behavior:**
- If the purchase has **not yet been activated**, both the start and end dates can be updated.  
- If the purchase is **already active**, only the **end date** can be updated, while the **start date must remain unchanged** (and should be passed as originally set).  
- Updates must comply with the same pricing structure; the modification cannot alter the package size or change its duration category.  

The end date can be extended or shortened as long as it adheres to the same pricing category and does not exceed the allowed duration limits.

 * @param {CelitechApi.EditPurchaseRequest} request
 * @param {PurchasesClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<CelitechApi.EditPurchaseResponse>} - Successful Response
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
 *     await client.purchases.editPurchase({
 *         purchaseId: "ae471106-c8b4-42cf-b83a-b061291f2922",
 *         startDate: "2023-11-01",
 *         endDate: "2023-11-20"
 *     })
 */
  editPurchase(
    request: CelitechApi.EditPurchaseRequest,
    requestOptions?: PurchasesClient.RequestOptions,
  ): HttpResponsePromise<CelitechApi.EditPurchaseResponse> {
    return HttpResponsePromise.fromPromise(this.__editPurchase(request, requestOptions));
  }
  private async __editPurchase(
    request: CelitechApi.EditPurchaseRequest,
    requestOptions?: PurchasesClient.RequestOptions,
  ): Promise<WithRawResponse<CelitechApi.EditPurchaseResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.editPurchaseConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('POST')
      .setPath('/purchases/edit')
      .setRequestSchema(editPurchaseRequestRequest)
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: editPurchaseResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({
        key: 'Idempotency-Key',
        value: request['Idempotency-Key'],
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody({
        purchaseId: request.purchaseId,
        startDate: request.startDate,
        endDate: request.endDate,
        startTime: request.startTime,
        endTime: request.endTime,
      })
      .build();
    return this.client.callWithRawResponse<CelitechApi.EditPurchaseResponse>(_request);
  }

  /**
   * This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks a button). It returns the data balance (consumption) of purchased packages.
   * @param {CelitechApi.GetPurchaseConsumptionRequest} request
   * @param {PurchasesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CelitechApi.GetPurchaseConsumptionResponse>} - Successful Response
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
   *     await client.purchases.getPurchaseConsumption({
   *         purchaseId: "4973fa15-6979-4daa-9cf3-672620df819c"
   *     })
   */
  getPurchaseConsumption(
    request: CelitechApi.GetPurchaseConsumptionRequest,
    requestOptions?: PurchasesClient.RequestOptions,
  ): HttpResponsePromise<CelitechApi.GetPurchaseConsumptionResponse> {
    return HttpResponsePromise.fromPromise(this.__getPurchaseConsumption(request, requestOptions));
  }
  private async __getPurchaseConsumption(
    request: CelitechApi.GetPurchaseConsumptionRequest,
    requestOptions?: PurchasesClient.RequestOptions,
  ): Promise<WithRawResponse<CelitechApi.GetPurchaseConsumptionResponse>> {
    const resolvedConfig = this.getResolvedConfig(
      this.getPurchaseConsumptionConfig,
      requestOptions,
    );
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/purchases/{purchaseId}/consumption')
      .setRequestSchema(core.cast.identity<unknown>())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getPurchaseConsumptionResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'purchaseId',
        value: request.purchaseId,
      })
      .build();
    return this.client.callWithRawResponse<CelitechApi.GetPurchaseConsumptionResponse>(_request);
  }
}
