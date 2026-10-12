import { motion } from 'framer-motion'
import MosaicImage from './MosaicImage'
import ScrollWords from './ScrollWords'
import ParallaxBg from './ParallaxBg'
import { fadeUp, inView, stagger } from '../lib/motion'

export default function AboutSection() {
  return (
    <>
      <section id="about" className="section about" aria-labelledby="about-title">
        <div className="container about__grid">
          <motion.div className="about__text" variants={stagger(0.12)} {...inView}>
            <motion.p className="eyebrow" variants={fadeUp}>
              A little escape from the everyday
            </motion.p>
            <motion.h2 id="about-title" className="h2" variants={fadeUp}>
              Where Simple Living Meets <em>Natural Serenity</em>
            </motion.h2>
            <motion.span className="rule" variants={fadeUp} aria-hidden="true" />
            <motion.p className="body" variants={fadeUp}>
              Nestled in the peaceful village of Nayarambalam on Vypin Island, Maliyakal Homestay offers a welcoming
              place to slow down and enjoy the beauty of Kerala.
            </motion.p>
            <motion.p className="body" variants={fadeUp}>
              With comfortable accommodation and essential modern amenities, we offer a homely setting for guests
              seeking a peaceful stay in Kerala.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a className="btn btn--primary" href="#accommodation">
                Discover the experience
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="about__media" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <MosaicImage
              src="/about-us.jpeg"
              alt="Maliyakal Homestay, a two-storey Kerala-style house with red tiled roofs, a carved wooden balcony and a stone-paved courtyard among coconut palms"
              ratio="1 / 1"
              position="58% center"
            />
          </motion.div>
        </div>
      </section>

      <section className="section statement statement--banner" aria-label="Village life at Maliyakal">
        <ParallaxBg src="/scn2-banner.jpg" position="center 60%" overlay="dark" />
        <div className="container container--narrow statement__inner">
          <ScrollWords text="Surrounded by lush greenery, quiet canals, sacred groves, and the charm of everyday village life, our homestay invites you to step away from the rush of the city and enjoy a more relaxed way of travelling." />
        </div>
      </section>
    </>
  )
}
