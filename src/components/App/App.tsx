import React from 'react';

import { CommonProps } from './types';

import AppRouter from 'components/AppRouter';
import Header from 'components/Header';

import Normalize from 'styles/normalize';
import Global from 'styles/global';
import * as S from './App.styled';

const App = (props: CommonProps) => (
  <React.Fragment>
    <Normalize />
    <Global />
    <S.Root>
      <Header />
      <S.Content>
        <AppRouter {...props} />
      </S.Content>
    </S.Root>
  </React.Fragment>
);

export default App;
