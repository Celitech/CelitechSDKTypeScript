import { z } from 'zod';

export type I_18Schema = {
  message?: string;
};

export const _18Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _18 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _18Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
