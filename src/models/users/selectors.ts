import { createSelector } from 'reselect';

import { RootState } from '../index';

import { denormalize } from './schema';

export const rootSelector = createSelector(
  (state: RootState) => state,
  (state) => state.users
);

export const fetchingSelector = createSelector(
  rootSelector,
  ({ fetching }) => fetching
);

export const fetchedSelector = createSelector(
  rootSelector,
  ({ fetched }) => fetched
);

export const usersListSelector = createSelector(
  rootSelector,
  ({ collection, ids }) => denormalize(collection, ids)
);

export const userItemSelector = createSelector(
  rootSelector,
  (_: any, id: number) => id,
  ({ collection }, id) => collection[id]
);
