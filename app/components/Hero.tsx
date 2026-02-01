'use client';
import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';


const Hero = () => {
    const [currentProject, setCurrentProject] = useState(150);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProject((prev) => (prev >= 500 ? 150 : prev + 1));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const handleWhatsApp = () => {
        window.open('https://wa.me/917070637489', '_blank');
    };

    const handleCall = () => {
        window.open('tel:+917070637489', '_self');
    };

    return (
        <section id="hero" className="relative pt-10 bg-gradient-to-br from-blue-500/5 via-white to-orange-500/5">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-blue-500">Nexus</span>{' '}
                                <span className="text-orange-500">Solutions</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 font-medium">
                                Skilled & Unskilled Manpower Provider for Hospitals, Factories, Offices & Projects
                            </p>
                        </div>

                        <p className="text-lg text-gray-600">
                            Your trusted partner for reliable, verified, and professional manpower solutions across Bihar and beyond.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleCall}
                                className="bg-blue-500 hover:bg-blue-500/90 text-white text-lg px-8 py-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Call Now
                            </button>
                            <button
                                onClick={handleWhatsApp}
                                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-lg px-8 py-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp Us
                            </button>
                        </div>
                        {/* Project Counter */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-orange-500/20">
                            <div className="text-center">
                                <div className="text-5xl font-bold text-orange-500 mb-2">{currentProject}+</div>
                                <div className="text-lg font-medium text-gray-700">Projects Completed Successfully</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="absolute -inset-10 bg-gradient-to-br from-blue-400/20 to-orange-400/20 blur-3xl rounded-full"></div>
                        <img
                            src="/hero.png"
                            alt="Manpower Services"
                            className="
                relative
                w-[300px]
                sm:w-[380px]
                md:w-[460px]
                lg:w-[520px]
                drop-shadow-2xl
 
              "/>

                    </div>

                </div>
            </div>

            {/* Decorative Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;