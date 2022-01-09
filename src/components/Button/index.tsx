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
}
  
const Button = ({
    children,
    w = 'default',
    h = 'default',
    wmd = 'default',
    hmd = 'default',
    ...props
    }: Props) => {
    return (
        <Container
            w={w}
            h={h}
            hmd={hmd}
            wmd={wmd}
            {...props}
        >
            {children}
        </Container>
    );
};
  

export { Button };