import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AboutDetailPage from './pages/AboutDetailPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NewsDetailPage from './pages/NewsDetailPage.jsx'
import NewsPage from './pages/NewsPage.jsx'
import ReviewsPage from './pages/ReviewsPage.jsx'
import ServiceCeramicPage from './pages/ServiceCeramicPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
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
