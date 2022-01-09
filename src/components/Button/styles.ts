import styled from 'styled-components';

import { Props } from './';

export const Container = styled.button<Props>`
  width: ${({ w }: Props) => w === 'default' ? '150px' : w};
  height: ${({ h }: Props) => h === 'default' ? '75px' : h};
  background-color: ${({ bg }: Props) => bg === 'default' ? '#020202' : bg };
  color: ${({ color }: Props) => color === 'default' ? '#f9f9f9' : color };

  @media screen and (min-width: 700px) {
    width: ${({ wmd }: Props) => wmd === 'default' ? '200px' : wmd};
    height: ${({ hmd }: Props) => hmd === 'default' ? '100px' : hmd};
  }
`;