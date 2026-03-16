import { Link } from 'react-router-dom'

function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-black/40 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-4">
        <div className="col-span-1 md:col-span-1">
          <Link className="mb-6 flex items-center gap-1" to="/">
            <img alt="Auto An Phú logo" className="h-14 w-auto object-contain" src="/logo.png" />
            <h2 className="text-xl font-bold tracking-tight text-slate-100 uppercase italic">
              Auto <span className="text-crimson">An Phú</span>
            </h2>
          </Link>
          <p className="mb-6 text-sm text-slate-500">
            Trung tâm chăm sóc xe hơi chuyên nghiệp, cung cấp các giải pháp detailing và bảo dưỡng hàng đầu tại Việt Nam.
          </p>
          <div className="flex gap-4">
            <a className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-primary" href="#"><span className="material-symbols-outlined text-sm">public</span></a>
            <a className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-primary" href="#"><span className="material-symbols-outlined text-sm">camera_enhance</span></a>
            <a className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-primary" href="#"><span className="material-symbols-outlined text-sm">chat</span></a>
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-bold tracking-wider text-slate-100 uppercase">Dịch vụ</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a className="transition-colors hover:text-primary" href="#">Phủ Ceramic 9H</a></li>
            <li><a className="transition-colors hover:text-primary" href="#">Dán Phim Cách Nhiệt</a></li>
            <li><a className="transition-colors hover:text-primary" href="#">Dọn Nội Thất Chuyên Sâu</a></li>
            <li><a className="transition-colors hover:text-primary" href="#">Đánh Bóng Hiệu Chỉnh Sơn</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-bold tracking-wider text-slate-100 uppercase">Thông tin</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link className="transition-colors hover:text-primary" to="/gioi-thieu">Về chúng tôi</Link></li>
            <li><a className="transition-colors hover:text-primary" href="#">Quy trình làm việc</a></li>
            <li><a className="transition-colors hover:text-primary" href="#">Chính sách bảo hành</a></li>
            <li><Link className="transition-colors hover:text-primary" to="/tin-tuc">Tin tức &amp; Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-bold tracking-wider text-slate-100 uppercase">Liên hệ</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-lg text-primary">location_on</span>
              <span>Số 4E /1 Đường DT743, Khu phố 1B, phường An Phú, Thành phố Thuận An, Bình Dương</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-primary">call</span>
              <span>0274 3800 940 - 0981 946 652 - 0969 757 101 - 0938 981 978</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-primary">mail</span>
              <span>autoanphu@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-primary">language</span>
              <span>autoanphu.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/5 px-4 pt-8 text-center text-xs text-slate-600">
        © 2024 Auto An Phú Premium Detailing Center. All Rights Reserved.
      </div>
    </footer>
  )
}

export default SiteFooter
