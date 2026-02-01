'use client'
import { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'

const Hero = () => {
    const [currentProject, setCurrentProject] = useState(150)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProject((prev) => (prev >= 500 ? 150 : prev + 1))
        }, 40)

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
            className="relative bg-gradient-to-br from-gray-100 via-white to-red-50 dark:from-black dark:via-[#0f0f0f] dark:to-black"
        >
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-8">

                        {/* MAIN HEADING */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                <span className="text-brand">Your Growth Partner</span> In Workforce Management
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                                Supplying Verified, Trained & Project-Ready Manpower Across India
                            </p>
                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            We help businesses complete projects faster by supplying verified,
                            trained and reliable manpower across Bihar and other major regions
                            of India.
                        </p>

                        {/* CTA BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-4">

                            <button
                                onClick={handleCall}
                                className="bg-brand hover:opacity-90 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center shadow-md"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Call Now
                            </button>

                            <button
                                onClick={handleWhatsApp}
                                className="border-2 border-brand text-brand hover:bg-brand hover:text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp Us
                            </button>

                        </div>

                        {/* PROJECT COUNTER CARD */}
                        <div
                            className="
                bg-white dark:bg-[#141414]
                rounded-xl
                shadow-md
                p-6
                border
                border-gray-200 dark:border-gray-700
                max-w-sm
              "
                        >
                            <div className="text-center">
                                <div className="text-5xl font-bold text-brand mb-2">
                                    {currentProject}+
                                </div>

                                <div className="text-lg font-medium text-gray-700 dark:text-gray-300">
                                    Projects Successfully Delivered
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">

                        <div className="absolute -inset-8 bg-gradient-to-br from-red-200/40 to-gray-300/30 dark:from-red-500/10 dark:to-gray-700/10 blur-3xl rounded-full"></div>

                        <img
                            src="/hero.png"
                            alt="Manpower Services"
                            className="relative w-[300px] sm:w-[380px] md:w-[460px] lg:w-[520px] drop-shadow-2xl"
                        />

                    </div>

                </div>
            </div>

            {/* BOTTOM WAVE */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full">
                    <path
                        fill="white"
                        className="dark:fill-black"
                        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L0,120Z"
                    />
                </svg>
            </div>

        </section>
    )
}

export default Hero
