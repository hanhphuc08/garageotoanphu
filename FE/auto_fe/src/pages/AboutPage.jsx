import { Link } from 'react-router-dom'
import SiteFooter from '../components/layout/SiteFooter.jsx'
import SiteHeader from '../components/layout/SiteHeader.jsx'
import usePageSeo from '../hooks/usePageSeo.js'
import { aboutArticles } from '../data/aboutArticles.js'

function AboutPage() {
  usePageSeo({
    title: 'Giới Thiệu | Auto An Phú',
    description:
      'Giới thiệu về Auto An Phú: đội ngũ kỹ thuật, quy trình chăm sóc xe chuyên nghiệp và các bài viết kiến thức hữu ích.',
    canonical: '/gioi-thieu',
  })

  return (
    <div className="min-h-screen bg-background-light font-display text-slate-900">
      <SiteHeader />

      <main className="px-4 pt-24 pb-14 sm:px-6 md:px-10">
        <section className="mx-auto max-w-7xl rounded-3xl bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <div className="mb-8 flex items-center gap-3 text-sm font-semibold text-slate-500">
            <span>Trang chủ</span>
            <span className="material-symbols-outlined text-sm text-accent-red">chevron_right</span>
            <span className="text-slate-700">Giới thiệu</span>
          </div>

          <div className="mb-10 text-center">
            <h1 className="text-3xl font-black tracking-tight text-accent-red uppercase sm:text-4xl">GIỚI THIỆU</h1>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {aboutArticles.map((item) => (
              <Link key={item.title} to={`/gioi-thieu/${item.slug}`} className="group block transition-opacity hover:opacity-95">
                <article>
                  <div className="relative overflow-hidden">
                    <img alt={item.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.image} />
                    <div className="absolute bottom-0 left-3 bg-accent-red px-4 py-1.5 text-sm font-black text-white sm:left-4 sm:px-6 sm:py-2 sm:text-xl">{item.date}</div>
                  </div>
                  <div className="mt-6 border-l-2 border-accent-red pl-4">
                    <h3 className="mb-3 text-xl/7 font-black tracking-tight uppercase sm:text-2xl/8 md:text-[30px]">{item.title}</h3>
                    <p className="text-base/7 text-slate-700 sm:text-lg/8">{item.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default AboutPage