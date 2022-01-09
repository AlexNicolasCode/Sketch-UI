import React from "react";

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
        <button {...props}>
            {children}
        </button>
    );
};
  

export { Button };