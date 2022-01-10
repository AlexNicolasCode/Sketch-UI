import { Props } from ".";

function getBackground ({ bg, outline, outlineSize }: Props): string | undefined  {
    if (outline && Number(outlineSize) > 0) {
        return 'transparent'
    }

    if (outline) {
        return 'transparent'
    }

    return bg ? `#${bg}` : '#020202'
}

export { getBackground }