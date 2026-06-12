import { useId, useRef, useState, type ReactNode } from 'react'

export type TabDef = {
  id: string
  label: string
  /** optional mono code shown before the label */
  code?: string
  content: ReactNode
}

/**
 * Accessible tabs (WAI-ARIA tabs pattern): roving tabindex, arrow-key nav,
 * Home/End support, visible focus. `tone` controls colours for warm vs dark.
 */
export function Tabs({
  tabs,
  tone = 'warm',
  idBase,
}: {
  tabs: TabDef[]
  tone?: 'warm' | 'dark'
  idBase?: string
}) {
  const autoId = useId()
  const base = idBase ?? autoId
  const [active, setActive] = useState(0)
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([])

  const isWarm = tone === 'warm'
  const listBorder = isWarm ? 'border-warm-line' : 'border-ink-line'

  const focusTab = (i: number) => {
    const next = (i + tabs.length) % tabs.length
    setActive(next)
    btnRefs.current[next]?.focus()
  }

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        focusTab(i + 1)
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        focusTab(i - 1)
        break
      case 'Home':
        e.preventDefault()
        focusTab(0)
        break
      case 'End':
        e.preventDefault()
        focusTab(tabs.length - 1)
        break
    }
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Section tabs"
        className={`flex flex-wrap gap-1 border-b ${listBorder}`}
      >
        {tabs.map((tab, i) => {
          const selected = i === active
          return (
            <button
              key={tab.id}
              ref={(el) => (btnRefs.current[i] = el)}
              role="tab"
              id={`${base}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${base}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`group relative -mb-px flex items-center gap-2 border-b-2 px-3 py-3 font-display text-lg font-semibold uppercase tracking-wide transition-colors duration-200 ease-out sm:px-5 sm:text-xl ${
                selected
                  ? 'border-asphalt ' + (isWarm ? 'text-ink' : 'text-warm')
                  : 'border-transparent ' +
                    (isWarm
                      ? 'text-warm-mute hover:text-ink'
                      : 'text-aggregate hover:text-warm')
              }`}
            >
              {tab.code && (
                <span className="font-mono text-[0.65rem] font-medium tracking-chip text-asphalt">
                  {tab.code}
                </span>
              )}
              {tab.label}
            </button>
          )
        })}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${base}-panel-${tab.id}`}
          aria-labelledby={`${base}-tab-${tab.id}`}
          hidden={i !== active}
          tabIndex={0}
          className="pt-8 focus-visible:outline-none sm:pt-10"
        >
          {i === active && tab.content}
        </div>
      ))}
    </div>
  )
}
