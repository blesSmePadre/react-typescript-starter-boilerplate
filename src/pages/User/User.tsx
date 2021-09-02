import React from 'react';

import { userItemSelector } from 'models/users/selectors';

import * as S from './User.styled';

type Props = {
  userItem?: ReturnType<typeof userItemSelector>;
  loadingUserItem: boolean;
};

const User = ({ userItem, loadingUserItem }: Props) => {
  return (
    <div>
      <S.Title>User card</S.Title>
      {loadingUserItem || !userItem ? (
        '... Loading'
      ) : (
        <ul>
          <S.ListItem>
            <S.ListItemTitle>Name:</S.ListItemTitle> {userItem.name}
          </S.ListItem>
          <S.ListItem>
            <S.ListItemTitle>Phone:</S.ListItemTitle> {userItem.phone}
          </S.ListItem>
          <S.ListItem>
            <S.ListItemTitle>Email:</S.ListItemTitle> {userItem.email}
          </S.ListItem>
          <S.ListItem>
            <S.ListItemTitle>Website:</S.ListItemTitle> {userItem.website}
          </S.ListItem>
        </ul>
      )}
    </div>
  );
};

export default User;
