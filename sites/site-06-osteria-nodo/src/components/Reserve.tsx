import { useInView } from '../hooks/useInView'

const hours = [
  { day: 'ランチ',  time: '12:00 — 14:30 L.O.',   days: '水〜日' },
  { day: 'ディナー', time: '18:00 — 21:00 L.O.',   days: '火〜日' },
  { day: '定休日',  time: '毎週月曜日',              days: '' },
]

export default function Reserve() {
  const { ref, inView } = useInView()

  return (
    <section id="reserve" className="bg-nodo-bg py-24 md:py-36 px-6 relative overflow-hidden">
      {/* Decorative background text */}
      <p
        className="absolute -right-8 top-1/2 -translate-y-1/2 font-display text-nodo-surface text-[12rem] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        RESERVE
      </p>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative max-w-3xl mx-auto text-center"
      >
        <p className={`reveal ${inView ? 'visible' : ''} font-display text-nodo-accent text-xs tracking-[0.4em] mb-3`}>
          RESERVATION
        </p>
        <h2 className={`reveal reveal-delay-1 ${inView ? 'visible' : ''} font-serif-en text-nodo-primary text-4xl md:text-5xl italic mb-5`}>
          特別な夜を、<br />ご一緒に。
        </h2>
        <span className={`reveal reveal-delay-1 ${inView ? 'visible' : ''} gold-rule`} />

        {/* Contact methods */}
        <div className={`reveal reveal-delay-2 ${inView ? 'visible' : ''} grid sm:grid-cols-2 gap-6 mt-14`}>
          <div className="border border-nodo-accent/30 p-8 flex flex-col gap-4 items-center">
            <svg className="w-8 h-8 text-nodo-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p className="font-display text-nodo-accent text-xs tracking-widest">PHONE</p>
            <p className="font-serif-en text-nodo-primary text-xl">03-6228-9147</p>
            <p className="font-jp text-nodo-secondary text-xs">営業時間内にお電話ください</p>
          </div>

          <div className="border border-nodo-accent/30 p-8 flex flex-col gap-4 items-center">
            <svg className="w-8 h-8 text-nodo-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="font-display text-nodo-accent text-xs tracking-widest">ONLINE</p>
            <a
              href="#"
              className="font-display text-xs tracking-[0.2em] text-nodo-accent border border-nodo-accent px-8 py-3 hover:bg-nodo-accent hover:text-nodo-bg transition-all duration-300"
            >
              WEB予約
            </a>
            <p className="font-jp text-nodo-secondary text-xs">24時間受付中</p>
          </div>
        </div>

        {/* Hours */}
        <div className={`reveal reveal-delay-3 ${inView ? 'visible' : ''} mt-12`}>
          <table className="w-full text-sm">
            <tbody>
              {hours.map(h => (
                <tr key={h.day} className="border-t border-nodo-accent/10">
                  <td className="font-display text-nodo-accent text-xs tracking-widest py-4 text-left w-24">{h.day}</td>
                  <td className="font-jp text-nodo-secondary py-4">{h.time}</td>
                  <td className="font-jp text-nodo-secondary/60 py-4 text-right text-xs">{h.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={`reveal ${inView ? 'visible' : ''} font-jp text-nodo-secondary/60 text-xs mt-8 tracking-wide`}>
          ※ 完全予約制・2名様〜承ります
        </p>
      </div>
    </section>
  )
}
