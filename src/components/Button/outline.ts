import { Props } from ".";

function getOutline ({ outline, outlineSize, outlineColor }: Props): string | undefined {
    const size =  Number(outlineSize);
    console.log(size)
    if (outline && size > 0 && outlineColor) {
        return `#${outlineColor} solid ${size}px`
    }

    if (outline && size > 0) {''
        return `#020202 solid ${size}px`
    }

    if (outline && outlineColor) {
        return `#${outlineColor} solid 2.5px`
    }

    if (outline) return `#020202 solid 2.5px`
}

export { getOutline }