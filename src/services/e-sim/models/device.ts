import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const device = z.lazy(() => {
  return z.object({
    oem: z.string().optional(),
    hardwareName: z.string().optional(),
    hardwareModel: z.string().optional(),
    eid: z.string().optional(),
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const deviceResponse = z.lazy(() => {
  return z
    .object({
      oem: z.string().optional(),
      hardwareName: z.string().optional(),
      hardwareModel: z.string().optional(),
      eid: z.string().optional(),
    })
    .transform((data) => ({
      oem: data['oem'],
      hardwareName: data['hardwareName'],
      hardwareModel: data['hardwareModel'],
      eid: data['eid'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const deviceRequest = z.lazy(() => {
  return z
    .object({
      oem: z.string().optional(),
      hardwareName: z.string().optional(),
      hardwareModel: z.string().optional(),
      eid: z.string().optional(),
    })
    .transform((data) => ({
      oem: data['oem'],
      hardwareName: data['hardwareName'],
      hardwareModel: data['hardwareModel'],
      eid: data['eid'],
    }));
});
