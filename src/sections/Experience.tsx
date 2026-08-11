import { experience } from '../content'
import { useTagFocus } from '../useTagFocus'

function ExperienceEntry({
  job,
  first,
}: {
  job: (typeof experience)[number]
  first: boolean
}) {
  const { dimmed, tagProps } = useTagFocus()

  const bullets = job.bullets ?? []
  const tags = job.tags ?? []

  return (
    <article
      className={`entry reveal${bullets.length ? '' : ' entry-compact'}${
        first ? ' entry-first' : ''
      }`}
    >
      <div className="entry-period">{job.period}</div>
      <h3 className="entry-title entry-title-sm">{job.role}</h3>
      <div className="entry-company">{job.company}</div>
      <p className="entry-description">{job.description}</p>

      {bullets.length > 0 && (
        <ul className="bullet-list">
          {bullets.map((bullet, i) => (
            <li key={bullet} className={`bullet${dimmed(i) ? ' is-dimmed' : ''}`}>
              <p>{bullet}</p>
            </li>
          ))}
        </ul>
      )}

      {tags.length > 0 && (
        <div className="tag-row">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`tag${tag.bullets ? ' tag-interactive' : ''}`}
              {...tagProps(tag)}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

function Experience() {
  return (
    <section id="experience">
      <div className="section-label reveal">
        <h2>Experience</h2>
      </div>

      {experience.map((job, i) => (
        <ExperienceEntry key={job.company + job.role} job={job} first={i === 0} />
      ))}
    </section>
  )
}

export default Experience
