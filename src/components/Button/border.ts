import { Props } from "./button";
import { getOutline } from "./outline";

function getBorder ({ children, outline, outlineColor, outlineSize, borderSize, borderColor, rounded }: Props): string | undefined {
    if (outline) return getOutline({ children, outline, outlineColor, outlineSize })
    const size = Number(borderSize) ?? '2.5';
  
    if (size > 0 && borderColor ) return `${borderSize}px solid ${borderColor}`
    if (size > 0 ) return `${borderSize}px solid #f9f9f9`
    if (rounded) return `2.5px solid #f9f9f9`
}
  
function getBorderRadius ({ rounded, roundedSize }: Props): string | undefined {
    const size = Number(roundedSize) ?? '2.5';

    if (rounded && size > 0 ) return `${roundedSize}px`
    if (rounded) return `2.5px`
}

export { getBorder, getBorderRadius }