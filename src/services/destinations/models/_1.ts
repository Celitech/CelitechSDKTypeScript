import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_1Schema = {
  message?: string;
};

export const _1Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _1 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _1Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _1(this.message, this.response);
  }
}
