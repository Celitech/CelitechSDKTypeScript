import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_2Schema = {
  message?: string;
};

export const _2Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _2 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _2Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _2(this.message, this.response);
  }
}
