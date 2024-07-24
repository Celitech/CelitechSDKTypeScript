import { HttpMetadata } from '../types';
import { Hook } from './hook';
import { HttpRequest, HttpResponse, HttpError } from './hook';

let CURRENT_TOKEN = '';
let CURRENT_EXPIRY = -1;

export class CustomHook implements Hook {
  public async beforeRequest(request: HttpRequest, params: Map<string, string>): Promise<HttpRequest> {
    console.log('request', request);
    console.log('params', params);

    if (request.path.endsWith('/oauth/token')) return request;

    const clientId = params.get('clientId') || '';
    const clientSecret = params.get('clientSecret') || '';

    console.log('clientId', clientId);
    console.log('clientSecret', clientSecret);

    if (!clientId || !clientSecret) {
      throw new Error('Missing clientId and/or clientSecret constructor parameters');
    }

    if (!CURRENT_TOKEN || CURRENT_EXPIRY < Date.now()) {
      // Prepare the request payload for fecthing a fresh Oauth token
      const input = {
        client_id: clientId || '',
        client_secret: clientSecret || '',
        grant_type: 'client_credentials',
      };

      // Fetch a fresh Oauth token
      // Retrieve the new access token and expiry, and set them to the global variables
      const tokenResponse = await this.getToken(input);

      console.log('tokenResponse', tokenResponse);
      console.log('tokenResponse.data', tokenResponse.data);

      const { expires_in, access_token } = tokenResponse.data;

      if (!expires_in || !access_token) {
        throw new Error('There is an issue with getting the oauth token');
      }
      CURRENT_EXPIRY = Date.now() + expires_in * 1000;
      CURRENT_TOKEN = access_token;
    }

    // Set the Bearer token in the request header
    const authorization = `Bearer ${CURRENT_TOKEN}`;

    console.log('authorization', authorization);

    if (!request.headers) {
      request.headers = new Map();
    }
    request.headers.set('Authorization', authorization);

    return request;
  }

  async getToken(input: any): Promise<any> {
    const tokenUrl = 'https://auth.celitech.net/oauth2/token';

    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(input),
    }).catch((error) => {
      throw new Error('Error in posting the request:' + error);
    });

    return response.json();
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
