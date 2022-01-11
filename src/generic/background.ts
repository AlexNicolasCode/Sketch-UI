import { GenericProps } from "../types"

function getBackground ({ bg, outline, outlineSize }: GenericProps): string | undefined  {
    if (outline && Number(outlineSize) > 0) {
        return 'transparent'
    }

    if (outline) {
        return 'transparent'
    }

    return bg ? `#${bg}` : '#020202'
}

export { getBackground }