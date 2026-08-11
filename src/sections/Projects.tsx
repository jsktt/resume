import { useState } from 'react'
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

  return (
    <article className={`entry reveal${first ? ' entry-first' : ''}`}>
      <div className="entry-period">{project.period}</div>
      <h3 className="entry-title">
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer">
            {project.name}
          </a>
        ) : (
          project.name
        )}
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
