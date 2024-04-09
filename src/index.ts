import { DestinationsService } from './services/destinations/Destinations';
import { ESimService } from './services/eSim/ESim';
import { PackagesService } from './services/packages/Packages';
import { PurchasesService } from './services/purchases/Purchases';

export * from './models';

export * as DestinationsModels from './services/destinations';
export * as ESimModels from './services/eSim';
export * as PackagesModels from './services/packages';
export * as PurchasesModels from './services/purchases';

export * from './http/errors';

/**
 * Welcome to the CELITECH API documentation!  Useful links: [Homepage](https://www.celitech.com) | [Support email](mailto:support@celitech.com) | [Blog](https://www.celitech.com/blog/)
 */
export class Celitech {
  public destinations: DestinationsService;
  public eSim: ESimService;
  public packages: PackagesService;
  public purchases: PurchasesService;

  constructor() {
    this.destinations = new DestinationsService();
    this.eSim = new ESimService();
    this.packages = new PackagesService();
    this.purchases = new PurchasesService();
  }

  /**
   * Sets the baseUrl that the SDK will use for its requests.
   * @param {string} url
   */
  setBaseUrl(url: string): void {
    this.destinations.setBaseUrl(url);
    this.eSim.setBaseUrl(url);
    this.packages.setBaseUrl(url);
    this.purchases.setBaseUrl(url);
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
