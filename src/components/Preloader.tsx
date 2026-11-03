'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { useStore } from '@/store/useStore'

function InnovationNexus() {
  const meshRef = useRef<THREE.Mesh>(null)
  const wireframeRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2
      meshRef.current.rotation.y = time * 0.3
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -time * 0.15
      wireframeRef.current.rotation.y = -time * 0.25
    }
  })

  return (
    <group>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} color="#E50925" />
      <pointLight position={[-10, -10, -5]} intensity={1.5} color="#3B82F6" />

      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[2.2, 1]} />
          <MeshDistortMaterial
            color="#090909"
            roughness={0.1}
            metalness={0.9}
            distort={0.4}
            speed={3}
            wireframe={false}
          />
        </mesh>

        <mesh ref={wireframeRef} scale={[1.15, 1.15, 1.15]}>
          <icosahedronGeometry args={[2.2, 1]} />
          <meshStandardMaterial
            color="#E50925"
            wireframe={true}
            transparent={true}
            opacity={0.3}
          />
        </mesh>
      </Float>
    </group>
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

export default function Preloader() {
  const { isPreloaderComplete, setPreloaderComplete } = useStore()
  const [progress, setProgress] = useState(0)
  const [canRender3D, setCanRender3D] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const webglTimer = window.setTimeout(() => setCanRender3D(supportsWebGL()), 0)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      const reducedMotionTimer = window.setTimeout(() => {
        setProgress(100)
        setPreloaderComplete(true)
      }, 0)
      return () => {
        window.clearTimeout(webglTimer)
        window.clearTimeout(reducedMotionTimer)
      }
    }

    let cancelled = false
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + 4, 100)
        if (next >= 100) {
          clearInterval(interval)
          timeoutRef.current = setTimeout(() => {
            if (!cancelled) setPreloaderComplete(true)
          }, 500)
        }
        return next
      })
    }, 40)

    return () => {
      cancelled = true
      window.clearTimeout(webglTimer)
      clearInterval(interval)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [setPreloaderComplete])

  if (isPreloaderComplete) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-[#090909] text-[#F5F5F5] flex flex-col items-center justify-between p-12"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading Lunablaze experience"
    >
      <div className="w-full flex justify-between items-center tracking-widest text-xs uppercase text-[#888]">
        <span>Lunablaze Studio — 2026</span>
        <span className="text-[#E50925] font-mono">INITIALIZING SYSTEM</span>
        <span className="hidden sm:inline">Global-First</span>
      </div>

      <div className="relative w-full max-w-xl h-80 flex flex-col items-center justify-center">
        <div className="absolute inset-0" aria-hidden="true">
          {canRender3D ? (
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
              <InnovationNexus />
            </Canvas>
          ) : (
            <div className="w-full h-full rounded-full bg-[#E50925]/10 blur-3xl" />
          )}
        </div>
        <div className="absolute bottom-0 text-center z-10 pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2 bg-gradient-to-r from-white via-gray-300 to-[#E50925] bg-clip-text text-transparent">
            LUNABLAZE
          </h1>
          <p className="text-sm uppercase tracking-widest text-neutral-400">
            Student-Powered Technology Innovation
          </p>
        </div>
      </div>

      <div className="w-full max-w-md flex flex-col gap-4">
        <div className="flex justify-between text-sm font-mono">
          <span className="text-neutral-400">LOADING SHADERS & MODELS</span>
          <span className="text-[#E50925]" aria-hidden="true">
            {progress}%
          </span>
        </div>
        <div
          className="w-full h-1 bg-neutral-800 overflow-hidden rounded-full"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label="Loading progress"
        >
          <div
            className="h-full bg-[#E50925] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            onClick={() => setPreloaderComplete(true)}
            className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mt-2"
          >
            Skip Preloader
          </button>
        </div>
      </div>
    </div>
  )
}
