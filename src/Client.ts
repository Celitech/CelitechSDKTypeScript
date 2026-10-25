import { CelitechApiEnvironment } from './http/environment';
import {
  BaseClientOptions,
  BaseRequestOptions,
  NormalizedClientOptions,
  core,
  normalizeClientOptions,
} from './http/types';
import { OAuthTokenManager } from './http/oauth/token-manager';
import { Supplier } from './http/utils/supplier';
import { makePassthroughRequest } from './http/utils/passthrough-request';
import { DestinationsClient } from './api/resources/destinations';
import { PackagesClient } from './api/resources/packages';
import { PurchasesClient } from './api/resources/purchases';
import { ESimClient } from './api/resources/eSim';
import { IFrameClient } from './api/resources/iFrame';

export declare namespace Celitech {
  export type Options = BaseClientOptions;
  export interface RequestOptions extends BaseRequestOptions {}
}

export class Celitech {
  protected readonly _options: NormalizedClientOptions<BaseClientOptions>;

  protected _destinations: DestinationsClient | undefined;

  protected _packages: PackagesClient | undefined;

  protected _purchases: PurchasesClient | undefined;

  protected _eSim: ESimClient | undefined;

  protected _iFrame: IFrameClient | undefined;

  protected tokenManager: OAuthTokenManager = new OAuthTokenManager();

  constructor(options: BaseClientOptions) {
    this._options = normalizeClientOptions(options);
  }

  public get destinations(): DestinationsClient {
    return (this._destinations ??= new DestinationsClient(this._options, this.tokenManager));
  }

  public get packages(): PackagesClient {
    return (this._packages ??= new PackagesClient(this._options, this.tokenManager));
  }

  public get purchases(): PurchasesClient {
    return (this._purchases ??= new PurchasesClient(this._options, this.tokenManager));
  }

  public get eSim(): ESimClient {
    return (this._eSim ??= new ESimClient(this._options, this.tokenManager));
  }

  public get iFrame(): IFrameClient {
    return (this._iFrame ??= new IFrameClient(this._options, this.tokenManager));
  }

  /**
   * Escape hatch for calling an endpoint this SDK doesn't wrap: resolves `input` against the
   * configured baseUrl/environment, applies the SDK's default headers, auth, timeout, and retry
   * policy, and returns the raw `Response` — no request/response schema validation.
   */
  public async fetch(
    input: Request | string | URL,
    init?: RequestInit,
    requestOptions?: core.PassthroughRequest.RequestOptions,
  ): Promise<Response> {
    return makePassthroughRequest(
      input,
      init,
      {
        baseUrl: this._options.baseUrl ?? this._options.environment,
        headers: this._options.headers,
        timeoutInSeconds: this._options.timeoutInSeconds,
        maxRetries: this._options.maxRetries,
        fetch: this._options.fetch,
        logging: this._options.logging,
      },
      requestOptions,
    );
  }
}
