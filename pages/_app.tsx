import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScreenSwitch from '@helper/ScreenSwitch';
import { useState } from 'react';
import '@stories/button.css';
import '@stories/header.css';
import "styles/globals.css"
import { Header } from '@stories/Header';

function MyApp({ Component, pageProps }: AppProps) {

  const [screenMode, setScreenMode ] = useState("");
  const getScreen = (screen: string) => {
    console.log(screen);
    setScreenMode(screen);
  }
  return (
    <>
    <ScreenSwitch
      getScreen = {getScreen}
    />
       {/* <Header
      title={"Freenground"}
      titleColor={"black"}
      user={{email: 'test@test.com', username: 'humanwater'}}
      onLogin={onLogin}
      imgPath={"@stories/assets/vercel.svg"}
      onLogout={onLogout} 
      onCreateAccount={onCreateAccount} 
   /> */}
    <Component 
            {...pageProps} 
            screenMode = {screenMode}
          />
    </>
  ) 
        
}
export default MyApp
