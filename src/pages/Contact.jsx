import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { container } from '../shared/layout'
import { inputClass } from '../shared/constants'
import MagneticButton from '../components/MagneticButton'
import { RiPhoneFill, RiMailFill } from 'react-icons/ri'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactPage() {
  const [state, handleSubmit] = useForm('xqekkpbj')

  return (
    <main>
      <SectionTitle eyebrow="Contact" title="Book a slot or say hello" tone="wide" />
      <section className="pb-20 pt-10">
        <div className={`${container} grid lg:grid-cols-2 gap-6`}>
          <div className="rounded-3xl border border-borderSubtle bg-soft/70 p-6 shadow-card">
            {state.succeeded ? (
              <div className="text-center py-10">
                <p className="text-lg font-semibold text-text">Thanks for reaching out.</p>
                <p className="text-text-muted mt-2">We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input className={inputClass} name="name" placeholder="Name" />
                  <input className={inputClass} name="phone" placeholder="Phone" />
                </div>
                <input className={inputClass} id="email" name="email" type="email" placeholder="Email" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <textarea
                  className={`${inputClass} min-h-[120px]`}
                  id="message"
                  name="message"
                  placeholder="What do you need? (detailing, PPF, interior...)"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <MagneticButton
                  type="submit"
                  disabled={state.submitting}
                  className="w-full rounded-full bg-accent text-primary py-3 font-semibold hover:bg-accentHover transition-colors disabled:opacity-60"
                >
                  Submit enquiry
                </MagneticButton>
              </form>
            )}
            <div className="rounded-2xl border border-borderSubtle bg-primary px-4 py-3 text-sm text-text-muted mt-4">
              <div className="flex items-center gap-2">
                <RiPhoneFill className="text-accent" />
                <a href="tel:+919404984040" className="font-semibold text-text hover:text-accent transition">
                  +91 94049 84040
                </a>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <RiMailFill className="text-accent" />
                <a
                  href="mailto:mayur.pawar4040@gmail.com"
                  className="font-semibold text-text hover:text-accent transition"
                >
                  mayur.pawar4040@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-borderSubtle shadow-card">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Mayur%20Auto%20World&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </main>
  )
}
