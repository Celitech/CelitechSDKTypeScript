import * as core from '../../../../core';

export const CreatePurchaseRequestLanguage = {
  En: 'en',
  Es: 'es',
  Fr: 'fr',
  De: 'de',
  PtBr: 'pt-br',
} as const;

export type CreatePurchaseRequestLanguage =
  (typeof CreatePurchaseRequestLanguage)[keyof typeof CreatePurchaseRequestLanguage];

export const createPurchaseRequestLanguage = core.cast.identity<CreatePurchaseRequestLanguage>();
