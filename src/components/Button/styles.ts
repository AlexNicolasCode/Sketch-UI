import styled from 'styled-components';

import { Props } from '.';
import { getBackground } from './background';
import { getBorder, getBorderRadius } from './border';
import { getColor } from './color';

export const Container = styled.button<Props>`
  width: ${({ w }: Props) => w ? `${w}px` : '150px'};
  height: ${({ h }: Props) => h ? `${h}px` : '75px'};
  background: ${(props: Props) => getBackground(props)};
  color: ${(props: Props) => getColor(props)};
  border: ${(props: Props) => getBorder(props)};
  border-radius: ${(props: Props) => getBorderRadius(props)};

  @media screen and (min-width: 700px) {
    width: ${({ wmd }: Props) => wmd ? `${wmd}px` : '200px'};
    height: ${({ hmd }: Props) => hmd ? `${hmd}px` : '100px'};
  }
`;