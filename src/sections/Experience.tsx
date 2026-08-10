import { experience } from '../content'

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>

      {experience.map((job) => (
        <article key={job.company + job.role} className="entry">
          <div className="entry-head">
            <h3 className="entry-title">
              {job.role}, {job.company}
            </h3>
            <span className="entry-period">{job.period}</span>
          </div>
          <p className="entry-description">{job.description}</p>
        </article>
      ))}
    </section>
  )
}

export default Experience
