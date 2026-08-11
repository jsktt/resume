import { useState } from 'react'
import type { Tag } from './content'

/**
 * Tag hover isolation for one entry. Hovering a tag that declares `bullets`
 * keeps those bullets at full opacity and dims the rest; tags without
 * `bullets` are inert and get no handlers.
 */
export function useTagFocus() {
  // null = nothing hovered; otherwise the bullet indexes to keep at full opacity.
  const [focus, setFocus] = useState<number[] | null>(null)

  const dimmed = (i: number) => focus !== null && !focus.includes(i)

  const tagProps = (tag: Tag) =>
    tag.bullets
      ? {
          onMouseEnter: () => setFocus(tag.bullets!),
          onMouseLeave: () => setFocus(null),
        }
      : {}

  return { dimmed, tagProps }
}
