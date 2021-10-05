import type { NextPage } from 'next'
//import { Header } from '@stories/Header';


interface IndexPageProps {
  screenMode: string;
}

const Home: NextPage<IndexPageProps> = ({ children, screenMode }) => {
  const onLogin = () => {

  }
  const onLogout= () => {
    
  }
  const onCreateAccount = () => {

  }
  return (
   <>
   {/* <Header
      title={"Freenground"}
      titleColor={"black"}
      user={{email: 'test@test.com', username: 'humanwater'}}
      onLogin={onLogin}
      imgPath={"@stories/assets/vercel.svg"}
      onLogout={onLogout} 
      onCreateAccount={onCreateAccount} 
   /> */}
    {screenMode}
   </>
  )
}

export default Home
