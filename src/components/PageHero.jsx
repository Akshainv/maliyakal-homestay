import { motion } from 'framer-motion'
import { EASE, fadeUp, stagger } from '../lib/motion'

/* Shared inner-page banner (Services / Gallery / Contact). */
export default function PageHero({ ready, eyebrow = 'Maliyakal Homestay', title, accent, lead, img, alt, position = 'center' }) {
  const state = ready ? 'show' : 'hidden'
  return (
    <section className="pagehero" aria-labelledby="page-title">
      <motion.div
        className="hero__media"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.08 }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <img src={img} alt={alt} fetchPriority="high" decoding="async" style={{ objectPosition: position }} />
      </motion.div>
      <div className="hero__overlay" aria-hidden="true" />
      <motion.div className="container pagehero__content" variants={stagger(0.12, 0.1)} initial="hidden" animate={state}>
        <motion.p className="eyebrow eyebrow--light" variants={fadeUp}>
          {eyebrow}
        </motion.p>
        <motion.h1 id="page-title" className="hero__title pagehero__title" variants={fadeUp}>
          {title} <em>{accent}</em>
        </motion.h1>
        <motion.p className="hero__lead" variants={fadeUp}>
          {lead}
        </motion.p>
      </motion.div>
    </section>
  )
}
