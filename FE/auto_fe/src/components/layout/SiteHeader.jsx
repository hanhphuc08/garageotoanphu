import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const primaryNavLinks = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Dịch vụ', to: '/dich-vu/bang-gia' },
]

function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollToTop = () => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-3 sm:px-4 md:h-24 md:px-6">
        <NavLink to="/" className="flex items-center" onClick={scrollToTop}>
          <img alt="Auto An Phú logo" className="h-14 w-auto object-contain sm:h-16 md:h-20" src="/logo.png" />
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {primaryNavLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary border-b-2 border-primary' : 'text-slate-700'
                }`
              }
              onClick={scrollToTop}
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/gioi-thieu"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${
                isActive ? 'text-primary border-b-2 border-primary' : 'text-slate-700'
              }`
            }
            onClick={scrollToTop}
          >
            Về chúng tôi
          </NavLink>
          <NavLink
            to="/tin-tuc"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${
                isActive ? 'text-primary border-b-2 border-primary' : 'text-slate-700'
              }`
            }
            onClick={scrollToTop}
          >
            Tin tức
          </NavLink>

          <NavLink
            to="/danh-gia"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${
                isActive ? 'text-primary border-b-2 border-primary' : 'text-slate-700'
              }`
            }
            onClick={scrollToTop}
          >
            Đánh giá
          </NavLink>

        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            className="rounded-lg bg-accent-red px-3 py-2 text-[10px] font-bold tracking-wide text-white uppercase transition-all hover:brightness-110 sm:px-6 sm:py-2.5 sm:text-sm"
            href="/#home-contact-booking"
          >
            Đặt lịch ngay
          </a>
          <button
            aria-label="Mở menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-800 transition-colors hover:bg-slate-100 md:hidden"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            type="button"
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            <NavLink
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-100'}`
              }
              onClick={() => {
                setIsMobileMenuOpen(false)
                scrollToTop()
              }}
              to="/"
            >
              Trang chủ
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-100'}`
              }
              onClick={() => {
                setIsMobileMenuOpen(false)
                scrollToTop()
              }}
              to="/dich-vu/bang-gia"
            >
              Dịch vụ
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-100'}`
              }
              onClick={() => {
                setIsMobileMenuOpen(false)
                scrollToTop()
              }}
              to="/gioi-thieu"
            >
              Về chúng tôi
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-100'}`
              }
              onClick={() => {
                setIsMobileMenuOpen(false)
                scrollToTop()
              }}
              to="/tin-tuc"
            >
              Tin tức
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-100'}`
              }
              onClick={() => {
                setIsMobileMenuOpen(false)
                scrollToTop()
              }}
              to="/danh-gia"
            >
              Đánh giá
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

export default SiteHeader
