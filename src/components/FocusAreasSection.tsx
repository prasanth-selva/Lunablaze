import React from 'react'
import { LUNABLAZE_DATA } from '@/data/lunablazeData'
import { ArrowUpRight } from 'lucide-react'

export default function FocusAreasSection() {
  return (
    <section id="focus" className="py-32 bg-[#090909] text-[#F5F5F5] px-6 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#E50925] font-mono block mb-4">
            {'// 04 — DOMAINS OF IMPACT'}
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Where technology creates <br />real-world impact.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LUNABLAZE_DATA.focusAreas.map((area) => (
            <article
              key={area.id}
              className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} aria-hidden="true" />

              <div>
                <div className="flex justify-between items-center mb-6 gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E50925] bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                    {area.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {area.metrics}
                  </span>
                </div>

                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-white group-hover:text-[#E50925] transition-colors">
                  {area.title}
                </h3>

                <p className="text-neutral-400 font-light leading-relaxed text-sm mb-8">
                  {area.description}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-900 flex justify-between items-center relative z-10">
                <span className="text-xs uppercase font-mono text-neutral-500 group-hover:text-white transition-colors">
                  Explore Domain
                </span>
                <div className="w-8 h-8 rounded bg-neutral-900 group-hover:bg-[#E50925] text-neutral-400 group-hover:text-white flex items-center justify-center transition-colors" aria-hidden="true">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
