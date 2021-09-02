import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from './api';

import { sliceName } from './types';

import { normalize } from './schema';

export const fetchUsers = createAsyncThunk(
  `${sliceName}/fetchUsers`,
  async () => {
    const response = await api.fetchUsers();
    return normalize(response.data);
  }
);

export const fetchUser = createAsyncThunk(
  `${sliceName}/fetchUser`,
  async (userId: number) => {
    const response = await api.fetchUser(userId);
    return { ...response.data, fetched: true };
  }
);
