import React from 'react'
import Link from 'next/link'
import { Users, Briefcase, HeartHandshake } from 'lucide-react'

const OPPORTUNITIES = [
  {
    title: 'Internships',
    description: 'Structured learning paths with real client projects, experienced mentors, and production responsibility.',
    cta: 'Apply for Internship',
    icon: Briefcase,
    color: 'text-[#E50925]',
    hover: 'hover:bg-[#E50925]',
  },
  {
    title: 'Contributors',
    description: 'Project-based participation for builders, designers, and engineers who want to ship meaningful work in the open.',
    cta: 'Join as Contributor',
    icon: Users,
    color: 'text-[#3B82F6]',
    hover: 'hover:bg-[#3B82F6]',
  },
  {
    title: 'Partnerships',
    description: 'Universities, research groups, and sponsors supporting programs that grow the next generation of builders.',
    cta: 'Partner With Us',
    icon: HeartHandshake,
    color: 'text-[#10B981]',
    hover: 'hover:bg-[#10B981]',
  },
] as const

export default function OpportunitiesSection() {
  return (
    <section id="opportunities" className="py-32 bg-[#090909] text-[#F5F5F5] px-6 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#E50925] font-mono block mb-4">
            {'// 06 — JOIN THE MISSION'}
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Build real products, grow your skills.
          </h2>
          <p className="text-neutral-400 font-light text-lg leading-relaxed">
            Shape what&apos;s next alongside a global community of student innovators, researchers, and mentors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {OPPORTUNITIES.map(({ title, description, cta, icon: Icon, color, hover }) => (
            <article
              key={title}
              className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-lg bg-neutral-900 ${color} flex items-center justify-center mb-6`} aria-hidden="true">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-white">{title}</h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-8">
                  {description}
                </p>
              </div>
              <Link
                href="#contact"
                className={`px-6 py-3 rounded bg-neutral-900 ${hover} text-white font-bold text-xs uppercase tracking-wider text-center transition-colors`}
              >
                {cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
