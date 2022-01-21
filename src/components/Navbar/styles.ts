import styled from 'styled-components';

import { buildStyles } from '../../builder';
import { GenericProps } from '../../types';

export const Container = styled.header<GenericProps>`
  ${(props) => buildStyles(props)}
`;