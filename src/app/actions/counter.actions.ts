import { createAction, props } from '@ngrx/store';

export const countIncremented = createAction(
  '[counter] Count Incremented'
);

export const countDecremented = createAction(
  '[counter] Count Decremented'
);

export const countReset = createAction(
  '[counter] Count Reset'
);

export const setCountBy = createAction(
  '[counter] Count By Set',
  props<{ by: number }>()
);

