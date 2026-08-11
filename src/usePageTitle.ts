import { useEffect } from 'react'
import { profile } from './content'

/** Sets the tab title for a route, and restores the resume title on leaving. */
export function usePageTitle(title?: string) {
  useEffect(() => {
    const base = `${profile.name} — Resume`
    document.title = title ? `${title} — ${profile.name}` : base
    return () => {
      document.title = base
    }
  }, [title])
}
