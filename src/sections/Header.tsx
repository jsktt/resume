import { profile } from '../content'

function Header() {
  return (
    <header className="header">
      <h1 className="name">{profile.name}</h1>
      <p className="title">{profile.title}</p>
      <p className="contact">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span className="separator">·</span>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span className="separator">·</span>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </p>
    </header>
  )
}

export default Header
