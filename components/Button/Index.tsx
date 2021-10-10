import React, {useEffect, useState} from 'react';
import { _Button } from '../../styles/_components/_Button';  

interface ButtonIndexProps {
    status? : string | "normal" | "primary" | "danger";
    size?: string | "small" | "medium" | "big";
    disabled?: boolean;  
    title?: string | "";
}

export const ButtonIndex:React.FC<ButtonIndexProps> = ({ status="", size="medium", disabled=false, title="Button" }) => {
    return(
        <_Button
            status={status}
            size={size}
            disabled={disabled}
        >
            {title}
            </_Button>
    )
}

