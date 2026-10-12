import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import PageHero from '../components/PageHero'
import EnquirySection from '../components/EnquirySection'
import Seo from '../components/Seo'
import { EASE, fadeUp, inView, stagger } from '../lib/motion'

/* Only real photographs of Maliyakal Homestay and its surroundings. */
const PHOTOS = [
  { src: '/imgg1.webp', w: 1360, h: 907, cat: 'Exterior', title: 'Entrance gate and garden path', alt: 'Maliyakal Homestay entrance with blue gates, red tiled roofs and a stone-paved garden path' },
  { src: '/imgg2.webp', w: 765, h: 1020, cat: 'Exterior', title: 'Carved wooden balcony', alt: 'Maliyakal Homestay front with its carved wooden balcony and red tiled roof' },
  { src: '/imgg4.webp', w: 1360, h: 941, cat: 'Interiors', title: 'Air-conditioned double room', alt: 'Air-conditioned double room at Maliyakal Homestay with a double bed and warm lighting' },
  { src: '/img5.webp', w: 1360, h: 907, cat: 'Interiors', title: 'Living and dining area', alt: 'Living and dining area at Maliyakal Homestay with wooden furniture' },
  { src: '/imgg3.webp', w: 1360, h: 907, cat: 'Interiors', title: 'Living room and staircase', alt: 'Living room at Maliyakal Homestay with a sofa and a feature staircase' },
  { src: '/imgg6.webp', w: 1360, h: 907, cat: 'Surroundings', title: 'Vypin backwaters', alt: 'Chinese fishing net and boat on the backwaters near Maliyakal Homestay' },
  { src: '/imgg7.webp', w: 765, h: 1020, cat: 'Surroundings', title: 'Village lane, Nayarambalam', alt: 'A quiet village lane lined with coconut palms in Nayarambalam' },
  { src: '/gall3.jpeg', w: 609, h: 773, cat: 'Guests', title: 'A family visit', alt: 'A group of guests standing with the hosts in front of Maliyakal Homestay and its carved wooden balcony' },
  { src: '/gall1.jpeg', w: 484, h: 859, cat: 'Guests', title: 'Guests from abroad', alt: 'Two international guests smiling with the hosts on the stone garden path at Maliyakal Homestay' },
  { src: '/gall2.jpeg', w: 610, h: 1217, cat: 'Guests', title: 'Friends at Maliyakal', alt: 'Four guests and hosts standing beneath the red tiled roof and carved balcony of Maliyakal Homestay' },
  { src: '/gall4.jpeg', w: 610, h: 800, cat: 'Guests', title: 'Part of the family', alt: 'Guests standing arm in arm with the host family in the courtyard of Maliyakal Homestay' },
  { src: '/gall5.jpeg', w: 610, h: 1078, cat: 'Guests', title: 'Backpackers checking out', alt: 'A family of backpackers with the host in front of Maliyakal Homestay' },
  { src: '/gall6.jpeg', w: 610, h: 812, cat: 'Guests', title: 'Warm goodbyes', alt: 'Two guests with the hosts at the front verandah of Maliyakal Homestay' },
  { src: '/gall7.jpeg', w: 722, h: 1276, cat: 'Guests', title: 'Happy travellers', alt: 'The host smiling with two visiting travellers' },
]
const FILTERS = ['All', 'Exterior', 'Interiors', 'Surroundings', 'Guests']

function Lightbox({ photos, index, onClose, onChange }) {
  const closeRef = useRef(null)
  const count = photos.length
  const go = useCallback((d) => onChange((index + d + count) % count), [index, count, onChange])

  useEffect(() => {
    const prev = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prev?.focus?.()
    }
  }, [go, onClose])

  const p = photos[index]
  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" aria-label="Close photo viewer" onClick={onClose}>
        <X size={22} />
      </button>
      <button
        type="button"
        className="lightbox__btn lightbox__nav lightbox__nav--prev"
        aria-label="Previous photo"
        onClick={(e) => {
          e.stopPropagation()
          go(-1)
        }}
      >
        <ChevronLeft size={26} />
      </button>
      <button
        type="button"
        className="lightbox__btn lightbox__nav lightbox__nav--next"
        aria-label="Next photo"
        onClick={(e) => {
          e.stopPropagation()
          go(1)
        }}
      >
        <ChevronRight size={26} />
      </button>

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <motion.img
          key={p.src}
          src={p.src}
          alt={p.alt}
          width={p.w}
          height={p.h}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: EASE }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) go(1)
            else if (info.offset.x > 60) go(-1)
          }}
        />
        <figcaption>
          <span>{p.title}</span>
          <small>
            {index + 1} / {count}
          </small>
        </figcaption>
      </figure>
    </motion.div>
  )
}

export default function GalleryPage({ ready }) {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)
  const shown = filter === 'All' ? PHOTOS : PHOTOS.filter((p) => p.cat === filter)
  const close = useCallback(() => setActive(null), [])

  return (
    <main id="main">
      <Seo
        path="/gallery"
        title="Photo Gallery | Maliyakal Homestay, Nayarambalam, Vypin Island"
        description="Real photos of Maliyakal Homestay in Nayarambalam, Vypin Island: the Kerala-style house, the air-conditioned double room, living spaces and the peaceful village surroundings."
        image="/imgg4.webp"
      />
      <PageHero
        ready={ready}
        title="Glimpses of"
        accent="Maliyakal"
        lead="A look at the house, the room and the quiet village life of Nayarambalam, Vypin Island."
        img="/imgg2.webp"
        alt="Maliyakal Homestay front with its carved wooden balcony and red tiled roof"
        position="center 30%"
      />

      <section className="section gallery" aria-labelledby="gallery-title">
        <div className="container">
          <motion.div className="section__head section__head--center" variants={stagger(0.1)} {...inView}>
            <motion.p className="eyebrow" variants={fadeUp}>
              Photo gallery
            </motion.p>
            <motion.h2 id="gallery-title" className="h2" variants={fadeUp}>
              See the Place <em>Before You Arrive</em>
            </motion.h2>
          </motion.div>

          <div className="filters" role="group" aria-label="Filter photos by category">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={`filter ${filter === f ? 'is-active' : ''}`}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.ul className="masonry" layout>
            <AnimatePresence mode="popLayout">
              {shown.map((p, i) => (
                <motion.li
                  key={p.src}
                  className="masonry__item"
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.55, ease: EASE, delay: Math.min(i * 0.05, 0.3) }}
                >
                  <button type="button" onClick={() => setActive(i)} aria-label={`Open photo: ${p.title}`}>
                    <img
                      src={p.src}
                      alt={p.alt}
                      width={p.w}
                      height={p.h}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <span className="masonry__cap">
                      <span>{p.title}</span>
                      <Maximize2 size={16} aria-hidden="true" />
                    </span>
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </section>

      <EnquirySection />

      <AnimatePresence>
        {active !== null && <Lightbox photos={shown} index={active} onClose={close} onChange={setActive} />}
      </AnimatePresence>
    </main>
  )
}
