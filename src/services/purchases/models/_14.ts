import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_14Schema = {
  message?: string;
};

export const _14Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _14 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _14Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _14(this.message, this.response);
  }
}
