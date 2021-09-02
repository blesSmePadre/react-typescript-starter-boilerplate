import styled from 'styled-components';

import { textMixin } from 'styles/helpers';

export const Title = styled.h2`
  margin-bottom: 20px;

  ${textMixin({
    size: 20,
    weight: 'bold',
  })}
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ListItemTitle = styled.span`
  ${textMixin({
    size: 16,
    weight: 'bold',
  })}
`;
