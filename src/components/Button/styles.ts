import styled from 'styled-components';

import { getBackground, getBorder, getBorderRadius, getColor } from '../../generic';
import { GenericProps } from '../../types';

export const Container = styled.button<GenericProps>`
  width: ${({ w }: GenericProps) => w ? `${w}px` : '150px'};
  height: ${({ h }: GenericProps) => h ? `${h}px` : '75px'};
  background: ${(props: GenericProps) => getBackground(props)};
  color: ${(props: GenericProps) => getColor(props)};
  border: ${(props: GenericProps) => getBorder(props)};
  border-radius: ${(props: GenericProps) => getBorderRadius(props)};

  @media screen and (min-width: 700px) {
    width: ${({ wmd }: GenericProps) => wmd ? `${wmd}px` : '200px'};
    height: ${({ hmd }: GenericProps) => hmd ? `${hmd}px` : '100px'};
  }
`;