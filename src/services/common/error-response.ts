import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';

export type IErrorResponseSchema = {
  message?: string;
};

export const errorResponseResponse = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class ErrorResponse extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): ErrorResponse {
    const error = new ErrorResponse(message, response);
    const result = errorResponseResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof errorResponseResponse
    >;

    error.message = parsedResponse.message || '';

    return error;
  }

  public throw() {
    const error = ErrorResponse.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
