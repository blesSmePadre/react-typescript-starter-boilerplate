import React from 'react';
import { Link } from 'react-router-dom';

import { usersListSelector } from 'models/users/selectors';

import * as S from './Users.styled';

type Props = {
  usersList: ReturnType<typeof usersListSelector>;
  loadingUsersList: boolean;
};

const Users = ({ usersList, loadingUsersList }: Props) => (
  <>
    <S.Title>Users</S.Title>

    {loadingUsersList ? (
      '... Loading'
    ) : (
      <S.List>
        {usersList.map(({ id, name }) => (
          <S.ListItem key={id}>
            <Link to={`/users/${id}`}>{name}</Link>
          </S.ListItem>
        ))}
      </S.List>
    )}
  </>
);

export default Users;
