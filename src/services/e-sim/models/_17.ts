import { z } from 'zod';

export type I_17Schema = {
  message?: string;
};

export const _17Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _17 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _17Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
