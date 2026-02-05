'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Briefcase } from 'lucide-react'
import Image from 'next/image'
import JobApplyForm from './JobApplyForm'

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [applyOpen, setApplyOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all
        ${isScrolled ? 'bg-white/90 backdrop-blur shadow-md' : 'bg-white'}`}
      >
        <div className="container mx-auto px-4">
          {/* LOGO */}
          <div className="flex items-center justify-between h-[78px] md:h-[92px]">
            <div
              onClick={() => scrollTo('hero')}
              className="cursor-pointer flex items-center"
            >
              <Image
                src="/logoheader.png"
                alt="logo"
                width={220}
                height={40}
                priority
                className="w-auto h-auto object-contain"
              />
            </div>



            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">

              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm font-medium text-gray-700 hover:text-brand"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => setApplyOpen(true)}
                className="bg-brand text-white px-5 py-2 rounded-lg flex items-center gap-2"
              >
                <Briefcase size={18} />
                Apply Now
              </button>

            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="lg:hidden bg-white border-t p-4 flex flex-col gap-4">

              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left font-medium"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => setApplyOpen(true)}
                className="bg-brand text-white py-2 rounded-lg"
              >
                Apply Now
              </button>

            </div>
          )}

        </div>
      </header>

      {/* APPLY POPUP */}
      {applyOpen && (
        <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center p-4">

          <div className="bg-white rounded-xl w-full max-w-lg p-6 relative">

            <button
              onClick={() => setApplyOpen(false)}
              className="absolute right-4 top-4"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Apply For Job
            </h2>

            <JobApplyForm onSuccess={() => setApplyOpen(false)} />

          </div>
        </div>
      )}
    </>
  )
}

export default Header
