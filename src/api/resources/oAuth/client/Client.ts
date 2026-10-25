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
import { OAuthTokenRequest, oAuthTokenRequestRequest } from '../types/OAuthTokenRequest';
import { OAuthTokenResponse, oAuthTokenResponseResponse } from '../types/OAuthTokenResponse';

export declare namespace OAuthClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for OAuth operations.
 * Provides methods to interact with OAuth-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class OAuthClient extends BaseService {
  protected getAccessTokenConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getAccessToken.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setGetAccessTokenConfig(config: Partial<BaseClientOptions>): this {
    this.getAccessTokenConfig = config;
    return this;
  }

  /**
   *
   * @param {CelitechApi.OAuthTokenRequest} request
   * @param {OAuthClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CelitechApi.OAuthTokenResponse>} - OAuth token
   *
   * @throws {@link errors.CelitechApiError}
   * @throws {@link errors.CelitechApiTimeoutError}
   *
   * @example
   *     await client.oAuth.getAccessToken({
   *         grant_type: "client_credentials",
   *         client_id: "client_id",
   *         client_secret: "client_secret",
   *         scope: "scope"
   *     })
   */
  getAccessToken(
    request: CelitechApi.OAuthTokenRequest,
    requestOptions?: OAuthClient.RequestOptions,
  ): HttpResponsePromise<CelitechApi.OAuthTokenResponse> {
    return HttpResponsePromise.fromPromise(this.__getAccessToken(request, requestOptions));
  }
  private async __getAccessToken(
    request: CelitechApi.OAuthTokenRequest,
    requestOptions?: OAuthClient.RequestOptions,
  ): Promise<WithRawResponse<CelitechApi.OAuthTokenResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getAccessTokenConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('POST')
      .setPath('/oauth2/token')
      .setRequestSchema(oAuthTokenRequestRequest)
      .setTokenManager(this.tokenManager)
      .setRequestContentType(ContentType.FormUrlEncoded)
      .addResponse({
        schema: oAuthTokenResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/x-www-form-urlencoded' })
      .addBody(request)
      .build();
    return this.client.callWithRawResponse<CelitechApi.OAuthTokenResponse>(_request);
  }
}
