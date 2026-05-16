import { useInView } from '../hooks/useInView'

export default function Story() {
  const { ref, inView } = useInView()

  return (
    <section id="story" className="bg-nodo-bg py-24 md:py-36 px-6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center"
      >
        {/* Image */}
        <div className={`reveal ${inView ? 'visible' : ''} relative`}>
          <img
            src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="山本誠司シェフが調理する様子"
            className="w-full h-[480px] object-cover object-center"
          />
          {/* Decorative gold frame offset */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-nodo-accent/40 -z-10" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <p className={`reveal reveal-delay-1 ${inView ? 'visible' : ''} font-display text-nodo-accent text-xs tracking-[0.4em]`}>
            CHEF'S STORY
          </p>
          <span className={`reveal reveal-delay-1 ${inView ? 'visible' : ''} gold-rule ml-0`} style={{ margin: 0 }} />
          <h2 className={`reveal reveal-delay-2 ${inView ? 'visible' : ''} font-serif-en text-nodo-primary text-3xl md:text-4xl italic leading-snug`}>
            素材と向き合い、<br />本質だけを皿に。
          </h2>
          <p className={`reveal reveal-delay-3 ${inView ? 'visible' : ''} font-jp text-nodo-secondary text-sm leading-8`}>
            OSTERIA NODOは、南イタリア・プーリア州の家庭料理に着想を得たリストランテです。
          </p>
          <p className={`reveal reveal-delay-3 ${inView ? 'visible' : ''} font-jp text-nodo-secondary text-sm leading-8`}>
            素材の声に耳を傾け、シンプルな調理でその本質を引き出すことを大切にしています。旬の国産食材と、代々受け継がれたイタリアの伝統技法が出会うとき、ひと皿に物語が生まれます。
          </p>
          <div className={`reveal reveal-delay-4 ${inView ? 'visible' : ''} pt-4 border-t border-nodo-accent/20`}>
            <p className="font-display text-nodo-primary text-sm tracking-widest">山本 誠司</p>
            <p className="font-jp text-nodo-secondary text-xs mt-1 tracking-wide">
              シェフ / イタリア・プーリア州にて10年修業。帰国後、都内複数のリストランテで料理長を歴任。2020年OSTERIA NODO開業。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
