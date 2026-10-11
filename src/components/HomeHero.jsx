import { motion } from 'framer-motion'
import { ArrowDown, MessageCircle } from 'lucide-react'
import { WA_GENERAL } from '../lib/site'
import { EASE, fadeUp, stagger } from '../lib/motion'

export default function HomeHero({ ready }) {
  const state = ready ? 'show' : 'hidden'
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero__media"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.08 }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <img
          src="/imgg1.webp"
          alt="Maliyakal Homestay – a traditional Kerala house with red tiled roofs, framed by coconut palms"
          fetchPriority="high"
          decoding="async"
          width="1360"
          height="907"
        />
      </motion.div>
      <div className="hero__overlay" aria-hidden="true" />

      <motion.div className="container hero__content" variants={stagger(0.13, 0.15)} initial="hidden" animate={state}>
        <motion.p className="eyebrow eyebrow--light" variants={fadeUp}>
          Welcome to Maliyakal Homestay
        </motion.p>
        <motion.h1 id="hero-title" className="hero__title" variants={fadeUp}>
          Find Your Peace in the <em>Heart of Kerala</em>
        </motion.h1>
        <motion.p className="hero__lead" variants={fadeUp}>
          Discover the quiet charm of Kerala village life at Maliyakal Homestay in Nayarambalam, Vypin Island. Enjoy
          comfortable accommodation, lush green surroundings, and a welcoming atmosphere away from the busy city.
        </motion.p>
        <motion.div className="hero__actions" variants={fadeUp}>
          <a className="btn btn--ivory" href={WA_GENERAL} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={17} aria-hidden="true" /> Enquire on WhatsApp
          </a>
          <a className="btn btn--outline" href="#about">
            Discover our homestay
          </a>
        </motion.div>
        <motion.p className="hero__loc" variants={fadeUp}>
          Nayarambalam · Vypin Island · Ernakulam, Kerala
        </motion.p>
      </motion.div>

      <motion.a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to the about section"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  )
}
