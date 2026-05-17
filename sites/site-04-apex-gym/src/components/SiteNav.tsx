import { useState, useEffect } from 'react';

const links = [
  { href: '#program', label: 'PROGRAM' },
  { href: '#why',     label: 'WHY APEX' },
  { href: '#trainer', label: 'TRAINER' },
  { href: '#price',   label: 'PRICE' },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-apex-bg/96 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-oswald text-lg tracking-[0.35em] font-bold text-apex-primary">
          APEX <span className="text-apex-accent">GYM</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="font-barlow text-[11px] tracking-[0.25em] text-apex-secondary hover:text-apex-primary transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#cta"
          className="hidden md:block bg-apex-accent hover:bg-apex-accent-dark transition-colors duration-200 px-5 py-2 font-oswald text-[11px] tracking-[0.2em] text-white"
        >
          無料体験
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span
            className={`block w-6 h-[1px] bg-apex-primary transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1px] bg-apex-primary transition-all duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1px] bg-apex-primary transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <div className="bg-apex-surface border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-oswald text-sm tracking-[0.25em] text-apex-primary"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#cta"
            className="mt-2 bg-apex-accent text-center px-4 py-3 font-oswald text-sm tracking-[0.2em] text-white"
            onClick={() => setMenuOpen(false)}
          >
            無料体験を申し込む
          </a>
        </div>
      </div>
    </nav>
  );
}
