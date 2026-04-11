import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { openContact, isMobile } from '../utils/messenger.js'

function FloatingButtons() {
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const floatingStyle = {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    zIndex: 99999,
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    background: isMobile()
      ? 'linear-gradient(135deg, #25D366, #128C7E)'   // green for SMS
      : 'linear-gradient(135deg, #00c6ff, #0072ff)',   // blue for Messenger
  }

  return (
    <>
      <button
        onClick={() => openContact(null)}
        className="messenger-pulse"
        style={floatingStyle}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Contact us"
        title="Contact Us"
      >
        {isMobile() ? <SMSIcon /> : <MessengerIcon />}
      </button>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 99999,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#FFC50C',
          color: '#000',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 3px 10px rgba(0,0,0,0.25)',
          transition: 'opacity 0.3s ease, transform 0.2s ease',
          opacity: showBackTop ? 1 : 0,
          pointerEvents: showBackTop ? 'auto' : 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Back to top"
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  )
}

export default function FloatingMessenger() {
  return createPortal(<FloatingButtons />, document.body)
}

function MessengerIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.47 5.558 3.773 7.28V22l3.446-1.896c.92.254 1.894.39 2.781.39 5.523 0 10-4.145 10-9.251C22 6.145 17.523 2 12 2zm1.05 12.45l-2.549-2.72-4.973 2.72 5.473-5.812 2.612 2.72 4.91-2.72-5.473 5.812z"/>
    </svg>
  )
}

function SMSIcon() {
  return (
    <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  )
}