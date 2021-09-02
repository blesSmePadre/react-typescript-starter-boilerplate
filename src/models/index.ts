import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import userReducer from './users';

import history from '../utils/history';

export const rootReducer = combineReducers({
  router: connectRouter(history),
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
