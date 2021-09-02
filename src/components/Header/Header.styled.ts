/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import styled from 'styled-components';

import { Colors } from '@types';

import { textMixin } from 'styles/helpers';

const logo = require('assets/images/logo.svg');

export const Root = styled.header`
  display: flex;
  padding: 15px;
  border-bottom: 1px solid ${Colors.dustyGray};
`;

export const Logo = styled(logo)`
  width: 78px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  padding-left: 20px;

  ${textMixin({
    size: 25,
    weight: 'bold',
  })}
`;
