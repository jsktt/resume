import { useEffect, useRef } from 'react'

/**
 * Fade-up on enter. Visibility never depends on the observer firing: anything
 * that has scrolled into or past view is revealed by a short poll as well, so
 * jump-scrolls, anchor links and restored scroll positions can't leave blocks
 * stuck at opacity 0. Without IntersectionObserver everything renders visible.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const rootRef = useRef<T | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const nodes = Array.from(root.querySelectorAll<HTMLElement>('.reveal'))
    if (!nodes.length) return
    const reveal = (el: HTMLElement) => el.classList.remove('is-hidden')

    if (!('IntersectionObserver' in window)) {
      nodes.forEach(reveal)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          reveal(entry.target as HTMLElement)
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '200px 0px 0px 0px' },
    )

    nodes.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return
      el.classList.add('is-hidden')
      io.observe(el)
    })

    const poll = window.setInterval(() => {
      let hidden = 0
      nodes.forEach((el) => {
        if (!el.classList.contains('is-hidden')) return
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
          reveal(el)
          io.unobserve(el)
        } else {
          hidden += 1
        }
      })
      if (!hidden) window.clearInterval(poll)
    }, 200)

    return () => {
      window.clearInterval(poll)
      io.disconnect()
    }
  }, [])

  return rootRef
}
