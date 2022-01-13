import { GenericProps } from "../types";

interface DefaultSize extends GenericProps {
    defaultSizeH?: string,
}

const addHeight = ({ h, hmd, defaultSizeH }: DefaultSize) => {
    if (hmd) {
        return `height: ${hmd ?? defaultSizeH}px;`
    }

    if (h) {
        return `height:  ${h ?? defaultSizeH}px;`
    }

    return ''
} 

export { addHeight }