import React, {useEffect, useState} from 'react';
//import { _HeaderLayout } from '@styles/_components/_Header'
import { _HeaderWrapper, _HeaderContentLayout } from '../../styles/_components/_Header';
import { HEADER_STYLE } from '../../styles/_styles_config'
import { _Button } from '../../styles/_components/_Button';

export interface UserProps { 
    email: string | null | undefined;
    username: string | null | undefined;
}

export interface HeaderProps {
    screenMode: string;
    user: UserProps | null;
    imgPath?: string,
    title?: string,
    titleSize?: string,
    titleWeight?: number;
    titleColor?: string,
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}

const TITLE_VALUE = "Freeground"
export const HedaerIndex:React.FC<HeaderProps> = ( { 
            user, 
            title=TITLE_VALUE, 
            imgPath, 
            titleColor=HEADER_STYLE.TEXT_COLOR, 
            titleWeight=HEADER_STYLE.TITLE_WEIGHT, 
            titleSize=HEADER_STYLE.TITLE_TEXT_SIZE + 'px', 
            onLogin, 
            onLogout, 
            onCreateAccount, 
            screenMode 
        }: HeaderProps 
    ) => {
 
    return(
        <>
            <_HeaderWrapper>
        {
            ( screenMode === 'desktop' )
            ?
            <_HeaderContentLayout>
                <div style={{ color: titleColor, fontSize: titleSize, fontWeight: titleWeight }} >
                    {title}
                </div>
                <_Button>
                    {
                        ( user && user.email && user.username )
                        ?
                        "Logout"
                        :
                        "Login"
                    }
                    
                </_Button>
                
            </_HeaderContentLayout>
            :
            <_HeaderContentLayout>
                <div style={{ color: titleColor, fontSize: titleSize, fontWeight: titleWeight }} >
                    {title}
                </div>
                <_Button>
                    {
                        ( user && user.email && user.username )
                        ?
                        "Logout"
                        :
                        "Login"
                    }
                </_Button>
            </_HeaderContentLayout>   
        }
        </_HeaderWrapper>
        </>
    )
}