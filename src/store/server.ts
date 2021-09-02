import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { rootReducer } from '../models';

export const store = configureStore({
  middleware: [...getDefaultMiddleware()],
  reducer: rootReducer,
});
