import React from "react";

import { Container } from "./styles";

export interface Props {
    children: any;
    onClick?: () => void;
    disabled?: boolean;
    w?: string;
    h?: string;
}
  
const Button = ({
    children,
    w = 'default',
    h = 'default',
    ...props
    }: Props) => {
    return (
        <Container
            w={w}
            h={h}
            {...props}
        >
            {children}
        </Container>
    );
};
  

export { Button };