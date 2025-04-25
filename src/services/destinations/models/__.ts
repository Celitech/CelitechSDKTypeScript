import { z } from 'zod';

export type I__Schema = {
  message?: string;
};

export const _response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

export class __ extends Error {
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = _response.parse(response);

    this.message = parsedResponse.message || '';
  }
}
