import { z } from 'zod';

export type I_3Schema = {
  message?: string;
};

export const _3Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _3 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _3Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
