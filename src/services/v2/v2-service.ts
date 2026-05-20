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
import { CreatePurchaseV2Params } from './request-params';

/**
 * Service class for V2Service operations.
 * Provides methods to interact with V2Service-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class V2Service extends BaseService {
  protected createPurchaseV2Config: Partial<SdkConfig> = { environment: Environment.API };

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
   * This endpoint is used to purchase a new eSIM by providing the package details.
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async createPurchaseV2(
    body: CreatePurchaseV2Request,
    params: CreatePurchaseV2Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createPurchaseV2Config, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
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
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }
}
