'use client';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: '機能', href: '#features' },
  { label: '料金', href: '#pricing' },
  { label: '導入事例', href: '#testimonials' },
  { label: 'ブログ', href: '#' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-fl-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-fl-brand to-fl-accent flex items-center justify-center shadow-sm">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2 7.5L6 11.5L13 3.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-bold text-xl text-fl-primary tracking-tight">Flowly</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-fl-muted hover:text-fl-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-medium text-fl-muted hover:text-fl-primary transition-colors duration-200"
          >
            ログイン
          </a>
          <a
            href="#"
            className="bg-fl-brand hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
          >
            無料で始める
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-fl-muted hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className="block h-0.5 bg-current transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'rotate(45deg) translate(0, 8px)' : '' }}
            />
            <span
              className="block h-0.5 bg-current transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 bg-current transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'rotate(-45deg) translate(0, -8px)' : '' }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-fl-border transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2.5 text-fl-text hover:text-fl-brand transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-3 border-t border-fl-border flex flex-col gap-2.5">
            <a href="#" className="text-center py-2.5 text-fl-muted font-medium">
              ログイン
            </a>
            <a
              href="#"
              className="bg-fl-brand text-white text-center py-3 rounded-xl font-semibold"
            >
              無料で始める
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
