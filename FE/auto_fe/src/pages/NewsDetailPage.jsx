import { Link, Navigate, useParams } from 'react-router-dom'
import SiteFooter from '../components/layout/SiteFooter.jsx'
import SiteHeader from '../components/layout/SiteHeader.jsx'
import { newsArticles } from '../data/newsArticles.js'

function NewsDetailPage() {
  const { slug } = useParams()
  const article = newsArticles.find((item) => item.slug === slug)

  if (!article) {
    return <Navigate to="/tin-tuc" replace />
  }

  return (
    <div className="min-h-screen bg-background-dark font-display text-slate-100">
      <SiteHeader />

      <main className="px-4 pt-24 pb-14 sm:px-6 md:px-10">
        <section className="mx-auto max-w-4xl rounded-3xl bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <div className="mb-8 flex items-center gap-3 text-sm font-semibold text-slate-500">
            <Link to="/" className="transition-colors hover:text-accent-red">Trang chủ</Link>
            <span className="material-symbols-outlined text-sm text-accent-red">chevron_right</span>
            <Link to="/tin-tuc" className="transition-colors hover:text-accent-red">Tin tức</Link>
            <span className="material-symbols-outlined text-sm text-accent-red">chevron_right</span>
            <span className="text-slate-700">Chi tiết bài viết</span>
          </div>

          <img src={article.image} alt={article.title} className="h-56 w-full rounded-2xl object-cover sm:h-72 md:h-96" />

          <div className="mt-8 border-l-2 border-accent-red pl-4">
            <p className="mb-2 text-sm font-bold tracking-widest text-slate-500 uppercase">{article.category} · {article.date}</p>
            <h1 className="text-2xl/8 font-black tracking-tight sm:text-4xl/10 md:text-5xl/12">{article.title}</h1>
          </div>

          <div className="mt-8 space-y-4 text-base/7 text-slate-700 sm:text-lg/8 md:text-xl/8">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/tin-tuc"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-red px-6 py-3 text-base font-bold text-white transition-all hover:brightness-110"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Quay lại trang tin tức
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default NewsDetailPage
