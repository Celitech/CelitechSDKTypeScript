import { z } from 'zod';

export type I_14Schema = {
  message?: string;
};

export const _14Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _14 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _14Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
