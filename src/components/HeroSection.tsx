'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { LUNABLAZE_DATA } from '@/data/lunablazeData'
import { useStore } from '@/store/useStore'

function Hero3DObject() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={3} color="#E50925" />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#3B82F6" />

        <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
          <mesh rotation={[0.5, 0.5, 0]}>
            <torusKnotGeometry args={[1.8, 0.6, 128, 32]} />
            <MeshDistortMaterial
              color="#121212"
              roughness={0.15}
              metalness={0.95}
              distort={0.3}
              speed={2}
            />
          </mesh>
          <mesh rotation={[-0.5, -0.5, 0]} scale={[1.1, 1.1, 1.1]}>
            <torusKnotGeometry args={[1.8, 0.6, 128, 32]} />
            <meshStandardMaterial
              color="#E50925"
              wireframe={true}
              transparent={true}
              opacity={0.25}
            />
          </mesh>
        </Float>
      </Canvas>
    </div>
  )
}

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
  } catch {
    return false
  }
}

export default function HeroSection() {
  const isPreloaderComplete = useStore((state) => state.isPreloaderComplete)
  const [canRender3D, setCanRender3D] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setCanRender3D(supportsWebGL()), 0)
    return () => window.clearTimeout(timer)
  }, [])

  if (!isPreloaderComplete) return null

  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen bg-[#090909] text-[#F5F5F5] pt-32 pb-20 px-6 flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E50925]/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 w-fit">
            <Sparkles className="w-4 h-4 text-[#E50925]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-widest text-neutral-300 font-mono">
              Founded 2026 · Global-First · India
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95]">
            Student-Powered <br />
            <span className="bg-gradient-to-r from-white via-neutral-300 to-[#E50925] bg-clip-text text-transparent">
              Innovation Studio
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
            {LUNABLAZE_DATA.studio.subtitle}. Building AI systems, web platforms, mobile apps, cybersecurity, automation, and robotics — with the speed of student innovation and the rigor of production delivery.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#contact"
              className="px-8 py-4 rounded bg-[#E50925] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#ff1b38] transition-all duration-300 flex items-center gap-3 shadow-xl shadow-[#E50925]/20 group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="#opportunities"
              className="px-8 py-4 rounded bg-neutral-900 border border-neutral-800 text-white font-bold text-sm uppercase tracking-wider hover:bg-neutral-800 transition-all duration-300 flex items-center gap-3"
            >
              <span>Join the Mission</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 h-[450px] lg:h-[550px] relative">
          {canRender3D ? (
            <Hero3DObject />
          ) : (
            <div
              className="w-full h-full rounded-full bg-gradient-to-br from-[#E50925]/20 via-transparent to-blue-600/20 blur-2xl"
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-neutral-800 text-neutral-400 font-mono text-xs uppercase tracking-widest relative z-10">
        <div>
          <span className="block text-white font-bold text-lg mb-1">2026</span>
          <span>Foundation Year</span>
        </div>
        <div>
          <span className="block text-white font-bold text-lg mb-1">Student-Powered</span>
          <span>Ecosystem Model</span>
        </div>
        <div>
          <span className="block text-white font-bold text-lg mb-1">Global-First</span>
          <span>Reach & Impact</span>
        </div>
        <div>
          <span className="block text-white font-bold text-lg mb-1">Production-Grade</span>
          <span>Delivery Rigor</span>
        </div>
      </div>
    </section>
  )
}
