import 'tailwindcss/tailwind.css'

import Navbar, { navbarHeight } from '../components/Navbar'
import Footer from '../components/Footer'

function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: navbarHeight }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default App
