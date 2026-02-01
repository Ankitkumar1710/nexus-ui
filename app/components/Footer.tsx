'use client';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';
import Image from 'next/image'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
           <Image
                         src="/logo1.png"
                         alt="Nexus Solutions"
                         width={120}
                         height={50}
                         className="h-18 w-auto"
                       />
            <p className="text-gray-300 mb-4 mt-6">
              Your trusted partner for reliable manpower solutions across Bihar and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <SiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <SiX className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['about', 'services', 'why-choose', 'industries', 'faq', 'careers', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Hospital Staff</li>
              <li>Factory Workers</li>
              <li>Office Support</li>
              <li>Security Guards</li>
              <li>Housekeeping</li>
              <li>Skilled Labour</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+917070637489" className="text-gray-300 hover:text-orange-500 transition-colors">
                  +91 7070637489
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@nexussolutions.in" className="text-gray-300 hover:text-orange-500 transition-colors">
                  info@nexussolutions.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Boring Road, Patna<br />Bihar, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-300">
            <p className="flex items-center justify-center flex-wrap gap-1">
              © {currentYear} Nexus Solutions. All rights reserved. Built with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-current mx-1" />
              using Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;