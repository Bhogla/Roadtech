import { contact, join } from '../data/content'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { ArrowRight, Mail } from '../components/icons'

export function Join() {
  return (
    <>
      <PageHero
        figure={join.figure}
        title={join.heading}
        intro={join.intro}
      />

      <section className="bg-warm py-16 sm:py-24">
        <div className="shell">
          <div className="grid gap-6 md:grid-cols-2">
            {join.sections.map((s, i) => (
              <Reveal key={s.code} delay={i * 100}>
                <div className="flex h-full flex-col border border-warm-line bg-white">
                  <div className="flex items-center justify-between border-b border-warm-line px-6 py-4">
                    <h2 className="font-display text-2xl font-semibold uppercase text-ink">
                      {s.title}
                    </h2>
                    <span className="font-mono text-xs tracking-chip text-aggregate">
                      {s.code}
                    </span>
                  </div>

                  {/* datasheet empty state */}
                  <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-16 text-center">
                    <div
                      aria-hidden
                      className="relative grid h-16 w-16 place-items-center border border-dashed border-warm-line"
                    >
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(135deg, #0E0E10 0 1px, transparent 1px 12px)',
                        }}
                      />
                      <span className="h-[3px] w-7 bg-asphalt" />
                    </div>
                    <p className="font-mono text-xs uppercase tracking-chip text-warm-mute">
                      [ {s.empty} ]
                    </p>
                    <p className="max-w-xs text-sm leading-relaxed text-warm-mute">{s.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* speculative applications */}
          <Reveal delay={120}>
            <div className="mt-6 flex flex-col items-start gap-6 border border-ink-line bg-ink p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="max-w-xl">
                <p className="font-mono text-xs uppercase tracking-label text-asphalt">
                  [ SPECULATIVE APPLICATIONS ]
                </p>
                <h2 className="mt-3 font-display text-display-md font-semibold uppercase text-warm">
                  Think you're a fit? Tell us anyway.
                </h2>
                <p className="mt-3 leading-relaxed text-aggregate">
                  We're always glad to hear from strong people in bitumen technology,
                  applications and procurement. Send your CV and a short note.
                </p>
              </div>
              <a
                href={`mailto:${contact.emailGeneral}?subject=Speculative%20application%20%E2%80%94%20Roadtech`}
                className="btn-primary shrink-0"
              >
                <Mail className="h-5 w-5" />
                Email Us
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
