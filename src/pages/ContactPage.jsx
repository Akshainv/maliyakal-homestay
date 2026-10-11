import { motion } from 'framer-motion'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import MosaicImage from '../components/MosaicImage'
import Seo from '../components/Seo'
import { CONTACT, WA_GENERAL } from '../lib/site'
import { fadeUp, inView, item, stagger } from '../lib/motion'

export default function ContactPage({ ready }) {
  return (
    <main id="main">
      <Seo
        path="/contact"
        title="Contact & Directions | Maliyakal Homestay, Nayarambalam"
        description="Call, WhatsApp or email Maliyakal Homestay, Maliyakal House, Near Punchepalam, Nayarambalam P.O., Ernakulam, Kerala 682509. Get directions on Google Maps."
        image="/imgg2.webp"
      />
      <PageHero
        ready={ready}
        title="Get in"
        accent="Touch"
        lead="We would be happy to hear from you. Call, message or write to us to enquire about your stay."
        img="/contact-banner.jpg"
        alt="A traditional Kerala homestay veranda with a cane chair and chai, overlooking the backwaters at sunset"
        position="center 55%"
      />

      <section className="section contact" aria-labelledby="contact-title">
        <div className="container contact__grid">
          <motion.div variants={stagger(0.1)} {...inView}>
            <motion.p className="eyebrow" variants={fadeUp}>
              Contact details
            </motion.p>
            <motion.h2 id="contact-title" className="h2" variants={fadeUp}>
              Reach <em>Maliyakal Homestay</em>
            </motion.h2>
            <motion.span className="rule" variants={fadeUp} aria-hidden="true" />

            <motion.ul className="contact__list" variants={stagger(0.1)}>
              <motion.li variants={item}>
                <span className="contact__icon">
                  <Phone size={20} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3>Phone</h3>
                  {CONTACT.phones.map((p) => (
                    <a key={p.href} href={p.href}>
                      {p.label}
                    </a>
                  ))}
                </div>
              </motion.li>
              <motion.li variants={item}>
                <span className="contact__icon">
                  <MessageCircle size={20} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3>WhatsApp</h3>
                  <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer">
                    Message us on 93492 84563
                  </a>
                </div>
              </motion.li>
              <motion.li variants={item}>
                <span className="contact__icon">
                  <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </div>
              </motion.li>
              <motion.li variants={item}>
                <span className="contact__icon">
                  <MapPin size={20} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3>Address</h3>
                  <address>{CONTACT.address}</address>
                </div>
              </motion.li>
            </motion.ul>

            <motion.div className="contact__actions" variants={fadeUp}>
              <a className="btn btn--primary" href={CONTACT.maps} target="_blank" rel="noopener noreferrer">
                <MapPin size={17} aria-hidden="true" /> Get directions
              </a>
              <a className="btn btn--outline-dark" href={CONTACT.phones[0].href}>
                <Phone size={17} aria-hidden="true" /> Call now
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact__media"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <MosaicImage
              src="/imgg1.webp"
              alt="Maliyakal Homestay entrance gate and garden path in Nayarambalam"
              ratio="4 / 5"
              position="center 60%"
            />
            <span className="about__tag">Nayarambalam, Vypin Island</span>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
