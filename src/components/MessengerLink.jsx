// src/components/MessengerLink.jsx
// Renders fb-messenger:// deep link on mobile, facebook.com/messages on desktop
// This way mobile opens the app, desktop opens the web version

const PAGE_ID = '761108637425192'
const USERNAME = 'garahebistro'

export const MOBILE_URL = `fb-messenger://user-thread/${PAGE_ID}`
export const DESKTOP_URL = `https://www.facebook.com/messages/t/${USERNAME}`

export default function MessengerLink({ className, children, text }) {
  const encodedText = text ? encodeURIComponent(text) : null

  const mobileHref = encodedText
    ? `${MOBILE_URL}?text=${encodedText}`
    : MOBILE_URL

  const desktopHref = encodedText
    ? `${DESKTOP_URL}?text=${encodedText}`
    : DESKTOP_URL

  return (
    <>
      {/* Mobile only */}
      
    <a href={mobileHref}
        className={`${className} md:hidden`}
    >
        {children}
    </a>

    {/* Desktop only */}
      
    <a href={desktopHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} hidden md:inline-flex`}
    >
       {children}
    </a>
    </>
  )
}