import type { NextPage } from 'next'
interface IndexPageProps {
  screenMode: string;
}
const Home: NextPage<IndexPageProps> = ({ children, screenMode }) => {
  return (
   <>
    {screenMode}
   </>
  )
}

export default Home
