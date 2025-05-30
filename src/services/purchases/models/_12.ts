import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_12Schema = {
  message?: string;
};

export const _12Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _12 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _12Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _12(this.message, this.response);
  }
}
