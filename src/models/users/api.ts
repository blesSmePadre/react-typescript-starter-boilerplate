import { request, Methods } from 'utils/request';

import { User } from './types';

export const fetchUsers = () =>
  request<User[]>(Methods.GET, {
    url: '/users',
  });

export const fetchUser = (userId: number) =>
  request<User>(Methods.GET, {
    url: `/users/${userId}`,
  });
