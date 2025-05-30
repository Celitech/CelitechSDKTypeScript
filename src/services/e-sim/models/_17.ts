import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_17Schema = {
  message?: string;
};

export const _17Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _17 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _17Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _17(this.message, this.response);
  }
}
