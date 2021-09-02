import { Route } from '@types';

import { fetchUser, fetchUsers } from 'models/users/thunks';

import Users from 'pages/Users';
import User from 'pages/User';

export const routes: Route[] = [
  {
    path: '/',
    exact: true,
    component: Users,
    cache: false,
    thunksToRun: [fetchUsers],
  },
  {
    path: `/users/:id`,
    exact: true,
    component: User,
    cache: false,
    /* eslint-disable @typescript-eslint/no-unsafe-return */
    thunksToRun: [[fetchUser, ({ id }) => id]],
  },
];
