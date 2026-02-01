'use client'
import Image from 'next/image'
import { CheckCircle2, Clock, DollarSign, FileCheck, Headphones, Award } from 'lucide-react'

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: CheckCircle2,
      title: 'Verified Candidates',
      description: 'Background verified and professionally screened workforce',
      image: '/w1.png',
    },
    {
      icon: Clock,
      title: 'Quick Deployment',
      description: 'Fast manpower deployment for urgent project requirements',
      image: '/w2.png',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Cost-effective manpower solutions without quality compromise',
      image: '/w3.png',
    },
    {
      icon: FileCheck,
      title: 'Legal Compliance',
      description: 'Complete labour law and statutory compliance assurance',
      image: '/w4.png',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated support team available round-the-clock',
      image: '/w8.png',
    },
    {
      icon: Award,
      title: 'Trusted Service',
      description: 'Proven track record with long-term business partners',
      image: '/w7.png',
    },
  ]

  return (
    <section
      id="why-choose"
      className="py-20 bg-gradient-to-br from-gray-100 via-white to-red-50 dark:from-black dark:via-[#0f0f0f] dark:to-black"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-brand">Choose Us</span>
          </h2>

          <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            We deliver reliable manpower solutions backed by trust, quality and performance
          </p>
        </div>

        {/* GRID (3 x 3) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {advantages.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={index}
                className="
                  group
                  bg-white dark:bg-[#141414]
                  rounded-xl
                  overflow-hidden
                  shadow-md hover:shadow-xl
                  border border-gray-200 dark:border-gray-700
                  transition-all duration-300
                  hover:-translate-y-2
                "
              >
                {/* IMAGE */}
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* ICON BADGE */}
                  <div className="absolute -bottom-6 left-4 bg-brand p-3 rounded-xl shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="pt-10 p-6">

                  <h3
                    className="
                      text-lg font-bold mb-2
                      text-gray-900 dark:text-white
                      group-hover:text-brand
                      transition-colors
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                </div>
              </div>
            )
          })}

        </div>

        {/* CTA BOX */}
        <div
          className="
            mt-16
            bg-brand
            rounded-xl
            p-8 md:p-12
            text-white
            max-w-4xl mx-auto
            shadow-lg
            text-center
          "
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready To Start Your Project?
          </h3>

          <p className="text-lg mb-8 opacity-90">
            Partner with us and get reliable manpower support for your business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button
              onClick={() => window.open('tel:+917070637489', '_self')}
              className="px-8 py-4 bg-white text-brand font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              Call +91 7070637489
            </button>

            <button
              onClick={() => {
                const element = document.getElementById('careers')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-brand transition-all"
            >
              Apply For Job
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
