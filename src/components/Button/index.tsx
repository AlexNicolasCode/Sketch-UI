import React from "react";

import { Container } from "./styles";

export interface Props {
    children: any;
    onClick?: () => void;
    disabled?: boolean;
}
  
const Button = ({
    children,
    ...props
    }: Props) => {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
};
  

export { Button };