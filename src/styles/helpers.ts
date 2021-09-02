import { css } from 'styled-components';

import { ColorsStrings } from '@types';

export const textMixin = ({
  size = 20,
  textTransform = 'none',
  align = 'left',
  weight = 'normal',
}: {
  size?: number | string;
  weight?: number | 'normal' | 'bold';
  color?: ColorsStrings;
  align?: 'left' | 'center' | 'right';
  textTransform?: 'none' | 'lowercase' | 'uppercase';
}) => css`
  ${`font-size: ${typeof size === 'number' ? `${size}px` : size}`};
  ${`text-align: ${align}`};
  ${`text-transform: ${textTransform}`};
  ${`font-weight: ${weight}`};
`;
