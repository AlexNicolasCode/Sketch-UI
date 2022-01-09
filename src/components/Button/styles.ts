import styled from 'styled-components';

import { Props } from '.';
import { getBorder, getBorderRadius } from './border';

export const Container = styled.button<Props>`
  width: ${({ w }: Props) => w ? `${w}px` : '150px'};
  height: ${({ h }: Props) => h ? `${h}px` : '75px'};
  background-color: ${({ bg }: Props) => bg ? `#${bg}` : '#020202'};
  color: ${({ color }: Props) => color ? `#${color}` : '#f9f9f9'};
  border: ${(props: Props) => getBorder(props)};
  border-radius: ${(props: Props) => getBorderRadius(props)};

  @media screen and (min-width: 700px) {
    width: ${({ wmd }: Props) => wmd ? `${wmd}px` : '200px'};
    height: ${({ hmd }: Props) => hmd ? `${hmd}px` : '100px'};
  }
`;