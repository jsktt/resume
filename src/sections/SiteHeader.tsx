import { Link, NavLink } from 'react-router-dom'
import { profile } from '../content'

function SiteHeader() {
  return (
    <div className="site-header">
      <nav className="site-header-inner">
        <Link to="/" className="site-mark">
          {profile.name}
          <span className="name-dot">.</span>
        </Link>
        <div className="site-nav">
          <NavLink to="/" end>
            Resume
          </NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default SiteHeader
