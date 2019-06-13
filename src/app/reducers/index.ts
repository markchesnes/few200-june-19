import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';

export interface State {
  counter: fromCounter.State;
}

export const reducers = {
  counter: fromCounter.reducer
};

// 1. Feature Selector

// 2. A selector for each "branch" of the features state
const selectCounterBranch = (state: State) => state.counter;

// 3. Helpers, etc.

// 4. The selectoras needed for the componenets

export const selectCurrentCount = createSelector(selectCounterBranch, b => b.current);

export const selectAtZero = createSelector(selectCurrentCount, c => c === 0);

export const selectCurrentCountBy = createSelector(selectCounterBranch, b => b.by);

export const selectDecrementDisabled = createSelector(selectCurrentCount, selectCurrentCountBy, (current, by) => (current - by) < 0);
