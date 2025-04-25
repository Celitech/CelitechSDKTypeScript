import { z } from 'zod';

export type I_24Schema = {
  message?: string;
};

export const _24Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _24 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _24Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
