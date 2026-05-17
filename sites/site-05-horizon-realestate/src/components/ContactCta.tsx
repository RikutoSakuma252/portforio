import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function ContactCta() {
  return (
    <section className="bg-horizon-light py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <ScrollReveal>
          <div className="w-px h-12 bg-horizon-gold mx-auto mb-8" />
          <p className="font-cormorant text-horizon-gold text-sm italic tracking-[0.3em] mb-4">Contact</p>
          <h2 className="font-serif-jp text-2xl md:text-4xl font-light text-horizon-navy mb-6 leading-snug">
            まずは、お気軽に<br />ご相談ください
          </h2>
          <p className="font-sans-jp text-sm text-horizon-muted leading-[2] mb-10 max-w-md mx-auto">
            物件探しのご相談から資産運用まで、専任の担当者が丁寧にご対応いたします。どんな小さな疑問でもお気軽にどうぞ。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {/* Phone */}
          <p className="font-cormorant text-4xl font-light text-horizon-navy tracking-[0.2em] mb-2">
            03-1234-5678
          </p>
          <p className="font-sans-jp text-xs text-horizon-muted mb-8">
            営業時間 9:00〜18:00（水曜・祝日休み）
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-horizon-navy hover:bg-horizon-navy-light transition-colors text-white px-8 py-4 font-sans-jp text-sm tracking-widest"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              お問い合わせフォーム
            </Link>
            <Link
              href="/properties"
              className="flex items-center justify-center gap-2 border border-horizon-navy hover:border-horizon-gold hover:text-horizon-gold transition-colors text-horizon-navy px-8 py-4 font-sans-jp text-sm tracking-widest"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              物件を探す
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
