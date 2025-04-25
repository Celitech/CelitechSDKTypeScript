import { z } from 'zod';

export type I_10Schema = {
  message?: string;
};

export const _10Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _10 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _10Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
