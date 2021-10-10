import React, {useEffect, useState} from 'react';
//import { _HeaderLayout } from '@styles/_components/_Header'
import { _HeaderWrapper, _HeaderContentLayout } from '../../styles/_components/_Header';
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
    titleBackgroundColor?: string,
    titleBorderBottomColor?: string,
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}

const TITLE_VALUE = "Freeground"
export const HedaerIndex:React.FC<HeaderProps> = ( { 
            user, 
            title=TITLE_VALUE, 
            imgPath, 
            titleBackgroundColor="#4e4e4e", 
            titleColor="#ececec", 
            titleWeight=600, 
            titleSize="20px", 
            onLogin, 
            onLogout, 
            onCreateAccount, 
            titleBorderBottomColor="#73e9e9",
            screenMode 
        }: HeaderProps 
    ) => {
 
    return(
        <>
        {/* <header style={{
                backgroundColor: titleBackgroundColor, 
                padding:'20px', 
                borderBottomColor: titleBorderBottomColor,
                borderRight: '4px soild '+titleBackgroundColor,
                borderLeft: '4px soild '+titleBackgroundColor,
                borderBottom: '1px solid '+titleBorderBottomColor,
                boxShadow: '0px 5px 3px '+titleBorderBottomColor,
            }} > */}
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
                    Login
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
       
        {/* </header> */}
        </_HeaderWrapper>
        </>
    )
}