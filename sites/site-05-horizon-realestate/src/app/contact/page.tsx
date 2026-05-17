import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import ContactForm  from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'お問い合わせ | HORIZON不動産',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-horizon-bg pt-20">
      {/* Page header */}
      <div className="bg-horizon-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-cormorant text-horizon-gold text-sm italic tracking-[0.3em] mb-3">Contact</p>
          <h1 className="font-serif-jp text-3xl md:text-4xl font-light text-white">お問い合わせ</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: contact info */}
          <div className="lg:col-span-1">
            <ScrollReveal>
              <p className="font-cormorant text-horizon-gold text-sm italic tracking-widest mb-6">Get in touch</p>
              <h2 className="font-serif-jp text-xl font-light text-horizon-navy mb-6">
                まずはお気軽に<br />ご相談ください
              </h2>
              <div className="w-8 h-px bg-horizon-gold mb-8" />
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <div>
                  <p className="font-sans-jp text-[10px] tracking-widest text-horizon-gold mb-1">TEL</p>
                  <p className="font-cormorant text-2xl font-light text-horizon-navy tracking-widest">03-1234-5678</p>
                  <p className="font-sans-jp text-xs text-horizon-muted mt-1">9:00〜18:00（水・祝休）</p>
                </div>
                <div>
                  <p className="font-sans-jp text-[10px] tracking-widest text-horizon-gold mb-1">EMAIL</p>
                  <p className="font-sans-jp text-sm text-horizon-text">info@horizon-re.jp</p>
                </div>
                <div>
                  <p className="font-sans-jp text-[10px] tracking-widest text-horizon-gold mb-1">ADDRESS</p>
                  <p className="font-sans-jp text-sm text-horizon-text leading-relaxed">
                    〒154-0000<br />
                    東京都世田谷区三軒茶屋1-1-1<br />
                    HORIZONビル3F
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={150}>
              <div className="bg-white border border-horizon-border p-8 md:p-10">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
