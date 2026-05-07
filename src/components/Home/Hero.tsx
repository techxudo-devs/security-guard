"use client"

import Image from 'next/image'
import heroImg from '@/assets/hero.avif'
import LightRays from '../Backgrounds/LightRays'

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-50"
        />
        {/* Optional Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Light Rays Effect */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <LightRays
          raysColor="#b200ff"
          raysSpeed={0.5}
          lightSpread={0.8}
          rayLength={1.5}
          className="opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-sora tracking-tight">
          Secure Your <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Digital Future
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-poppins">
          Advanced protection and monitoring for your mission-critical infrastructure.
        </p>
      </div>
    </section>
  )
}

export default Hero