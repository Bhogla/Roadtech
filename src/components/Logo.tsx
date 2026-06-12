import { useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Drop the official Roadtech logo file in at this path to use it everywhere.
 * Save it as `public/logo.svg` (or change to '/logo.png' if you export a PNG).
 * Use a transparent-background, light/white version so it reads on the dark header.
 * Until the file exists, the header falls back to the recreated SVG mark below.
 */
const LOGO_SRC = '/logo.png'

/**
 * Roadtech brand mark — the orange "swoosh" (two tapered speed-streaks reading as
 * a road rushing forward) inside the faint shield frame, recreated as scalable SVG
 * so it stays crisp and adapts to dark/light backgrounds. The shield uses
 * currentColor; the streaks use the brand orange. Pairs with the wordmark + the
 * registered tagline "We Make The Way".
 */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="Roadtech Asphalt Technologies"
    >
      {/* faint shield frame */}
      <path
        d="M27 30 H93 V63 L60 96 L27 63 Z"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* swoosh — two tapered streaks */}
      <path d="M38 95 L53 95 L96 17 L90.5 21.5 Z" fill="#E85D2D" />
      <path d="M27.5 89 L40 89 L82 27 L77.5 31 Z" fill="#E85D2D" />
    </svg>
  )
}

export function Logo({ onClick }: { onClick?: () => void }) {
  // Use the real logo file when present; fall back to the recreated mark + wordmark.
  const [useFallback, setUseFallback] = useState(false)

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Roadtech Asphalt Technologies — home"
      className="group flex items-center gap-3"
    >
      {useFallback ? (
        <>
          <LogoMark className="h-11 w-11 shrink-0 text-warm" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold uppercase tracking-tight text-warm">
              Roadtech
            </span>
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-aggregate">
              Asphalt Technologies
            </span>
          </span>
        </>
      ) : (
        <img
          src={LOGO_SRC}
          alt="Roadtech Asphalt Technologies — We Make The Way"
          className="h-10 w-auto object-contain sm:h-12"
          onError={() => setUseFallback(true)}
        />
      )}
    </Link>
  )
}
