import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  ListDestinationsOkResponse,
  listDestinationsOkResponseResponse,
} from './models/list-destinations-ok-response';
import { BadRequest } from '../common/bad-request';
import { Unauthorized } from '../common/unauthorized';

/**
 * Service class for DestinationsService operations.
 * Provides methods to interact with DestinationsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class DestinationsService extends BaseService {
  protected listDestinationsConfig?: Partial<SdkConfig>;

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
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListDestinationsOkResponse>>} - Successful Response
   */
  async listDestinations(requestConfig?: Partial<SdkConfig>): Promise<ListDestinationsOkResponse> {
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
        schema: listDestinationsOkResponseResponse,
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
      .build();
    return this.client.callDirect<ListDestinationsOkResponse>(request);
  }
}
