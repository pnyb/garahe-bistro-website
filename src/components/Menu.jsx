// src/components/Menu.jsx
import { useFadeUp } from '../hooks/useFadeUp.js'
import { menuItems } from '../data/menu.js'

const TAG_STYLES = {
  'Bestseller': 'bg-gold text-black',
  'Must Try':   'bg-orange-500 text-white',
  'Local Fave': 'bg-green-600 text-white',
}

function MenuCard({ item }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-neutral-900 shadow-xl cursor-pointer">
      <div className="overflow-hidden h-60">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Tag badge */}
      {item.tag && (
        <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${TAG_STYLES[item.tag] || 'bg-gold text-black'}`}>
          {item.tag}
        </span>
      )}

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-end justify-between">
          <p className="font-semibold text-white text-base leading-tight">{item.name}</p>
          <p className="text-gold font-bold text-lg shrink-0 ml-3">₱{item.price}</p>
        </div>
      </div>
    </div>
  )
}

export default function Menu() {
  const titleRef = useFadeUp()
  const gridRef  = useFadeUp(0.05)

  return (
    <section id="menu" className="relative py-24 bg-neutral-950">
    <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div ref={titleRef} className="fade-up text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">What We Serve</p>
          <h2 className="section-title mb-4">Best Sellers</h2>
          <p className="text-neutral-400 max-w-md mx-auto">
            Customer favorites, freshly prepared every single day.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.facebook.com/garahebistro/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FacebookIcon />
            View Full Menu on Facebook
          </a>
        </div>

      </div>
    <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}
