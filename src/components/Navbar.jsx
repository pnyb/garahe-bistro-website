// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { useIsOpen } from '../hooks/useIsOpen.js'
import { openMessenger } from '../utils/messenger.js'
import { promoBanner } from '../data/menu.js'

const links = [
  { label: 'Menu',      href: '#menu' },
  { label: 'About',     href: '#about' },
  { label: 'Reviews',   href: '#reviews' },
  { label: 'Reserve',   href: '#reserve' },
  { label: 'Catering',  href: '#catering' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar({ bannerVisible }) {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const isOpen                      = useIsOpen()
  // const hasBanner                   = !!promoBanner

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const topOffset = bannerVisible ? 'top-8' : 'top-0'

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${topOffset} ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <img src="/img/logo2.png" alt="Garahe Bistro" className="h-10 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}

          {/* Open/Closed badge */}
          <span
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
              isOpen
                ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                : 'bg-red-500/20 text-red-400 border border-red-500/40'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}
            />
            {isOpen ? 'Open Now' : 'Closed'}
          </span>

          <button
            onClick={() => openMessenger(null)}
            className="btn-gold text-xs py-2 px-4"
          >
            <MessengerIcon />
            Message Us
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white focus:outline-none p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-black/95 backdrop-blur-md overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-4 px-6 pb-4">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link text-base"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <span
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
                isOpen
                  ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                  : 'bg-red-500/20 text-red-400 border border-red-500/40'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
              {isOpen ? 'Open Now' : 'Closed'}
            </span>
          </div>
          <button
            onClick={() => openMessenger(null)}
            className="btn-gold justify-center w-full"
          >
            <MessengerIcon />
            Message Us on Messenger
          </button>
        </div>
      </div>
    </nav>
  )
}

function MessengerIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.47 5.558 3.773 7.28V22l3.446-1.896c.92.254 1.894.39 2.781.39 5.523 0 10-4.145 10-9.251C22 6.145 17.523 2 12 2zm1.05 12.45l-2.549-2.72-4.973 2.72 5.473-5.812 2.612 2.72 4.91-2.72-5.473 5.812z"/>
    </svg>
  )
}
