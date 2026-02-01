'use client'
import { CheckCircle2, Users, Clock, Award, Star } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Reliable Manpower',
      description: 'Verified and trained professionals ready to support your business operations',
    },
    {
      icon: Clock,
      title: 'Quick Deployment',
      description: 'Fast workforce deployment to keep your projects running without delays',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'High service standards with long-term partnership commitment',
    },
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '1000+', label: 'Satisfied Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Factory Manager',
      content:
        'They provided skilled workers on time and helped us complete our project smoothly. Very professional service.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Hospital Administrator',
      content:
        'Staff quality was excellent and well trained. We are highly satisfied with their manpower support.',
      rating: 5,
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
            About <span className="text-brand">Our Company</span>
          </h2>

          <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            We are a professional manpower services provider specializing in supplying skilled and unskilled workforce
            for hospitals, factories, construction projects, offices and industrial operations. Our focus is quality,
            reliability and long-term business partnerships.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="
                  bg-white dark:bg-[#141414]
                  p-8 rounded-xl
                  shadow-md hover:shadow-xl
                  border border-gray-200 dark:border-gray-700
                  transition-all duration-300
                "
              >
                <div className="w-16 h-16 bg-brand rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* COMMITMENT */}
        <div
          className="
            bg-white dark:bg-[#141414]
            rounded-xl p-8 md:p-12
            max-w-4xl mx-auto mb-16
            shadow-md
            border border-gray-200 dark:border-gray-700
          "
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Our Commitment
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Verified and background-checked workforce',
              'Compliance with labour laws and safety standards',
              'Transparent pricing policy',
              '24/7 customer support',
              'Flexible manpower solutions',
              'Continuous skill development programs',
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-brand mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            What Our Clients Say
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="
                  bg-white dark:bg-[#141414]
                  p-6 rounded-xl
                  shadow-md
                  border border-gray-200 dark:border-gray-700
                "
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "{testimonial.content}"
                </p>

                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready To Work With Us?
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Contact us today and get professional manpower support for your projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button
              onClick={() => window.open('tel:+917070637489', '_self')}
              className="px-8 py-4 bg-brand text-white font-semibold rounded-xl hover:opacity-90 transition-all"
            >
              Call Now
            </button>

            <button
              onClick={() => window.open('https://wa.me/917070637489', '_blank')}
              className="px-8 py-4 border-2 border-brand text-brand hover:bg-brand hover:text-white font-semibold rounded-xl transition-all"
            >
              WhatsApp Us
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About
