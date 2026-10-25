import type * as core from '../core/index';
import * as errors from './index';

export function handleNonStatusCodeError(
  error: core.Fetcher.Error,
  rawResponse: core.RawResponse,
  method: string,
  path: string,
): never {
  switch (error.reason) {
    case 'non-json':
      throw new errors.CelitechApiError({
        statusCode: error.statusCode,
        body: error.rawBody,
        rawResponse: rawResponse,
      });
    case 'body-is-null':
      throw new errors.CelitechApiError({
        statusCode: error.statusCode,
        rawResponse: rawResponse,
      });
    case 'timeout':
      throw new errors.CelitechApiTimeoutError(`Timeout exceeded when calling ${method} ${path}.`, {
        cause: error.cause,
      });
    case 'unknown':
      throw new errors.CelitechApiError({
        message: error.errorMessage,
        rawResponse: rawResponse,
        cause: error.cause,
      });
    default:
      throw new errors.CelitechApiError({
        message: 'Unknown error',
        rawResponse: rawResponse,
      });
  }
}
