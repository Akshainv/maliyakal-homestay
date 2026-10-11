import { useCallback, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import Loader from './components/Loader'
import Header from './components/Header'
import HomeHero from './components/HomeHero'
import AboutSection from './components/AboutSection'
import HighlightsSection from './components/HighlightsSection'
import AccommodationSection from './components/AccommodationSection'
import DestinationsSection from './components/DestinationsSection'
import EnquirySection from './components/EnquirySection'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import ScrollToTop from './components/ScrollToTop'
import Seo from './components/Seo'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function HomePage({ ready }) {
  return (
    <main id="main">
      <Seo
        path="/"
        title="Maliyakal Homestay – Peaceful Stay in Vypin Island, Kerala"
        description="Maliyakal Homestay in Nayarambalam, Vypin Island, Ernakulam: a comfortable air-conditioned double room, lush green surroundings and warm Kerala hospitality. Enquire on WhatsApp."
      />
      <HomeHero ready={ready} />
      <AboutSection />
      <HighlightsSection />
      <AccommodationSection />
      <DestinationsSection />
      <EnquirySection />
    </main>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const finish = useCallback(() => setLoading(false), [])

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#main">
        Skip to main content
      </a>
      <AnimatePresence>{loading && <Loader onFinish={finish} />}</AnimatePresence>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage ready={!loading} />} />
        <Route path="/services" element={<ServicesPage ready={!loading} />} />
        <Route path="/gallery" element={<GalleryPage ready={!loading} />} />
        <Route path="/contact" element={<ContactPage ready={!loading} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <WhatsAppFab ready={!loading} />
    </MotionConfig>
  )
}
