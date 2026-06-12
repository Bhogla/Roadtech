import { useId, useState } from 'react'
import { Plus } from './icons'

export type AccordionItem = {
  q: string
  a: string[]
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const base = useId()

  return (
    <div className="divide-y divide-warm-line border-y border-warm-line">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <h3>
              <button
                id={`${base}-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${base}-region-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-asphalt">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-xl font-semibold uppercase leading-tight text-ink sm:text-2xl">
                    {item.q}
                  </span>
                </span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center border border-warm-line text-ink transition-[transform,background-color,color] duration-300 ease-out group-hover:border-ink/40 ${
                    isOpen ? 'rotate-45 bg-asphalt text-white' : ''
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              id={`${base}-region-${i}`}
              role="region"
              aria-labelledby={`${base}-btn-${i}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="max-w-prose space-y-2 pb-6 pl-8 text-warm-mute">
                  {item.a.map((line, j) => (
                    <p key={j} className="leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
