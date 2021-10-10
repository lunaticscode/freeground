import type { NextPage } from 'next'


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
    
    {screenMode}
   </>
  )
}

export default Home
