'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Industries', id: 'industries' },
    { label: 'Careers', id: 'careers' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? 'bg-white/90 backdrop-blur shadow-md' : 'bg-white'}
      `}
    >

      <div className="container mx-auto px-4">

        {/* HEADER BAR */}
        <div className="flex items-center justify-between h-[72px] md:h-[80px]">

          {/* LOGO */}
          <div
            onClick={() => scrollTo('hero')}
            className="flex items-center cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="Nexus Solutions"
              width={220}
              height={70}
              priority
              className="h-[48px] md:h-[56px] w-auto object-contain"
            />
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-gray-700 hover:text-brand transition"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => window.open('tel:+917070637489')}
              className="bg-brand text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition"
            >
              <Phone size={16} />
              Call Now
            </button>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-800"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (

          <div className="lg:hidden bg-white border-t">

            <div className="flex flex-col p-4 gap-4">

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left font-medium text-gray-700"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => window.open('tel:+917070637489')}
                className="bg-brand text-white py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                Call Now
              </button>

            </div>

          </div>

        )}

      </div>

    </header>
  )
}

export default Header
