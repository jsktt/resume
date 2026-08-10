import { education } from '../content'

function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>

      {education.map((school) => (
        <article key={school.school} className="entry">
          <div className="entry-head">
            <h3 className="entry-title">{school.school}</h3>
            <span className="entry-period">{school.period}</span>
          </div>
          <p className="entry-description">{school.degree}</p>
          <p className="entry-description">{school.detail}</p>
        </article>
      ))}
    </section>
  )
}

export default Education
