import { z } from 'zod';

export type I_23Schema = {
  message?: string;
};

export const _23Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _23 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _23Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
