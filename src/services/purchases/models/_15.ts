import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_15Schema = {
  message?: string;
};

export const _15Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _15 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _15Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _15(this.message, this.response);
  }
}
