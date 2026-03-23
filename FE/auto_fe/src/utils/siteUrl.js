const fallbackSiteUrl = 'https://your-project.vercel.app'

export const siteUrl = (
  import.meta.env.VITE_SITE_URL ||
  (typeof window !== 'undefined' ? window.location.origin : fallbackSiteUrl)
).replace(/\/+$/, '')

export function toAbsoluteUrl(path = '/') {
  if (!path) return siteUrl
  if (/^https?:\/\//i.test(path)) return path
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}
