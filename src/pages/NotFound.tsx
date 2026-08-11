import { Link } from 'react-router-dom'
import { usePageTitle } from '../usePageTitle'

function NotFound() {
  usePageTitle('Not found')

  return (
    <main className="container">
      <div className="project-page">
        <h1 className="project-title">404</h1>
        <p className="project-headline">찾으시는 페이지가 없습니다.</p>
        <p className="entry-note">
          <Link to="/">Resume</Link> 또는 <Link to="/projects">Projects</Link>로 이동하세요.
        </p>
      </div>
    </main>
  )
}

export default NotFound
