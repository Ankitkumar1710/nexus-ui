'use client'
import { Stethoscope, Factory, Briefcase, Shield, Sparkles, HardHat } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Hospital Staff',
      description: 'Qualified nurses, ward boys and healthcare support staff for hospitals and clinics',
    },
    {
      icon: Factory,
      title: 'Factory & Industrial Manpower',
      description: 'Skilled workforce for manufacturing plants and industrial operations',
    },
    {
      icon: Briefcase,
      title: 'Office Support Staff',
      description: 'Office boys, helpers and administrative support staff for smooth business operations',
    },
    {
      icon: Shield,
      title: 'Security Guard Services',
      description: 'Trained and reliable security personnel for residential and commercial premises',
    },
    {
      icon: Sparkles,
      title: 'Housekeeping Staff',
      description: 'Professional cleaning and maintenance workforce for offices, hospitals and industries',
    },
    {
      icon: HardHat,
      title: 'Skilled & Unskilled Labour',
      description: 'Construction and project-based manpower for infrastructure and site operations',
    },
  ]

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-100 via-white to-red-50 dark:from-black dark:via-[#0f0f0f] dark:to-black"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-brand">Services</span>
          </h2>

          <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            End-to-end manpower solutions tailored to meet your project and business workforce needs
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={index}
                className="
                  group
                  bg-white dark:bg-[#141414]
                  rounded-xl p-8
                  shadow-md hover:shadow-xl
                  border border-gray-200 dark:border-gray-700
                  transition-all duration-300
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-16 h-16
                    bg-brand
                    rounded-xl
                    flex items-center justify-center
                    mb-6
                    group-hover:scale-110
                    transition-transform
                  "
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-xl font-bold mb-3
                    text-gray-900 dark:text-white
                    group-hover:text-brand
                    transition-colors
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>

              </div>
            )
          })}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Need a customized workforce solution for your project?
          </p>

          <button
            onClick={() => {
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="
              inline-flex items-center
              px-8 py-4
              bg-brand text-white
              font-semibold
              rounded-xl
              hover:opacity-90
              transition-all
              shadow-md
            "
          >
            Get In Touch
          </button>
        </div>

      </div>
    </section>
  )
}

export default Services
