import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I_13Schema = {
  message?: string;
};

export const _13Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _13 extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _13Response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new _13(this.message, this.response);
  }
}
