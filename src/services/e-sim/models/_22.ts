import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_22Schema = {
  message?: string;
};

export const _22Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _22 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _22Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _22(this.message, this.response);
  }
}
