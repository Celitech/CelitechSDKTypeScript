import { z } from 'zod';

export type I_12Schema = {
  message?: string;
};

export const _12Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _12 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _12Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
