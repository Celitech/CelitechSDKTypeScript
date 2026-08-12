import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';

export type IBadRequestSchema = {
  message?: string;
};

export const badRequestResponse = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class BadRequest extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): BadRequest {
    const error = new BadRequest(message, response);
    const result = badRequestResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof badRequestResponse
    >;

    error.message = parsedResponse.message || '';

    return error;
  }

  public throw() {
    const error = BadRequest.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
