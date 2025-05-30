import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_16Schema = {
  message?: string;
};

export const _16Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _16 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _16Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _16(this.message, this.response);
  }
}
