import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_24Schema = {
  message?: string;
};

export const _24Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _24 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _24Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _24(this.message, this.response);
  }
}
