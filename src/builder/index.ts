import { addBackground, addHeight, addWidth } from '../generic';
import { addDisplay } from '../generic/display';
import { addFlexBox } from '../generic/flexbox';
import { addJustifyContent } from '../generic/justify-content';
import { GenericProps } from '../types';

const buildStyles = ({
    disabled,
    w,
    h,
    wmd,
    hmd,
    bg,
    color,
    rounded,
    roundedSize,
    borderSize,
    borderColor,
    outline,
    outlineSize,
    outlineColor,
    value,
    d,
    hidden,
    justifyCenter, 
    justifyStart, 
    justifyEnd,
    justifyBetween, 
    justifyAround,
    justifyEvenly
}: GenericProps) => {
    let style;

    style = addFlexBox()
    style += addJustifyContent({
        justifyCenter, 
        justifyStart, 
        justifyEnd,
        justifyBetween, 
        justifyAround,
        justifyEvenly
    })
    style += addDisplay({
        d,
        hidden
    })
    style += addWidth({
        w,
        wmd
    })
    style += addHeight({
        h,
        hmd
    })
    style += addBackground({
        bg,
        outline,
        outlineSize
    })

    return style
}

export { buildStyles }