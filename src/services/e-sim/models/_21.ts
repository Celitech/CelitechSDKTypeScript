import { z } from 'zod';

export type I_21Schema = {
  message?: string;
};

export const _21Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _21 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _21Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
