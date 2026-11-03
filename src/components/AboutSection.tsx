import React from 'react'
import { LUNABLAZE_DATA } from '@/data/lunablazeData'

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-[#090909] text-[#F5F5F5] px-6 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-xs uppercase tracking-widest text-[#E50925] font-mono block mb-4">
              {'// 01 — THE MANIFESTO'}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              Turning ambitious ideas into scalable impact.
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed">
              Lunablaze is a student-powered technology innovation studio founded in 2026. Based in India with global-first ambition, we help organizations ship production-ready technology while developing the next generation of builders.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-12">
            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800/80 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E50925]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 text-white">
                We build technology. <br />
                <span className="text-[#E50925]">We build builders.</span>
              </h3>
              <p className="text-neutral-300 font-light leading-relaxed mb-6">
                Professional delivery and talent development in one ecosystem. Unlike traditional agencies, we combine execution with mentorship. Ambitious ideas become real products while the people behind them grow into the innovators the world needs.
              </p>
              <dl className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-800/80 text-center">
                <div>
                  <dt className="sr-only">Founded</dt>
                  <dd className="block text-3xl md:text-4xl font-black text-white">2026</dd>
                  <dd className="text-xs uppercase tracking-widest text-neutral-500 font-mono">Founded</dd>
                </div>
                <div>
                  <dt className="sr-only">Model</dt>
                  <dd className="block text-3xl md:text-4xl font-black text-[#E50925]">Student</dd>
                  <dd className="text-xs uppercase tracking-widest text-neutral-500 font-mono">Powered Model</dd>
                </div>
                <div>
                  <dt className="sr-only">Reach</dt>
                  <dd className="block text-3xl md:text-4xl font-black text-white">Global</dd>
                  <dd className="text-xs uppercase tracking-widest text-neutral-500 font-mono">First Reach</dd>
                </div>
              </dl>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#E50925] font-mono block mb-6">
                {'// 02 — THE METHODOLOGY'}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {LUNABLAZE_DATA.process.map((item) => (
                  <div
                    key={item.step}
                    className="p-6 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300"
                  >
                    <span className="text-xs font-mono text-[#E50925] font-bold block mb-2">
                      STEP {item.step}
                    </span>
                    <h4 className="text-xl font-bold uppercase tracking-tight mb-2 text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
