import { Link } from 'react-router-dom'
import { projects } from '../content'
import { useReveal } from '../useReveal'
import { usePageTitle } from '../usePageTitle'

function ProjectIndex() {
  const ref = useReveal<HTMLElement>()
  usePageTitle('Projects')

  return (
    <main className="container" ref={ref}>
      <div className="section-label section-label-first reveal">
        <h2>Projects</h2>
      </div>

      {projects.map((project, i) => (
        <article
          key={project.slug}
          className={`entry entry-compact reveal${i === 0 ? ' entry-first' : ''}`}
        >
          <div className="entry-period">{project.period}</div>
          <h3 className="entry-title entry-title-sm">
            <Link to={`/projects/${project.slug}`}>{project.name}</Link>
          </h3>
          <p className="entry-description">{project.description}</p>

          <div className="tag-row">
            {project.tags.map((tag) => (
              <span key={tag.label} className="tag">
                {tag.label}
              </span>
            ))}
          </div>
        </article>
      ))}
    </main>
  )
}

export default ProjectIndex
