import * as core from '../../../../core';

export const GrantType = {
  ClientCredentials: 'client_credentials',
} as const;

export type GrantType = (typeof GrantType)[keyof typeof GrantType];

export const grantType = core.cast.identity<GrantType>();
