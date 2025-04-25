import { z } from 'zod';

export type I_6Schema = {
  message?: string;
};

export const _6Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _6 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _6Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
