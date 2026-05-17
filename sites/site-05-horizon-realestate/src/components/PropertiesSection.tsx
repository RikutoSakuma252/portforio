import Link from 'next/link';
import type { Property } from '@/lib/properties';
import PropertyCard  from './PropertyCard';
import ScrollReveal  from './ScrollReveal';

export default function PropertiesSection({ properties }: { properties: Property[] }) {
  return (
    <section className="bg-horizon-light py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <ScrollReveal>
            <p className="font-cormorant text-horizon-gold text-sm italic tracking-[0.3em] mb-3">
              Pickup Properties
            </p>
            <h2 className="font-serif-jp text-2xl md:text-4xl font-light text-horizon-navy">
              おすすめ物件
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 font-sans-jp text-xs tracking-widest text-horizon-navy border-b border-horizon-gold pb-0.5 hover:text-horizon-gold transition-colors duration-200"
            >
              すべての物件を見る
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.slice(0, 3).map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 100}>
              <PropertyCard property={p} />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="mt-12 text-center">
          <Link
            href="/properties"
            className="inline-flex items-center gap-3 bg-horizon-navy hover:bg-horizon-navy-light transition-colors duration-200 text-white px-8 py-4 font-sans-jp text-sm tracking-widest"
          >
            物件一覧をすべて見る
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
