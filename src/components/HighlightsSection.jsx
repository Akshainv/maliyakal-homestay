import { motion } from 'framer-motion'
import { BedDouble, Compass, TreePalm, UtensilsCrossed } from 'lucide-react'
import { fadeUp, inView, item, stagger } from '../lib/motion'

const HIGHLIGHTS = [
  {
    icon: BedDouble,
    title: 'Comfortable Accommodation',
    text: 'Relax in a comfortable air-conditioned double room with a private bathroom and essential amenities.',
  },
  {
    icon: TreePalm,
    title: 'A Natural Surrounding',
    text: 'Enjoy the greenery and peaceful village atmosphere of Nayarambalam.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Homely Convenience',
    text: 'Make use of the available kitchen and dining facilities during your stay.',
  },
  {
    icon: Compass,
    title: 'Explore the Coast',
    text: 'Discover nearby attractions across Vypin Island and the wider Kochi region.',
  },
]

export default function HighlightsSection() {
  return (
    <section id="highlights" className="section highlights" aria-labelledby="highlights-title">
      <div className="container">
        <motion.div className="section__head" variants={stagger(0.1)} {...inView}>
          <motion.p className="eyebrow" variants={fadeUp}>
            The Maliyakal experience
          </motion.p>
          <motion.h2 id="highlights-title" className="h2" variants={fadeUp}>
            A Peaceful Stay, <em>Thoughtfully Simple</em>
          </motion.h2>
        </motion.div>

        <motion.ul className="highlights__list" variants={stagger(0.12)} {...inView}>
          {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
            <motion.li key={title} className="highlight" variants={item}>
              <span className="highlight__num">0{i + 1}</span>
              <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
              <h3 className="h3">{title}</h3>
              <p>{text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
