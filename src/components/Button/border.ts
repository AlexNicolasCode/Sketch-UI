import { Props } from "./button";

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

export { getBorder, getBorderRadius }