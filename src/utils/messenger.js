import { FB_PAGE_ID, FB_USERNAME } from '../data/menu.js'

export function openMessenger(textMsg) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  if (isMobile) {
    const appUrl = `fb-messenger://user-thread/${FB_PAGE_ID}`
    const webUrl = textMsg
      ? `https://m.me/${FB_USERNAME}?text=${textMsg}`
      : `https://m.me/${FB_USERNAME}`

    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = appUrl
    document.body.appendChild(iframe)

    setTimeout(() => {
      document.body.removeChild(iframe)
      window.open(webUrl, '_blank')
    }, 1500)
  } else {
    const webUrl = textMsg
      ? `https://www.facebook.com/messages/t/${FB_USERNAME}?text=${textMsg}`
      : `https://www.facebook.com/messages/t/${FB_USERNAME}`
    window.open(webUrl, '_blank')
  }
}

export const MESSENGER_WEB_URL = `https://www.facebook.com/messages/t/garahebistro`
export const MESSENGER_ME_URL = `https://m.me/garahebistro`