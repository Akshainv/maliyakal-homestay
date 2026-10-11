import { motion } from 'framer-motion'
import { Bath, BedDouble, MessageCircle, Snowflake, Sun, Tv } from 'lucide-react'
import MosaicImage from './MosaicImage'
import { WA_ROOM } from '../lib/site'
import { fadeUp, inView, item, stagger } from '../lib/motion'

const FEATURES = [
  { icon: Snowflake, label: 'Air conditioning' },
  { icon: BedDouble, label: 'Comfortable double bed' },
  { icon: Bath, label: 'Private bathroom' },
  { icon: Tv, label: 'Flat-screen TV' },
  { icon: Sun, label: 'Terrace access' },
]

export default function AccommodationSection() {
  return (
    <section id="accommodation" className="section accommodation" aria-labelledby="room-title">
      <div className="container accommodation__grid">
        <div className="accommodation__media">
          <MosaicImage
            src="/imgg4.webp"
            alt="The air-conditioned double room at Maliyakal Homestay with a double bed and warm lighting"
            ratio="4 / 3"
            position="30% center"
          />
        </div>

        <motion.div className="accommodation__text" variants={stagger(0.11)} {...inView}>
          <motion.p className="eyebrow eyebrow--gold" variants={fadeUp}>
            Your place to unwind
          </motion.p>
          <motion.h2 className="h2 h2--light" variants={fadeUp}>
            Comfort in Every <em>Little Detail</em>
          </motion.h2>
          <motion.h3 id="room-title" className="room__title" variants={fadeUp}>
            Deluxe Double Room
          </motion.h3>
          <motion.p className="body body--light" variants={fadeUp}>
            Settle into a comfortable air-conditioned double room featuring a cosy bed, private bathroom, flat-screen
            TV, and a terrace overlooking a quiet street.
          </motion.p>
          <motion.ul className="features" variants={stagger(0.07)}>
            {FEATURES.map(({ icon: Icon, label }) => (
              <motion.li key={label} variants={item}>
                <Icon size={18} strokeWidth={1.5} aria-hidden="true" /> {label}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp}>
            <a className="btn btn--ivory" href={WA_ROOM} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={17} aria-hidden="true" /> Enquire about the room
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
