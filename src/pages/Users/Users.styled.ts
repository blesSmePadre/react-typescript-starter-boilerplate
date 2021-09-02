import styled from 'styled-components';

import { textMixin } from 'styles/helpers';

export const Title = styled.h2`
  margin-bottom: 20px;

  ${textMixin({
    size: 20,
    weight: 'bold',
  })}
`;

export const List = styled.ul`
  padding-left: 20px;
  list-style: disc;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
