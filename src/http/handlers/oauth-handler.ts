import { Request } from '../transport/request';
import { HttpResponse, RequestHandler } from '../types';
import { OAuthTokenManager } from '../oauth/token-manager';
import { SerializationStyle } from '../serialization/base-serializer';

export class OAuthHandler implements RequestHandler {
  next?: RequestHandler;

  async handle<T>(request: Request): Promise<HttpResponse<T>> {
    if (!this.next) {
      throw new Error(`No next handler set in OAuthHandler`);
    }

    await this.addToken(request);

    return this.next.handle<T>(request);
  }

  async *stream<T>(request: Request): AsyncGenerator<HttpResponse<T>> {
    if (!this.next) {
      throw new Error(`No next handler set in OAuthHandler`);
    }

    await this.addToken(request);

    yield* this.next.stream<T>(request);
  }

  private async addToken(request: Request): Promise<void> {
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
