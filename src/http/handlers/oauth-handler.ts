import { Request } from '../transport/request';
import { HttpResponse, RequestHandler } from '../types';
import { OAuthTokenManager } from '../oauth/token-manager';
import { SerializationStyle } from '../serialization/base-serializer';

export class OAuthHandler implements RequestHandler {
  next?: RequestHandler;

  async handle<T>(request: Request<T>): Promise<HttpResponse<T>> {
    if (!this.next) {
      throw new Error(`No next handler set in OAuthHandler`);
    }

    await this.addToken(request);

    return this.next.handle(request);
  }

  async *stream<T>(request: Request<T>): AsyncGenerator<HttpResponse<T>> {
    if (!this.next) {
      throw new Error(`No next handler set in OAuthHandler`);
    }

    await this.addToken(request);

    yield* this.next.stream(request);
  }

  private async addToken<T>(request: Request<T>): Promise<void> {
    if (!request.scopes) {
      return;
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
  }
}
