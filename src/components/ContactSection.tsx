'use client'

import React, { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
    setSubmitted(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 bg-[#090909] text-[#F5F5F5] px-6 relative border-t border-neutral-900 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E50925]/10 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#E50925] font-mono block mb-4">
            {'// 07 — INITIATE COLLABORATION'}
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Ready to build <br />what&apos;s next?
          </h2>
          <p className="text-neutral-400 font-light text-lg leading-relaxed">
            Whether you have a project in mind or want to join our mission, we&apos;d like to hear from you.
          </p>
        </div>

        {submitted ? (
          <div
            className="p-12 rounded-2xl bg-neutral-950 border border-[#E50925] text-center max-w-xl mx-auto shadow-2xl"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2 className="w-16 h-16 text-[#E50925] mx-auto mb-6" aria-hidden="true" />
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 text-white">Transmission Received</h3>
            <p className="text-neutral-400 text-sm mb-6">
              Thank you for reaching out to Lunablaze. Our team will review your inquiry and get back to you within 24 hours.
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-2.5 rounded bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-12 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl max-w-2xl mx-auto flex flex-col gap-6"
            noValidate={false}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-xs uppercase font-mono text-neutral-400">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ada Lovelace"
                  className="px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E50925] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-xs uppercase font-mono text-neutral-400">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ada@innovation.org"
                  className="px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E50925] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-xs uppercase font-mono text-neutral-400">
                Project / Inquiry Scope
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your AI system, web platform, or mission..."
                className="px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E50925] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-[#E50925] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#ff1b38] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E50925]/20"
            >
              <span>Transmit Inquiry</span>
              <Send className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
