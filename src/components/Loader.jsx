import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Logo from './Logo'

/* Blueprint-style Kerala house + coconut palm, drawn line by line. */
const PATHS = [
  'M10 176 H230',
  'M52 176 V112 H148 V176',
  'M40 112 L100 66 L160 112 Z',
  'M72 112 L100 90 L128 112',
  'M96 176 V138 A10 10 0 0 1 116 138 V176',
  'M62 128 H84 V152 H62 Z M73 128 V152 M62 140 H84',
  'M128 128 H142 V152 H128 Z',
  'M148 176 V132 H196 V176',
  'M140 132 L172 104 L204 132 Z',
  'M158 148 H186 V170 H158 Z M172 148 V170',
  'M52 120 H148 M52 124 H148',
  'M214 176 C212 150 216 120 210 88',
  'M210 88 C196 78 184 80 176 90 M210 88 C200 70 188 64 176 66 M210 88 C214 72 224 64 238 66 M210 88 C222 80 232 82 240 92',
]

export default function Loader({ onFinish }) {
  const reduce = useReducedMotion()
  const [phase, setPhase] = useState('drawing')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const timers = reduce
      ? [setTimeout(onFinish, 500)]
      : [setTimeout(() => setPhase('logo'), 2600), setTimeout(onFinish, 4300)]
    return () => {
      timers.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, [onFinish, reduce])

  return (
    <motion.div
      className="loader"
      role="status"
      aria-label="Loading Maliyakal Homestay"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } }}
    >
      {phase === 'drawing' ? (
        <motion.svg
          key="drawing"
          className="loader__drawing"
          viewBox="0 0 250 200"
          fill="none"
          stroke="#234B38"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          transition={{ duration: 0.8 }}
        >
          {PATHS.map((d, i) => (
            <motion.path
              key={d}
              d={d}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: 'easeInOut', delay: i * 0.1 }}
            />
          ))}
        </motion.svg>
      ) : (
        <motion.div
          key="logo"
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Logo size={72} />
        </motion.div>
      )}
    </motion.div>
  )
}
