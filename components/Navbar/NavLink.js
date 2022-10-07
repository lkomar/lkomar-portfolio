import { useRouter } from 'next/router'
import { compareNestedPaths } from '../../utils/routes'

const NavLink = ({ href, children }) => {
  const router = useRouter()

  const isActive = href === router.asPath || compareNestedPaths(href, router.asPath)

  const handleClick = event => {
    event.preventDefault()
    router.push(href)
  }

  return (
    <li>
      <a
        href={href}
        className={`block px-4 py-2 rounded-md ${isActive ? 'bg-blue-100 text-blue-700' : ''}`}
        onClick={handleClick}
      >
        {children}
      </a>
    </li>
  )
}

export default NavLink
