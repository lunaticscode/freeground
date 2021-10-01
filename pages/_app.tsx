import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScreenSwitch from '../src/helper/ScreenSwitch';
import { useState } from 'react';
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
    <Component 
            {...pageProps} 
            screenMode = {screenMode}
          />
    </>
  ) 
        
}
export default MyApp
