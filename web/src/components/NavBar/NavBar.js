import { Link, routes } from '@redwoodjs/router'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={routes.home()}>Generate QR Code</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
