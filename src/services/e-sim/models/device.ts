import { z } from 'zod';

/**
 * Zod schema for the Device model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const device = z.lazy(() => {
  return z.object({
    oem: z.string(),
    hardwareName: z.string(),
    hardwareModel: z.string(),
    eid: z.string(),
  });
});

/**
 *
 * @typedef  {Device} device
 * @property {string} - Name of the OEM
 * @property {string} - Name of the Device
 * @property {string} - Model of the Device
 * @property {string} - Serial Number of the eSIM
 */
export type Device = z.infer<typeof device>;

/**
 * Zod schema for mapping API responses to the Device application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const deviceResponse = z.lazy(() => {
  return z
    .object({
      oem: z.string(),
      hardwareName: z.string(),
      hardwareModel: z.string(),
      eid: z.string(),
    })
    .transform((data) => ({
      oem: data['oem'],
      hardwareName: data['hardwareName'],
      hardwareModel: data['hardwareModel'],
      eid: data['eid'],
    }));
});

/**
 * Zod schema for mapping the Device application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const deviceRequest = z.lazy(() => {
  return z
    .object({
      oem: z.string(),
      hardwareName: z.string(),
      hardwareModel: z.string(),
      eid: z.string(),
    })
    .transform((data) => ({
      oem: data['oem'],
      hardwareName: data['hardwareName'],
      hardwareModel: data['hardwareModel'],
      eid: data['eid'],
    }));
});
