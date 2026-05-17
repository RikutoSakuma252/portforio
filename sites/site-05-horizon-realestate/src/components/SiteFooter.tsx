import Link from 'next/link';

const navLinks = [
  { href: '/properties', label: '物件一覧' },
  { href: '/company',    label: '会社概要' },
  { href: '/contact',    label: 'お問い合わせ' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-horizon-navy text-white">
      {/* Gold top line */}
      <div className="h-px bg-horizon-gold" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo + about */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <p className="font-cormorant text-xl font-light tracking-[0.25em] text-white">HORIZON</p>
              <p className="font-sans-jp text-[9px] tracking-[0.4em] text-white/50 mt-0.5">不動産</p>
            </div>
            <p className="font-sans-jp text-xs text-white/50 leading-loose">
              地域に根ざして20年。<br />あなたの大切な住まい探しを、<br />丁寧にサポートします。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-cormorant text-xs italic tracking-[0.3em] text-horizon-gold mb-5">Navigation</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-sans-jp text-xs text-white/60 hover:text-horizon-gold transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-cormorant text-xs italic tracking-[0.3em] text-horizon-gold mb-5">Contact</p>
            <p className="font-cormorant text-2xl font-light text-white tracking-widest mb-1">03-1234-5678</p>
            <p className="font-sans-jp text-[10px] text-white/50 mb-4">9:00〜18:00（水・祝休）</p>
            <p className="font-sans-jp text-xs text-white/50 leading-loose">
              〒154-0000<br />
              東京都世田谷区三軒茶屋1-1-1<br />
              HORIZONビル3F
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans-jp text-[10px] text-white/30">
            © {new Date().getFullYear()} HORIZON不動産 All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans-jp text-[10px] text-white/30 hover:text-white/60 transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="font-sans-jp text-[10px] text-white/30 hover:text-white/60 transition-colors">
              サイトマップ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
