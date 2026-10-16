import { Link } from 'react-router-dom'
import logoMark from '../assets/roadtech-logo.webp'

/**
 * Roadtech header lockup: the standalone pentagon/flash mark (src/assets/roadtech-logo.webp,
 * transparent, white + orange — built for dark surfaces only) beside the company name as
 * LIVE TEXT set in the hero display face (Barlow Condensed / `font-display`, bold) so it
 * reads as the wordmark, with the registered tagline "We Make The Way" beneath. The old
 * combined logo+text PNG is no longer used in the navbar.
 *
 * The mark is sized by height only (width auto, native 427x360 ratio) so it's never
 * squashed into a square box — it's tightly trimmed with no built-in padding, so its
 * rendered height is meant to roughly match the wordmark block's own height at each size.
 *
 * Sizing is token-driven so the same component serves the tall desktop lockup, its
 * shrunk-on-scroll state, and the compact mobile lockup. Size classes transition so the
 * scroll shrink animates smoothly (disabled under prefers-reduced-motion).
 */
type LogoSize = 'lg' | 'md' | 'sm'

const MARK: Record<LogoSize, string> = {
  lg: 'h-[4.5rem] xl:h-20', // desktop top state: 72px → 80px, level with the wordmark block
  md: 'h-12', // scrolled state: 48px, matching the shrunk wordmark
  sm: 'h-11', // mobile: 44px, next to the compact wordmark
}

const NAME: Record<LogoSize, string> = {
  // Single continuous fluid clamp from the lg breakpoint up (no xl step) — ~18px at
  // 1024px viewport → ~42px by ~1450px, then holds. Avoids the old two-stage
  // fixed→clamp jump at the xl breakpoint. Min trimmed further to free up room for
  // the wider (1.75rem) nav-link gap without the phone CTA overflowing at 1024px.
  lg: 'whitespace-nowrap text-[clamp(1.1rem,calc(5.85vw-2.64rem),2.65rem)] leading-[0.95]',
  md: 'whitespace-nowrap text-[1.35rem] leading-none', // ~22px
  sm: 'text-[1.4rem] leading-tight', // ~22px (was 18 — fills toward the menu button)
}

export function Logo({
  size = 'lg',
  showTagline = true,
  truncate = false,
  onClick,
  className = '',
}: {
  size?: LogoSize
  showTagline?: boolean
  truncate?: boolean
  onClick?: () => void
  className?: string
}) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Roadtech Asphalt Technologies — home"
      className={`group flex items-center gap-3 ${className}`}
    >
      <img
        src={logoMark}
        alt="Roadtech Asphalt Technologies logo"
        width={427}
        height={360}
        decoding="async"
        loading="eager"
        // Lowercase on purpose: React 18's typings/runtime don't recognise the
        // camelCase `fetchPriority` prop yet (that lands in React 19) and warn
        // about it, even though the attribute itself is valid and DOES reach
        // the DOM either way. The plain HTML attribute avoids the dev warning.
        {...{ fetchpriority: 'high' }}
        className={`w-auto shrink-0 object-contain transition-[height] duration-300 ease-out motion-reduce:transition-none ${MARK[size]}`}
      />
      <span className={`flex min-w-0 flex-col ${truncate ? 'overflow-hidden' : ''}`}>
        <span
          className={`font-display font-bold uppercase tracking-tight text-warm transition-[font-size] duration-300 ease-out motion-reduce:transition-none ${NAME[size]} ${
            truncate ? 'truncate' : ''
          }`}
        >
          Roadtech Asphalt Technologies Pvt Ltd
        </span>
        {showTagline && (
          <span className="mt-1 block text-right font-display text-xs font-medium uppercase tracking-[0.18em] text-aggregate">
            We Make The Way
          </span>
        )}
      </span>
    </Link>
  )
}
