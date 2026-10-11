import { useEffect } from 'react'
import { OG_IMAGE, SITE_NAME, SITE_URL } from '../lib/site'

function upsert(selector, create, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(create)
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
  return el
}

const PAGE_NAMES = { '/services': 'Services', '/gallery': 'Gallery', '/contact': 'Contact' }

/* Per-page title, description, canonical, Open Graph, Twitter and JSON-LD (updated on route change). */
export default function Seo({ title, description, path = '/', image = OG_IMAGE, noindex = false, type = 'website' }) {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`
    const img = image.startsWith('http') ? image : `${SITE_URL}${image}`

    document.title = title
    upsert('meta[name="description"]', 'meta', { name: 'description', content: description })
    upsert('meta[name="robots"]', 'meta', {
      name: 'robots',
      content: noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
    })
    upsert('link[rel="canonical"]', 'link', { rel: 'canonical', href: url })

    const og = {
      'og:type': type,
      'og:site_name': SITE_NAME,
      'og:title': title,
      'og:description': description,
      'og:url': url,
      'og:image': img,
      'og:locale': 'en_IN',
    }
    Object.entries(og).forEach(([p, c]) =>
      upsert(`meta[property="${p}"]`, 'meta', { property: p, content: c }),
    )
    const tw = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': img,
    }
    Object.entries(tw).forEach(([n, c]) => upsert(`meta[name="${n}"]`, 'meta', { name: n, content: c }))

    const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }]
    if (PAGE_NAMES[path]) {
      crumbs.push({ '@type': 'ListItem', position: 2, name: PAGE_NAMES[path], item: url })
    }
    const ld = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          name: title,
          description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#business` },
        },
        { '@type': 'BreadcrumbList', itemListElement: crumbs },
      ],
    }
    const script = upsert('script#page-jsonld', 'script', { id: 'page-jsonld', type: 'application/ld+json' })
    script.textContent = JSON.stringify(ld)
  }, [title, description, path, image, noindex, type])

  return null
}
