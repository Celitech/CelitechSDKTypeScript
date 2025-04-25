import { z } from 'zod';

export type I_1Schema = {
  message?: string;
};

export const _1Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _1 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _1Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
