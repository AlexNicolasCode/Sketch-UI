import { GenericProps } from "../types";

interface DefaultSize extends GenericProps {
    defaultSizeW?: string,
}

const addWidth = ({ navbar, w, wmd, defaultSizeW }: DefaultSize) => {
    if (wmd) {
        return `width: ${wmd ?? defaultSizeW}${navbar ? '%' : 'px'};`
    }

    if (w) {
        return `width: ${w ?? defaultSizeW}${navbar ? '%' : 'px'};`
    }

    return ''
} 

export { addWidth }