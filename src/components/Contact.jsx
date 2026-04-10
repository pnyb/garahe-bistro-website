// src/components/Contact.jsx
import { useFadeUp } from '../hooks/useFadeUp.js'
import MessengerLink from './MessengerLink.jsx'
import { openMessenger } from '../utils/messenger.js'

export default function Contact() {
  const titleRef = useFadeUp()
  const bodyRef  = useFadeUp()

  return (
    <section id="contact" className="relative py-24 bg-neutral-900">
    <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div ref={titleRef} className="fade-up text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">Find Us</p>
          <h2 className="section-title mb-4">Contact Us</h2>
        </div>

        <div ref={bodyRef} className="fade-up grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Info */}
          <div className="space-y-8">

            <InfoBlock icon={<LocationIcon />} title="Visit Us">
              <p className="text-neutral-300 text-sm leading-relaxed">
                Esteros Bridge Rd, Cotabato City<br />
                Maguindanao del Norte, Philippines
              </p>
            </InfoBlock>

            <InfoBlock icon={<ClockIcon />} title="Hours">
              <p className="text-neutral-300 text-sm leading-relaxed">
                Monday – Saturday: 10:00 AM – 10:00 PM<br />
                <span className="text-neutral-500">Sunday: Closed</span>
              </p>
            </InfoBlock>

            <InfoBlock icon={<PhoneIcon />} title="Call Us">
              {/* ✅ Click-to-call */}
              <a
                href="tel:+639174009233"
                className="text-gold font-semibold text-lg hover:underline"
              >
                0917 400 9233
              </a>
            </InfoBlock>

            <InfoBlock icon={<ShareIcon />} title="Find Us Online">
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.facebook.com/garahebistro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-300 hover:text-gold transition-colors text-sm"
                >
                  <FacebookIcon />
                  facebook.com/garahebistro
                </a>
                <MessengerLink className="btn-gold self-start mt-1">
                  <MessengerIcon />
                  Chat on Messenger
                </MessengerLink>
              </div>
            </InfoBlock>

          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-xl h-[400px]">
            <iframe
              title="Garahe Bistro Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.4149462225564!2d124.23229977598783!3d7.193404715014197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256392dfe40af21%3A0x6aa33618f1e70c14!2sGarahe%20Bistro!5e0!3m2!1sen!2sph!4v1754560043610!5m2!1sen!2sph"
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

function InfoBlock({ icon, title, children }) {
  return (
    <div className="flex gap-4">
      <div className="text-gold mt-0.5 shrink-0">{icon}</div>
      <div>
        <h5 className="text-white font-semibold mb-1">{title}</h5>
        {children}
      </div>
    </div>
  )
}

function LocationIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
}
function ClockIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
}
function PhoneIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/></svg>
}
function ShareIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
}
function FacebookIcon() {
  return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
}
function MessengerIcon() {
  return <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.47 5.558 3.773 7.28V22l3.446-1.896c.92.254 1.894.39 2.781.39 5.523 0 10-4.145 10-9.251C22 6.145 17.523 2 12 2zm1.05 12.45l-2.549-2.72-4.973 2.72 5.473-5.812 2.612 2.72 4.91-2.72-5.473 5.812z"/></svg>
}
