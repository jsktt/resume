import Header from '../sections/Header'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Education from '../sections/Education'
import { useReveal } from '../useReveal'

function Resume() {
  const ref = useReveal<HTMLElement>()

  return (
    <main className="container" ref={ref}>
      <Header />
      <Projects />
      <Experience />
      <Education />
    </main>
  )
}

export default Resume
