import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { OAuthTokenManager } from './http/oauth/token-manager';
import { OAuthService } from './services/o-auth';
import { DestinationsService } from './services/destinations';
import { PackagesService } from './services/packages';
import { PurchasesService } from './services/purchases';
import { ESimService } from './services/e-sim';
import { IFrameService } from './services/i-frame';

export * from './services/o-auth';
export * from './services/destinations';
export * from './services/packages';
export * from './services/purchases';
export * from './services/e-sim';
export * from './services/i-frame';

export * from './http';
export { Environment } from './http/environment';

export class Celitech {
  public readonly oAuth: OAuthService;

  public readonly destinations: DestinationsService;

  public readonly packages: PackagesService;

  public readonly purchases: PurchasesService;

  public readonly eSim: ESimService;

  public readonly iFrame: IFrameService;

  protected tokenManager: OAuthTokenManager = new OAuthTokenManager();

  constructor(public config: SdkConfig) {
    this.oAuth = new OAuthService(this.config, this.tokenManager);

    this.destinations = new DestinationsService(this.config, this.tokenManager);

    this.packages = new PackagesService(this.config, this.tokenManager);

    this.purchases = new PurchasesService(this.config, this.tokenManager);

    this.eSim = new ESimService(this.config, this.tokenManager);

    this.iFrame = new IFrameService(this.config, this.tokenManager);
  }

  set baseUrl(baseUrl: string) {
    this.oAuth.baseUrl = baseUrl;
    this.destinations.baseUrl = baseUrl;
    this.packages.baseUrl = baseUrl;
    this.purchases.baseUrl = baseUrl;
    this.eSim.baseUrl = baseUrl;
    this.iFrame.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.oAuth.baseUrl = environment;
    this.destinations.baseUrl = environment;
    this.packages.baseUrl = environment;
    this.purchases.baseUrl = environment;
    this.eSim.baseUrl = environment;
    this.iFrame.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.oAuth.timeoutMs = timeoutMs;
    this.destinations.timeoutMs = timeoutMs;
    this.packages.timeoutMs = timeoutMs;
    this.purchases.timeoutMs = timeoutMs;
    this.eSim.timeoutMs = timeoutMs;
    this.iFrame.timeoutMs = timeoutMs;
  }

  set clientId(clientId: string) {
    this.oAuth.clientId = clientId;
    this.destinations.clientId = clientId;
    this.packages.clientId = clientId;
    this.purchases.clientId = clientId;
    this.eSim.clientId = clientId;
    this.iFrame.clientId = clientId;
  }

  set clientSecret(clientSecret: string) {
    this.oAuth.clientSecret = clientSecret;
    this.destinations.clientSecret = clientSecret;
    this.packages.clientSecret = clientSecret;
    this.purchases.clientSecret = clientSecret;
    this.eSim.clientSecret = clientSecret;
    this.iFrame.clientSecret = clientSecret;
  }

  set oAuthBaseUrl(oAuthBaseUrl: string) {
    this.oAuth.oAuthBaseUrl = oAuthBaseUrl;
    this.destinations.oAuthBaseUrl = oAuthBaseUrl;
    this.packages.oAuthBaseUrl = oAuthBaseUrl;
    this.purchases.oAuthBaseUrl = oAuthBaseUrl;
    this.eSim.oAuthBaseUrl = oAuthBaseUrl;
    this.iFrame.oAuthBaseUrl = oAuthBaseUrl;
  }

  set accessToken(accessToken: string) {
    this.oAuth.accessToken = accessToken;
    this.destinations.accessToken = accessToken;
    this.packages.accessToken = accessToken;
    this.purchases.accessToken = accessToken;
    this.eSim.accessToken = accessToken;
    this.iFrame.accessToken = accessToken;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
