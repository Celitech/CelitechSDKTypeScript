import { z } from 'zod';

export type I_11Schema = {
  message?: string;
};

export const _11Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _11 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _11Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
