'use client'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-100 via-white to-red-50 dark:from-black dark:via-[#0f0f0f] dark:to-black"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-brand">Us</span>
          </h2>

          <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            Reach out to us for reliable manpower and staffing solutions
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* CONTACT INFO CARD */}
          <div
            className="
              group
              bg-white dark:bg-[#141414]
              rounded-xl p-8
              shadow-md hover:shadow-xl
              border border-gray-200 dark:border-gray-700
              transition-all duration-300
              hover:-translate-y-1
            "
          >

            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Get In Touch
            </h3>

            <div className="space-y-6">

              {/* PHONE */}
             <div className="flex gap-4">
  <div className="bg-brand p-3 rounded-lg shadow-md">
    <Phone className="text-white" />
  </div>

  <div>
    <p className="font-semibold dark:text-white">Phone</p>

    <p className="text-brand font-medium">
      +91 7070637489
    </p>

    <p className="text-gray-600 dark:text-gray-400">
      +91 8479968278
    </p>
  </div>
</div>


              {/* EMAIL */}
              <div className="flex gap-4 items-start">
                <div className="bg-brand p-3 rounded-lg shadow-md">
                  <Mail className="text-white" />
                </div>

                <div>
                  <p className="font-semibold dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    info@nexussolutions.in
                  </p>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex gap-4 items-start">
                <div className="bg-brand p-3 rounded-lg shadow-md">
                  <MapPin className="text-white" />
                </div>

                <div>
                  <p className="font-semibold dark:text-white">
                    Office Address
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Boring Road, Patna<br />
                    Bihar, India
                  </p>
                </div>
              </div>

              {/* TIME */}
              <div className="flex gap-4 items-start">
                <div className="bg-brand p-3 rounded-lg shadow-md">
                  <Clock className="text-white" />
                </div>

                <div>
                  <p className="font-semibold dark:text-white">
                    Business Hours
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mon – Sat: 9:00 AM – 7:00 PM<br />
                    Sun: 10:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex gap-4">

              <button
                onClick={() => window.open('tel:+917070637489')}
                className="
                  flex-1
                  bg-brand hover:opacity-90
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                  transition-all
                  shadow-md
                "
              >
                Call Now
              </button>

              <button
                onClick={() => window.open('https://wa.me/917070637489')}
                className="
                  flex-1
                  border-2 border-brand
                  text-brand
                  hover:bg-brand hover:text-white
                  py-3
                  rounded-xl
                  font-semibold
                  transition-all
                "
              >
                WhatsApp
              </button>

            </div>

          </div>

          {/* MAP CARD */}
          <div
            className="
              bg-white dark:bg-[#141414]
              rounded-xl p-6
              shadow-md hover:shadow-xl
              border border-gray-200 dark:border-gray-700
              transition-all duration-300
              hover:-translate-y-1
            "
          >

            <h3 className="text-xl font-bold mb-4 dark:text-white">
              Our Location
            </h3>

            <div className="rounded-xl overflow-hidden h-[380px]">

              <iframe
                src="https://www.google.com/maps?q=Boring+Road+Patna&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
