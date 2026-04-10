// src/components/Reviews.jsx
import { useFadeUp } from '../hooks/useFadeUp.js'
import { reviews } from '../data/menu.js'



function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-3" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-gold' : 'text-neutral-600'}`}
          fill="currentColor" viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const titleRef = useFadeUp()
  const gridRef  = useFadeUp(0.05)

  return (
  <section
    id="reviews"
    className="relative py-24 bg-neutral-900"
    aria-label="Customer Reviews"
  >
  <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div ref={titleRef} className="fade-up text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">Testimonials</p>
          <h2 className="section-title mb-4">What Customers Say</h2>
          <p className="text-neutral-400 max-w-md mx-auto">
            Real reviews from real diners right here in Cotabato.
          </p>

          {/* Overall rating badge */}
          <div className="inline-flex items-center gap-2 mt-6 bg-neutral-800 border border-neutral-700 rounded-full px-5 py-2">
            <span className="text-gold text-lg font-bold">★ 4.6</span>
            <span className="text-neutral-400 text-sm">Based on Google Reviews</span>
          </div>
        </div>

        <div ref={gridRef} className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(r => (
            <article
              key={r.id}
              className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 flex flex-col
                         hover:-translate-y-1 hover:border-gold/40 transition-all duration-300"
            >
              <Stars count={r.rating} />
              <p className="text-neutral-300 italic flex-1 leading-relaxed text-sm">"{r.text}"</p>
              <p className="text-gold font-semibold text-sm mt-4">— {r.name}</p>
            </article>
          ))}
        </div>

        {/* Link to Google Maps reviews */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Garahe+Bistro/@7.1983699,124.2442091,15z/data=!4m8!3m7!1s0x3256392dfe40af21:0x6aa33618f1e70c14!8m2!3d7.1933994!4d124.2348747!9m1!1b1!16s%2Fg%2F11j4382hdr?hl=en&entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs"
          >
            <GoogleIcon />
            See All Reviews on Google Maps
          </a>
        </div>

      </div>
    <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}
