import { z } from 'zod';

export type I_20Schema = {
  message?: string;
};

export const _20Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _20 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _20Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
