import { useEffect } from 'react'
import { toAbsoluteUrl } from '../utils/siteUrl.js'

function upsertMeta(name, content, attr = 'name') {
  if (!content) return

  let tag = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export default function usePageSeo({ title, description, canonical, image, type = 'website', structuredData }) {
  useEffect(() => {
    const defaultImage = '/logo.png?v=3'
    const pageImage = toAbsoluteUrl(image || defaultImage)
    const canonicalUrl = canonical ? toAbsoluteUrl(canonical) : undefined

    if (title) {
      document.title = title
      upsertMeta('og:title', title, 'property')
      upsertMeta('twitter:title', title)
    }

    if (description) {
      upsertMeta('description', description)
      upsertMeta('og:description', description, 'property')
      upsertMeta('twitter:description', description)
    }

    if (canonicalUrl) {
      let link = document.head.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonicalUrl)
      upsertMeta('og:url', canonicalUrl, 'property')
    }

    upsertMeta('robots', 'index, follow')
    upsertMeta('og:image', pageImage, 'property')
    upsertMeta('og:site_name', 'Garage Ô Tô An Phú', 'property')
    upsertMeta('og:type', type, 'property')
    upsertMeta('twitter:card', 'summary_large_image')
    upsertMeta('twitter:image', pageImage)

    const existingScript = document.getElementById('dynamic-structured-data')
    if (existingScript) {
      existingScript.remove()
    }

    if (structuredData) {
      const script = document.createElement('script')
      script.id = 'dynamic-structured-data'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
  }, [title, description, canonical, image, type, structuredData])
}
