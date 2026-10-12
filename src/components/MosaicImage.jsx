import { useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/* 3x3 staggered clip-path mosaic reveal (triggered once when scrolled into view). */
export default function MosaicImage({ src, alt, ratio = '4 / 5', className = '', position = 'center' }) {
  const reduce = useReducedMotion()
  const [inViewport, setInViewport] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(false)
  const [done, setDone] = useState(false)
  const ref = useRef(null)

  /* Preload so the tiles never animate in empty (uncached images would otherwise just pop in). */
  useEffect(() => {
    if (reduce) return undefined
    let cancelled = false
    const img = new Image()
    const finish = () => !cancelled && setLoaded(true)
    img.onload = finish
    img.onerror = finish
    img.src = src
    if (img.complete) finish()
    return () => {
      cancelled = true
    }
  }, [src, reduce])

  useEffect(() => {
    if (reduce) return undefined
    const el = ref.current
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInViewport(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [reduce])

  useEffect(() => {
    if (!inViewport || !loaded) return undefined
    let timer
    /* Two frames so the collapsed clip-paths are painted before transitioning open. */
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setVisible(true)
        timer = setTimeout(() => setDone(true), 1900)
      }),
    )
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timer)
    }
  }, [inViewport, loaded])

  const masks = useMemo(() => {
    const list = []
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const l = c * 33.33
        const rt = c === 2 ? 100 : (c + 1) * 33.33 + 1
        const t = r * 33.33
        const b = r === 2 ? 100 : (r + 1) * 33.33 + 1
        const mx = l + (rt - l) / 2
        const my = t + (b - t) / 2
        list.push({
          id: `${r}-${c}`,
          hidden: `polygon(${mx}% ${my}%, ${mx}% ${my}%, ${mx}% ${my}%, ${mx}% ${my}%)`,
          shown: `polygon(${l}% ${t}%, ${rt}% ${t}%, ${rt}% ${b}%, ${l}% ${b}%)`,
          delay: (r + c) * 0.14,
        })
      }
    }
    return list
  }, [])

  const showImage = reduce || done

  return (
    <div ref={ref} className={`mosaic ${className}`} style={{ aspectRatio: ratio }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="mosaic__img"
        style={{ opacity: showImage ? 1 : 0, objectPosition: position }}
      />
      {!showImage &&
        masks.map((m) => (
          <div
            key={m.id}
            className="mosaic__mask"
            aria-hidden="true"
            style={{
              backgroundImage: `url(${src})`,
              backgroundPosition: position,
              clipPath: visible ? m.shown : m.hidden,
              transition: `clip-path 0.85s cubic-bezier(0.25, 1, 0.5, 1) ${m.delay}s`,
            }}
          />
        ))}
    </div>
  )
}
