import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_23Schema = {
  message?: string;
};

export const _23Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _23 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _23Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _23(this.message, this.response);
  }
}
