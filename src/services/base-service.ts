import { Environment } from '../http/environment';
import { HttpClient } from '../http/client';
import { SdkConfig } from '../http/types';

export class BaseService {
  public client: HttpClient;

  constructor(public config: SdkConfig) {
    this.client = new HttpClient(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.config.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.config.environment = environment;
  }

  set timeout(timeout: number) {
    this.config.timeout = timeout;
  }

  set clientId(clientId: string) {
    this.config.clientId = clientId;
  }

  set clientSecret(clientSecret: string) {
    this.config.clientSecret = clientSecret;
  }
}
