'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './Accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How to hire manpower through Nexus Solutions?',
      answer:
        'Simply contact us via phone (+91 7070637489) or WhatsApp with your requirements. Our team will understand your needs, provide suitable candidates, and handle all the documentation and deployment processes.',
    },
    {
      question: 'What is the verification process for candidates?',
      answer:
        'All our candidates undergo thorough background verification including identity proof, address verification, police verification, and reference checks. We also verify their skills and experience through practical assessments.',
    },
    {
      question: 'How long does it take for deployment?',
      answer:
        'Depending on your requirements, we can deploy manpower within 24-48 hours for urgent needs. For specialized roles, it may take 3-5 business days to ensure we provide the best-suited candidates.',
    },
    {
      question: 'What are your pricing and payment terms?',
      answer:
        'Our pricing is competitive and transparent with no hidden costs. We offer flexible payment terms based on your requirements - monthly, quarterly, or project-based. Contact us for a customized quote.',
    },
    {
      question: 'Do you provide replacement if a candidate is not suitable?',
      answer:
        'Yes, we offer a replacement guarantee. If a candidate is not meeting your expectations within the agreed trial period, we will provide a suitable replacement at no additional cost.',
    },
    {
      question: 'Are you compliant with labor laws and regulations?',
      answer:
        'Absolutely. We ensure full compliance with all applicable labor laws, including minimum wages, PF, ESI, and other statutory requirements. All documentation and legal formalities are handled professionally.',
    },
    {
      question: 'Can I hire manpower for short-term projects?',
      answer:
        'Yes, we provide flexible hiring solutions for both short-term projects and long-term requirements. Whether you need staff for a day, a week, or several months, we can accommodate your needs.',
    },
    {
      question: 'How can I apply for a job with Nexus Solutions?',
      answer:
        'You can apply through our Careers section on this website by filling out the application form. Alternatively, you can call or WhatsApp us at +91 7070637489 with your details and job preferences.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services and processes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl px-6 hover:border-orange-500/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-orange-500 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('tel:+917070637489', '_self')}
              className="inline-flex items-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Call Us
            </button>
            <button
              onClick={() => window.open('https://wa.me/917070637489', '_blank')}
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;