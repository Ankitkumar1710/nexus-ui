'use client'
import { Building2, Factory, Briefcase, HardHat, Warehouse } from 'lucide-react'

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Hospitals',
      description: 'Healthcare institutions requiring trained medical and support staff',
    },
    {
      icon: Factory,
      title: 'Factories',
      description: 'Manufacturing units needing skilled and unskilled manpower',
    },
    {
      icon: Briefcase,
      title: 'Corporate Offices',
      description: 'Business offices requiring administrative and support workforce',
    },
    {
      icon: HardHat,
      title: 'Construction Projects',
      description: 'Infrastructure and construction sites needing labour and technicians',
    },
    {
      icon: Warehouse,
      title: 'Warehouses & Logistics',
      description: 'Storage and logistics centers requiring handling and operations staff',
    },
  ]

  return (
    <section
      id="industries"
      className="py-20 bg-gradient-to-br from-gray-100 via-white to-red-50 dark:from-black dark:via-[#0f0f0f] dark:to-black"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industries We <span className="text-brand">Serve</span>
          </h2>

          <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            Delivering reliable workforce solutions across multiple business sectors
          </p>
        </div>

        {/* INDUSTRIES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">

          {industries.map((industry, index) => {
            const Icon = industry.icon

            return (
              <div
                key={index}
                className="
                  group
                  bg-white dark:bg-[#141414]
                  rounded-xl p-6
                  shadow-md hover:shadow-xl
                  border border-gray-200 dark:border-gray-700
                  text-center
                  transition-all duration-300
                  hover:-translate-y-2
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-16 h-16
                    bg-brand
                    rounded-xl
                    flex items-center justify-center
                    mx-auto mb-4
                    group-hover:scale-110
                    transition-transform
                  "
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-lg font-bold mb-2
                    text-gray-900 dark:text-white
                    group-hover:text-brand
                    transition-colors
                  "
                >
                  {industry.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {industry.description}
                </p>

              </div>
            )
          })}

        </div>

        {/* CTA BOX */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div
            className="
              bg-white dark:bg-[#141414]
              rounded-xl p-8 md:p-12
              shadow-md
              border border-gray-200 dark:border-gray-700
              text-center
            "
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Don’t See Your Industry Listed?
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              We provide customized manpower solutions for multiple industries. Contact us to discuss your requirements.
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
              Contact Us Today
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Industries
