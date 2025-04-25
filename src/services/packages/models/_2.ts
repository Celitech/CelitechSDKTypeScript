import { z } from 'zod';

export type I_2Schema = {
  message?: string;
};

export const _2Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _2 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _2Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
