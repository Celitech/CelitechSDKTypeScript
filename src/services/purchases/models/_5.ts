import { z } from 'zod';

export type I_5Schema = {
  message?: string;
};

export const _5Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _5 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _5Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
