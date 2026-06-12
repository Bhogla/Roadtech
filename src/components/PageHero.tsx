import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { Chip, FigureLabel } from './ui'

type ChipDef = { label: string; kind?: 'default' | 'accent' | 'cert' }

export function PageHero({
  figure,
  title,
  intro,
  image,
  alt,
  chips,
}: {
  figure: string
  title: ReactNode
  intro?: ReactNode
  image?: string
  alt?: string
  chips?: ChipDef[]
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink-line bg-ink">
      {image && (
        <>
          <img
            src={image}
            alt={alt ?? ''}
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 -z-10 bg-hero-veil" />
        </>
      )}
      <div className="shell py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <Reveal>
            <FigureLabel>{figure}</FigureLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-display-lg font-bold uppercase text-warm">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={150}>
              <p className="mt-5 max-w-prose text-lg leading-relaxed text-warm/80 sm:text-xl">
                {intro}
              </p>
            </Reveal>
          )}
          {chips && chips.length > 0 && (
            <Reveal delay={210}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {chips.map((c) => (
                  <Chip key={c.label} kind={c.kind} className="text-warm/90">
                    {c.label}
                  </Chip>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
