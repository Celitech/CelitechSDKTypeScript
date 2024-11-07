import { Request } from '../transport/request';
import { HttpResponse, RequestHandler } from '../types';
import { OAuthTokenManager } from '../oauth/token-manager';
import { SerializationStyle } from '../serialization/base-serializer';

export class OAuthHandler implements RequestHandler {
  public next?: RequestHandler;

  public async handle<T>(request: Request<T>): Promise<HttpResponse<T>> {
    if (!this.next) {
      throw new Error(`No next handler set in OAuthHandler`);
    }

    if (!request.scopes) {
      return this.next?.handle(request);
    }

    const token = await request.tokenManager.getToken(request.scopes, request.config);
    if (token.accessToken) {
      request.addHeaderParam('Authorization', {
        key: 'Authorization',
        value: `Bearer ${token.accessToken}`,
        explode: false,
        encode: false,
        style: SerializationStyle.SIMPLE,
        isLimit: false,
        isOffset: false,
      });
    }

    return this.next.handle(request);
  }
}
