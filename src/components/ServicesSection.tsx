'use client'

import React from 'react'
import Link from 'next/link'
import { LUNABLAZE_DATA } from '@/data/lunablazeData'
import {
  Brain,
  Globe,
  Smartphone,
  Zap,
  Shield,
  Cpu,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Globe,
  Smartphone,
  Zap,
  Shield,
  Cpu,
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = React.useState(0)
  const service = LUNABLAZE_DATA.services[activeTab] ?? LUNABLAZE_DATA.services[0]
  const IconComponent = iconMap[service.icon] ?? Globe

  return (
    <section id="services" className="py-32 bg-[#090909] text-[#F5F5F5] px-6 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E50925] font-mono block mb-4">
              {'// 03 — CAPABILITIES & DELIVERABLES'}
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Capabilities we <br />deliver today.
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md mt-4 md:mt-0 font-light">
            Production-ready systems across AI, platforms, automation, and security. Explore the full services overview for engagement models.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div
            className="lg:col-span-5 flex flex-col gap-3"
            role="tablist"
            aria-label="Service capabilities"
            aria-orientation="vertical"
          >
            {LUNABLAZE_DATA.services.map((item, index) => {
              const ItemIcon = iconMap[item.icon] ?? Globe
              const isActive = activeTab === index
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`service-tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls={`service-panel-${item.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                      event.preventDefault()
                      setActiveTab((index + 1) % LUNABLAZE_DATA.services.length)
                    }
                    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                      event.preventDefault()
                      setActiveTab((index - 1 + LUNABLAZE_DATA.services.length) % LUNABLAZE_DATA.services.length)
                    }
                    if (event.key === 'Home') {
                      event.preventDefault()
                      setActiveTab(0)
                    }
                    if (event.key === 'End') {
                      event.preventDefault()
                      setActiveTab(LUNABLAZE_DATA.services.length - 1)
                    }
                  }}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-neutral-900 border-[#E50925] shadow-xl'
                      : 'bg-neutral-950/60 border-neutral-900 hover:border-neutral-800'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? 'bg-[#E50925] text-white' : 'bg-neutral-900 text-neutral-400 group-hover:text-white'
                      }`}
                      aria-hidden="true"
                    >
                      <ItemIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold uppercase tracking-tight ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-5 h-5 transition-transform ${
                      isActive ? 'text-[#E50925] translate-x-1 -translate-y-1' : 'text-neutral-600'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              )
            })}
          </div>

          <div
            className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            role="tabpanel"
            id={`service-panel-${service.id}`}
            aria-labelledby={`service-tab-${service.id}`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E50925]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#E50925] text-white flex items-center justify-center shadow-lg shadow-[#E50925]/20" aria-hidden="true">
                <IconComponent className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#E50925]">
                  FEATURED CAPABILITY
                </span>
                <h3 className="text-3xl font-black uppercase tracking-tight text-white">
                  {service.title}
                </h3>
              </div>
            </div>

            <p className="text-xl text-neutral-300 font-light leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-400 mb-4">
                Key Deliverables & Stack
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((deliv) => (
                  <div
                    key={deliv}
                    className="p-4 rounded-lg bg-neutral-900/80 border border-neutral-800 text-sm text-neutral-200 font-medium flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#E50925] shrink-0" aria-hidden="true" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-900 flex justify-between items-center gap-4 flex-wrap">
              <span className="text-xs uppercase font-mono text-neutral-500">
                Production-Ready Deployment
              </span>
              <Link
                href="#contact"
                className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-[#E50925] hover:text-white transition-colors"
              >
                Inquire Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
