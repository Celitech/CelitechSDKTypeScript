import { z } from 'zod';

export type I_8Schema = {
  message?: string;
};

export const _8Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _8 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _8Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
