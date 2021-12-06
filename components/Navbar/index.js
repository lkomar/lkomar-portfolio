import Nav from './Nav'
import NavLink from './NavLink'

const Navbar = () => (
  <div className="border-b-2 border-gray-200">
    <Nav>
      <NavLink href="/" isActive>
        Home
      </NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </Nav>
  </div>
)

export default Navbar
