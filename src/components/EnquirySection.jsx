import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WA_GENERAL } from '../lib/site'
import { fadeUp, inView, stagger } from '../lib/motion'

export default function EnquirySection() {
  return (
    <section id="enquiry" className="section enquiry" aria-labelledby="enquiry-title">
      <svg className="enquiry__deco" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="140" />
        <circle cx="200" cy="200" r="90" />
        <path d="M200 380V120M200 240c-40-10-70-40-80-80M200 240c40-10 70-40 80-80M200 300c-30-8-55-28-65-60M200 300c30-8 55-28 65-60" />
      </svg>
      <motion.div className="container container--narrow enquiry__inner" variants={stagger(0.12)} {...inView}>
        <motion.h2 id="enquiry-title" className="h2 h2--light" variants={fadeUp}>
          Your Kerala Getaway <em>Starts Here</em>
        </motion.h2>
        <motion.p className="body body--light" variants={fadeUp}>
          Looking for a peaceful place to stay in Vypin Island? Get in touch with Maliyakal Homestay to enquire about
          your visit.
        </motion.p>
        <motion.div variants={fadeUp}>
          <a className="btn btn--ivory btn--lg" href={WA_GENERAL} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} aria-hidden="true" /> Enquire on WhatsApp
          </a>
        </motion.div>
        <motion.p className="enquiry__note" variants={fadeUp}>
          We would be happy to hear from you.
        </motion.p>
      </motion.div>
    </section>
  )
}
