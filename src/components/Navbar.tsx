'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useStore } from '@/store/useStore'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#focus', label: 'Focus Areas' },
  { href: '#buildlogs', label: 'Insights' },
  { href: '#opportunities', label: 'Opportunities' },
] as const

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const isPreloaderComplete = useStore((state) => state.isPreloaderComplete)

  useEffect(() => {
    if (!mobileMenuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileMenuOpen])

  if (!isPreloaderComplete) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#090909]/80 backdrop-blur-md border-b border-neutral-800/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Lunablaze home">
          <div className="w-10 h-10 rounded bg-[#E50925] flex items-center justify-center font-black text-white text-lg tracking-tighter shadow-lg shadow-[#E50925]/30 group-hover:scale-105 transition-transform" aria-hidden="true">
            LB
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-lg text-white group-hover:text-[#E50925] transition-colors">
              LUNABLAZE
            </span>
            <span className="text-[10px] tracking-widest uppercase text-neutral-400 font-mono">
              Studio · 2026
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-neutral-300 font-medium" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#E50925] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="px-5 py-2.5 rounded bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E50925] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="md:hidden text-white p-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E50925]"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden absolute top-20 left-0 right-0 bg-[#090909] border-b border-neutral-800 p-6 flex flex-col gap-6 shadow-2xl"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-wider text-neutral-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3 bg-[#E50925] text-white font-bold text-center uppercase tracking-wider rounded"
          >
            Start a Project
          </Link>
        </nav>
      )}
    </header>
  )
}
