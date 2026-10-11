import { Link } from 'react-router-dom'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Logo from './Logo'
import { CONTACT, NAV_ITEMS, WA_GENERAL } from '../lib/site'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light size={46} />
          <p>
            A peaceful homestay in Nayarambalam, Vypin Island – comfortable accommodation, lush green surroundings and
            warm Kerala hospitality.
          </p>
        </div>

        <nav aria-label="Footer" className="footer__nav">
          <h2>Explore</h2>
          {NAV_ITEMS.map((i) =>
            i.to ? (
              <Link key={i.label} to={i.to}>
                {i.label}
              </Link>
            ) : (
              <button key={i.label} type="button" aria-disabled="true" title="Coming soon">
                {i.label}
              </button>
            ),
          )}
        </nav>

        <address className="footer__contact">
          <h2>Get in touch</h2>
          <p>
            <Phone size={16} aria-hidden="true" />
            {CONTACT.phones.map((p, i) => (
              <span key={p.href}>
                {i > 0 && ' · '}
                <a href={p.href}>{p.label}</a>
              </span>
            ))}
          </p>
          <p>
            <Mail size={16} aria-hidden="true" />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
          <p>
            <MapPin size={16} aria-hidden="true" />
            <span>{CONTACT.address}</span>
          </p>
          <div className="footer__links">
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={15} aria-hidden="true" /> WhatsApp enquiry
            </a>
            <a href={CONTACT.maps} target="_blank" rel="noopener noreferrer">
              <MapPin size={15} aria-hidden="true" /> Get directions
            </a>
          </div>
        </address>
      </div>
      <div className="container footer__bar">
        <p>© {YEAR} Maliyakal Homestay. All rights reserved.</p>
      </div>
    </footer>
  )
}
