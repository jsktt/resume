import { education } from '../content'

function Education() {
  return (
    <section id="education">
      <div className="section-label reveal">
        <h2>Education</h2>
      </div>

      {education.map((school, i) => (
        <article
          key={school.school}
          className={`entry entry-compact reveal${i === 0 ? ' entry-first' : ''}`}
        >
          <div className="entry-period">{school.period}</div>
          <h3 className="entry-title entry-title-sm">{school.school}</h3>
          <p className="entry-note">
            {school.degree} <span>· {school.detail}</span>
          </p>
        </article>
      ))}
    </section>
  )
}

export default Education
