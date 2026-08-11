import { profile } from '../content'

function Header() {
  return (
    <header className="header">
      <div className="kicker">{profile.kicker}</div>
      <h1 className="name">
        {profile.name}
        <span className="name-dot">.</span>
      </h1>
      <div className="header-foot">
        <p className="title">
          {profile.title}
          <span className="title-scope"> — {profile.scope}</span>
        </p>
        <p className="contact">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </header>
  )
}

export default Header
