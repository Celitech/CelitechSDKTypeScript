import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { ListDestinationsParams } from './request-params';

/**
 * Service class for DestinationsService operations.
 * Provides methods to interact with DestinationsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class DestinationsService extends BaseService {
  protected listDestinationsConfig: Partial<SdkConfig> = { environment: Environment.API };

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
   * List Destinations
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async listDestinations(
    params: ListDestinationsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listDestinationsConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
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
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
