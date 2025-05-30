import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type I__Schema = {
  message?: string;
};

export const _response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class __ extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = _response.parse(response);

    this.message = parsedResponse.message || '';
  }

  public throw() {
    throw new __(this.message, this.response);
  }
}
