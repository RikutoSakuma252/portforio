'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { href: '/properties', label: '物件一覧' },
  { href: '/company',    label: '会社概要' },
  { href: '/contact',    label: 'お問い合わせ' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/97 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className={`font-cormorant text-xl font-light tracking-[0.25em] transition-colors duration-300 ${
              scrolled ? 'text-horizon-navy' : 'text-white'
            }`}
          >
            HORIZON
          </span>
          <span
            className={`font-sans-jp text-[9px] tracking-[0.4em] mt-0.5 transition-colors duration-300 ${
              scrolled ? 'text-horizon-muted' : 'text-white/65'
            }`}
          >
            不動産
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans-jp text-xs tracking-widest transition-colors duration-200 hover:text-horizon-gold ${
                scrolled ? 'text-horizon-text' : 'text-white/85'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/properties"
          className="hidden md:flex items-center gap-2 bg-horizon-gold hover:bg-horizon-gold-light transition-colors duration-200 text-white px-5 py-2.5 font-sans-jp text-xs tracking-widest"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          物件を探す
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span
            className={`block w-6 h-[1px] transition-all duration-300 ${scrolled ? 'bg-horizon-navy' : 'bg-white'} ${
              menuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1px] transition-all duration-200 ${scrolled ? 'bg-horizon-navy' : 'bg-white'} ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1px] transition-all duration-300 ${scrolled ? 'bg-horizon-navy' : 'bg-white'} ${
              menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="bg-white border-t border-horizon-border px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-sans-jp text-sm text-horizon-text hover:text-horizon-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/properties"
            className="mt-2 bg-horizon-gold text-white text-center py-3 font-sans-jp text-sm tracking-widest"
            onClick={() => setMenuOpen(false)}
          >
            物件を探す
          </Link>
        </div>
      </div>
    </header>
  );
}
