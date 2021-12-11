import { navbarHeight } from '../components/Navbar'

const Home = () => {
  return (
    <div className={`flex flex-col items-center justify-center h-full py-2 mt-${navbarHeight}`}>
      Import some data from GraphCMS
    </div>
  )
}

export default Home
