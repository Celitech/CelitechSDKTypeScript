import { z } from 'zod';

export type I_4Schema = {
  message?: string;
};

export const _4Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _4 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _4Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
