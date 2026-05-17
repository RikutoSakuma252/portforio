const navItems = [
  { href: '#program', label: 'PROGRAM' },
  { href: '#why',     label: 'WHY APEX' },
  { href: '#trainer', label: 'TRAINER' },
  { href: '#price',   label: 'PRICE' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-apex-bg border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-10">
          {/* Logo + address */}
          <div>
            <p className="font-oswald text-xl tracking-[0.3em] font-bold text-apex-primary mb-2">
              APEX <span className="text-apex-accent">GYM</span>
            </p>
            <p className="font-jp text-apex-secondary text-xs leading-loose">
              〒104-0061 東京都中央区銀座1-1-1 APEXビル2F<br />
              TEL: 03-1234-5678<br />
              営業時間: 6:00〜23:00（年中無休）
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-barlow text-[11px] tracking-[0.25em] text-apex-secondary hover:text-apex-primary transition-colors duration-200 w-fit"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div>
            <p className="font-jp text-apex-secondary text-xs mb-4">
              まずは無料体験から始めませんか？<br />
              あなたの目標に向けて、一緒にスタートしましょう。
            </p>
            <a
              href="#cta"
              className="inline-block bg-apex-accent hover:bg-apex-accent-dark transition-colors duration-200 px-6 py-3 font-oswald text-[11px] tracking-[0.2em] text-white"
            >
              無料体験を申し込む
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-barlow text-apex-muted text-xs">
            © {new Date().getFullYear()} APEX GYM. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-barlow text-[10px] tracking-wider text-apex-muted hover:text-apex-secondary transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="font-barlow text-[10px] tracking-wider text-apex-muted hover:text-apex-secondary transition-colors">
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
