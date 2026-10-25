import * as core from '../../../../core';

export const CreatePurchaseV2RequestLanguage = {
  En: 'en',
  Es: 'es',
  Fr: 'fr',
  De: 'de',
  PtBr: 'pt-br',
} as const;

export type CreatePurchaseV2RequestLanguage =
  (typeof CreatePurchaseV2RequestLanguage)[keyof typeof CreatePurchaseV2RequestLanguage];

export const createPurchaseV2RequestLanguage =
  core.cast.identity<CreatePurchaseV2RequestLanguage>();
