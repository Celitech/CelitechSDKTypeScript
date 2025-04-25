import { z } from 'zod';

export type I_15Schema = {
  message?: string;
};

export const _15Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _15 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _15Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
