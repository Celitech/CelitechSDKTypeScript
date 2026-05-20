import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { OAuthTokenManager } from './http/oauth/token-manager';
import { DestinationsService } from './services/destinations';
import { PackagesService } from './services/packages';
import { V2Service } from './services/v2';
import { TopupService } from './services/topup';
import { EditService } from './services/edit';
import { ConsumptionService } from './services/consumption';
import { PurchasesService } from './services/purchases';
import { DeviceService } from './services/device';
import { HistoryService } from './services/history';
import { EsimService } from './services/esim';
import { Token_Service } from './services/token_';

export * from './services/destinations';
export * from './services/packages';
export * from './services/v2';
export * from './services/topup';
export * from './services/edit';
export * from './services/consumption';
export * from './services/purchases';
export * from './services/device';
export * from './services/history';
export * from './services/esim';
export * from './services/token_';
export * from './services/o-auth';

export * from './http';
export { Environment } from './http/environment';

export class Celitech {
  public readonly destinations: DestinationsService;

  public readonly packages: PackagesService;

  public readonly v2: V2Service;

  public readonly topup: TopupService;

  public readonly edit: EditService;

  public readonly consumption: ConsumptionService;

  public readonly purchases: PurchasesService;

  public readonly device: DeviceService;

  public readonly history: HistoryService;

  public readonly esim: EsimService;

  public readonly token_: Token_Service;

  protected tokenManager: OAuthTokenManager = new OAuthTokenManager();

  constructor(public config: SdkConfig) {
    this.destinations = new DestinationsService(this.config, this.tokenManager);

    this.packages = new PackagesService(this.config, this.tokenManager);

    this.v2 = new V2Service(this.config, this.tokenManager);

    this.topup = new TopupService(this.config, this.tokenManager);

    this.edit = new EditService(this.config, this.tokenManager);

    this.consumption = new ConsumptionService(this.config, this.tokenManager);

    this.purchases = new PurchasesService(this.config, this.tokenManager);

    this.device = new DeviceService(this.config, this.tokenManager);

    this.history = new HistoryService(this.config, this.tokenManager);

    this.esim = new EsimService(this.config, this.tokenManager);

    this.token_ = new Token_Service(this.config, this.tokenManager);
  }

  set baseUrl(baseUrl: string) {
    this.destinations.baseUrl = baseUrl;
    this.packages.baseUrl = baseUrl;
    this.v2.baseUrl = baseUrl;
    this.topup.baseUrl = baseUrl;
    this.edit.baseUrl = baseUrl;
    this.consumption.baseUrl = baseUrl;
    this.purchases.baseUrl = baseUrl;
    this.device.baseUrl = baseUrl;
    this.history.baseUrl = baseUrl;
    this.esim.baseUrl = baseUrl;
    this.token_.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.destinations.baseUrl = environment;
    this.packages.baseUrl = environment;
    this.v2.baseUrl = environment;
    this.topup.baseUrl = environment;
    this.edit.baseUrl = environment;
    this.consumption.baseUrl = environment;
    this.purchases.baseUrl = environment;
    this.device.baseUrl = environment;
    this.history.baseUrl = environment;
    this.esim.baseUrl = environment;
    this.token_.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.destinations.timeoutMs = timeoutMs;
    this.packages.timeoutMs = timeoutMs;
    this.v2.timeoutMs = timeoutMs;
    this.topup.timeoutMs = timeoutMs;
    this.edit.timeoutMs = timeoutMs;
    this.consumption.timeoutMs = timeoutMs;
    this.purchases.timeoutMs = timeoutMs;
    this.device.timeoutMs = timeoutMs;
    this.history.timeoutMs = timeoutMs;
    this.esim.timeoutMs = timeoutMs;
    this.token_.timeoutMs = timeoutMs;
  }

  set clientId(clientId: string) {
    this.destinations.clientId = clientId;
    this.packages.clientId = clientId;
    this.v2.clientId = clientId;
    this.topup.clientId = clientId;
    this.edit.clientId = clientId;
    this.consumption.clientId = clientId;
    this.purchases.clientId = clientId;
    this.device.clientId = clientId;
    this.history.clientId = clientId;
    this.esim.clientId = clientId;
    this.token_.clientId = clientId;
  }

  set clientSecret(clientSecret: string) {
    this.destinations.clientSecret = clientSecret;
    this.packages.clientSecret = clientSecret;
    this.v2.clientSecret = clientSecret;
    this.topup.clientSecret = clientSecret;
    this.edit.clientSecret = clientSecret;
    this.consumption.clientSecret = clientSecret;
    this.purchases.clientSecret = clientSecret;
    this.device.clientSecret = clientSecret;
    this.history.clientSecret = clientSecret;
    this.esim.clientSecret = clientSecret;
    this.token_.clientSecret = clientSecret;
  }

  set oAuthBaseUrl(oAuthBaseUrl: string) {
    this.destinations.oAuthBaseUrl = oAuthBaseUrl;
    this.packages.oAuthBaseUrl = oAuthBaseUrl;
    this.v2.oAuthBaseUrl = oAuthBaseUrl;
    this.topup.oAuthBaseUrl = oAuthBaseUrl;
    this.edit.oAuthBaseUrl = oAuthBaseUrl;
    this.consumption.oAuthBaseUrl = oAuthBaseUrl;
    this.purchases.oAuthBaseUrl = oAuthBaseUrl;
    this.device.oAuthBaseUrl = oAuthBaseUrl;
    this.history.oAuthBaseUrl = oAuthBaseUrl;
    this.esim.oAuthBaseUrl = oAuthBaseUrl;
    this.token_.oAuthBaseUrl = oAuthBaseUrl;
  }

  set accessToken(accessToken: string) {
    this.destinations.accessToken = accessToken;
    this.packages.accessToken = accessToken;
    this.v2.accessToken = accessToken;
    this.topup.accessToken = accessToken;
    this.edit.accessToken = accessToken;
    this.consumption.accessToken = accessToken;
    this.purchases.accessToken = accessToken;
    this.device.accessToken = accessToken;
    this.history.accessToken = accessToken;
    this.esim.accessToken = accessToken;
    this.token_.accessToken = accessToken;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
