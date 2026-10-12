import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/* Full-bleed section background with a gentle scroll parallax and a tinted overlay. */
export default function ParallaxBg({ src, position = 'center', overlay = 'dark', strength = 10 }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])

  return (
    <div ref={ref} className="pbg" aria-hidden="true">
      <motion.img
        className="pbg__img"
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        style={{ y: reduce ? 0 : y, objectPosition: position }}
      />
      <span className={`pbg__overlay pbg__overlay--${overlay}`} />
    </div>
  )
}
