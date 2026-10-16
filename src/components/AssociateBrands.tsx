import type { CSSProperties } from 'react'
import { Reveal } from './Reveal'

type Brand = { src: string; alt: string; scale?: number }

/**
 * Associate brands — logos of partner contractors, manufacturers and
 * government bodies. Files live in /public/Logos (capital L). Edit this
 * array to add or remove a brand; everything else follows automatically.
 *
 * `scale` is an optional per-logo optical correction (default 1): the base
 * sizing rule (bounded box, object-contain, never upscaled past its own
 * source size) already matches every logo's height, but very wide or very
 * thin/small marks can still read as heavier or lighter than their
 * neighbours — nudge those with `scale` rather than touching the shared
 * sizing classes.
 */
const brands: Brand[] = [
  { src: '/Logos/13.webp', alt: 'eSPAN', scale: 1.15 },
  { src: '/Logos/4.webp', alt: 'H.G. Infra Engineering Ltd (HGIEL)', scale: 1.12 },
  { src: '/Logos/7.webp', alt: 'ALSEC', scale: 0.88 },
  { src: '/Logos/10.webp', alt: 'Slurrytech', scale: 1.1 },
  { src: '/Logos/11.webp', alt: 'RG Buildwell Engineers Ltd', scale: 1.12 },
  { src: '/Logos/8.webp', alt: 'DBL', scale: 0.92 },
  { src: '/Logos/12.webp', alt: 'Kaluwala', scale: 1.05 },
  { src: '/Logos/9.webp', alt: 'HINCOL', scale: 1.08 },
  { src: '/Logos/1.webp', alt: 'Himachal Pradesh PWD', scale: 1.05 },
  { src: '/Logos/3.webp', alt: 'KC' },
  { src: '/Logos/2.webp', alt: 'RR Builders' },
  { src: '/Logos/14.webp', alt: 'RCC Developers Limited' },
  { src: '/Logos/15.webp', alt: 'Afcons Infrastructure', scale: 1.15 },
  { src: '/Logos/16.webp', alt: 'Celgall' },
  { src: '/Logos/17.webp', alt: 'PWD Haryana — Buildings & Roads', scale: 1.1 },
  { src: '/Logos/18.webp', alt: 'APCO Infratech', scale: 0.88 },
]

function BrandChip({ brand }: { brand: Brand }) {
  const scale = brand.scale ?? 1
  return (
    <img
      src={brand.src}
      alt={brand.alt}
      loading="lazy"
      style={{ '--logo-scale': scale } as CSSProperties}
      className="h-auto max-h-12 w-auto max-w-[140px] origin-center scale-[var(--logo-scale)] object-contain transition-transform duration-300 ease-out hover:scale-[calc(var(--logo-scale)*1.05)] sm:max-h-14 sm:max-w-[160px]"
    />
  )
}

export function AssociateBrands() {
  // Render the list twice so the -50% keyframe loops seamlessly. The second
  // pass is decorative (aria-hidden) and is hidden under reduced motion.
  const loop = [
    ...brands.map((b) => ({ b, clone: false })),
    ...brands.map((b) => ({ b, clone: true })),
  ]

  return (
    <section aria-label="Associate brands" className="bg-ink py-20 sm:py-28">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-asphalt" />
            <span className="font-display text-sm font-semibold uppercase tracking-label text-asphalt">
              Trusted Partners
            </span>
            <span aria-hidden className="h-px w-8 bg-asphalt" />
          </div>

          {/* Heading */}
          <h2 className="mt-5 font-display font-bold uppercase leading-[0.98] text-warm text-[clamp(2rem,5vw,4rem)]">
            Powering India&apos;s Road Infrastructure
          </h2>

          {/* Subheading */}
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-aggregate sm:text-lg">
            Trusted by contractors, manufacturers, and government bodies across the country.
          </p>
        </Reveal>

        {/* Marquee panel */}
        <Reveal delay={120} className="mt-12">
          <div className="rounded-2xl bg-white py-8 shadow-lg shadow-black/20 sm:py-10">
            <div className="brand-marquee">
              <ul className="brand-marquee__track items-center gap-12 sm:gap-16">
                {loop.map(({ b, clone }, i) => (
                  <li
                    key={`${b.src}-${i}`}
                    aria-hidden={clone || undefined}
                    data-marquee-clone={clone || undefined}
                    // The track is one flat flex list carrying both passes, so `gap`
                    // (N-1 gaps for N items) already lands evenly everywhere, including
                    // the pass1→pass2 join. But that leaves the track's own total width
                    // (2 x one-pass-width + (N-1) x gap) a half-gap short of double a
                    // single pass — the -50% keyframe assumes it's exactly double. Pad
                    // the total by one more gap, trailing the very last (cloned) item,
                    // so it inflates the total without touching the pass1→pass2 distance
                    // the animation actually travels.
                    className={`flex shrink-0 items-center ${
                      clone && i === loop.length - 1 ? 'mr-12 sm:mr-16' : ''
                    }`}
                  >
                    <BrandChip brand={b} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Stat line */}
        <Reveal delay={200}>
          <p className="mt-6 text-center font-mono text-xs uppercase tracking-chip text-aggregate">
            Trusted partner organisations across highways
          </p>
        </Reveal>
      </div>
    </section>
  )
}
