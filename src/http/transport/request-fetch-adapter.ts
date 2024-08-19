import { HttpMethod } from '../types';
import { Request } from './request';

interface HttpAdapter {
  send(): Promise<Response>;
}

export class RequestFetchAdapter<T> implements HttpAdapter {
  private requestInit: RequestInit = {};

  constructor(private request: Request<T>) {
    this.setMethod(request.method);
    this.setHeaders(request.getHeaders());
    this.setBody(request.body);
    this.setTimeout(request.config.timeout);
  }

  public async send(): Promise<Response> {
    return fetch(this.request.constructFullUrl(), this.requestInit);
  }

  private setMethod(method: HttpMethod) {
    if (!method) {
      return;
    }
    this.requestInit = {
      ...this.requestInit,
      method,
    };
  }

  private setBody(body: ReadableStream<Uint8Array> | null) {
    if (!body) {
      return;
    }
    this.requestInit = {
      ...this.requestInit,
      body,
    };
  }

  private setHeaders(headers: HeadersInit | undefined) {
    if (!headers) {
      return;
    }

    this.requestInit = {
      ...this.requestInit,
      headers,
    };
  }

  private setTimeout(timeout: number | undefined) {
    if (!timeout) {
      return;
    }

    this.requestInit = {
      ...this.requestInit,
      signal: AbortSignal.timeout(timeout),
    };
  }
}
