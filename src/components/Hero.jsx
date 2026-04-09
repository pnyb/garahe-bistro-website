// src/components/Hero.jsx
import { useIsOpen } from '../hooks/useIsOpen.js'


function FadeUp({ delay = 0, children, className = '' }) {
  return (
    <div
      className={`animate-fade-up opacity-0 ${className}`}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  )
}

export default function Hero() {
  const isOpen = useIsOpen()

  return (
    <header className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/img/bg.jpg')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85" />

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto">

        <FadeUp delay={0.1}>
          <span className="inline-block text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4 border border-gold/40 px-4 py-1 rounded-full">
            Est. 2017 · Cotabato City
          </span>
        </FadeUp>

        <FadeUp delay={0.25}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-4">
            Garahe<br />
            <span className="text-gold">Bistro</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.4}>
          <p className="text-neutral-300 text-lg md:text-xl max-w-xl mx-auto mb-8">
            Cotabato's home of soulful Filipino comfort food
          </p>
        </FadeUp>

        <FadeUp delay={0.55}>
          {/* <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a href="#reserve" className="btn-gold text-base px-8 py-3.5">
              <CalendarIcon />
              Reserve a Table
            </a>
            <a href="#menu" className="btn-outline text-base px-8 py-3.5">
              See Our Menu
            </a>
          </div> */}
          
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  {/* Primary: Reserve */}
  <a href="#reserve" className="btn-gold flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-8">
    <CalendarIcon />
    Reserve a Table
  </a>

  {/* Secondary: Menu */}
  <a href="#menu" className="btn-outline flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-8">
    See Our Menu
  </a>

  {/* Accent: Catering */}
  <a href="#catering" className="btn-outline-gold flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-8">
    🍽️ Catering Services
  </a>
</div>
        </FadeUp>

        {/* <FadeUp delay={0.7}>
          <div className="mt-8">
            <span className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full ${
              isOpen
                ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                : 'bg-red-500/20 text-red-300 border border-red-500/30'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
              {isOpen ? 'We are Open Right Now' : 'Currently Closed — Open Mon–Sat 10AM–10PM'}
            </span>
          </div>
        </FadeUp> */}

      </div>

     
    </header>
  )
}

function CalendarIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}
