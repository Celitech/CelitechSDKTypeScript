import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { TopUpESimRequest, topUpESimRequestRequest } from './models/top-up-e-sim-request';
import { TopUpESimParams } from './request-params';

/**
 * Service class for TopupService operations.
 * Provides methods to interact with TopupService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TopupService extends BaseService {
  protected topUpESimConfig: Partial<SdkConfig> = { environment: Environment.API };

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
   * This endpoint is used to top-up an existing eSIM with the previously associated destination by providing its ICCID and package details. To determine if an eSIM can be topped up, use the Get eSIM endpoint, which returns the `isTopUpAllowed` flag.
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async topUpESim(
    body: TopUpESimRequest,
    params: TopUpESimParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.topUpESimConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
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
