import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_21Schema = {
  message?: string;
};

export const _21Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _21 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _21Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _21(this.message, this.response);
  }
}
