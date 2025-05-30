import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_5Schema = {
  message?: string;
};

export const _5Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _5 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _5Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _5(this.message, this.response);
  }
}
