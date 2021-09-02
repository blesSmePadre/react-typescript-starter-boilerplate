/* eslint-disable no-param-reassign, @typescript-eslint/no-unused-vars  */

import { createSlice } from '@reduxjs/toolkit';

import { UsersState } from './types';

import * as thunks from './thunks';

const initialState: UsersState = {
  fetching: true,
  fetched: false,
  collection: {},
  ids: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchUsers.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(thunks.fetchUsers.fulfilled, (state, { payload }) => {
      state.collection = payload.collections.users;
      state.ids = payload.ids.users;
      state.fetching = false;
      state.fetched = true;
    });
    builder.addCase(thunks.fetchUser.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(thunks.fetchUser.fulfilled, (state, { payload }) => {
      state.collection[payload.id] = payload;
      state.fetching = false;
    });
  },
});

export default usersSlice.reducer;
