'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-choose' },
    { label: 'Industries', id: 'industries' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Careers', id: 'careers' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-black/90 backdrop-blur-md shadow-md'
          : 'bg-white dark:bg-black'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <Image
              src="/logo.png"
              alt="Nexus Solutions"
              width={80}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">

            {/* 🌙 THEME TOGGLE BUTTON */}
            <ThemeToggle />

            {/* CALL BUTTON */}
            <button
              onClick={() => window.open('tel:+917070637489', '_self')}
              className="bg-brand hover:opacity-90 text-white px-5 py-2 rounded-lg font-semibold transition-all flex items-center shadow-md"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </button>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-brand transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
            <nav className="flex flex-col space-y-4">

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}

              {/* 🌙 MOBILE THEME TOGGLE */}
              <div className="pt-2">
                <ThemeToggle />
              </div>

              <button
                onClick={() => window.open('tel:+917070637489', '_self')}
                className="bg-brand hover:opacity-90 text-white w-full px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center shadow-md"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </button>

            </nav>
          </div>
        )}

      </div>
    </header>
  )
}

export default Header
