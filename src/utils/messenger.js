export const CONTACT = {
  phone: '+639174009233',
  fbUsername: 'garahebistro',
  fbPageId: '761108637425192',
}

export function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
}

// Generic contact opener — SMS on mobile, Messenger on desktop
// text = pre-filled message (optional)
export function openContact(text) {
  if (isMobile()) {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
    const sep = isIOS ? '&' : '?'
    const body = text ? encodeURIComponent(text) : ''
    window.location.href = `sms:${CONTACT.phone}${body ? `${sep}body=${body}` : ''}`
  } else {
    const msg = text ? encodeURIComponent(text) : ''
    window.open(
      `https://www.facebook.com/messages/t/${CONTACT.fbUsername}${msg ? `?text=${msg}` : ''}`,
      '_blank'
    )
  }
}

// For plain anchor hrefs (non-JS buttons like navbar, promo banner)
export function getContactHref() {
  if (isMobile()) {
    return `sms:${CONTACT.phone}`
  }
  return `https://www.facebook.com/messages/t/${CONTACT.fbUsername}`
}