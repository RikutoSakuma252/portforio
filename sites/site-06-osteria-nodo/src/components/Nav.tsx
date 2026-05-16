import { useEffect, useState } from 'react'

const links = [
  { label: 'STORY',   href: '#story'   },
  { label: 'MENU',    href: '#menu'    },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'RESERVE', href: '#reserve' },
  { label: 'ACCESS',  href: '#access'  },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-nodo-bg/95 backdrop-blur-sm border-b border-nodo-accent/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-nodo-primary text-sm tracking-[0.3em]">
          OSTERIA NODO
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="font-display text-xs tracking-[0.2em] text-nodo-secondary hover:text-nodo-accent transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="メニューを開く"
        >
          <span className={`block w-6 h-px bg-nodo-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-nodo-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-nodo-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-nodo-bg/98 border-t border-nodo-accent/20 px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-sm tracking-[0.2em] text-nodo-secondary hover:text-nodo-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
