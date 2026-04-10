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

// Opens Messenger app on mobile, falls back to web on desktop
function openMessenger() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if (isMobile) {
    window.location.href = 'fb-messenger://user-thread/garahebistro'
    setTimeout(() => {
      window.open('https://m.me/garahebistro', '_blank')
    }, 1000)
  } else {
    window.open('https://www.facebook.com/messages/t/garahebistro', '_blank')
  }
}

export default function Hero() {
  const isOpen = useIsOpen()

  return (
    <header className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/img/bg.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/90" />

      {/* Content */}
      <div className="relative z-10 px-5 max-w-4xl mx-auto w-full">

        <FadeUp delay={0.1}>
          <span className="inline-block text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-5 border border-gold/40 px-4 py-1.5 rounded-full">
            Est. 2017 · Cotabato City
          </span>
        </FadeUp>

        <FadeUp delay={0.25}>
          {/* Bigger on mobile, massive on desktop */}
          <h1 className="font-display font-black text-white leading-[0.9] mb-3
            text-[clamp(4rem,18vw,9rem)]">
            Garahe
          </h1>
          <h1 className="font-display font-black text-gold leading-[0.9] mb-6
            text-[clamp(4rem,18vw,9rem)]">
            Bistro
          </h1>
        </FadeUp>

        <FadeUp delay={0.4}>
          <p className="text-neutral-300 text-base sm:text-lg max-w-sm sm:max-w-xl mx-auto mb-8 leading-relaxed">
            Cotabato's home of soulful Filipino comfort food
          </p>
        </FadeUp>

        <FadeUp delay={0.55}>
          {/* 2 buttons only — cleaner */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full max-w-sm sm:max-w-none mx-auto">
            
            <a href="#reserve"
              className="btn-gold w-full sm:w-auto justify-center text-sm py-3.5 px-7"
            >
              <CalendarIcon />
              Reserve a Table
            </a>
            
            <a href="#catering"
              className="btn-outline-gold w-full sm:w-auto justify-center text-sm py-3.5 px-7"
            >
              <CateringIcon />
              Catering Services
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.7}>
          <div className="mt-7">
            <span className={`inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full ${
              isOpen
                ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                : 'bg-red-500/20 text-red-300 border border-red-500/30'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
              {isOpen ? 'Open Now · Mon–Sat 10AM–10PM' : 'Closed · Open Mon–Sat 10AM–10PM'}
            </span>
          </div>
        </FadeUp>

      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </header>
  )
}

function CalendarIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function CateringIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 13h18M3 13a9 9 0 0118 0M3 13l1-4m17 4l-1-4M9 21h6M12 3v1" />
    </svg>
  )
}