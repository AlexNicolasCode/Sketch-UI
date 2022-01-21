export interface GenericProps extends Navbar, JustifyContent {
    children?: any,
    Container?: any,
    props?: any,
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
    value?: string,
    d?: 'block' | 'inline' | 'flex' | 'grid' | 'table',
    hidden?: boolean,
}

type Navbar = {
    navbar?: boolean  
}

type JustifyContent = { 
    justifyCenter?: boolean, 
    justifyStart?: boolean, 
    justifyEnd?: boolean,
    justifyBetween?: boolean, 
    justifyAround?: boolean,
    justifyEvenly?: boolean
}