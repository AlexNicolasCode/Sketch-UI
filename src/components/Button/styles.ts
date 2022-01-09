import styled from 'styled-components';

import { Props } from './';

export const Container = styled.button<Props>`
  width: ${({ w }: Props) => w ?? '150px'};
  height: ${({ h }: Props) => h ?? '75px'};
  background-color: ${({ bg }: Props) => bg ?? '#020202'};
  color: ${({ color }: Props) => color ?? '#f9f9f9'};
  border: ${(props: Props) => getBorder(props)};
  border-radius: ${(props: Props) => getBorderRadius(props)};

  @media screen and (min-width: 700px) {
    width: ${({ wmd }: Props) => wmd ?? '200px'};
    height: ${({ hmd }: Props) => hmd ?? '100px'};
  }
`;

function getBorder ({ borderSize, borderColor, rounded }: Props) {
  const size = Number(borderSize) ?? '2.5';

  if (size > 0 && borderColor ) return `${borderSize}px solid ${borderColor}`
  if (size > 0 ) return `${borderSize}px solid #f9f9f9`
  if (rounded) return `2.5px solid #f9f9f9`
}

function getBorderRadius ({ rounded, roundedSize }: Props) {
  const size = Number(roundedSize) ?? '2.5';

  if (rounded && size > 0 ) return `${roundedSize}px`
  if (rounded) return `2.5px`
}