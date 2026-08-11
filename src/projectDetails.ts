// Shape of the long-form project write-ups rendered at /projects/<slug>.
// The content itself is NOT in this repo — it comes from the backend (API or
// Supabase). `fetchProjectDetail` below is the only place that has to change
// once that server exists; the page already handles loading / missing / error.
//
// headline: one line under the title — what the project is.
// role: 팀 규모와 본인이 맡은 부분.
// links: GitHub, 배포 URL, 발표자료 등.
// sections: heading + paragraphs(body) + optional bullets, in reading order.
// stack: chips at the bottom. Omit and the project's own tags are shown instead.
import type { Tag } from './content'

export type DetailSection = {
  heading: string
  body?: string[]
  bullets?: string[]
}

export type ProjectDetail = {
  headline: string
  role: string
  links?: { label: string; href: string }[]
  sections: DetailSection[]
  stack?: Tag[]
}

/**
 * Resolves the write-up for one project, or null when the backend has nothing
 * for that slug yet (the page then shows "준비 중"). Rejecting is fine too —
 * the caller reports a failed load separately from an empty one.
 *
 * TODO: replace the stub with the real source, e.g.
 *   const res = await fetch(`${import.meta.env.VITE_API_URL}/projects/${slug}`)
 *   if (res.status === 404) return null
 *   if (!res.ok) throw new Error(`project detail ${slug}: ${res.status}`)
 *   return (await res.json()) as ProjectDetail
 * or, with Supabase:
 *   const { data, error } = await supabase
 *     .from('project_details').select('*').eq('slug', slug).maybeSingle()
 *   if (error) throw error
 *   return data as ProjectDetail | null
 */
export async function fetchProjectDetail(slug: string): Promise<ProjectDetail | null> {
  void slug
  return null
}
