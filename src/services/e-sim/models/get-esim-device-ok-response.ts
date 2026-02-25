import { z } from 'zod';
import { Device, device, deviceRequest, deviceResponse } from './device';

/**
 * Zod schema for the GetEsimDeviceOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the GetEsimDeviceOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the GetEsimDeviceOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
