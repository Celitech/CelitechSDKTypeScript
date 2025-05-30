import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_25Schema = {
  message?: string;
};

export const _25Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _25 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _25Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _25(this.message, this.response);
  }
}
