import { Link } from 'react-router-dom'
import { about } from '../data/content'
import { Accordion } from '../components/Accordion'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Chip, DashRule, FigureLabel, SectionHeading } from '../components/ui'
import { ArrowRight, Handshake, ShieldCheck, Users } from '../components/icons'

const pillars = [
  { icon: ShieldCheck, title: 'Integrity & Safety', body: 'Strict protocols and stringent quality control at every stage.' },
  { icon: Handshake, title: 'Collaboration', body: 'Working closely with promoters, customers and stakeholders.' },
  { icon: Users, title: 'Customer-Centricity', body: 'Technical services that maximise the life of every laid metre.' },
]

export function About() {
  return (
    <>
      <PageHero
        figure={about.hero.figure}
        title={about.hero.heading}
        image={about.hero.image}
        alt={about.hero.alt}
        chips={about.certifications}
      />

      {/* Company story */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading figure="FIG. 02 :: COMPANY STORY" title="Engineered to set the standard" />
              <p className="mt-6 max-w-prose text-warm-mute">
                From incorporation in {''}
                <span className="font-mono text-sm text-ink">Jan 2020</span>, Roadtech has
                focused on one thing: quality road products backed by the technical service to
                make them perform.
              </p>
              <DashRule className="mt-8 max-w-[12rem]" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="max-w-prose space-y-5 text-lg leading-relaxed text-warm-mute">
              {about.story.map((p, i) => (
                <p key={i} className={i === 0 ? 'text-ink' : ''}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Standards & pillars (dark) */}
      <section className="bg-ink py-20 sm:py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              figure="FIG. 03 :: STANDARDS & RECOGNITION"
              title="Recognised, and held to it"
              tone="dark"
              intro="We are an active member of the IIA (Indian Industries Association), and hold ISO and MSME recognition."
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {about.certifications.map((c) => (
                <Chip key={c.label} kind={c.kind} className="text-warm/90">
                  {c.label}
                </Chip>
              ))}
            </div>
            <p className="mt-4 font-mono text-xs leading-relaxed text-aggregate">
              [ NOTE ] Certificate numbers and issuing details available on request.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-px overflow-hidden border border-ink-line bg-ink-line sm:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal as="li" key={p.title} delay={i * 90} className="bg-charcoal">
                  <div className="flex h-full flex-col gap-4 p-7 lg:p-8">
                    <Icon className="h-9 w-9 text-asphalt" />
                    <h3 className="font-display text-2xl font-semibold uppercase text-warm">
                      {p.title}
                    </h3>
                    <p className="text-[0.95rem] leading-relaxed text-aggregate">{p.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <FigureLabel>FIG. 04 :: GENERAL GUIDANCE</FigureLabel>
              <h2 className="mt-4 font-display text-display-md font-semibold uppercase text-ink">
                {about.faq.heading}
              </h2>
              <p className="mt-5 max-w-prose text-warm-mute">{about.faq.intro}</p>
              <Link
                to="/contact"
                className="link-action mt-7 inline-flex text-ink hover:text-asphalt"
              >
                Ask the technical team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Accordion items={about.faq.items} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
