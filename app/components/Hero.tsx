'use client'
import { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import JobApplyForm from './JobApplyForm'

const Hero = () => {

  // COUNTER STATE
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    workforce: 0,
    experience: 0,
  })

  // COUNTER ANIMATION
  useEffect(() => {

    const targets = {
      projects: 500,
      clients: 1000,
      workforce: 1500,
      experience: 5,
    }

    const duration = 2500
    const steps = 60
    const intervalTime = duration / steps

    let step = 0

    const interval = setInterval(() => {
      step++

      setCounts({
        projects: Math.min(Math.floor((targets.projects / steps) * step), targets.projects),
        clients: Math.min(Math.floor((targets.clients / steps) * step), targets.clients),
        workforce: Math.min(Math.floor((targets.workforce / steps) * step), targets.workforce),
        experience: Math.min(Math.floor((targets.experience / steps) * step), targets.experience),
      })

      if (step === steps) clearInterval(interval)

    }, intervalTime)

    return () => clearInterval(interval)

  }, [])

  const handleWhatsApp = () => {
    window.open('https://wa.me/917070637489', '_blank')
  }

  const handleCall = () => {
    window.open('tel:+917070637489', '_self')
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* BLUR LAYER */}
      <div className="absolute inset-0 backdrop-blur-[6px]" />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4">

        <div className="max-w-5xl mt-8 mx-auto text-center space-y-4">

  {/* HEADING */}
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-white whitespace-nowrap">
    <span className="text-brand">Trusted Manpower</span> Service Provider
  </h1>

  {/* SUB TEXT */}
 <p className="text-base md:text-xl text-gray-200">
  Delivering Workforce Solutions Trusted By Growing Businesses
</p>



  {/* DESCRIPTION */}
  <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
    We help companies complete projects faster by providing reliable,
    verified and professional manpower for industrial, hospital and corporate needs.
  </p>

  {/* CTA BUTTONS */}
  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">

    <button
      onClick={handleCall}
      className="bg-brand hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center shadow-xl transition"
    >
      <Phone className="w-5 h-5 mr-2" />
      Call Now
    </button>

    <button
      onClick={handleWhatsApp}
      className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition"
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      WhatsApp Us
    </button>
  </div>

  {/* COUNTERS */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">

    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-lg">
      <div className="text-3xl font-bold text-brand">
        {counts.projects}+
      </div>
      <p className="text-gray-200 text-sm mt-1">Projects Completed</p>
    </div>

    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-lg">
      <div className="text-3xl font-bold text-brand">
        {counts.clients}+
      </div>
      <p className="text-gray-200 text-sm mt-1">Satisfied Clients</p>
    </div>

    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-lg">
      <div className="text-3xl font-bold text-brand">
        {counts.workforce}+
      </div>
      <p className="text-gray-200 text-sm mt-1">Skilled Workforce</p>
    </div>

    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-lg">
      <div className="text-3xl font-bold text-brand">
        {counts.experience}+
      </div>
      <p className="text-gray-200 text-sm mt-1">Years Experience</p>
    </div>

  </div>
</div>


      </div>

    </section>
  )
}

export default Hero
