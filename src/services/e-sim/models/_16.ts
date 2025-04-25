import { z } from 'zod';

export type I_16Schema = {
  message?: string;
};

export const _16Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _16 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _16Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
