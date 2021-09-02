import { createGlobalStyle } from 'styled-components';

import { Colors } from '@types';

export default createGlobalStyle`
  body {
    font-family: Helvetica, Arial, sans-serif;
    color: ${Colors.white};
    background-color: ${Colors.cornflowerBlue};
  }
`;
