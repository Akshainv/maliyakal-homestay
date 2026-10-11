export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://maliyakalhomestay.com').replace(/\/$/, '')
export const SITE_NAME = 'Maliyakal Homestay'
export const OG_IMAGE = '/imgg1.webp'

export const WHATSAPP_NUMBER = '919349284563'

export const whatsappLink = (message) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`

export const WA_GENERAL = whatsappLink('Hi, I would like to enquire about Maliyakal Homestay')
export const WA_ROOM = whatsappLink(
  'Hi, I would like to enquire about the Deluxe Double Room at Maliyakal Homestay',
)

export const CONTACT = {
  phones: [
    { label: '93492 84563', href: 'tel:+919349284563' },
    { label: '95676 29366', href: 'tel:+919567629366' },
  ],
  email: 'maliyakalhomestay@gmail.com',
  address: 'Maliyakal House, Near Punchepalam, Nayarambalam P.O., Ernakulam, Kerala – 682509',
  maps: 'https://maps.app.goo.gl/ZvNR3NqvFW6dFCMD8',
}

/* All four pages are live. */
export const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]
