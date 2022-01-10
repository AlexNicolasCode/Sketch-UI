import { Props } from ".";

function getColor ({ color, outline, outlineColor }: Props): string | undefined {
    if (outline && outlineColor && !color) {
        return `#${outlineColor}`
    }

    if (outline) {
        return '#020202'
    }

    return color ? `#${color}` : '#f9f9f9'
}

export { getColor }