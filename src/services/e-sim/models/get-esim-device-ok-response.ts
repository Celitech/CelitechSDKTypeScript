import { z } from 'zod';
import { Device, device, deviceRequest, deviceResponse } from './device';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getEsimDeviceOkResponse = z.lazy(() => {
  return z.object({
    device: device,
  });
});

/**
 *
 * @typedef  {GetEsimDeviceOkResponse} getEsimDeviceOkResponse
 * @property {Device}
 */
export type GetEsimDeviceOkResponse = z.infer<typeof getEsimDeviceOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getEsimDeviceOkResponseResponse = z.lazy(() => {
  return z
    .object({
      device: deviceResponse,
    })
    .transform((data) => ({
      device: data['device'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getEsimDeviceOkResponseRequest = z.lazy(() => {
  return z
    .object({
      device: deviceRequest,
    })
    .transform((data) => ({
      device: data['device'],
    }));
});
