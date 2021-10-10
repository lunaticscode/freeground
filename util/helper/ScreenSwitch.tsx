import React, {FC, useEffect} from 'react';
import useWindowSize from '../hooks/useWindowSize';
import styled from 'styled-components';
const Desktop = styled.div`
   @media (max-width: 550px) {
    display: none;
  }   
`
const Mobile = styled.div`
    display: none;
    @media (max-width: 550px){
        display: block;
    }
`

interface ScreenSwitchProps {
    getScreen: ( screen: string ) => void;
}
const ScreenSwitch:React.FC<ScreenSwitchProps> = ({ getScreen }) => {
    const size = useWindowSize();
    size ? ( size >= 1040 ? getScreen('desktop') : getScreen('mobile') ) : getScreen("") 
    return (
        <>
        { size ? ( size >= 1040 ? <Desktop/> : <Mobile/> ) : "" }
        </>
    )
}
export default ScreenSwitch;
