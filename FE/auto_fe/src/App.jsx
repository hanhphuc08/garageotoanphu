import { Link } from 'react-router-dom'
import SiteFooter from './components/layout/SiteFooter.jsx'
import SiteHeader from './components/layout/SiteHeader.jsx'
import usePageSeo from './hooks/usePageSeo.js'
import { newsArticles } from './data/newsArticles.js'

function App() {
  const latestNews = newsArticles.slice(0, 3)
  const heroImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAFhK_RSmqb7Byk69P4hA7INEINN4LjwIfICif3jm4OnCEM2rKFLjlX7tiKqVSlqUUMK4Ju8F9PYWhLixtF-XZT7nxE_yem6Uvgz0TcMdR5ea4zZcCSFatwO-DKX7Gr1g-jYzjdEbioLgso5lU2Wk54BYkOrgf8bMkAO57ux8AvTm5rEJtzsjiRl9np1K7-ffMPzzYL2ngfX4YX_PzrFh4GYXVTAlllnXj8ZbB7sKb0pMkfE64qAgk1K7wA6J6_l2osIf0czSesCNs'
  const promoBannerImage = '/promo-khuyen-mai.jpg'

  usePageSeo({
    title: 'Auto An Phú | Hệ Thống Chăm Sóc Xe Cao Cấp',
    description:
      'Auto An Phú cung cấp dịch vụ chăm sóc xe chuyên nghiệp: phủ Ceramic, vệ sinh nội thất, đánh bóng sơn và đặt lịch nhanh trực tuyến.',
    canonical: '/',
  })

  return (
    <div className="bg-background-light font-display text-[#191c1d] antialiased">
      <SiteHeader />

      <section className="relative min-h-[620px] overflow-hidden bg-[#f8f9fa] pt-20 lg:min-h-[870px] lg:pt-24">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-2">
          <div className="z-10">
            <span className="mb-4 inline-block rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-accent-green uppercase sm:px-4 sm:py-2 sm:text-[11px]">
              Premium Detailing Center
            </span>
            <h1 className="mb-4 text-3xl leading-[1.08] font-black tracking-tight text-[#191c1d] sm:mb-6 sm:text-5xl md:text-7xl">
              Dịch vụ <span className="text-primary">Chăm sóc Xe</span> <br /> Cao cấp Auto An Phú
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 sm:mb-10 sm:text-lg">
              Nâng tầm giá trị xế yêu với công nghệ Detailing chuẩn quốc tế. Tỉ mỉ trong từng chi tiết, cam kết vẻ đẹp hoàn mỹ và sự bảo vệ tối ưu.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a className="rounded-md bg-primary px-6 py-3 text-sm font-black tracking-wider text-white uppercase shadow-lg shadow-primary/20 transition-all hover:brightness-110 sm:px-8 sm:py-4 sm:text-base sm:tracking-widest" href="#home-contact-booking">
                Đặt lịch ngay
              </a>
              <Link
                className="rounded-md border-2 border-accent-green px-6 py-3 text-sm font-bold text-accent-green transition-all hover:bg-accent-green hover:text-white sm:px-8 sm:py-4 sm:text-base"
                to="/dich-vu/bang-gia"
              >
                Xem bảng giá
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-2xl lg:h-[716px]">
            <img alt="Premium car detailing process" className="h-full w-full object-cover" src={heroImage} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-3 sm:py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <a className="block overflow-hidden rounded-2xl shadow-lg" href="#home-contact-booking">
            <img alt="Banner khuyến mãi Auto An Phú" className="h-auto w-full object-contain" src={promoBannerImage} />
          </a>
        </div>
      </section>

      <section className="relative bg-[#f8f9fa] py-14 sm:py-20 lg:py-24" id="services">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:mb-16 md:flex-row md:items-end md:gap-8">
            <div>
              <h2 className="mb-3 text-3xl font-black tracking-tight text-slate-900 sm:mb-4 sm:text-4xl md:text-5xl">Dịch vụ chuyên nghiệp</h2>
              <div className="h-1.5 w-24 bg-primary" />
            </div>
            <p className="max-w-md text-sm text-slate-600 sm:text-base">
              Tiêu chuẩn chăm sóc xe hạng sang với quy trình khép kín và thiết bị tối tân nhất hiện nay.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="liquid-glass group rounded-2xl p-5 sm:p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary sm:mb-8 sm:h-16 sm:w-16">
                <span className="material-symbols-outlined text-4xl text-primary transition-colors group-hover:text-white">shield</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 sm:mb-4 sm:text-2xl">Phủ Ceramic Pro</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:mb-8 sm:text-base">
                Công nghệ phủ gốm tiên tiến giúp tăng độ bóng sâu, chống bám bẩn và bảo vệ nước sơn bền lâu.
              </p>
              <div className="mb-6 aspect-video overflow-hidden rounded-xl">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtS4qmhKiamO4kDYm8pxjpAPBmJvyWarYAUSs77gMeDMDIfpCIjulOWFZWU2A5Vx1teL2S-rrGWkNUiR9EhD7nAU3Ade62-hfeWU7s7LediV3wsuoNb8Sc2xnVxBddhk7XT9kn2QHm7QPuoidpZ48crsxEy_8NQNvTvfjYCezzVq_wKvfIDixDPFeqbnFaVTaHT41JHig-5ltzhLDa_iJGhVZjIyqfBcUs7pZyT9ENG_hhwUG-Nj8BW4BOOPF0rGybYM5ZXfUTu9M')",
                  }}
                />
              </div>
            </div>

            <div className="liquid-glass group rounded-2xl p-5 sm:p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary sm:mb-8 sm:h-16 sm:w-16">
                <span className="material-symbols-outlined text-4xl text-primary transition-colors group-hover:text-white">content_cut</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 sm:mb-4 sm:text-2xl">Dán Film PPF</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:mb-8 sm:text-base">
                Bảo vệ bề mặt sơn khỏi đá văng, tia UV và các tác động ngoại lực trong quá trình sử dụng hàng ngày.
              </p>
              <div className="mb-6 aspect-video overflow-hidden rounded-xl">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFYmcA4agUvr2bRc23v6jzXGmPJ3xuRnkgFQ56PcHv32omWYHoWebnxO2PN9uaf0aRgv_ijh0RW0aU1PpxEUiLhCSpgGy2uCQhf525bgZWECn32qmlDNZS7DJdlGaJm6RUwzyTQVeTNh29GBF_h76hN-hmYH-hnRel8jKaQx8YmP5Z99e8HKUqqNAD1vkJpLdkGPhuPfdQSJqnUJB0uEUUUy0NSyGz7ny0gMHG_gimP_lwoP75kkumYZ87A-TAN_sMz3QtTEKzisY')",
                  }}
                />
              </div>
            </div>

            <div className="liquid-glass group rounded-2xl p-5 sm:p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary sm:mb-8 sm:h-16 sm:w-16">
                <span className="material-symbols-outlined text-4xl text-primary transition-colors group-hover:text-white">auto_fix_high</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 sm:mb-4 sm:text-2xl">Vệ sinh nội thất</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:mb-8 sm:text-base">
                Làm sạch sâu khoang nội thất, khử mùi và dưỡng vật liệu da/nhựa giúp không gian xe luôn như mới.
              </p>
              <div className="mb-6 aspect-video overflow-hidden rounded-xl">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXFS2DLHJ-hwXDKUCY-o8fZ5AjbaAwDcf5NPgU0ld786RixZwEx31zdLhjsNeKZsbf_ToPc9MoFBv2ZeWtSTaXS7dKWqZbiBUvvBZNCOAHl9Cl_Fvl5nGpMz5s-LKFYOE9yxYibmHQN5MNn2N5R_arwAuSeYJJ7Aw-NVNzQpRmqw7TzBhiONRztJc9M6ECcRGAEHsxaJNvmy4VO3Kfbbg4O7ApnaBet8wc7ZvH6fQp1VOZm4-x7xyca5NiseWwKWBjK22rKhWb4Lg')",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f3f4f5] py-14 sm:py-20 lg:py-24" id="about">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAp7SaYs05YcnIA0GNyk5ff0ObOXJu6X1_MiAt5txSu0cJsu-0k2jG2jgZPCDHU-oUi9dHk0qfTp_W3CBcTf1SufAf4NW93Zg6n34dcgDu6QcAKwR0LubnNNhlS10ORi2lIZmR9eS52i1f8U07t4AA6CIFjQaCLqWLaKcBuTm1C7XSDrBUhw-aUmFmkA0nOytpGMKb3mKAUhts0fFOtKJPBPRymkCq5CokYKF4hxC5mYTBvoXVilAHceb7jc3lJOH9OmlSN_tmSz3I')",
                }}
              />
            </div>
            <div className="absolute -right-10 -bottom-10 hidden rounded-3xl bg-primary p-12 md:block">
              <span className="mb-2 block text-6xl font-black text-white">15+</span>
              <span className="text-sm font-bold tracking-widest text-white/80 uppercase">Năm kinh nghiệm</span>
            </div>
          </div>
          <div>
            <h2 className="mb-5 text-3xl font-black tracking-tight text-slate-900 sm:mb-8 sm:text-4xl md:text-5xl">Uy tín &amp; <br />Công nghệ vượt trội</h2>
            <p className="mb-6 text-base leading-relaxed text-slate-600 sm:mb-8 sm:text-lg">
              Auto An Phú tự hào là điểm đến tin cậy của cộng đồng yêu xe tại địa phương. Với đội ngũ kỹ thuật viên được đào tạo bài bản cùng hệ thống máy móc nhập khẩu từ Đức và Mỹ, chúng tôi cam kết mang lại sự an tâm tuyệt đối cho khách hàng.
            </p>
            <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span className="font-bold text-slate-900">Đội ngũ chuyên nghiệp</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
                <span className="font-bold text-slate-900">Thiết bị hiện đại</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">history</span>
                <span className="font-bold text-slate-900">Bảo hành dài hạn</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">thumb_up</span>
                <span className="font-bold text-slate-900">Hỗ trợ 24/7</span>
              </div>
            </div>
            <button
              className="rounded-lg bg-primary px-6 py-3 text-sm font-bold tracking-wider text-white uppercase transition-all hover:bg-primary/90 sm:px-8 sm:py-4 sm:text-base sm:tracking-widest"
              type="button"
            >
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] py-14 sm:py-20 lg:py-24" id="news">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-10 flex items-end justify-between sm:mb-16">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">Tin tức mới nhất</h2>
            <Link className="text-sm font-bold text-primary hover:underline sm:text-base" to="/tin-tuc">Xem tất cả</Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {latestNews.map((article) => (
              <Link key={article.slug} to={`/tin-tuc/${article.slug}`} className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <article className="p-4">
                  <div className="mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                    <img
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={article.image}
                    />
                  </div>
                  <span className="mb-3 block text-sm font-bold tracking-widest text-primary uppercase">{article.category}</span>
                  <h3 className="mb-4 text-xl leading-tight font-bold text-slate-900 transition-colors group-hover:text-primary">{article.title}</h3>
                  <p className="line-clamp-2 text-slate-600">{article.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f5] py-14 sm:py-20 lg:py-24" id="home-contact-booking">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="mb-3 text-3xl font-black tracking-tight text-slate-900 uppercase sm:mb-4 sm:text-4xl md:text-5xl">Liên hệ &amp; Đặt lịch</h2>
            <div className="mb-6 h-1.5 w-24 rounded-full bg-primary" />
            <p className="max-w-2xl text-base text-slate-600 italic sm:text-lg">
              Đặt lịch nhanh ngay trên trang chủ để được tư vấn và sắp xếp thời gian phù hợp nhất cho xe của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-8 lg:col-span-5">
              <div className="rounded-xl border border-primary/20 bg-white p-5 shadow-sm sm:p-8">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900">
                  <span className="material-symbols-outlined text-primary">contact_support</span>
                  Thông tin liên hệ
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                      <span className="material-symbols-outlined text-white">location_on</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Địa chỉ</p>
                      <p className="text-sm font-medium text-slate-800 sm:text-base">Số 4E /1 Đường DT743, Khu phố 1B, phường An Phú, Thành phố Thuận An, Bình Dương</p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                      <span className="material-symbols-outlined text-white">call</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Hotline đặt lịch</p>
                      <p className="text-base font-bold tracking-tight text-slate-900 sm:text-xl">0274 3800 940 - 0981 946 652</p>
                      <p className="text-sm font-medium text-slate-700">0969 757 101 - 0938 981 978</p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                      <span className="material-symbols-outlined text-white">mail</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Email hỗ trợ</p>
                      <p className="font-medium text-slate-800">autoanphu@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                      <span className="material-symbols-outlined text-white">language</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Website</p>
                      <p className="font-medium text-slate-800">autoanphu.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                className="group relative block h-[220px] w-full overflow-hidden rounded-xl border border-primary/20 grayscale contrast-125 shadow-2xl sm:h-[280px]"
                href="https://maps.app.goo.gl/iBLoGoeHVtrTeW9w7"
                rel="noreferrer"
                target="_blank"
              >
                <div className="pointer-events-none absolute inset-0 bg-primary/5" />
                <div
                  className="h-full w-full bg-cover bg-center bg-slate-200 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgr7parWm49rEpw1IC5s7VxZXkaKHmzDq8hvAj8heYYuVQvBcgpTWGOofIY2UUv6nlomnvzYYEruI9HfcJlAVbzTY0589Ovkis1Icm72JuPNtSkD8fWKCHGgrJhJ23elwH1q5pqDftkW-e8jfGg7GvEYcYzj1dE_1nAU3vQkN-387kRRQhIw6f4D0yTS3O50aRw-Gb5I_q-z90wztrVSPTJFEAdBCGX9onbjgeisHez6scySNwHv-b5DmDKU7F5Jaqw6AJzpxtSCo')",
                  }}
                />
                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-lg border border-primary/30 bg-white/95 p-3 backdrop-blur-sm">
                  <span className="text-xs font-medium text-slate-700">Mở trong Google Maps</span>
                  <span className="material-symbols-outlined text-sm text-primary">open_in_new</span>
                </div>
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-primary/20 bg-white p-5 shadow-xl sm:p-8 md:p-10">
                <h3 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">ĐẶT LỊCH HẸN TRỰC TUYẾN</h3>
                <p className="mb-8 text-slate-600">Vui lòng điền thông tin để chúng tôi chuẩn bị tốt nhất.</p>

                <form
                  action="https://formsubmit.co/garageotoanphu2024@gmail.com"
                  className="space-y-6"
                  method="POST"
                  target="_blank"
                >
                  <input type="hidden" name="_subject" value="Đặt lịch mới từ website Auto An Phú" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold tracking-wider text-slate-500 uppercase">Họ và Tên</label>
                      <input
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-primary focus:outline-none"
                        name="Họ và tên"
                        placeholder="Nhập tên của bạn"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold tracking-wider text-slate-500 uppercase">Số điện thoại</label>
                      <input
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-primary focus:outline-none"
                        name="Số điện thoại"
                        placeholder="090..."
                        required
                        type="tel"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold tracking-wider text-slate-500 uppercase">Chọn dịch vụ</label>
                    <select className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-primary focus:outline-none" name="Dịch vụ" required>
                      <option>Rửa xe chi tiết</option>
                      <option>Chăm sóc cơ bản</option>
                      <option>Chăm sóc khoang máy</option>
                      <option>Vệ sinh nội thất chi tiết</option>
                      <option>Hiệu chỉnh bề mặt sơn</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold tracking-wider text-slate-500 uppercase">Ngày hẹn</label>
                      <input className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-primary focus:outline-none" name="Ngày hẹn" required type="date" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold tracking-wider text-slate-500 uppercase">Khung giờ</label>
                      <select className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-primary focus:outline-none" name="Khung giờ" required>
                        <option>08:00 - 10:00</option>
                        <option>10:00 - 12:00</option>
                        <option>13:30 - 15:30</option>
                        <option>15:30 - 17:30</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold tracking-wider text-slate-500 uppercase">Thông tin xe (Hãng xe, Dòng xe)</label>
                    <input
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-primary focus:outline-none"
                      name="Thông tin xe"
                      placeholder="VD: Toyota Camry 2022, Biển số 51G-12345"
                      required
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold tracking-wider text-slate-500 uppercase">Yêu cầu thêm (nếu có)</label>
                    <textarea
                      className="custom-scrollbar w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-primary focus:outline-none"
                      name="Yêu cầu thêm"
                      placeholder="Mô tả thêm tình trạng xe hoặc yêu cầu đặc biệt"
                      rows="3"
                    />
                  </div>

                  <div className="pt-4">
                    <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-3.5 text-base font-black tracking-wider text-white uppercase shadow-lg shadow-primary/20 transition-all hover:bg-accent-red sm:py-4 sm:text-lg sm:tracking-widest" type="submit">
                      XÁC NHẬN ĐẶT LỊCH
                      <span className="material-symbols-outlined">send</span>
                    </button>
                    <p className="mt-4 text-center text-xs text-slate-500 italic">Nội dung sẽ được gửi tới email garageotoanphu2024@gmail.com.</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      <div className="fixed right-4 bottom-4 z-[100] md:right-8 md:bottom-8">
        <a
          aria-label="Mở chat Facebook"
          className="messenger-pulse flex h-14 w-14 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95 sm:h-16 sm:w-16"
          href="https://www.facebook.com/garage.an.phu.2024/"
          rel="noreferrer"
          target="_blank"
        >
          <svg className="h-8 w-8 sm:h-9 sm:w-9" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.508 3.734 7.263l-.01 2.548c-.004.37.387.633.722.473l2.86-1.37a10.05 10.05 0 0 0 2.694.364c5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.06 12.023l-2.585-2.754-5.045 2.754 5.548-5.89 2.656 2.754 4.974-2.754-5.548 5.89z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default App
