import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

type RevealProps = {
  children: ReactNode
  /** stagger delay in ms */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article'
}

/**
 * Scroll-reveal wrapper. Content is visible by default (no JS / reduced motion /
 * headless render all show it). When motion is allowed we "arm" it (hide) before
 * paint, then transition it in once it scrolls into view.
 */
export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [armed, setArmed] = useState(false)

  useLayoutEffect(() => {
    if (!prefersReducedMotion()) setArmed(true)
  }, [])

  useEffect(() => {
    if (!armed) return
    const el = ref.current
    if (!el) return

    let done = false
    const reveal = () => {
      if (done) return
      done = true
      el.classList.add('reveal-in')
    }

    if (!('IntersectionObserver' in window)) {
      reveal()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal()
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)

    // Safety net: content must never stay hidden if the observer never fires
    // (background tab, throttled/headless renderer, etc.).
    const fallback = window.setTimeout(reveal, 1400)

    return () => {
      io.disconnect()
      clearTimeout(fallback)
    }
  }, [armed])

  const Tag = as
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${armed ? 'reveal-armed' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
