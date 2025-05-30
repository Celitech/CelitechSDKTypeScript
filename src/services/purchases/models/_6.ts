import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_6Schema = {
  message?: string;
};

export const _6Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _6 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _6Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _6(this.message, this.response);
  }
}
