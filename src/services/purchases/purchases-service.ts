import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  CreatePurchaseRequest,
  createPurchaseRequestRequest,
} from './models/create-purchase-request';
import { CreatePurchaseParams, ListPurchasesParams } from './request-params';

/**
 * Service class for PurchasesService operations.
 * Provides methods to interact with PurchasesService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PurchasesService extends BaseService {
  protected createPurchaseConfig: Partial<SdkConfig> = { environment: Environment.API };

  protected listPurchasesConfig: Partial<SdkConfig> = { environment: Environment.API };

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
   * This endpoint is used to purchase a new eSIM by providing the package details.
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async createPurchase(
    body: CreatePurchaseRequest,
    params: CreatePurchaseParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createPurchaseConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
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
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   * This endpoint can be used to list all the successful purchases made between a given interval.
   * @param {string} params.accept -
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
    params: ListPurchasesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listPurchasesConfig, requestConfig);
    z.object({
      accept: z.string().nullable(),
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
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
