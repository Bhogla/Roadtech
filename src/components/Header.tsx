import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { contact, nav } from '../data/content'
import { Logo } from './Logo'
import { Close, Menu, Phone, WhatsApp } from './icons'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 font-display text-base font-semibold uppercase tracking-wide transition-colors duration-200 ease-out after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-asphalt after:transition-all after:duration-300 after:ease-out ${
      isActive
        ? 'text-warm after:w-full'
        : 'text-aggregate hover:text-warm after:w-0 hover:after:w-full'
    }`

  return (
    <header
      className={`sticky top-0 z-header border-b transition-colors duration-300 ease-out ${
        scrolled
          ? 'border-ink-line bg-ink/90 backdrop-blur-md'
          : 'border-transparent bg-ink'
      }`}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />

        {/* desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${contact.whatsappHref}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="hidden h-10 w-10 place-items-center border border-ink-line text-aggregate transition-colors duration-200 ease-out hover:border-certgreen/60 hover:text-certgreen sm:grid"
          >
            <WhatsApp className="h-5 w-5" />
          </a>
          <a
            href={`tel:${contact.phoneHref}`}
            className="hidden items-center gap-2 bg-asphalt px-4 py-2.5 font-display text-base font-semibold uppercase tracking-wide text-white transition-colors duration-200 ease-out hover:bg-asphalt-deep sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden md:inline">{contact.phoneDisplay}</span>
            <span className="md:hidden">Call</span>
          </a>

          {/* mobile menu toggle */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center border border-ink-line text-warm lg:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 top-[4.5rem] z-sticky lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          aria-label="Mobile"
          className={`absolute inset-x-0 top-0 origin-top border-b border-ink-line bg-charcoal transition-[transform,opacity] duration-300 ease-out ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
          }`}
        >
          <ul className="shell flex flex-col py-2">
            {nav.map((item, i) => (
              <li key={item.to} className={i > 0 ? 'border-t border-ink-line' : ''}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-4 font-display text-2xl font-semibold uppercase tracking-wide transition-colors ${
                      isActive ? 'text-asphalt' : 'text-warm'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-aggregate">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="shell flex flex-col gap-3 pb-6 pt-2">
            <a
              href={`tel:${contact.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 bg-asphalt px-4 py-3 font-display text-lg font-semibold uppercase tracking-wide text-white"
            >
              <Phone className="h-4 w-4" /> {contact.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${contact.whatsappHref}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-certgreen/60 px-4 py-3 font-display text-lg font-semibold uppercase tracking-wide text-certgreen"
            >
              <WhatsApp className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
