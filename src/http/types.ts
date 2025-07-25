import { ZodType } from 'zod';
import { Environment } from './environment';
import { Request } from './transport/request';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS';

export interface BaseConfig {
  retry?: RetryOptions;
  validation?: ValidationOptions;
  baseUrl?: string;
  environment?: Environment;
  timeoutMs?: number;
  oAuthBaseUrl?: string;
}

interface ClientCredentialAuthConfig extends BaseConfig {
  clientId: string;
  clientSecret: string;
  accessToken?: never;
}

interface TokenAuthConfig extends BaseConfig {
  clientSecret?: never;
  clientId?: never;
  accessToken: string;
}

export type SdkConfig = ClientCredentialAuthConfig | TokenAuthConfig;

export interface HttpMetadata {
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface HttpResponse<T = unknown> {
  data?: T;
  metadata: HttpMetadata;
  raw: ArrayBuffer;
}

export interface RequestHandler {
  next?: RequestHandler;

  handle<T>(request: Request): Promise<HttpResponse<T>>;
  stream<T>(request: Request): AsyncGenerator<HttpResponse<T>>;
}

export enum ContentType {
  Json = 'json',
  Xml = 'xml',
  Pdf = 'pdf',
  Image = 'image',
  File = 'file',
  Binary = 'binary',
  FormUrlEncoded = 'form',
  Text = 'text',
  MultipartFormData = 'multipartFormData',
  EventStream = 'eventStream',
  NoContent = 'noContent',
}

export interface Options<T> {
  responseSchema: ZodType<T, any, any>;
  requestSchema?: ZodType;
  body?: any;
  requestContentType?: ContentType;
  responseContentType?: ContentType;
  abortSignal?: AbortSignal;
  queryParams?: Record<string, unknown>;
  retry?: RetryOptions;
}

export interface RequestConfig {
  retry?: RetryOptions;
  validation?: ValidationOptions;
  baseUrl?: string;
}

export interface RetryOptions {
  attempts: number;
  delayMs?: number;
}

export interface ValidationOptions {
  responseValidation?: boolean;
}
