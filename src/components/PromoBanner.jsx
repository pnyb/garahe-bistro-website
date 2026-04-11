import { promoBanner } from '../data/menu.js'

export default function PromoBanner({ visible, onDismiss }) {
  if (!promoBanner || !visible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gold text-black text-sm font-semibold flex items-center justify-between px-4 py-2 gap-4">
      <div className="flex-1 text-center">
        <span>{promoBanner.text}</span>
        <a href="https://www.facebook.com/garahebistro/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 underline underline-offset-2 hover:opacity-70 transition-opacity font-semibold"
        >
          {promoBanner.cta} →
        </a>
      </div>
      <button
        onClick={onDismiss}
        className="text-black/60 hover:text-black transition-colors shrink-0 text-lg leading-none"
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  )
}