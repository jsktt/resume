import { skills } from '../content'

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      {skills.map((group) => (
        <article key={group.category} className="entry">
          <div className="entry-head">
            <h3 className="entry-title">{group.category}</h3>
          </div>
          <ul className="skill-list">
            {group.items.map((item) => (
              <li key={item} className="skill">
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}

export default Skills
