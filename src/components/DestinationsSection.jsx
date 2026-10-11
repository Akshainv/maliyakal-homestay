import { motion } from 'framer-motion'
import { fadeUp, inView, item, stagger } from '../lib/motion'

const TILES = [
  { name: 'Cherai Beach', src: '/images/home/cherai-beach.webp', cls: 'tile--a', alt: 'Illustration of Cherai Beach at sunset with palms and Chinese fishing nets', illustrative: true },
  { name: 'Puthuvype Lighthouse', src: '/images/home/puthuvype-lighthouse.webp', cls: 'tile--b', alt: 'Illustration of a red and white lighthouse among coconut palms', illustrative: true },
  { name: 'Pallippuram Fort', src: '/images/home/pallippuram-fort.webp', cls: 'tile--c', alt: 'Illustration of an old laterite fort beside a Kerala backwater', illustrative: true },
  { name: 'Mangalavanam Bird Sanctuary', src: '/images/home/mangalavanam-sanctuary.webp', cls: 'tile--d', alt: 'Illustration of egrets perched in a misty mangrove sanctuary', illustrative: true },
  { name: 'Vypin backwaters', src: '/imgg6.webp', cls: 'tile--e', alt: 'Chinese fishing net beside the backwaters of Vypin' },
  { name: 'Village lanes of Nayarambalam', src: '/imgg7.webp', cls: 'tile--f', alt: 'A quiet village lane lined with coconut palms in Nayarambalam' },
]

export default function DestinationsSection() {
  return (
    <section id="destinations" className="section destinations" aria-labelledby="dest-title">
      <div className="container">
        <motion.div className="section__head section__head--split" variants={stagger(0.1)} {...inView}>
          <motion.h2 id="dest-title" className="h2" variants={fadeUp}>
            Discover the Beauty <em>Beyond Your Stay</em>
          </motion.h2>
          <motion.p className="body" variants={fadeUp}>
            From sandy beaches and coastal landmarks to the quiet landscapes of Vypin Island, discover the natural
            beauty and local attractions that make this part of Kerala special.
          </motion.p>
        </motion.div>

        <motion.div className="tiles" variants={stagger(0.1)} {...inView}>
          {TILES.map((t) => (
            <motion.figure key={t.name} className={`tile ${t.cls}`} variants={item}>
              <img src={t.src} alt={t.alt} loading="lazy" decoding="async" />
              <figcaption>
                <span>{t.name}</span>
                {t.illustrative && <small>Illustrative image</small>}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
