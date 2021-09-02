/* eslint-disable no-underscore-dangle */

import { configureStore } from '@reduxjs/toolkit';
import _omit from 'lodash/omit';

import { rootReducer } from 'models/index';

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: _omit(window.__INITIAL_STATE__, 'router'),
});
