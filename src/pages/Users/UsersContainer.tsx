import React, { useEffect } from 'react';

import { useThunk } from 'hooks/useAction';
import { useSelector } from 'hooks/useSelector';
import * as thunks from 'models/users/thunks';
import {
  usersListSelector,
  fetchingSelector,
  fetchedSelector,
} from 'models/users/selectors';

import Users from './Users';

const UsersContainer = () => {
  const onFetchUsers = useThunk(thunks.fetchUsers);
  const usersList = useSelector(usersListSelector);
  const loadingUsersList = useSelector(fetchingSelector);
  const fetched = useSelector(fetchedSelector);

  useEffect(() => {
    if (!fetched) {
      onFetchUsers();
    }
  }, [onFetchUsers, fetched]);

  return <Users usersList={usersList} loadingUsersList={loadingUsersList} />;
};

export default UsersContainer;
