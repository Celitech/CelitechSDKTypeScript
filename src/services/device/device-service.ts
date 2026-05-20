import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetESimDeviceParams } from './request-params';

/**
 * Service class for DeviceService operations.
 * Provides methods to interact with DeviceService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class DeviceService extends BaseService {
  protected getESimDeviceConfig: Partial<SdkConfig> = { environment: Environment.API };

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
   * Get eSIM Device
   * @param {string} iccid -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async getESimDevice(
    iccid: string,
    params: GetESimDeviceParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getESimDeviceConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
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
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
