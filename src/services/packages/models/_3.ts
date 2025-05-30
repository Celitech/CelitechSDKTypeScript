import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_3Schema = {
  message?: string;
};

export const _3Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _3 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _3Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _3(this.message, this.response);
  }
}
