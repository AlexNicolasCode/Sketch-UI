import { GenericProps } from "../types"

function addBackground ({ bg, outline, outlineSize }: GenericProps): string | undefined  {
    if (outline && Number(outlineSize) > 0) {
        return 'background: transparent;'
    }

    if (outline) {
        return 'background: transparent;'
    }

    return bg ? `background-color: #${bg};` : 'background-color: #020202;'
}

export { addBackground }