import React from "react"
import { GenericProps } from "../../types"

const GenericComponent = ({ 
    children,
    Container,
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
    ...props
}: GenericProps) => {
    return (
        <Container
            w={w}
            h={h}
            hmd={hmd}
            wmd={wmd}
            bg={bg}
            color={color}
            rounded={rounded}
            roundedSize={roundedSize}
            borderSize={borderSize}
            borderColor={borderColor}
            outline={outline}
            outlineSize={outlineSize}
            outlineColor={outlineColor}
            {...props}
        >
            {children}
        </Container>
    )   
}

export { GenericComponent }