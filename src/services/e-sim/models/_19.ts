import { z } from 'zod';

export type I_19Schema = {
  message?: string;
};

export const _19Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _19 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _19Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
