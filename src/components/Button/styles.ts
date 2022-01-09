import styled from 'styled-components';

import { Props } from './';

export const Container = styled.button<Props>`
  width: ${({ w }: Props) => w ?? '150px'};
  height: ${({ h }: Props) => h ?? '75px'};
  background-color: ${({ bg }: Props) => bg ?? '#020202'};
  color: ${({ color }: Props) => color ?? '#f9f9f9'};

  @media screen and (min-width: 700px) {
    width: ${({ wmd }: Props) => wmd ?? '200px'};
    height: ${({ hmd }: Props) => hmd ?? '100px'};
  }
`;