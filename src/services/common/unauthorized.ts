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

    const parsedResponse = unauthorizedResponse.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new Unauthorized(this.message, this.response);
  }
}
