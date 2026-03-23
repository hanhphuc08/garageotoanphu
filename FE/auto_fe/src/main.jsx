import { StrictMode, useEffect, useLayoutEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AboutDetailPage from './pages/AboutDetailPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NewsDetailPage from './pages/NewsDetailPage.jsx'
import NewsPage from './pages/NewsPage.jsx'
import ReviewsPage from './pages/ReviewsPage.jsx'
import ServiceCeramicPage from './pages/ServiceCeramicPage.jsx'

function ScrollToTopOnRouteChange() {
  const location = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useLayoutEffect(() => {
    const forceScrollTop = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    forceScrollTop()
    const frame = requestAnimationFrame(forceScrollTop)
    const timer = setTimeout(forceScrollTop, 0)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timer)
    }
  }, [location.pathname, location.search])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.key])

  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="/gioi-thieu/:slug" element={<AboutDetailPage />} />
        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/tin-tuc/:slug" element={<NewsDetailPage />} />
        <Route path="/dich-vu/bang-gia" element={<ServiceCeramicPage />} />
        <Route path="/dich-vu/phu-ceramic" element={<ServiceCeramicPage />} />
        <Route path="/danh-gia" element={<ReviewsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
