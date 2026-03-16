import { Link } from 'react-router-dom'
import SiteFooter from '../components/layout/SiteFooter.jsx'
import SiteHeader from '../components/layout/SiteHeader.jsx'
import { newsArticles } from '../data/newsArticles.js'

function NewsPage() {
  return (
    <div className="min-h-screen bg-background-dark font-display text-slate-100">
      <SiteHeader />

      <main className="px-4 pt-24 pb-14 sm:px-6 md:px-10">
        <section className="mx-auto max-w-7xl rounded-3xl bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <div className="mb-8 flex items-center gap-3 text-sm font-semibold text-slate-500">
            <Link to="/" className="transition-colors hover:text-accent-red">Trang chủ</Link>
            <span className="material-symbols-outlined text-sm text-accent-red">chevron_right</span>
            <span className="text-slate-700">Tin tức</span>
          </div>

          <div className="mb-10 text-center">
            <h1 className="text-3xl font-black tracking-tight text-accent-red uppercase sm:text-4xl">TIN TỨC</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">Cập nhật kinh nghiệm chăm sóc xe, mẹo sử dụng an toàn và thông tin dịch vụ mới tại Auto An Phú.</p>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {newsArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/tin-tuc/${article.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <img alt={article.title} src={article.image} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="space-y-3 p-5">
                  <span className="inline-flex rounded-full bg-accent-red/10 px-3 py-1 text-xs font-bold tracking-wide text-accent-red uppercase">
                    {article.category}
                  </span>
                  <h3 className="text-xl/7 font-black tracking-tight text-slate-900 sm:text-2xl/7">{article.title}</h3>
                  <p className="text-sm text-slate-500">{article.date}</p>
                  <p className="text-slate-700">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default NewsPage
