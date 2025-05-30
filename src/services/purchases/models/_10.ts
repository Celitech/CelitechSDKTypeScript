import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_10Schema = {
  message?: string;
};

export const _10Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _10 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _10Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _10(this.message, this.response);
  }
}
