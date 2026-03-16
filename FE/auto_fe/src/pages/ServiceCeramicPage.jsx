import SiteFooter from '../components/layout/SiteFooter.jsx'
import SiteHeader from '../components/layout/SiteHeader.jsx'

function ServiceCeramicPage() {
  return (
    <div className="min-h-screen bg-background-dark font-display text-slate-100">
      <SiteHeader />

      <main className="min-h-screen pt-20">
        <section className="hero-gradient relative px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-20 sm:pb-16">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="rounded-full bg-accent-red/20 px-4 py-1.5 text-sm font-bold tracking-widest text-accent-red uppercase">
              Premium Detailing
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">Bảng Giá Dịch Vụ</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 md:text-xl">
              Nâng tầm giá trị và vẻ đẹp cho xế yêu với các giải pháp chăm sóc xe toàn diện theo tiêu chuẩn quốc tế.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-bold text-white transition-all hover:shadow-lg hover:shadow-primary/20" type="button">
                <span className="material-symbols-outlined">support_agent</span>
                Tư vấn miễn phí
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-accent-red px-8 py-3 font-bold text-white transition-all hover:shadow-lg hover:shadow-accent-red/20" type="button">
                <span className="material-symbols-outlined">payments</span>
                Ưu đãi hôm nay
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 sm:py-12">
          <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6 md:p-8">
            <h3 className="mb-4 text-2xl font-black text-white">Loại xe áp dụng</h3>
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-background-dark/60 px-4 py-3 text-slate-200">
                <span className="material-symbols-outlined text-primary">directions_car</span>
                Small cars, sedan 4 chỗ
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-background-dark/60 px-4 py-3 text-slate-200">
                <span className="material-symbols-outlined text-primary">airport_shuttle</span>
                Big cars, 7 chỗ, bán tải, SUV
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-accent-red/40 bg-gradient-to-br from-primary/20 to-background-dark p-6 shadow-2xl shadow-accent-red/10 md:p-8">
            <h3 className="mb-6 text-2xl font-black text-white">Dịch vụ chính</h3>
            <div className="overflow-x-auto rounded-xl border border-accent-red/40 ring-1 ring-accent-red/20">
              <table className="min-w-full bg-background-dark/50 text-left text-sm text-slate-200">
                <thead className="bg-accent-red text-xs font-bold tracking-wider text-white uppercase">
                  <tr>
                    <th className="px-4 py-4">Dịch vụ</th>
                    <th className="px-4 py-4">Small cars</th>
                    <th className="px-4 py-4">Big cars</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/15">
                  <tr>
                    <td className="px-4 py-4 font-semibold">Rửa xe chi tiết</td>
                    <td className="px-4 py-4">70.000</td>
                    <td className="px-4 py-4">90.000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold">Chăm sóc cơ bản</td>
                    <td className="px-4 py-4">450.000</td>
                    <td className="px-4 py-4">550.000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold">Chăm sóc khoang máy</td>
                    <td className="px-4 py-4">400.000 – 600.000</td>
                    <td className="px-4 py-4">500.000 – 700.000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold">Vệ sinh nội thất chi tiết</td>
                    <td className="px-4 py-4">1.200.000 – 1.500.000</td>
                    <td className="px-4 py-4">1.400.000 – 1.700.000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold">Hiệu chỉnh bề mặt sơn – đánh bóng</td>
                    <td className="px-4 py-4">1.500.000 – 2.500.000</td>
                    <td className="px-4 py-4">2.000.000 – 3.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6 md:p-8">
            <h3 className="mb-6 text-2xl font-black text-white">Chi tiết dịch vụ</h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <article className="rounded-xl border border-primary/20 bg-background-dark/50 p-5">
                <h4 className="mb-3 text-lg font-bold text-white">Rửa xe chi tiết</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>Rửa xịt gầm &amp; dưỡng mâm lốp</li>
                  <li>Vệ sinh nội thất khô</li>
                </ul>
              </article>

              <article className="rounded-xl border border-primary/20 bg-background-dark/50 p-5">
                <h4 className="mb-3 text-lg font-bold text-white">Chăm sóc cơ bản</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>Rửa xe chi tiết</li>
                  <li>Clay đất sét bề mặt sơn</li>
                  <li>Wax tạo bóng và bảo vệ sơn</li>
                  <li>Làm nhanh nội thất</li>
                </ul>
              </article>

              <article className="rounded-xl border border-primary/20 bg-background-dark/50 p-5">
                <h4 className="mb-3 text-lg font-bold text-white">Chăm sóc khoang máy</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>Vệ sinh chi tiết khoang máy</li>
                  <li>Xì khô &amp; bảo dưỡng</li>
                  <li>Tùy theo tình trạng xe</li>
                </ul>
              </article>

              <article className="rounded-xl border border-primary/20 bg-background-dark/50 p-5">
                <h4 className="mb-3 text-lg font-bold text-white">Vệ sinh nội thất chi tiết</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>Rửa vỏ + vệ sinh nội thất</li>
                  <li>Nhanh + vệ sinh cốp, sàn, bánh</li>
                  <li>Dưỡng phục hồi các chi tiết</li>
                </ul>
              </article>
            </div>
          </div>

          <div className="rounded-2xl border border-accent-red/40 bg-gradient-to-br from-primary/20 to-background-dark p-6 shadow-2xl shadow-accent-red/10 md:p-8">
            <h3 className="mb-6 text-2xl font-black text-white">Dịch vụ khác</h3>
            <div className="overflow-x-auto rounded-xl border border-accent-red/40 ring-1 ring-accent-red/20">
              <table className="min-w-full bg-background-dark/50 text-left text-sm text-slate-200">
                <thead className="bg-accent-red text-xs font-bold tracking-wider text-white uppercase">
                  <tr>
                    <th className="px-4 py-4">Dịch vụ</th>
                    <th className="px-4 py-4">Small cars</th>
                    <th className="px-4 py-4">Big cars</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/15">
                  <tr>
                    <td className="px-4 py-4 font-semibold">Tẩy ố kính</td>
                    <td className="px-4 py-4">600.000 – 1.000.000</td>
                    <td className="px-4 py-4">700.000 – 1.200.000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold">Tẩy bụi sơn trên kính</td>
                    <td className="px-4 py-4">300.000 – 600.000</td>
                    <td className="px-4 py-4">400.000 – 700.000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold">Tẩy bụi sơn trên sơn</td>
                    <td className="px-4 py-4">500.000 – 1.000.000</td>
                    <td className="px-4 py-4">600.000 – 1.200.000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold">Tẩy keo nhựa đường</td>
                    <td className="px-4 py-4">150.000 – 500.000</td>
                    <td className="px-4 py-4">250.000 – 600.000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold">Phủ gầm chống rỉ sét</td>
                    <td className="px-4 py-4">500.000 / 1 chai</td>
                    <td className="px-4 py-4">500.000 / 1 chai</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-accent-red/30 bg-accent-red/10 px-4 py-3 text-white">
              <span className="material-symbols-outlined text-accent-red">call</span>
              <p className="text-sm font-semibold md:text-base">Hotline: 0274 3800 940 - 0981 946 652 - 0969 757 101 - 0938 981 978</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
          <div className="rounded-3xl border border-primary/10 bg-primary/5 p-10 md:p-16">
            <h2 className="mb-10 flex items-center gap-4 text-2xl font-black text-white sm:text-3xl">
              <span className="h-1 w-12 rounded-full bg-accent-red" />
              Quy trình dịch vụ tiêu chuẩn
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <div className="group relative">
                <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary/20 text-accent-red transition-all duration-300 group-hover:bg-accent-red group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">assignment_late</span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-white">Tiếp nhận &amp; Kiểm tra</h4>
                <p className="text-sm leading-relaxed text-slate-400">Sử dụng máy đo chuyên dụng để kiểm tra tình trạng bề mặt sơn và nội thất xe.</p>
                <div className="absolute top-8 -right-4 hidden text-primary/30 lg:block"><span className="material-symbols-outlined text-2xl">arrow_forward</span></div>
              </div>

              <div className="group relative">
                <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary/20 text-accent-red transition-all duration-300 group-hover:bg-accent-red group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">lightbulb</span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-white">Tư vấn giải pháp</h4>
                <p className="text-sm leading-relaxed text-slate-400">Đề xuất gói dịch vụ tối ưu dựa trên nhu cầu thực tế và ngân sách của khách hàng.</p>
                <div className="absolute top-8 -right-4 hidden text-primary/30 lg:block"><span className="material-symbols-outlined text-2xl">arrow_forward</span></div>
              </div>

              <div className="group relative">
                <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary/20 text-accent-red transition-all duration-300 group-hover:bg-accent-red group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">construction</span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-white">Thực hiện dịch vụ</h4>
                <p className="text-sm leading-relaxed text-slate-400">Đội ngũ kỹ thuật viên tay nghề cao thực hiện quy trình theo tiêu chuẩn khắt khe.</p>
                <div className="absolute top-8 -right-4 hidden text-primary/30 lg:block"><span className="material-symbols-outlined text-2xl">arrow_forward</span></div>
              </div>

              <div className="group relative">
                <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary/20 text-accent-red transition-all duration-300 group-hover:bg-accent-red group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-white">Bàn giao &amp; Bảo hành</h4>
                <p className="text-sm leading-relaxed text-slate-400">Kiểm tra QC cuối cùng, kích hoạt bảo hành điện tử và hướng dẫn chăm sóc xe.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary to-background-dark p-8 sm:p-12">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&fit=crop')] bg-cover opacity-10" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl font-black text-white sm:text-4xl">Bạn chưa chọn được gói phù hợp?</h2>
              <p className="mx-auto max-w-xl text-slate-300">Hãy để chuyên gia của chúng tôi hỗ trợ bạn chọn giải pháp chăm sóc xe tốt nhất cho dòng xe của bạn.</p>
              <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
                <a className="flex items-center justify-center gap-3 rounded-xl bg-accent-red px-10 py-4 text-lg font-black text-white transition-all hover:bg-red-800" href="tel:0981946652">
                  <span className="material-symbols-outlined">call</span>
                  0981 946 652
                </a>
                <button className="flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-10 py-4 text-lg font-black text-white transition-all hover:bg-white/20" type="button">
                  <span className="material-symbols-outlined">chat_bubble</span>
                  Nhắn tin Zalo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default ServiceCeramicPage
