import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScreenSwitch from 'util/helper/ScreenSwitch';
import { useState } from 'react';
import {HedaerIndex, UserProps} from '../components/Header/HeaderIndex';

function MyApp({ Component, pageProps }: AppProps) {

  const [screenMode, setScreenMode ] = useState("");
  const [userInfo, setUserInfo] = useState<UserProps>({email: "", username: ""});
  const getScreen = (screen: string) => {
    console.log(screen);
    setScreenMode(screen);
  }
  
  const onLogin = () => {

  }

  const onLogout = () => {

  }
  const onCreateAccount = () => {

  }

  /**
   *    HeaderProps
   *    user?: UserProps;
        title: string,
        imgPath: string,
        titleColor: string,
        onLogin: () => void;
        onLogout: () => void;
        onCreateAccount: () => void;
   */
  return (
    <>
    <ScreenSwitch
      getScreen = {getScreen}
    />
    
    <HedaerIndex
        user={userInfo}
        screenMode={screenMode}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
    /> 
    <Component 
            {...pageProps} 
            screenMode = {screenMode}
          />
    </>
  ) 
        
}
export default MyApp
