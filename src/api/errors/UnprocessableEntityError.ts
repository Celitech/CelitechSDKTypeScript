import { CelitechApiError } from '../../http/errors/throwable-error';
import { RawResponse } from '../../http/utils/fetcher';
import { ErrorResponse } from '../types/ErrorResponse';

export class UnprocessableEntityError extends CelitechApiError {
  public declare readonly body: ErrorResponse;

  constructor(body: ErrorResponse, rawResponse?: RawResponse) {
    super({ message: 'UnprocessableEntityError', statusCode: 422, body, rawResponse });
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'UnprocessableEntityError';
  }
}
