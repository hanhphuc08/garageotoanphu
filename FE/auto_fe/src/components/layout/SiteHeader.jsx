import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const primaryNavLinks = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Dịch vụ', to: '/dich-vu/bang-gia' },
]

function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <NavLink to="/" className="flex items-center gap-1">
          <img alt="Auto An Phú logo" className="h-12 w-auto object-contain" src="/logo.png" />
          <span className="text-base font-black tracking-tighter text-slate-100 uppercase italic sm:text-xl">Auto An Phú</span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {primaryNavLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary border-b-2 border-primary' : 'text-slate-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/gioi-thieu"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${
                isActive ? 'text-primary border-b-2 border-primary' : 'text-slate-100'
              }`
            }
          >
            Về chúng tôi
          </NavLink>
          <NavLink
            to="/tin-tuc"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${
                isActive ? 'text-primary border-b-2 border-primary' : 'text-slate-100'
              }`
            }
          >
            Tin tức
          </NavLink>

          <NavLink
            to="/danh-gia"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${
                isActive ? 'text-primary border-b-2 border-primary' : 'text-slate-100'
              }`
            }
          >
            Đánh giá
          </NavLink>

        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            className="rounded-lg bg-accent-red px-4 py-2 text-xs font-bold tracking-wider text-white uppercase transition-all hover:brightness-110 sm:px-6 sm:py-2.5 sm:text-sm"
            href="/#home-contact-booking"
          >
            Đặt lịch ngay
          </a>
          <button
            aria-label="Mở menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-100 transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            type="button"
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-background-dark/95 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            <NavLink
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'bg-primary/20 text-primary' : 'text-slate-100 hover:bg-white/10'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
              to="/"
            >
              Trang chủ
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'bg-primary/20 text-primary' : 'text-slate-100 hover:bg-white/10'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
              to="/dich-vu/bang-gia"
            >
              Dịch vụ
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'bg-primary/20 text-primary' : 'text-slate-100 hover:bg-white/10'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
              to="/gioi-thieu"
            >
              Về chúng tôi
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'bg-primary/20 text-primary' : 'text-slate-100 hover:bg-white/10'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
              to="/tin-tuc"
            >
              Tin tức
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'bg-primary/20 text-primary' : 'text-slate-100 hover:bg-white/10'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
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
