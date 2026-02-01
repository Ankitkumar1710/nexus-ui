'use client'
import { CheckCircle2, Users, ShieldCheck, Briefcase } from 'lucide-react'
import Rating from './Rating'

const About = () => {

  const steps = [
    {
      icon: Users,
      title: 'Requirement Analysis',
      desc: 'We understand your manpower requirement and project scope in detail.',
      img: '/ana1.png',
    },
    {
      icon: ShieldCheck,
      title: 'Verification Process',
      desc: 'Candidates go through background verification and skill screening.',
      img: '/auth.png',
    },
    {
      icon: Briefcase,
      title: 'Deployment',
      desc: 'Trained manpower is deployed quickly with full compliance.',
      img: '/abt3.png',
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-100 via-white to-red-50 dark:from-black dark:via-[#0f0f0f] dark:to-black"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who <span className="text-brand">We Are</span>
          </h2>

          <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            We provide reliable manpower solutions for hospitals, industries, construction
            projects and corporate offices. Our focus is on quality workforce, fast delivery
            and long-term partnerships.
          </p>

        </div>

        {/* IMAGE + CONTENT SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          {/* LEFT IMAGE */}
          <div className="relative group">

            <div className="absolute -inset-2 bg-brand/20 blur-2xl rounded-xl"></div>

            <img
              src="/hero.png"
              alt="Manpower Team"
              className="
                relative
                rounded-xl
                shadow-xl
                w-full
                object-cover
                group-hover:scale-[1.02]
                transition-transform duration-500
              "
            />

          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Professional Workforce Partner
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              Our company specializes in supplying skilled and unskilled manpower for
              multiple industries. We follow strict hiring standards and ensure every
              worker meets quality and safety requirements.
            </p>

            <div className="space-y-4">

              {[
                'Verified workforce with documentation',
                'Legal compliance and safety standards',
                'Flexible manpower deployment',
                '24/7 client support system',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand w-6 h-6" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* PROCESS CARDS */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {steps.map((item, index) => {
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
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="
                      w-full h-full object-cover
                      group-hover:scale-110
                      transition-transform duration-500
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white w-6 h-6" />
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.desc}
                  </p>

                </div>

              </div>
            )
          })}

        </div>
<Rating/>
      </div>
    </section>
  )
}

export default About
