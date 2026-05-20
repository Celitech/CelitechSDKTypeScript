import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetESimParams } from './request-params';

/**
 * Service class for EsimService operations.
 * Provides methods to interact with EsimService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class EsimService extends BaseService {
  protected getESimConfig: Partial<SdkConfig> = { environment: Environment.API };

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
   * Get eSIM
   * @param {string} params.accept -
   * @param {string} [params.iccid] - ID of the eSIM
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async getESim(params: GetESimParams, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getESimConfig, requestConfig);
    z.object({ accept: z.string().nullable(), iccid: z.string().optional().nullable() }).parse(
      params ?? {},
    );
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
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
