import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../content'
import type { Tag } from '../content'

function ProjectEntry({
  project,
  first,
}: {
  project: (typeof projects)[number]
  first: boolean
}) {
  // null = nothing hovered; otherwise the bullet indexes to keep at full opacity.
  const [focus, setFocus] = useState<number[] | null>(null)

  const dimmed = (i: number) => focus !== null && !focus.includes(i)

  const hover = (tag: Tag) => (tag.bullets ? () => setFocus(tag.bullets!) : undefined)

  // The title goes to the write-up; the repo stays reachable next to the period.
  return (
    <article className={`entry reveal${first ? ' entry-first' : ''}`}>
      <div className="entry-period">
        {project.period}
        {project.link && (
          <a className="entry-repo" href={project.link} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        )}
      </div>
      <h3 className="entry-title">
        <Link to={`/projects/${project.slug}`}>{project.name}</Link>
      </h3>
      <p className="entry-description">{project.description}</p>

      <ul className="bullet-list">
        {project.bullets.map((bullet, i) => (
          <li key={bullet} className={`bullet${dimmed(i) ? ' is-dimmed' : ''}`}>
            <p>{bullet}</p>
          </li>
        ))}
      </ul>

      <div className="tag-row">
        {project.tags.map((tag) => (
          <span
            key={tag.label}
            className={`tag${tag.bullets ? ' tag-interactive' : ''}`}
            onMouseEnter={hover(tag)}
            onMouseLeave={tag.bullets ? () => setFocus(null) : undefined}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="section-label reveal">
        <h2>Projects</h2>
      </div>

      {projects.map((project, i) => (
        <ProjectEntry key={project.name} project={project} first={i === 0} />
      ))}
    </section>
  )
}

export default Projects
