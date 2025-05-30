import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_7Schema = {
  message?: string;
};

export const _7Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _7 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _7Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _7(this.message, this.response);
  }
}
