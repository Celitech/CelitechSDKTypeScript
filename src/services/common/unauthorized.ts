import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';

export type IUnauthorizedSchema = {
  message?: string;
};

export const unauthorizedResponse = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class Unauthorized extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): Unauthorized {
    const error = new Unauthorized(message, response);
    const result = unauthorizedResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof unauthorizedResponse
    >;

    error.message = parsedResponse.message || '';

    return error;
  }

  public throw() {
    const error = Unauthorized.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
