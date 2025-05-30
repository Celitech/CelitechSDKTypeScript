import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_11Schema = {
  message?: string;
};

export const _11Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _11 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _11Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _11(this.message, this.response);
  }
}
