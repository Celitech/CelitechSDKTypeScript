import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_20Schema = {
  message?: string;
};

export const _20Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _20 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _20Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _20(this.message, this.response);
  }
}
