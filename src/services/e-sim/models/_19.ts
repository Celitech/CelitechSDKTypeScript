import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_19Schema = {
  message?: string;
};

export const _19Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _19 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _19Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _19(this.message, this.response);
  }
}
