import { GenericProps } from "../types";

const addJustifyContent = ({ 
    justifyCenter, 
    justifyStart, 
    justifyEnd,
    justifyBetween, 
    justifyAround,
    justifyEvenly
}: GenericProps) => {
    let style: string = '';

    if (justifyCenter) style += 'justify-content: center' 
    if (justifyStart) style += 'justify-content: flex-start' 
    if (justifyEnd) style += 'justify-content: flex-end' 
    if (justifyBetween) style += 'justify-content: space-between' 
    if (justifyAround) style += 'justify-content: space-around' 
    if (justifyEvenly) style += 'justify-content: space-evenly' 

    return style
}

export { addJustifyContent }