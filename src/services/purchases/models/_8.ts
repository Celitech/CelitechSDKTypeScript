import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_8Schema = {
  message?: string;
};

export const _8Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _8 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _8Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _8(this.message, this.response);
  }
}
