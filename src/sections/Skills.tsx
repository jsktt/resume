import { skills } from '../content'

function Skills() {
  return (
    <section id="skills">
      <div className="section-label reveal">
        <h2>Skills</h2>
      </div>

      <div className="skill-grid reveal">
        {skills.map((group) => (
          <div key={group.category}>
            <div className="skill-category">{group.category}</div>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
