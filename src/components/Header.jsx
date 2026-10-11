import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import Logo from './Logo'
import { CONTACT, NAV_ITEMS } from '../lib/site'
import { EASE } from '../lib/motion'

function NavItem({ item, onNavigate }) {
  const { pathname } = useLocation()

  if (item.to) {
    const handleClick = (e) => {
      /* Already on this page: Home scrolls to the top instead of doing nothing. */
      if (item.to === pathname) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
      onNavigate?.()
    }
    return (
      <NavLink
        to={item.to}
        end
        className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
        onClick={handleClick}
      >
        {item.label}
      </NavLink>
    )
  }
  return (
    <button type="button" className="nav__link is-soon" aria-disabled="true" title="Coming soon">
      {item.label}
    </button>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`header ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="header__logo" aria-label="Maliyakal Homestay – home">
          <Logo light={!(scrolled || open)} size={42} />
        </Link>

        <nav className="nav" aria-label="Primary">
          {NAV_ITEMS.map((i) => (
            <NavItem key={i.label} item={i} />
          ))}
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <nav aria-label="Mobile">
              {NAV_ITEMS.map((i) => (
                <NavItem key={i.label} item={i} onNavigate={() => setOpen(false)} />
              ))}
            </nav>
            <a className="btn btn--primary" href={CONTACT.phones[0].href}>
              <Phone size={17} aria-hidden="true" /> Call us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
