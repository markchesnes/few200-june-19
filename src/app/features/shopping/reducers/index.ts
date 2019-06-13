import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingItem } from '../models';

export const featureName = 'shopping';

export interface State {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};

// feature selector
const selectFeature = createFeatureSelector<State>(featureName);

// branch selector
const selectListBranch = createSelector(selectFeature, f => f.list);

// Object destructing.
// Only grabs the selectAll from the adapter and puts in in the selectAllShoppingEntities
const { selectAll: selectAllShoppingEntities } = fromList.adapter.getSelectors(selectListBranch);

export const selectShoppingItems = createSelector(selectAllShoppingEntities, s => s as ShoppingItem[]);
