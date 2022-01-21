import React from "react";

import { GenericProps } from "../../types";
import { GenericComponent } from "../Generic";
import { Container } from "./styles";
  
const Navbar = (props: GenericProps) => {
    return (
        <GenericComponent
            navbar
            w="100"
            wmd="100"
            h="200"
            hmd="100"
            {...props}
            Container={Container}  
        >
            {props.children}
        </GenericComponent>
    )
};
  

export { Navbar };