import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_18Schema = {
  message?: string;
};

export const _18Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _18 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _18Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _18(this.message, this.response);
  }
}
