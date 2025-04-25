import { z } from 'zod';

export type I_7Schema = {
  message?: string;
};

export const _7Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _7 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _7Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
