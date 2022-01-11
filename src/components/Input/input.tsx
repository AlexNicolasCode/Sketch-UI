import React from "react";

import { GenericProps } from "../../types";
import { GenericComponent } from "../Generic";
import { Container } from "./styles";
  
const Input = (props: GenericProps) => {
    return (
        <GenericComponent
            {...props}
            Container={Container} 
        />
    )
};
  

export { Input };