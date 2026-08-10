import { projects } from '../content'

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      {projects.map((project) => (
        <article key={project.name} className="entry">
          <div className="entry-head">
            <h3 className="entry-title">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <span className="entry-period">{project.period}</span>
          </div>
          <p className="entry-description">{project.description}</p>
          <ul className="bullet-list">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="bullet">
                {bullet}
              </li>
            ))}
          </ul>
          <p className="entry-tech">{project.tech}</p>
        </article>
      ))}
    </section>
  )
}

export default Projects
