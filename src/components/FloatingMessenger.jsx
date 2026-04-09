import { useState, useEffect } from 'react'

export default function FloatingMessenger() {
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`
          fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gold text-black 
          flex items-center justify-center shadow-lg
          hover:scale-110 transition-transform duration-300
          ${showBackTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Floating Messenger button */}
      <a
        href="https://www.facebook.com/messages/t/garahebistro"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-24 right-5 z-50 w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-xl
          bg-gradient-to-br from-[#00c6ff] to-[#0072ff]
          text-white text-2xl
          hover:scale-110 transition-transform duration-200
        "
        aria-label="Chat with us on Messenger"
        title="Order via Messenger"
      >
        <MessengerIcon />
      </a>
    </>
  )
}

function MessengerIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.47 5.558 3.773 7.28V22l3.446-1.896c.92.254 1.894.39 2.781.39 5.523 0 10-4.145 10-9.251C22 6.145 17.523 2 12 2zm1.05 12.45l-2.549-2.72-4.973 2.72 5.473-5.812 2.612 2.72 4.91-2.72-5.473 5.812z"/>
    </svg>
  )
}