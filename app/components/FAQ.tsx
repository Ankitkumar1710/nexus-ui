'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './Accordion'
import Image from 'next/image'

const FAQ = () => {
  const faqs = [
    {
      question: 'How can I hire manpower?',
      answer:
        'You can contact us via phone or WhatsApp. Our team will understand your requirement and deploy suitable manpower quickly.',
    },
    {
      question: 'How do you verify candidates?',
      answer:
        'We perform ID verification, address checks, police verification, reference checks and skill evaluation.',
    },
    {
      question: 'How fast is deployment?',
      answer:
        'Urgent manpower can be deployed within 24–48 hours. Specialized roles may take 3–5 working days.',
    },
    {
      question: 'What are the payment terms?',
      answer:
        'We provide flexible payment models including monthly, project based and contract hiring with transparent billing.',
    },
    {
      question: 'Do you provide replacement support?',
      answer:
        'Yes. If manpower is not suitable during trial period, replacement is provided without extra charges.',
    },
    {
      question: 'Are you legally compliant?',
      answer:
        'We follow PF, ESI, minimum wage laws and all statutory labour regulations.',
    },
  ]

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-gray-100 via-white to-red-50 dark:from-black dark:via-[#0f0f0f] dark:to-black"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-brand">Questions</span>
          </h2>

          <div className="w-24 h-1 bg-brand mx-auto mb-6" />

          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about our manpower services
          </p>

        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* LEFT FAQ */}

          <div className="relative">

            <div className="absolute -inset-6 bg-brand/10 blur-3xl rounded-full"></div>

            <Image
              src="/faq.png"   // <-- Place your FAQ image here in public folder
              alt="FAQ Support"
              width={500}
              height={500}
              className="relative rounded-2xl shadow-xl"
              priority
            />

          </div>

          {/* RIGHT IMAGE */}

          <div>

            <Accordion type="single" collapsible className="space-y-4">

              {faqs.map((faq, index) => (

                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="
                    bg-white dark:bg-[#141414]
                    
                    border border-gray-200 dark:border-gray-700
                    rounded-xl
                    px-6
                    shadow-sm hover:shadow-md
                    transition-all
                  "
                >

                  <AccordionTrigger
                    className="
  text-left
  text-base md:text-lg
  font-semibold
  text-gray-900 dark:text-white
  hover:text-brand
  py-6
"

                  >
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent
                    className="
                      text-gray-600 dark:text-gray-400
                      leading-relaxed
                      pb-6
                    "
                  >
                    {faq.answer}
                  </AccordionContent>

                </AccordionItem>

              ))}

            </Accordion>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Still confused? Talk directly with our support team
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button
              onClick={() => window.open('tel:+917070637489')}
              className="
                px-8 py-4
                bg-brand
                text-white
                font-semibold
                rounded-xl
                hover:opacity-90
                transition-all
                shadow-md
              "
            >
              Call Now
            </button>

            <button
              onClick={() => window.open('https://wa.me/917070637489')}
              className="
                px-8 py-4
                border-2 border-brand
                text-brand
                hover:bg-brand hover:text-white
                font-semibold
                rounded-xl
                transition-all
              "
            >
              WhatsApp Us
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default FAQ
