import { z } from 'zod';

export type I_9Schema = {
  message?: string;
};

export const _9Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _9 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _9Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
