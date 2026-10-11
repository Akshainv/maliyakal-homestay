import { motion } from 'framer-motion'
import { ArrowRight, Bath, BedDouble, Check, MessageCircle, Snowflake, Sun, Tv } from 'lucide-react'
import MosaicImage from '../components/MosaicImage'
import EnquirySection from '../components/EnquirySection'
import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import { WA_ROOM, whatsappLink } from '../lib/site'
import { fadeUp, inView, item, stagger } from '../lib/motion'

const WA_SERVICES = whatsappLink('Hi, I would like to know more about the stay and facilities at Maliyakal Homestay')

const SERVICES = [
  {
    num: '01',
    eyebrow: 'Accommodation',
    title: 'Comfortable Accommodation',
    text: 'Settle into the Deluxe Double Room – a comfortable air-conditioned double room with a cosy bed, private bathroom, flat-screen TV, and a terrace overlooking a quiet street.',
    points: ['Air conditioning', 'Comfortable double bed', 'Private bathroom', 'Flat-screen TV', 'Terrace access'],
    img: '/imgg4.webp',
    alt: 'The air-conditioned double room at Maliyakal Homestay with a double bed',
    position: '30% center',
    cta: { label: 'Enquire about the room', href: WA_ROOM },
  },
  {
    num: '02',
    eyebrow: 'Kitchen & dining',
    title: 'Homely Convenience',
    text: 'Make use of the available kitchen and dining facilities during your stay, for a relaxed and homely way of travelling.',
    points: ['Kitchen facilities', 'Dining area', 'Essential modern amenities'],
    img: '/img5.webp',
    alt: 'Living and dining area at Maliyakal Homestay',
    position: 'center',
  },
  {
    num: '03',
    eyebrow: 'Surroundings',
    title: 'A Natural Surrounding',
    text: 'Surrounded by lush greenery, quiet canals, sacred groves, and the charm of everyday village life, Nayarambalam is a place to slow down and breathe.',
    points: ['Peaceful village atmosphere', 'Greenery and coconut palms', 'Away from the busy city'],
    img: '/imgg7.webp',
    alt: 'A quiet village lane lined with coconut palms in Nayarambalam',
    position: 'center 60%',
  },
  {
    num: '04',
    eyebrow: 'Around Vypin',
    title: 'Explore the Coast',
    text: 'Discover nearby attractions across Vypin Island and the wider Kochi region, from sandy beaches and coastal landmarks to quiet backwater landscapes.',
    points: ['Cherai Beach', 'Puthuvype Lighthouse', 'Pallippuram Fort', 'Mangalavanam Bird Sanctuary'],
    img: '/imgg6.webp',
    alt: 'A Chinese fishing net beside the backwaters of Vypin',
    position: 'center',
  },
]

const AMENITIES = [
  { icon: Snowflake, label: 'Air-conditioned double room' },
  { icon: BedDouble, label: 'Comfortable double bed' },
  { icon: Bath, label: 'Private bathroom' },
  { icon: Tv, label: 'Flat-screen TV' },
  { icon: Sun, label: 'Terrace overlooking a quiet street' },
  { icon: Check, label: 'Kitchen and dining facilities' },
]

function ServiceRow({ s, flip }) {
  return (
    <article className={`service ${flip ? 'service--flip' : ''}`} aria-labelledby={`service-${s.num}`}>
      <div className="service__media">
        <MosaicImage src={s.img} alt={s.alt} ratio="4 / 3" position={s.position} />
        <span className="service__num" aria-hidden="true">
          {s.num}
        </span>
      </div>
      <motion.div className="service__text" variants={stagger(0.1)} {...inView}>
        <motion.p className="eyebrow" variants={fadeUp}>
          {s.eyebrow}
        </motion.p>
        <motion.h2 id={`service-${s.num}`} className="h2 h2--md" variants={fadeUp}>
          {s.title}
        </motion.h2>
        <motion.span className="rule" variants={fadeUp} aria-hidden="true" />
        <motion.p className="body" variants={fadeUp}>
          {s.text}
        </motion.p>
        <motion.ul className="service__points" variants={stagger(0.06)}>
          {s.points.map((p) => (
            <motion.li key={p} variants={item}>
              <Check size={16} strokeWidth={2} aria-hidden="true" /> {p}
            </motion.li>
          ))}
        </motion.ul>
        {s.cta && (
          <motion.div variants={fadeUp}>
            <a className="btn btn--primary" href={s.cta.href} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={17} aria-hidden="true" /> {s.cta.label}
            </a>
          </motion.div>
        )}
      </motion.div>
    </article>
  )
}

export default function ServicesPage({ ready }) {
  return (
    <main id="main">
      <Seo
        path="/services"
        title="Services & Facilities | Maliyakal Homestay, Vypin Island"
        description="Air-conditioned double room, private bathroom, kitchen and dining facilities and a peaceful village setting at Maliyakal Homestay, Nayarambalam, Vypin Island, Kerala."
      />
      <PageHero
        ready={ready}
        title="Our"
        accent="Services"
        lead="Simple comforts, homely facilities and the quiet beauty of Nayarambalam – everything you need for a peaceful stay on Vypin Island."
        img="/imgg1.webp"
        alt="Maliyakal Homestay gateway and stone-paved garden path surrounded by greenery"
        position="center 78%"
      />


      <section className="section services-intro" aria-label="Introduction">
        <div className="container container--narrow">
          <motion.div variants={stagger(0.1)} {...inView} className="services-intro__inner">
            <motion.p className="eyebrow" variants={fadeUp}>
              What we offer
            </motion.p>
            <motion.h2 className="h2" variants={fadeUp}>
              Simple Comforts for a <em>Restful Stay</em>
            </motion.h2>
            <motion.p className="body body--center" variants={fadeUp}>
              Maliyakal Homestay keeps things honest and homely – a comfortable room, the use of kitchen and dining
              facilities, and a peaceful village setting to return to after exploring the coast.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="services-list" aria-label="Services">
        <div className="container">
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.num} s={s} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="section amenities" aria-labelledby="amenities-title">
        <div className="container">
          <motion.div className="section__head section__head--center" variants={stagger(0.1)} {...inView}>
            <motion.p className="eyebrow eyebrow--gold" variants={fadeUp}>
              At a glance
            </motion.p>
            <motion.h2 id="amenities-title" className="h2 h2--light" variants={fadeUp}>
              Everything Included, <em>Clearly Stated</em>
            </motion.h2>
          </motion.div>
          <motion.ul className="amenities__grid" variants={stagger(0.08)} {...inView}>
            {AMENITIES.map(({ icon: Icon, label }) => (
              <motion.li key={label} variants={item}>
                <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
                <span>{label}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div className="amenities__note" variants={fadeUp} {...inView}>
            <p>Rates and availability are shared on enquiry. Message us and we will be happy to help.</p>
            <a className="btn btn--ivory" href={WA_SERVICES} target="_blank" rel="noopener noreferrer">
              Ask about your stay <ArrowRight size={16} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      <EnquirySection />
    </main>
  )
}
