// src/components/About.jsx
import { useFadeUp } from '../hooks/useFadeUp.js'

export default function About() {
  const ref = useFadeUp()

  return (
    <section
      id="about"
      className="relative py-28 parallax"
      style={{ backgroundImage: "url('/img/about-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="fade-up text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">Our Story</p>
          <h2 className="section-title mb-10">About Garahe Bistro</h2>

          <div className="space-y-5 text-neutral-200 text-lg leading-relaxed">
            <p>
              At Garahe Bistro, we are dedicated to providing a pleasurable dining experience by serving only the freshest and most flavorful dishes — from beloved Filipino favorites like{' '}
              <strong className="text-white">Sisig, Sinigang, Beef Kare-kare</strong>, and{' '}
              <strong className="text-white">Papait</strong> to carefully crafted exotic cuisines.
            </p>
            <p>
              Our dream has always been to create a welcoming space where everyone can hang out, relax, and enjoy great food. Born from our passion for cooking and love for seafood, Garahe Bistro opened its doors in{' '}
              <strong className="text-gold">2017</strong> with a commitment to continuously evolve and meet the growing needs of our customers.
            </p>
            <p>
              We believe in offering the best value for your money while taking pride in caring for our team. For as long as we can, we promise to deliver nothing but delicious food and a fun, memorable atmosphere.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mt-14">
            {[
              { value: '2017', label: 'Est.' },
              { value: '9+', label: 'Signature Dishes' },
              { value: '⭐ 4.6', label: 'Customer Rating' },
            ].map(s => (
              <div key={s.label} className="border border-white/10 rounded-2xl py-6 px-4 bg-white/5 backdrop-blur-sm">
                <p className="font-display text-3xl font-black text-gold">{s.value}</p>
                <p className="text-neutral-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
