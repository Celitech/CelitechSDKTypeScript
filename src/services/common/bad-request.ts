import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';

export type IBadRequestSchema = {
  message?: string;
};

export const badRequestResponse = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class BadRequest extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = badRequestResponse.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new BadRequest(this.message, this.response);
  }
}
