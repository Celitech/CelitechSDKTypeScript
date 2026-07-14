import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetESimParams, ListPackagesParams, ListPurchasesParams } from './request-params';
import {
  CreatePurchaseV2Request,
  createPurchaseV2RequestRequest,
} from './models/create-purchase-v2-request';
import { TopUpESimRequest, topUpESimRequestRequest } from './models/top-up-e-sim-request';
import { EditPurchaseRequest, editPurchaseRequestRequest } from './models/edit-purchase-request';
import {
  CreatePurchaseRequest,
  createPurchaseRequestRequest,
} from './models/create-purchase-request';

/**
 * Service class for CelitechService operations.
 * Provides methods to interact with CelitechService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class CelitechService extends BaseService {
  protected listDestinationsConfig: Partial<SdkConfig> = { environment: Environment.API };

  protected listPackagesConfig: Partial<SdkConfig> = { environment: Environment.API };

  protected createPurchaseV2Config: Partial<SdkConfig> = { environment: Environment.API };

  protected topUpESimConfig: Partial<SdkConfig> = { environment: Environment.API };

  protected editPurchaseConfig: Partial<SdkConfig> = { environment: Environment.API };

  protected getPurchaseConsumptionConfig: Partial<SdkConfig> = { environment: Environment.API };

  protected createPurchaseConfig: Partial<SdkConfig> = { environment: Environment.API };

  protected listPurchasesConfig: Partial<SdkConfig> = { environment: Environment.API };

  protected getESimDeviceConfig: Partial<SdkConfig> = { environment: Environment.API };

  protected getESimHistoryConfig: Partial<SdkConfig> = { environment: Environment.API };

  protected getESimConfig: Partial<SdkConfig> = { environment: Environment.API };

  protected generateTokenConfig: Partial<SdkConfig> = { environment: Environment.API };

  /**
   * Sets method-level configuration for listDestinations.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListDestinationsConfig(config: Partial<SdkConfig>): this {
    this.listDestinationsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for listPackages.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListPackagesConfig(config: Partial<SdkConfig>): this {
    this.listPackagesConfig = config;
    return this;
  }

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
   * Sets method-level configuration for topUpESim.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTopUpESimConfig(config: Partial<SdkConfig>): this {
    this.topUpESimConfig = config;
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
   * Sets method-level configuration for createPurchase.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreatePurchaseConfig(config: Partial<SdkConfig>): this {
    this.createPurchaseConfig = config;
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
   * Sets method-level configuration for getESimDevice.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetESimDeviceConfig(config: Partial<SdkConfig>): this {
    this.getESimDeviceConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getESimHistory.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetESimHistoryConfig(config: Partial<SdkConfig>): this {
    this.getESimHistoryConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getESim.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetESimConfig(config: Partial<SdkConfig>): this {
    this.getESimConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for generateToken.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGenerateTokenConfig(config: Partial<SdkConfig>): this {
    this.generateTokenConfig = config;
    return this;
  }

  /**
   * List Destinations
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async listDestinations(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listDestinationsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/destinations')
      .setRequestSchema(z.any())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   * List Packages
   * @param {string} [params.destination] - ISO representation of the package's destination. Supports both ISO2 (e.g., 'FR') and ISO3 (e.g., 'FRA') country codes.
   * @param {string} [params.startDate] - Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.
   * @param {string} [params.endDate] - End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 90 days after Start date.
   * @param {string} [params.afterCursor] - To get the next batch of results, use this parameter. It tells the API where to start fetching data after the last item you received. It helps you avoid repeats and efficiently browse through large sets of data.
   * @param {string} [params.limit] - Maximum number of packages to be returned in the response. The value must be greater than 0 and less than or equal to 160. If not provided, the default value is 20
   * @param {string} [params.startTime] - Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months
   * @param {string} [params.endTime] - Epoch value representing the end time of the package's validity. End time can be maximum 90 days after Start time
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async listPackages(
    params?: ListPackagesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listPackagesConfig, requestConfig);
    z.object({
      destination: z.string().optional().nullable(),
      startDate: z.string().optional().nullable(),
      endDate: z.string().optional().nullable(),
      afterCursor: z.string().optional().nullable(),
      limit: z.string().optional().nullable(),
      startTime: z.string().optional().nullable(),
      endTime: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/packages')
      .setRequestSchema(z.any())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addQueryParam({
        key: 'destination',
        value: params?.destination,
      })
      .addQueryParam({
        key: 'startDate',
        value: params?.startDate,
      })
      .addQueryParam({
        key: 'endDate',
        value: params?.endDate,
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
        key: 'startTime',
        value: params?.startTime,
      })
      .addQueryParam({
        key: 'endTime',
        value: params?.endTime,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   * This endpoint is used to purchase a new eSIM by providing the package details.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async createPurchaseV2(
    body: CreatePurchaseV2Request,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createPurchaseV2Config, requestConfig);
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
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   * This endpoint is used to top-up an existing eSIM with the previously associated destination by providing its ICCID and package details. To determine if an eSIM can be topped up, use the Get eSIM endpoint, which returns the `isTopUpAllowed` flag.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async topUpESim(body: TopUpESimRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.topUpESimConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/purchases/topup')
      .setRequestSchema(topUpESimRequestRequest)
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * This endpoint allows you to modify the validity dates of an existing purchase.  
**Behavior:**
- If the purchase has **not yet been activated**, both the start and end dates can be updated.  
- If the purchase is **already active**, only the **end date** can be updated, while the **start date must remain unchanged** (and should be passed as originally set).  
- Updates must comply with the same pricing structure; the modification cannot alter the package size or change its duration category.  

The end date can be extended or shortened as long as it adheres to the same pricing category and does not exceed the allowed duration limits.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async editPurchase(body: EditPurchaseRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.editPurchaseConfig, requestConfig);
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
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   * This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks a button). It returns the data balance (consumption) of purchased packages.
   * @param {string} purchaseId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async getPurchaseConsumption(
    purchaseId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
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
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'purchaseId',
        value: purchaseId,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   * This endpoint is used to purchase a new eSIM by providing the package details.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async createPurchase(
    body: CreatePurchaseRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createPurchaseConfig, requestConfig);
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
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
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
   * @param {string} [params.limit] - Maximum number of purchases to be returned in the response. The value must be greater than 0 and less than or equal to 100. If not provided, the default value is 20
   * @param {string} [params.after] - Epoch value representing the start of the time interval for filtering purchases
   * @param {string} [params.before] - Epoch value representing the end of the time interval for filtering purchases
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async listPurchases(
    params?: ListPurchasesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listPurchasesConfig, requestConfig);
    z.object({
      purchaseId: z.string().optional().nullable(),
      iccid: z.string().optional().nullable(),
      afterDate: z.string().optional().nullable(),
      beforeDate: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      referenceId: z.string().optional().nullable(),
      afterCursor: z.string().optional().nullable(),
      limit: z.string().optional().nullable(),
      after: z.string().optional().nullable(),
      before: z.string().optional().nullable(),
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
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
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
    return this.client.callDirect<any>(request);
  }

  /**
   * Get eSIM Device
   * @param {string} iccid -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async getESimDevice(iccid: string, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getESimDeviceConfig, requestConfig);
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
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'iccid',
        value: iccid,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   * Get eSIM History
   * @param {string} iccid -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async getESimHistory(iccid: string, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getESimHistoryConfig, requestConfig);
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
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'iccid',
        value: iccid,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   * Get eSIM
   * @param {string} [params.iccid] - ID of the eSIM
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async getESim(params?: GetESimParams, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getESimConfig, requestConfig);
    z.object({ iccid: z.string().optional().nullable() }).parse(params ?? {});
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
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addQueryParam({
        key: 'iccid',
        value: params?.iccid,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   * Generate a new token to be used in the iFrame
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async generateToken(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.generateTokenConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/iframe/token')
      .setRequestSchema(z.any())
      .setScopes([])
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
