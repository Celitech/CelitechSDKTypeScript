import { HttpMetadata } from '../types';
import { Hook } from './hook';
import { HttpRequest, HttpResponse, HttpError } from './hook';

let CURRENT_TOKEN = '';
let CURRENT_EXPIRY = -1;

export class CustomHook implements Hook {
  async getToken(clientId: string, clientSecret: string): Promise<any> {
    const tokenUrl = 'https://auth.celitech.net/oauth2/token';

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const body = {
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials',
    };

    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: headers,
      body: new URLSearchParams(body),
    });

    return response.json();
  }

  public async beforeRequest(request: HttpRequest, params: Map<string, string>): Promise<HttpRequest> {
    const clientId = params.get('clientId') || '';
    const clientSecret = params.get('clientSecret') || '';

    if (!clientId || !clientSecret) {
      throw new Error('Missing clientId and/or clientSecret constructor parameters');
    }

    if (!CURRENT_TOKEN || CURRENT_EXPIRY < Date.now()) {
      const tokenResponse = await this.getToken(clientId, clientSecret);

      if (tokenResponse.error) {
        throw new Error(tokenResponse.error);
      }

      const { expires_in, access_token } = tokenResponse;

      if (!expires_in || !access_token) {
        throw new Error('There is an issue with getting the oauth token');
      }
      CURRENT_EXPIRY = Date.now() + expires_in * 1000;
      CURRENT_TOKEN = access_token;
    }

    const authorization = `Bearer ${CURRENT_TOKEN}`;

    if (!request.headers) {
      request.headers = new Map();
    }
    request.headers.set('Authorization', authorization);

    return request;
  }

  public async afterResponse(
    request: HttpRequest,
    response: HttpResponse<any>,
    params: Map<string, string>,
  ): Promise<HttpResponse<any>> {
    return response;
  }

  public async onError(
    request: HttpRequest,
    response: HttpResponse<any>,
    params: Map<string, string>,
  ): Promise<HttpError> {
    return new CustomHttpError('a custom error message', response.metadata);
  }
}

class CustomHttpError implements HttpError {
  constructor(
    public error: string,
    public metadata: HttpMetadata,
  ) {}
}
