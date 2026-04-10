// src/components/Reserve.jsx
import { useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp.js'
import { openMessenger } from '../utils/messenger.js'

const TIMES = [
  '10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM',
  '3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM',
]
const GUESTS = ['1 – 2','3 – 5','6 – 10','11 – 20','20+']

const EMPTY = { name: '', phone: '', date: '', time: '', guests: '', occasion: '', notes: '' }

export default function Reserve() {
  const [form, setForm]   = useState(EMPTY)
  const [error, setError] = useState('')
  const titleRef          = useFadeUp()
  const cardRef           = useFadeUp()

  const today = new Date().toISOString().split('T')[0]

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setError('')
  }

  function buildMessage() {
    // const lines = [
    //   `Hi Garahe Bistro! I'd like to reserve a table. 😊`,
    //   ``,
    //   `📋 *Reservation Details*`,
    //   `👤 Name: ${form.name}`,
    //   `📞 Contact: ${form.phone}`,
    //   `📅 Date: ${form.date}`,
    //   `🕐 Time: ${form.time}`,
    //   `👥 Guests: ${form.guests}`,
    //   form.occasion ? `🎉 Occasion: ${form.occasion}` : null,
    //   form.notes    ? `📝 Notes: ${form.notes}`       : null,
    // ].filter(Boolean).join('\n')
    // return encodeURIComponent(lines)
    const lines = [
      `Hi! I’d like to reserve a table at Garahe Bistro :)`,
      ``,
      `*Reservation Details*`,
      `━━━━━━━━━━━━━━━`,
      ` Name: ${form.name}`,
      ` Contact: ${form.phone}`,
      ` Date: ${form.date}`,
      ` Time: ${form.time}`,
      ` Guests: ${form.guests}`,
      form.occasion ? ` Occasion: ${form.occasion}` : null,
      form.notes ? ` Notes: ${form.notes}` : null,
      `━━━━━━━━━━━━━━━`,
      ``,
      `Please confirm if this slot is available. Thank you!`
      ].filter(Boolean).join('\n')
      return encodeURIComponent(lines)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const required = ['name','phone','date','time','guests']
    const missing = required.find(k => !form[k])
    if (missing) {
      setError('Please fill in all required fields.')
      return
    }
    const picked = new Date(form.date + 'T00:00:00')
    if (picked.getDay() === 0) {
      setError('Sorry, we are closed on Sundays. Please choose another date.')
      return
    }
    const msg = buildMessage()
    openMessenger(msg)
  }

  const inputCls = `w-full min-w-0 bg-neutral-800 border border-neutral-700 text-white rounded-xl px-4 py-3
    placeholder-neutral-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold
    transition-colors duration-200 text-sm box-border`

  const labelCls = `block text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-1.5`


  return (
    <section id="reserve" className="relative py-24 bg-neutral-950">
    <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div ref={titleRef} className="fade-up text-center mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">Book a Spot</p>
          <h2 className="section-title mb-4">Reserve a Table</h2>
          {/* <p className="text-neutral-400 max-w-md mx-auto text-sm leading-relaxed">
            Fill in your details below and hit the button — it opens Messenger with your
            reservation already typed out. We'll confirm in no time.
          </p> */}

          {/* How it works pill */}
          <div className="inline-flex items-center gap-2 mt-5 bg-neutral-800 border border-neutral-700 rounded-full px-5 py-2 text-xs text-neutral-400">
            <span className="text-gold font-bold">3 easy steps:</span>
            Fill details → Open Messenger → Get confirmation via chat
          </div>
        </div>

        {/* Form card */}
        <div ref={cardRef} className="fade-up bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Name */}
              <div>
                <label className={labelCls}>Full Name <span className="text-gold">*</span></label>
                <input
                  type="text" name="name" value={form.name}
                  onChange={handleChange} placeholder="Juan dela Cruz"
                  className={inputCls} required
                />
              </div>

              {/* Phone */}
              <div>
                <label className={labelCls}>Contact Number <span className="text-gold">*</span></label>
                <input
                  type="tel" name="phone" value={form.phone}
                  onChange={handleChange} placeholder="09XX XXX XXXX"
                  className={inputCls} required
                />
              </div>

              {/* Date */}
              <div>
                <label className={labelCls}>Date <span className="text-gold">*</span></label>
                <input
                  type="date" name="date" value={form.date}
                  onChange={handleChange} min={today}
                  className={`${inputCls} [color-scheme:dark] max-w-full`} required
                  onInput={(e) => {
                    const picked = new Date(e.target.value + 'T00:00:00')
                    if (picked.getDay() === 0) {
                      e.target.setCustomValidity('Sorry, we are closed on Sundays. Please pick another day.')
                      e.target.reportValidity()
                      setForm(f => ({ ...f, date: '' }))
                    } else {
                      e.target.setCustomValidity('')
                    }
                  }}
                />
              </div>

              {/* Time */}
              <div>
                <label className={labelCls}>Time <span className="text-gold">*</span></label>
                <select name="time" value={form.time} onChange={handleChange} className={inputCls} required>
                  <option value="" disabled>Select a time</option>
                  {TIMES.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>

              {/* Guests */}
              <div>
                <label className={labelCls}>Number of Guests <span className="text-gold">*</span></label>
                <select name="guests" value={form.guests} onChange={handleChange} className={inputCls} required>
                  <option value="" disabled>How many?</option>
                  {GUESTS.map(g => <option key={g}>{g}</option>)}
                </select>
              </div>

              {/* Occasion */}
              <div>
                <label className={labelCls}>Occasion <span className="text-neutral-600">(optional)</span></label>
                <input
                  type="text" name="occasion" value={form.occasion}
                  onChange={handleChange} placeholder="Birthday, Anniversary…"
                  className={inputCls}
                />
              </div>

              {/* Notes */}
              <div className="sm:col-span-2">
                <label className={labelCls}>Special Requests <span className="text-neutral-600">(optional)</span></label>
                <textarea
                  name="notes" value={form.notes}
                  onChange={handleChange} rows={3}
                  placeholder="Dietary restrictions, seating preference, etc."
                  className={`${inputCls} resize-none`}
                />
              </div>

            </div>

            {/* Error */}
            {error && (
              <p className="mt-4 text-red-400 text-sm text-center">{error}</p>
            )}

            {/* Submit */}
            <div className="mt-7 text-center">
              <button
                type="submit"
                className="btn-gold text-base px-10 py-4 rounded-2xl shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <MessengerIcon />
                Send via Messenger
              </button>
              <p className="text-neutral-600 text-xs mt-4 leading-relaxed">
                ⚡ Fast confirmation via Messenger — no email needed
              </p>
            </div>

          </form>
        </div>

        {/* Alternative contact note */}
        <p className="text-center text-neutral-600 text-sm mt-6">
          Prefer to call?{' '}
          <a href="tel:+639174009233" className="text-gold hover:underline font-medium">
            0917 400 9233
          </a>
        </p>

      </div>
          
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
