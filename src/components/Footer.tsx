import React from 'react'
import Link from 'next/link'

const STUDIO_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#focus', label: 'Focus Areas' },
  { href: '#contact', label: 'Contact' },
] as const

const COMMUNITY_LINKS = [
  { href: '#opportunities', label: 'Opportunities' },
  { href: '#buildlogs', label: 'Insights' },
  { href: '#opportunities', label: 'Join Mission' },
] as const

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-[#F5F5F5] pt-20 pb-12 px-6 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-5 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3 w-fit" aria-label="Lunablaze home">
            <span className="w-8 h-8 rounded bg-[#E50925] flex items-center justify-center font-black text-white text-sm tracking-tighter" aria-hidden="true">
              LB
            </span>
            <span className="font-bold tracking-tight text-lg text-white">
              LUNABLAZE
            </span>
          </Link>
          <p className="text-neutral-400 font-light text-sm max-w-sm leading-relaxed">
            A student-powered technology innovation studio building the future, one project at a time.
          </p>
          <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest">
            © 2026 Lunablaze. All rights reserved.
          </span>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <nav className="flex flex-col gap-3" aria-label="Footer studio links">
            <span className="text-xs uppercase font-mono text-neutral-500 tracking-widest mb-1">Studio</span>
            {STUDIO_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-col gap-3" aria-label="Footer community links">
            <span className="text-xs uppercase font-mono text-neutral-500 tracking-widest mb-1">Community</span>
            {COMMUNITY_LINKS.map((link) => (
              <Link key={`${link.href}-${link.label}`} href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase font-mono text-neutral-500 tracking-widest mb-1">Legal</span>
            <span className="text-neutral-400">Privacy Policy</span>
            <span className="text-neutral-400">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
