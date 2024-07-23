import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { DestinationsService } from './services/destinations';
import { PackagesService } from './services/packages';
import { PurchasesService } from './services/purchases';
import { ESimService } from './services/e-sim';

export class Celitech {
  public readonly destinations: DestinationsService;

  public readonly packages: PackagesService;

  public readonly purchases: PurchasesService;

  public readonly eSim: ESimService;

  constructor(public config: SdkConfig) {
    const baseUrl = config.environment || config.baseUrl || Environment.DEFAULT;
    this.config = {
      ...config,
      baseUrl,
    };
    this.destinations = new DestinationsService(this.config);

    this.packages = new PackagesService(this.config);

    this.purchases = new PurchasesService(this.config);

    this.eSim = new ESimService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.destinations.baseUrl = baseUrl;
    this.packages.baseUrl = baseUrl;
    this.purchases.baseUrl = baseUrl;
    this.eSim.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.destinations.baseUrl = environment;
    this.packages.baseUrl = environment;
    this.purchases.baseUrl = environment;
    this.eSim.baseUrl = environment;
  }

  set timeout(timeout: number) {
    this.destinations.timeout = timeout;
    this.packages.timeout = timeout;
    this.purchases.timeout = timeout;
    this.eSim.timeout = timeout;
  }

  set clientId(clientId: string) {
    this.destinations.clientId = clientId;
    this.packages.clientId = clientId;
    this.purchases.clientId = clientId;
    this.eSim.clientId = clientId;
  }

  set clientSecret(clientSecret: string) {
    this.destinations.clientSecret = clientSecret;
    this.packages.clientSecret = clientSecret;
    this.purchases.clientSecret = clientSecret;
    this.eSim.clientSecret = clientSecret;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
