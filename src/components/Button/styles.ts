import styled from 'styled-components';

import { Props } from './';

export const Container = styled.button<Props>`
  width: ${({ w }: Props) => w === 'default' ? '150px' : w};
  height: ${({ h }: Props) => h === 'default' ? '75px' : h};

  @media screen and (min-width: 700px) {
    width: ${({ wmd }: Props) => wmd === 'default' ? '200px' : wmd};
    height: ${({ hmd }: Props) => hmd === 'default' ? '100px' : hmd};
  }
`;