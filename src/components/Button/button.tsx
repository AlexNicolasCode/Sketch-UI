import React from "react";

import { Container } from "./styles";

export interface Props {
    children: any;
    onClick?: () => void;
    disabled?: boolean;
    w?: string;
    h?: string;
    wmd?: string;
    hmd?: string;
    bg?: string;
    color?: string;
    rounded?: boolean;
    roundedSize?: string,
    borderSize?: string,
    borderColor?: string,
    outline?: boolean,
    outlineSize?: string,
    outlineColor?: string,
}
  
const Button = ({
    children,
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
    }: Props) => {
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
    );
};
  

export { Button };