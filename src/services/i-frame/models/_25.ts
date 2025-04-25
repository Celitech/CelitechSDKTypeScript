import { z } from 'zod';

export type I_25Schema = {
  message?: string;
};

export const _25Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _25 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _25Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
