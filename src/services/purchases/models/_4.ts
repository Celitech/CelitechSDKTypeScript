import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_4Schema = {
  message?: string;
};

export const _4Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _4 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _4Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _4(this.message, this.response);
  }
}
