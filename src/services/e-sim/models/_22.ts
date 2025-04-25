import { z } from 'zod';

export type I_22Schema = {
  message?: string;
};

export const _22Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _22 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _22Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
