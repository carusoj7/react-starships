import { Link } from "react-router-dom";

import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <Link to="/starships" className='nav-link'>STAR WARS STARSHIPS</Link>
    </nav>
  )
}

export default NavBar