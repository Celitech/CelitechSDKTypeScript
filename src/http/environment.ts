export const CelitechApiEnvironment = {
  Default: 'https://api.celitech.net/v1',
} as const;

export type CelitechApiEnvironment =
  (typeof CelitechApiEnvironment)[keyof typeof CelitechApiEnvironment];
