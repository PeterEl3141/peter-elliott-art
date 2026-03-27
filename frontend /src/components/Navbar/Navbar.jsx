import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo"></div>

        <div className="nav-links">
          <NavLink to="/" end className="nav-link">
            HOME
          </NavLink>
          <NavLink to="/works" className="nav-link">
            WORKS
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  )
}