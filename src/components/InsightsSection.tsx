import React from 'react'
import { LUNABLAZE_DATA } from '@/data/lunablazeData'
import { ArrowUpRight } from 'lucide-react'

export default function InsightsSection() {
  return (
    <section id="buildlogs" className="py-32 bg-[#090909] text-[#F5F5F5] px-6 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E50925] font-mono block mb-4">
              {'// 05 — OPEN BUILD LOGS'}
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              What we&apos;re building <br />and learning.
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md mt-4 md:mt-0 font-light">
            No client wall yet, so we show our work. Honest updates from an early-stage studio building in the open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LUNABLAZE_DATA.buildLogs.map((log) => (
            <article
              key={log.id}
              className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-6 gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E50925] bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                    {log.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    {log.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-white group-hover:text-[#E50925] transition-colors">
                  {log.title}
                </h3>

                <p className="text-neutral-400 font-light leading-relaxed text-sm mb-8">
                  {log.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-900 flex justify-between items-center">
                <span className="text-xs font-mono text-neutral-500">
                  <time dateTime={log.date}>{log.date}</time>
                </span>
                <div className="flex items-center gap-2 text-xs uppercase font-bold text-white group-hover:text-[#E50925] transition-colors">
                  <span>Read Log</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
