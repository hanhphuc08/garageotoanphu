import { Link } from 'react-router-dom'
import SiteFooter from './components/layout/SiteFooter.jsx'
import SiteHeader from './components/layout/SiteHeader.jsx'
import { newsArticles } from './data/newsArticles.js'

function App() {
  const latestNews = newsArticles.slice(0, 3)

  return (
    <div className="bg-background-dark font-display text-slate-100 antialiased">
      <SiteHeader />

      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-background-dark via-background-dark/60 to-transparent" />
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmu7FRnAJG59blxCHTMIKYSh_vSm6hWoHUzTok1TEn2YRYq7m11jTdmR7oH5tinATSrxfpoDLaJ8PSwrSNPNz5NZb3df3GV-2fEMRzJVx4mjj5ZzK27c5shviOwUtYVUN6yh3pkaCZ4GbZ0ScDSXsAiFPUcAx37qp1ibwvEGjy6IXhJvMJ2wgo6nmy5VdjfExP0X_C6mkaVFR-2YnbSsPIHvb5MZFa-rHKSSTqvgpudAxqhA6wugz72AGPCRSg1SMOOFhy90--3fo')",
            }}
          />
        </div>
        <div className="container relative z-20 mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Premium Garage Services
            </span>
            <h1 className="text-gradient mb-8 overflow-visible pt-3 text-4xl leading-[1.25] font-black uppercase italic sm:text-5xl sm:leading-[1.28] md:pt-4 md:text-7xl lg:text-8xl">
              NÂNG TẦM <br />TRẢI NGHIỆM <br />LÁI XE
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Đẳng cấp dịch vụ chăm sóc ô tô toàn diện. Chúng tôi kết hợp công nghệ hiện đại cùng sự tận tâm để xế yêu của bạn luôn như mới.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="rounded-lg bg-accent-red px-10 py-5 text-base font-black uppercase tracking-widest text-white shadow-2xl shadow-accent-red/20 transition-transform hover:-translate-y-1"
                href="#home-contact-booking"
              >
                Đặt lịch ngay
              </a>
              <Link
                className="rounded-lg border border-white/10 bg-white/5 px-10 py-5 text-base font-bold text-white backdrop-blur-md transition-colors hover:bg-white/10"
                to="/dich-vu/bang-gia"
              >
                Khám phá dịch vụ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-background-dark py-32" id="services">
        <div className="container mx-auto px-6">
          <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div>
              <h2 className="mb-4 text-4xl font-black uppercase italic md:text-5xl">Dịch vụ chuyên nghiệp</h2>
              <div className="h-1.5 w-24 bg-primary" />
            </div>
            <p className="max-w-md text-slate-400">
              Tiêu chuẩn chăm sóc xe hạng sang với quy trình khép kín và thiết bị tối tân nhất hiện nay.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="liquid-glass group rounded-2xl p-8">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <span className="material-symbols-outlined text-4xl text-primary transition-colors group-hover:text-white">cleaning_services</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Vệ sinh khoang máy</h3>
              <p className="mb-8 leading-relaxed text-slate-400">
                Làm sạch sâu các chi tiết máy bằng công nghệ hơi nước nóng, bảo vệ linh kiện điện tử.
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

            <div className="liquid-glass group rounded-2xl p-8">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <span className="material-symbols-outlined text-4xl text-primary transition-colors group-hover:text-white">shield</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Phủ gầm chống rỉ sét</h3>
              <p className="mb-8 leading-relaxed text-slate-400">
                Lớp bảo vệ hoàn hảo cho khung gầm, chống ăn mòn từ muối biển và tác động môi trường.
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

            <div className="liquid-glass group rounded-2xl p-8">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <span className="material-symbols-outlined text-4xl text-primary transition-colors group-hover:text-white">car_repair</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Phủ Ceramic xế yêu</h3>
              <p className="mb-8 leading-relaxed text-slate-400">
                Tạo hiệu ứng lá sen, bảo vệ nước sơn bóng bẩy như gương dưới mọi điều kiện thời tiết.
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

      <section className="relative py-32" id="about">
        <div className="container mx-auto grid grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
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
            <h2 className="mb-8 text-4xl font-black uppercase italic md:text-5xl">Uy tín &amp; <br />Công nghệ vượt trội</h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-400">
              Auto An Phú tự hào là điểm đến tin cậy của cộng đồng yêu xe tại địa phương. Với đội ngũ kỹ thuật viên được đào tạo bài bản cùng hệ thống máy móc nhập khẩu từ Đức và Mỹ, chúng tôi cam kết mang lại sự an tâm tuyệt đối cho khách hàng.
            </p>
            <div className="mb-12 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span className="font-bold">Đội ngũ chuyên nghiệp</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
                <span className="font-bold">Thiết bị hiện đại</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">history</span>
                <span className="font-bold">Bảo hành dài hạn</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">thumb_up</span>
                <span className="font-bold">Hỗ trợ 24/7</span>
              </div>
            </div>
            <button
              className="rounded-lg bg-primary px-8 py-4 font-bold tracking-widest text-white uppercase transition-all hover:bg-primary/90"
              type="button"
            >
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#0d1411] py-32" id="news">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex items-end justify-between">
            <h2 className="text-4xl font-black uppercase italic md:text-5xl">Tin tức mới nhất</h2>
            <Link className="font-bold text-primary hover:underline" to="/tin-tuc">Xem tất cả</Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {latestNews.map((article) => (
              <Link key={article.slug} to={`/tin-tuc/${article.slug}`} className="group block">
                <article>
                  <div className="mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                    <img
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={article.image}
                    />
                  </div>
                  <span className="mb-3 block text-sm font-bold tracking-widest text-primary uppercase">{article.category}</span>
                  <h3 className="mb-4 text-xl leading-tight font-bold transition-colors group-hover:text-primary">{article.title}</h3>
                  <p className="line-clamp-2 text-slate-500">{article.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-dark py-24" id="home-contact-booking">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <h2 className="mb-4 text-4xl font-black tracking-tighter text-slate-100 uppercase md:text-5xl">Liên hệ &amp; Đặt lịch</h2>
            <div className="mb-6 h-1.5 w-24 rounded-full bg-primary" />
            <p className="max-w-2xl text-lg text-slate-400 italic">
              Đặt lịch nhanh ngay trên trang chủ để được tư vấn và sắp xếp thời gian phù hợp nhất cho xe của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-8 lg:col-span-5">
              <div className="rounded-xl border border-primary/20 bg-primary/10 p-8">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-100">
                  <span className="material-symbols-outlined text-primary">contact_support</span>
                  Thông tin liên hệ
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                      <span className="material-symbols-outlined text-white">location_on</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Địa chỉ</p>
                      <p className="font-medium text-slate-100">Số 4E /1 Đường DT743, Khu phố 1B, phường An Phú, Thành phố Thuận An, Bình Dương</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                      <span className="material-symbols-outlined text-white">call</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Hotline đặt lịch</p>
                      <p className="text-xl font-bold tracking-tight text-slate-100">0274 3800 940 - 0981 946 652</p>
                      <p className="text-sm font-medium text-slate-300">0969 757 101 - 0938 981 978</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                      <span className="material-symbols-outlined text-white">mail</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Email hỗ trợ</p>
                      <p className="font-medium text-slate-100">autoanphu@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                      <span className="material-symbols-outlined text-white">language</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Website</p>
                      <p className="font-medium text-slate-100">autoanphu.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                className="group relative block h-[280px] w-full overflow-hidden rounded-xl border border-primary/20 grayscale contrast-125 shadow-2xl"
                href="https://maps.app.goo.gl/iBLoGoeHVtrTeW9w7"
                rel="noreferrer"
                target="_blank"
              >
                <div className="pointer-events-none absolute inset-0 bg-primary/5" />
                <div
                  className="h-full w-full bg-cover bg-center bg-slate-800 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgr7parWm49rEpw1IC5s7VxZXkaKHmzDq8hvAj8heYYuVQvBcgpTWGOofIY2UUv6nlomnvzYYEruI9HfcJlAVbzTY0589Ovkis1Icm72JuPNtSkD8fWKCHGgrJhJ23elwH1q5pqDftkW-e8jfGg7GvEYcYzj1dE_1nAU3vQkN-387kRRQhIw6f4D0yTS3O50aRw-Gb5I_q-z90wztrVSPTJFEAdBCGX9onbjgeisHez6scySNwHv-b5DmDKU7F5Jaqw6AJzpxtSCo')",
                  }}
                />
                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-lg border border-primary/30 bg-background-dark/90 p-3 backdrop-blur-sm">
                  <span className="text-xs font-medium text-slate-300">Mở trong Google Maps</span>
                  <span className="material-symbols-outlined text-sm text-primary">open_in_new</span>
                </div>
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl md:p-10">
                <h3 className="mb-2 text-2xl font-bold text-slate-100">ĐẶT LỊCH HẸN TRỰC TUYẾN</h3>
                <p className="mb-8 text-slate-400">Vui lòng điền thông tin để chúng tôi chuẩn bị tốt nhất.</p>

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
                      <label className="text-sm font-semibold tracking-wider text-slate-300 uppercase">Họ và Tên</label>
                      <input
                        className="w-full rounded-lg border border-white/10 bg-primary/5 px-4 py-3 text-slate-100 transition-colors focus:border-primary focus:outline-none"
                        name="Họ và tên"
                        placeholder="Nhập tên của bạn"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold tracking-wider text-slate-300 uppercase">Số điện thoại</label>
                      <input
                        className="w-full rounded-lg border border-white/10 bg-primary/5 px-4 py-3 text-slate-100 transition-colors focus:border-primary focus:outline-none"
                        name="Số điện thoại"
                        placeholder="090..."
                        required
                        type="tel"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold tracking-wider text-slate-300 uppercase">Chọn dịch vụ</label>
                    <select className="w-full appearance-none rounded-lg border border-white/10 bg-primary/5 px-4 py-3 text-slate-100 focus:border-primary focus:outline-none" name="Dịch vụ" required>
                      <option className="bg-background-dark">Rửa xe chi tiết</option>
                      <option className="bg-background-dark">Chăm sóc cơ bản</option>
                      <option className="bg-background-dark">Chăm sóc khoang máy</option>
                      <option className="bg-background-dark">Vệ sinh nội thất chi tiết</option>
                      <option className="bg-background-dark">Hiệu chỉnh bề mặt sơn</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold tracking-wider text-slate-300 uppercase">Ngày hẹn</label>
                      <input className="w-full rounded-lg border border-white/10 bg-primary/5 px-4 py-3 text-slate-100 transition-colors focus:border-primary focus:outline-none" name="Ngày hẹn" required type="date" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold tracking-wider text-slate-300 uppercase">Khung giờ</label>
                      <select className="w-full appearance-none rounded-lg border border-white/10 bg-primary/5 px-4 py-3 text-slate-100 focus:border-primary focus:outline-none" name="Khung giờ" required>
                        <option className="bg-background-dark">08:00 - 10:00</option>
                        <option className="bg-background-dark">10:00 - 12:00</option>
                        <option className="bg-background-dark">13:30 - 15:30</option>
                        <option className="bg-background-dark">15:30 - 17:30</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold tracking-wider text-slate-300 uppercase">Thông tin xe (Hãng xe, Dòng xe)</label>
                    <input
                      className="w-full rounded-lg border border-white/10 bg-primary/5 px-4 py-3 text-slate-100 transition-colors focus:border-primary focus:outline-none"
                      name="Thông tin xe"
                      placeholder="VD: Toyota Camry 2022, Biển số 51G-12345"
                      required
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold tracking-wider text-slate-300 uppercase">Yêu cầu thêm (nếu có)</label>
                    <textarea
                      className="custom-scrollbar w-full resize-none rounded-lg border border-white/10 bg-primary/5 px-4 py-3 text-slate-100 transition-colors focus:border-primary focus:outline-none"
                      name="Yêu cầu thêm"
                      placeholder="Mô tả thêm tình trạng xe hoặc yêu cầu đặc biệt"
                      rows="3"
                    />
                  </div>

                  <div className="pt-4">
                    <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-accent-red py-4 text-lg font-black tracking-widest text-white uppercase shadow-lg shadow-accent-red/20 transition-all hover:bg-[#b0001c]" type="submit">
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
