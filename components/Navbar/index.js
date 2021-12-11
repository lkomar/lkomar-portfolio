import Head from 'next/head'

import Nav from './Nav'
import NavLink from './NavLink'

export const navbarHeight = '20'

const Navbar = () => (
  <>
    <Head>
      <title>Łukasz Komar | Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <nav
      className={`border-b-2 border-gray-200 w-full z-20 bg-gray-900 text-gray-300 flex items-center h-${navbarHeight}`} // fixed left-0 top-0 right-0
    >
      <Nav>
        <NavLink href="/" isActive>
          Home
        </NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Nav>
    </nav>
  </>
)

export default Navbar
