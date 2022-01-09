import styled from 'styled-components';

import { Props } from './';

export const Container = styled.button<Props>`
  width: ${({ w }: Props) => w === 'default' ? '150px' : w};
  height: ${({ h }: Props) => h === 'default' ? '75px' : h};
`;