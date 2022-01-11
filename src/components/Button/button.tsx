import React from "react";
import { GenericProps } from "../../types";
import { GenericComponent } from "../Generic";
import { Container } from "./styles";
  
const Button = (props: GenericProps) => {
    return (
        <GenericComponent
            {...props}
            Container={Container}
            children={"kdaskdsak"}    
        />
    )
};
  

export { Button };