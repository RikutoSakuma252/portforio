import { useInView } from '../hooks/useInView'

export default function Access() {
  const { ref, inView } = useInView()

  return (
    <section id="access" className="bg-nodo-light py-24 md:py-36 px-6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-5xl mx-auto"
      >
        <div className={`reveal ${inView ? 'visible' : ''} text-center mb-14`}>
          <p className="font-display text-nodo-bg/50 text-xs tracking-[0.4em] mb-3">ACCESS</p>
          <h2 className="font-serif-en text-nodo-bg text-4xl md:text-5xl italic">Access</h2>
          <span className="gold-rule mt-5" style={{ background: '#c9a84c' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Map embed */}
          <div className={`reveal ${inView ? 'visible' : ''}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.488785765756!2d139.76313931525935!3d35.67170898019484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be718c7bceb%3A0xa990b7d36c2feabf!2z6YqA5bqV!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
              className="w-full h-72 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OSTERIA NODO アクセスマップ"
            />
          </div>

          {/* Info */}
          <div className={`reveal reveal-delay-1 ${inView ? 'visible' : ''} flex flex-col gap-8`}>
            {[
              {
                label: '住所',
                value: '東京都中央区銀座3-5-12 NODOビル2F',
              },
              {
                label: 'アクセス',
                value: '東京メトロ銀座線「銀座」駅 B4出口 徒歩3分 / 都営浅草線「東銀座」駅 A1出口 徒歩5分',
              },
              {
                label: 'TEL',
                value: '03-6228-9147',
              },
            ].map(item => (
              <div key={item.label} className="border-b border-nodo-bg/10 pb-6">
                <p className="font-display text-nodo-bg/50 text-xs tracking-widest mb-2">{item.label}</p>
                <p className="font-jp text-nodo-bg text-sm leading-7">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
