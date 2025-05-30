import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_9Schema = {
  message?: string;
};

export const _9Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _9 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _9Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _9(this.message, this.response);
  }
}
