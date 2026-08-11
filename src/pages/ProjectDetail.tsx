import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../content'
import { fetchProjectDetail } from '../projectDetails'
import type { ProjectDetail as Detail } from '../projectDetails'
import { useReveal } from '../useReveal'
import { usePageTitle } from '../usePageTitle'
import NotFound from './NotFound'

// Carries the slug it belongs to, so a result for the previous project reads as
// "still loading" rather than briefly showing under the new title.
type Load = { slug: string } & (
  | { status: 'ready'; detail: Detail | null }
  | { status: 'error' }
)

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  const ref = useReveal<HTMLElement>()
  // NotFound sets the same title, but this effect runs last and would win.
  usePageTitle(project ? project.name : 'Not found')

  const [loaded, setLoaded] = useState<Load | null>(null)

  useEffect(() => {
    if (!slug) return
    // The slug can change while a request is in flight; ignore the stale answer.
    let current = true

    fetchProjectDetail(slug)
      .then((detail) => current && setLoaded({ slug, status: 'ready', detail }))
      .catch(() => current && setLoaded({ slug, status: 'error' }))

    return () => {
      current = false
    }
  }, [slug])

  if (!project) return <NotFound />

  const load = loaded?.slug === slug ? loaded : null
  const detail = load?.status === 'ready' ? load.detail : null
  // Tags carry bullet indexes for the resume list, so nothing to isolate here.
  const stack = detail?.stack ?? project.tags

  return (
    <main className="container" ref={ref}>
      <div className="back-link reveal">
        <Link to="/projects">← Projects</Link>
      </div>

      <article className="project-page reveal">
        <div className="entry-period">{project.period}</div>
        <h1 className="project-title">{project.name}</h1>

        <p className="project-headline">{detail?.headline ?? project.description}</p>
        {detail && <p className="entry-note">{detail.role}</p>}

        {detail?.links && detail.links.length > 0 && (
          <p className="contact project-links">
            {detail.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label} ↗
              </a>
            ))}
          </p>
        )}

        {!load && <p className="entry-note">불러오는 중…</p>}

        {load?.status === 'error' && (
          <p className="entry-note">기록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</p>
        )}

        {load?.status === 'ready' && !detail && (
          <p className="entry-note">자세한 기록은 준비 중입니다.</p>
        )}

        {detail?.sections.map((section) => (
          <section key={section.heading} className="prose">
            <h2>{section.heading}</h2>
            {section.body?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="bullet-list">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="bullet">
                    <p>{bullet}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="tag-row">
          {stack.map((tag) => (
            <span key={tag.label} className="tag">
              {tag.label}
            </span>
          ))}
        </div>
      </article>
    </main>
  )
}

export default ProjectDetail
