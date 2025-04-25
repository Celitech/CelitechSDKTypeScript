import { z } from 'zod';

export type I_13Schema = {
  message?: string;
};

export const _13Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class _13 extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _13Response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
