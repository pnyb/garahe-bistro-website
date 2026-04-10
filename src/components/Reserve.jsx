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
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
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


    const isDesktop = !/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isDesktop) {
      const msg = buildMessage()
      window.open(`https://www.facebook.com/messages/t/garahebistro?text=${msg}`, '_blank')
    } else {
      // On mobile: show the summary on screen first, then open Messenger
      setSubmitted(true)
      setTimeout(() => {
        window.open('fb-messenger://user-thread/761108637425192', '_blank')
      }, 300)
    }
  }

  const inputCls = `w-full min-w-0 bg-neutral-800 border border-neutral-700 text-white rounded-xl px-4 py-3
      placeholder-neutral-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold
      transition-colors duration-200 text-sm box-border appearance-none`

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
        <div ref={cardRef} className="fade-up">
          {submitted ? (
  <div className="bg-neutral-900 border border-gold/30 rounded-3xl p-8 shadow-2xl">

    {/* Header */}
    <div className="text-center mb-6">
      <div className="w-14 h-14 bg-gold/15 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-white font-bold text-xl mb-1">Almost there!</h3>
      <p className="text-neutral-400 text-sm">
        Copy your details below, then send them to us on Messenger.
      </p>
    </div>

    {/* Summary box */}
    <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-5 mb-4">
      <p className="text-gold text-xs font-bold uppercase tracking-wider mb-3">
        Your Reservation Details
      </p>
      <div className="space-y-2 text-sm text-neutral-300">
        <p><span className="text-neutral-500">Name:</span> {form.name}</p>
        <p><span className="text-neutral-500">Contact:</span> {form.phone}</p>
        <p><span className="text-neutral-500">Date:</span> {form.date}</p>
        <p><span className="text-neutral-500">Time:</span> {form.time}</p>
        <p><span className="text-neutral-500">Guests:</span> {form.guests}</p>
        {form.occasion && <p><span className="text-neutral-500">Occasion:</span> {form.occasion}</p>}
        {form.notes && <p><span className="text-neutral-500">Notes:</span> {form.notes}</p>}
      </div>
    </div>

    {/* Copy button */}
    <button
      onClick={() => {
        const text = [
          `Hi! I'd like to reserve a table at Garahe Bistro :)`,
          ``,
          `Reservation Details:`,
          `Name: ${form.name}`,
          `Contact: ${form.phone}`,
          `Date: ${form.date}`,
          `Time: ${form.time}`,
          `Guests: ${form.guests}`,
          form.occasion ? `Occasion: ${form.occasion}` : null,
          form.notes    ? `Notes: ${form.notes}`       : null,
          ``,
          `Please confirm if this slot is available. Thank you!`,
        ].filter(Boolean).join('\n')

        navigator.clipboard.writeText(text).then(() => {
          setCopied(true)
          // After showing copied state, open Messenger then reset
          setTimeout(() => {
            window.open('fb-messenger://user-thread/761108637425192', '_blank')
          }, 800)
          setTimeout(() => setCopied(false), 3000)
        })
      }}
      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm
        transition-all duration-300 mb-3
        ${copied
          ? 'bg-green-500/20 border border-green-500/40 text-green-400'
          : 'bg-gold text-black hover:bg-gold-dark'
        }`}
    >
      {copied ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          Copied! Opening Messenger…
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy & Open Messenger
        </>
      )}
    </button>

    {/* Manual open Messenger if copy already done */}
    <button
      onClick={() => window.open('fb-messenger://user-thread/761108637425192', '_blank')}
      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm
        border border-neutral-700 text-neutral-400 hover:border-gold/40 hover:text-gold
        transition-all duration-200 mb-4"
    >
      <MessengerIcon />
      Open Messenger without copying
    </button>

    {/* Close / start over */}
    <div className="flex items-center justify-center gap-6 pt-2 border-t border-neutral-800">
      <button
        onClick={() => { setSubmitted(false); setCopied(false) }}
        className="text-neutral-500 text-xs hover:text-neutral-300 transition-colors"
      >
        ← Edit details
      </button>
      <button
        onClick={() => { setSubmitted(false); setForm(EMPTY); setCopied(false) }}
        className="text-neutral-500 text-xs hover:text-red-400 transition-colors"
      >
        Cancel reservation
      </button>
    </div>

  </div>
              ) : (
                <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl">
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                      <div>
                        <label className={labelCls}>Full Name <span className="text-gold">*</span></label>
                        <input type="text" name="name" value={form.name}
                          onChange={handleChange} placeholder="Juan dela Cruz"
                          className={inputCls} required />
                      </div>

                      <div>
                        <label className={labelCls}>Contact Number <span className="text-gold">*</span></label>
                        <input type="tel" name="phone" value={form.phone}
                          onChange={handleChange} placeholder="09XX XXX XXXX"
                          className={inputCls} required />
                      </div>

                      <div className="overflow-hidden">
                        <label className={labelCls}>Date <span className="text-gold">*</span></label>
                        <input type="date" name="date" value={form.date}
                          onChange={handleChange} min={today}
                          className={`${inputCls} [color-scheme:dark]`} required
                          style={{ width: '100%', display: 'block' }}
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

                      <div>
                        <label className={labelCls}>Time <span className="text-gold">*</span></label>
                        <select name="time" value={form.time} onChange={handleChange} className={inputCls} required>
                          <option value="" disabled>Select a time</option>
                          {TIMES.map(t => <option key={t}>{t}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className={labelCls}>Number of Guests <span className="text-gold">*</span></label>
                        <select name="guests" value={form.guests} onChange={handleChange} className={inputCls} required>
                          <option value="" disabled>How many?</option>
                          {GUESTS.map(g => <option key={g}>{g}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className={labelCls}>Occasion <span className="text-neutral-600">(optional)</span></label>
                        <input type="text" name="occasion" value={form.occasion}
                          onChange={handleChange} placeholder="Birthday, Anniversary…"
                          className={inputCls} />
                      </div>

                      <div className="sm:col-span-2">
                        <label className={labelCls}>Special Requests <span className="text-neutral-600">(optional)</span></label>
                        <textarea name="notes" value={form.notes}
                          onChange={handleChange} rows={3}
                          placeholder="Dietary restrictions, seating preference, etc."
                          className={`${inputCls} resize-none`} />
                      </div>

                    </div>

                    {error && (
                      <p className="mt-4 text-red-400 text-sm text-center">{error}</p>
                    )}

                    <div className="mt-7 text-center">
                      <button type="submit"
                        className="btn-gold text-base px-10 py-4 rounded-2xl shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-all duration-300 hover:scale-[1.02]">
                        <MessengerIcon />
                        Send via Messenger
                      </button>
                      <p className="text-neutral-600 text-xs mt-4 leading-relaxed">
                        Fast confirmation via Messenger — no email needed
                      </p>
                    </div>

                  </form>
                </div>
              )}
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
