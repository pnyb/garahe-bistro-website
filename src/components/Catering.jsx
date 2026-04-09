// src/components/Catering.jsx
import { useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp.js'
import { cateringPackages, cateringMenu } from '../data/menu.js'

const CATEGORY_ICONS = {
  Chicken: '🍗',
  Beef:    '🥩',
  Fish:    '🐟',
  Veggies: '🥦',
  Noodles: '🍜',
  Dessert: '🍮',
}

function buildCateringMessage(selectedPackage) {
  const lines = [
    `Hi Garahe Bistro! I am interested in your catering service.`,
    ``,
    `Selected Package: ${selectedPackage.label} (PHP ${selectedPackage.price}/head)`,
    `Minimum: ${selectedPackage.minHeads} heads`,
    ``,
    `Please send me more details. Thank you!`,
  ].join('\n')
  return encodeURIComponent(lines)
}

function PackageCard({ pkg, isSelected, onSelect }) {
  const isPremium = pkg.id === 2

  return (
    <div
      onClick={() => onSelect(pkg)}
      className={`relative cursor-pointer rounded-3xl border-2 p-7 transition-all duration-300 flex flex-col
        ${isSelected
          ? isPremium
            ? 'border-gold bg-gradient-to-b from-gold/15 to-gold/5 shadow-xl shadow-gold/25'
            : 'border-gold bg-gradient-to-b from-white/8 to-white/3 shadow-xl shadow-gold/15'
          : 'border-neutral-700 bg-neutral-800/60 hover:border-neutral-500 hover:bg-neutral-800'
        }`}
    >
      {/* Popular badge */}
      {isPremium && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-gold text-black text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Package header */}
      <div className={`text-center mb-6 pb-6 border-b ${isSelected ? 'border-gold/30' : 'border-neutral-700'}`}>
        <p className={`text-xs font-bold uppercase tracking-[0.25em] mb-2 ${isPremium ? 'text-gold' : 'text-neutral-400'}`}>
          {pkg.label}
        </p>
        <div className="flex items-end justify-center gap-1">
          <span className="text-neutral-400 text-lg font-medium mb-1">PHP</span>
          <span className="font-display text-6xl font-black text-white leading-none">{pkg.price}</span>
        </div>
        <p className="text-neutral-500 text-xs mt-2">per head · min. {pkg.minHeads} pax</p>
      </div>

      {/* Inclusions — flex-grow pushes button to bottom */}
      <ul className="space-y-3 flex-grow mb-6">
        {pkg.inclusions.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
              isPremium ? 'bg-gold/20' : 'bg-white/10'
            }`}>
              <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-neutral-200">{item}</span>
          </li>
        ))}
      </ul>

      {/* Select button — always at bottom due to flex-col + flex-grow above */}
      <div className={`w-full py-3 rounded-xl text-center text-sm font-bold tracking-wide transition-all duration-200 ${
        isSelected
          ? 'bg-gold text-black shadow-md'
          : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
      }`}>
        {isSelected ? '✓ Selected' : 'Select Package'}
      </div>
    </div>
  )
}

function MenuGrid() {
  const [open, setOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)

  const filtered = activeCategory
    ? cateringMenu.filter(cat => cat.category === activeCategory)
    : cateringMenu

  const totalDishes = cateringMenu.reduce((a, c) => a + c.items.length, 0)

  return (
    <div className="mt-12">

      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        className={`w-full flex items-center justify-between px-6 py-5 rounded-2xl
          border-2 transition-all duration-300 group
          ${open
            ? 'border-gold/50 bg-gold/8'
            : 'border-neutral-700 bg-neutral-800/40 hover:border-neutral-600 hover:bg-neutral-800/70'
          }`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-colors duration-300
            ${open ? 'bg-gold/20' : 'bg-neutral-700 group-hover:bg-neutral-600'}`}>
            🍽️
          </div>
          <div className="text-left">
            <p className={`font-bold text-sm transition-colors duration-200 ${open ? 'text-gold' : 'text-white group-hover:text-gold'}`}>
              Browse Full Catering Menu
            </p>
            <p className="text-neutral-500 text-xs mt-0.5">
              {totalDishes} dishes · {cateringMenu.length} categories
            </p>
          </div>
        </div>

        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0
          ${open ? 'border-gold/50 bg-gold/10 rotate-180' : 'border-neutral-600 bg-neutral-700 group-hover:border-neutral-500'}`}>
          <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expandable content */}
      <div className={`overflow-hidden transition-all duration-500
        ${open ? 'max-h-[1400px] opacity-100' : 'max-h-0 opacity-0'}`}>

        <div className="mt-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 overflow-hidden">

          {/* Category tabs — full width stretch */}
          <div className="grid w-full border-b border-neutral-800"
            style={{ gridTemplateColumns: `repeat(${cateringMenu.length + 1}, 1fr)` }}>

            {/* All tab */}
            <button
              onClick={() => setActiveCategory(null)}
              className={`py-3 px-1 text-center text-xs font-bold uppercase tracking-wide transition-all duration-200 border-b-2
                ${activeCategory === null
                  ? 'border-gold text-gold bg-gold/8'
                  : 'border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-white/5'
                }`}
            >
              All
            </button>

            {/* Category tabs */}
            {cateringMenu.map(cat => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(activeCategory === cat.category ? null : cat.category)}
                className={`py-3 px-1 text-center text-xs font-bold uppercase tracking-wide transition-all duration-200 border-b-2 flex flex-col items-center gap-0.5
                  ${activeCategory === cat.category
                    ? 'border-gold text-gold bg-gold/8'
                    : 'border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-white/5'
                  }`}
              >
                <span className="text-base leading-none">{CATEGORY_ICONS[cat.category]}</span>
                <span className="leading-none">{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Menu items grid */}
          <div className="p-5">
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {filtered.map((cat) => (
                <div
                  key={cat.category}
                  className="bg-neutral-800/60 border border-neutral-700/60 rounded-xl overflow-hidden"
                >
                  {/* Card header */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-neutral-800 border-b border-neutral-700">
                    <span className="text-sm">{CATEGORY_ICONS[cat.category]}</span>
                    <span className="text-gold font-bold text-xs uppercase tracking-wider">{cat.category}</span>
                    <span className="ml-auto text-neutral-600 text-[10px] font-medium">{cat.items.length}</span>
                  </div>

                  {/* Items */}
                  <ul className="p-3 space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-neutral-300 leading-snug">
                        <span className="text-gold/60 mt-0.5 shrink-0 text-[10px]">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <p className="text-neutral-600 text-[11px] text-center mt-5 italic">
              Additional dishes available upon request — price depends on the type of viand.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function Catering() {
  const titleRef = useFadeUp()
  const cardsRef = useFadeUp(0.05)
  const [selected, setSelected] = useState(cateringPackages[1])

  function handleInquire() {
    const msg = buildCateringMessage(selected)
    window.open(`https://www.facebook.com/messages/t/garahebistro?text=${msg}`, '_blank')
  }

  return (
    <section id="catering" className="relative py-24 overflow-hidden">

      {/* Section background — distinct from neighbors */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />

      {/* Decorative top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]
        bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div ref={titleRef} className="fade-up text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">We Come to You</p>
          <h2 className="section-title mb-4">Catering Services</h2>
          <p className="text-neutral-400 max-w-lg mx-auto text-sm leading-relaxed">
            Bring the Garahe Bistro experience to your event — birthdays, reunions,
            corporate gatherings, and more. Full buffet set up included.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['Basic Buffet Setup Included', 'Min. 30 Guests', 'Custom Menu Available'].map(badge => (
              <span key={badge} className="inline-flex items-center gap-1.5 text-xs text-neutral-400
                border border-neutral-700 bg-neutral-800/50 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Package cards */}
        <div ref={cardsRef} className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {cateringPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              isSelected={selected.id === pkg.id}
              onSelect={setSelected}
            />
          ))}
        </div>

        {/* Inquire CTA */}
        <div className="text-center mt-10">
          <button
            onClick={handleInquire}
            className="btn-gold text-base px-10 py-4 rounded-2xl shadow-lg shadow-gold/20
              hover:shadow-gold/40 hover:scale-[1.02] transition-all duration-300"
          >
            <MessengerIcon />
                Inquire about {selected.label} via Messenger
          </button>
          <p className="text-neutral-600 text-xs mt-3">
             We'll get back to you with availability and full details.
          </p>
        </div>

        {/* Expandable catering menu */}
        <MenuGrid />

      </div>

      {/* Decorative bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

    </section>
  )
}

function MessengerIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.47 5.558 3.773 7.28V22l3.446-1.896c.92.254 1.894.39 2.781.39 5.523 0 10-4.145 10-9.251C22 6.145 17.523 2 12 2zm1.05 12.45l-2.549-2.72-4.973 2.72 5.473-5.812 2.612 2.72 4.91-2.72-5.473 5.812z"/>
    </svg>
  )
}