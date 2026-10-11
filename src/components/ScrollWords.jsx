import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

function Word({ children, progress, range, reduce }) {
  const opacity = useTransform(progress, range, [0.16, 1])
  return (
    <motion.span className="scrollwords__word" style={{ opacity: reduce ? 1 : opacity }}>
      {children}{' '}
    </motion.span>
  )
}

/* Words fade from faint to solid as the paragraph scrolls through the viewport. */
export default function ScrollWords({ text, className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 88%', 'end 62%'] })
  const words = text.split(' ')

  return (
    <p ref={ref} className={`scrollwords ${className}`}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} reduce={reduce}>
          {w}
        </Word>
      ))}
    </p>
  )
}
