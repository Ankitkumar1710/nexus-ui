'use client';
import { CheckCircle2, Clock, DollarSign, FileCheck, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: CheckCircle2,
      title: 'Verified Candidates',
      description: 'All our candidates undergo thorough background verification and screening processes',
    },
    {
      icon: Clock,
      title: 'Quick Deployment',
      description: 'Fast turnaround time to meet your urgent manpower requirements',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising on quality and service standards',
    },
    {
      icon: FileCheck,
      title: 'Full Compliance',
      description: 'Complete adherence to labor laws, regulations, and statutory requirements',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to address your queries and concerns',
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-orange-500">Nexus Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We stand out from the competition with our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-bl-full"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-8 opacity-90">
              Join hundreds of satisfied clients who trust Nexus Solutions for their manpower needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('tel:+917070637489', '_self')}
                className="px-8 py-4 bg-white text-blue-500 font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Call +91 7070637489
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('careers');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-blue-500 transition-all duration-300"
              >
                Apply for Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;