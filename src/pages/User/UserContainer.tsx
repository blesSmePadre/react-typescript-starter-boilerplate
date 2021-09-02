import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useThunkWithPayload } from 'hooks/useAction';
import { useParametricSelector, useSelector } from 'hooks/useSelector';
import * as thunks from 'models/users/thunks';
import { userItemSelector, fetchingSelector } from 'models/users/selectors';

import User from './User';

const UsersContainer = () => {
  const params = useParams<{ id: string }>();
  const userId = Number(params.id);

  const onFetchUser = useThunkWithPayload(thunks.fetchUser);
  const userItem = useParametricSelector(userItemSelector, userId);
  const loadingUserItem = useSelector(fetchingSelector);

  useEffect(() => {
    if (!userItem || !userItem.fetched) {
      onFetchUser(userId);
    }
  }, [onFetchUser, userItem, userId]);

  return <User userItem={userItem} loadingUserItem={loadingUserItem} />;
};

export default UsersContainer;
