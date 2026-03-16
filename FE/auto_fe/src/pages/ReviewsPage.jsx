import { Link } from 'react-router-dom'
import SiteFooter from '../components/layout/SiteFooter.jsx'
import SiteHeader from '../components/layout/SiteHeader.jsx'

function ReviewsPage() {
  const featuredReviews = [
    {
      name: 'VietLinh Pham',
      time: '11 tháng trước',
      review:
        'Rất hài lòng khi trải nghiệm các dịch vụ vệ sinh bảo dưỡng tại gara Auto An Phú. 10* cho chất lượng dịch vụ nhé mọi người.',
    },
    {
      name: 'TVPaint Info',
      time: '10 tháng trước',
      review: 'Rất hài lòng, nhân viên nhiệt tình, vệ sinh xe sạch sẽ.',
    },
    {
      name: 'cong nghe so manh thien',
      time: '2 năm trước',
      review:
        'Gara làm việc rất bài bản hệ thống- nhân viên vui vẻ nhiệt tình - tận tâm với khách! Sẽ tiếp tục ủng hộ và giới thiệu bạn bè tới gara auto an phú- vote 5*',
    },
    {
      name: 'Văn Lê',
      time: '6 tháng trước',
      review: 'Được bạn giới thiệu. Tư vấn nhiệt tình, chăm sóc khách hàng chu đáo. 10 điểm.',
    },
    {
      name: 'Cotto Binhduong',
      time: '11 tháng trước',
      review: 'Nhân viên nhiệt tình chu đáo, vệ sinh xe cẩn thận, sạch sẽ.',
    },
    {
      name: 'Hoàng Thiên',
      time: '10 tháng trước',
      review: 'Gara sửa chữa uy tín - chất lượng phục vụ tốt nhé ạ.',
    },
    {
      name: 'Thanh Cuong Nguyen',
      time: '2 tháng trước',
      review: 'Trải nghiệm tuyệt vời.',
    },
    {
      name: 'Phong Phan thanh',
      time: '2 năm trước',
      review: 'Rất chuyên nghiệp, dịch vụ tuyệt vời.',
    },
    {
      name: 'duong nguyen danh',
      time: '9 tháng trước',
      review: 'Rất ok.',
    },
    {
      name: 'Luong Phan',
      time: '2 năm trước',
      review: 'Chuyên nghiệp giá cả hợp lý.',
    },
    {
      name: 'kim phat',
      time: 'một năm trước',
      review: 'Dịch vụ chuyên nghiệp. Nhân viên nhiệt tình.',
    },
    {
      name: 'Minh Nguyễn Quang',
      time: '2 năm trước',
      review: 'Rửa xe sạch chỉ 70k.',
    },
    {
      name: 'Workshop Hoàng Ngọc',
      time: '2 năm trước',
      review: 'Dịch vụ tuyệt vời! Giá hợp lý, phục vụ tận tình chu đáo!',
    },
  ]

  return (
    <div className="bg-background-dark font-display text-slate-100 antialiased">
      <SiteHeader />

      <main className="w-full pt-20">
        <section className="relative overflow-hidden py-14 sm:py-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-background-dark/60 to-background-dark" />
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvdj7Sero9h4x7Cd30t4aYvQFMG86bH0MfuYh1ON5RODWDIVxQPH3Ymvf0dQf0wLWBOO3zhVNz-UMwQgAoQrjLhfxdJ385n7EGewdSnmVBWgmPnoDcWRTWHhAz7oNnSGrA-a5pi5o7D6RxYgMh9j0i0iEM5YXXY_kmc79GwuDhxzX-iBCjHpX8E9ZRrWfWGxDk7btKRJbkfl5HA97Di8zUNg-4EaM1cR49VlgIBoo2JGF25D471I4uT078A1BGQBs-S0mD0eLsL-A')",
              }}
            />
          </div>
          <div className="relative z-20 mx-auto max-w-7xl px-4 text-center">
            <h1 className="mb-6 text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
              Trải Nghiệm <span className="text-crimson">Đẳng Cấp</span> Từ Khách Hàng
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-base text-slate-400 sm:text-lg">
              Hơn 1000+ chủ xe hạng sang đã tin tưởng giao phó xế cưng cho đội ngũ chuyên gia tại Auto An Phú.
            </p>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
              <div className="glass-card rounded-xl border-l-4 border-primary p-6 sm:p-8">
                <div className="mb-2 text-4xl font-black text-slate-100 sm:text-5xl">4.9/5</div>
                <div className="mb-2 flex justify-center gap-1 text-yellow-500">
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star_half</span>
                </div>
                <p className="text-sm tracking-widest text-slate-400 uppercase">Điểm đánh giá trung bình</p>
              </div>
              <div className="glass-card rounded-xl border-l-4 border-crimson p-6 sm:p-8">
                <div className="mb-2 text-4xl font-black text-slate-100 sm:text-5xl">125</div>
                <div className="mb-2 flex justify-center gap-1 text-crimson">
                  <span className="material-symbols-outlined">rate_review</span>
                </div>
                <p className="text-sm tracking-widest text-slate-400 uppercase">Đánh giá đã xác thực</p>
              </div>
              <div className="glass-card rounded-xl border-l-4 border-primary p-6 sm:p-8">
                <div className="mb-2 text-4xl font-black text-slate-100 sm:text-5xl">99%</div>
                <div className="mb-2 flex justify-center gap-1 text-primary">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <p className="text-sm tracking-widest text-slate-400 uppercase">Khách hàng hài lòng</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredReviews.map((item) => (
              <div key={item.name} className="glass-card flex h-full flex-col rounded-xl border border-white/10 p-6 transition-colors hover:border-primary/40">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-slate-100">{item.name}</h4>
                    <p className="text-xs text-slate-500 italic">Google Review • {item.time}</p>
                  </div>
                  <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm fill-1">star</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">“{item.review}”</p>
              </div>
            ))}
          </div>

        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="crimson-gradient relative overflow-hidden rounded-2xl p-10 text-center md:p-16">
            <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-10">
              <span className="material-symbols-outlined absolute -top-10 -left-20 rotate-12 text-[300px]">directions_car</span>
            </div>
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-black md:text-5xl">Bạn Đã Sẵn Sàng Để Xế Cưng Tỏa Sáng?</h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
                Hãy để Auto An Phú mang đến cho chiếc xe của bạn sự chăm sóc tận tâm và chuyên nghiệp nhất. Đặt lịch ngay hôm nay!
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link className="rounded-xl bg-primary px-10 py-4 text-center text-lg font-bold text-white shadow-xl transition-all hover:bg-primary/80" to="/#home-contact-booking">Đặt lịch hẹn ngay</Link>
                <Link className="rounded-xl border border-white/20 bg-white/10 px-10 py-4 text-center text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20" to="/dich-vu/bang-gia">Xem bảng giá dịch vụ</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default ReviewsPage
