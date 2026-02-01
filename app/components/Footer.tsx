'use client'
import { Heart, Phone, Mail, MapPin } from 'lucide-react'
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-[#120707] text-white">

      <div className="container mx-auto px-4 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* COMPANY INFO */}
          <div>

            <Image
              src="/logo.png"
              alt="Company Logo"
              width={140}
              height={60}
              className="h-20 w-auto"
              priority
            />

            <p className="text-gray-400 mt-6 leading-relaxed">
              Trusted manpower partner delivering reliable workforce solutions
              across Bihar and nearby regions.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">

              {[SiFacebook, SiInstagram, SiLinkedin, SiX].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="
                    p-2 rounded-lg
                    bg-gray-800 hover:bg-brand
                    transition-all duration-300
                  "
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-bold mb-5 text-brand">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {['about', 'services', 'why-choose', 'industries', 'faq', 'careers', 'contact'].map((item) => (

                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="
                      text-gray-400
                      hover:text-brand
                      transition-colors
                    "
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                  </button>
                </li>

              ))}

            </ul>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-lg font-bold mb-5 text-brand">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Hospital Staff</li>
              <li>Factory Workers</li>
              <li>Office Support</li>
              <li>Security Guards</li>
              <li>Housekeeping</li>
              <li>Skilled & Unskilled Labour</li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-bold mb-5 text-brand">
              Contact Us
            </h3>

            <ul className="space-y-4">

              <li className="flex gap-3">
                <Phone className="text-brand mt-1" />
                <a
                  href="tel:+917070637489"
                  className="text-gray-400 hover:text-brand transition-colors"
                >
                  +91 7070637489
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="text-brand mt-1" />
                <a
                  href="mailto:info@nexussolutions.in"
                  className="text-gray-400 hover:text-brand transition-colors"
                >
                  info@nexussolutions.in
                </a>
              </li>

              <li className="flex gap-3">
                <MapPin className="text-brand mt-1" />
                <span className="text-gray-400">
                  Boring Road, Patna<br />
                  Bihar, India
                </span>
              </li>

            </ul>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-8">

          <div className="text-center text-gray-400">

            <p className="flex justify-center items-center gap-2 flex-wrap">
              © {currentYear} All Rights Reserved
              <Heart className="w-4 h-4 text-brand fill-current" />
              Built with Next.js
            </p>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer
