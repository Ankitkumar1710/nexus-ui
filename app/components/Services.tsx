'use client';
import { Stethoscope, Factory, Briefcase, Shield, Sparkles, HardHat } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Hospital Staff',
      description: 'Qualified nurses, ward boys, and ayas for healthcare facilities',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Factory,
      title: 'Factory & Industrial Manpower',
      description: 'Skilled workers for manufacturing and production units',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Briefcase,
      title: 'Office Boy / Helper',
      description: 'Professional office support staff for smooth operations',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Shield,
      title: 'Security Guard Services',
      description: 'Trained security personnel for your premises',
      color: 'from-orange-600 to-orange-700',
    },
    {
      icon: Sparkles,
      title: 'Housekeeping Staff',
      description: 'Reliable cleaning and maintenance professionals',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: HardHat,
      title: 'Skilled & Unskilled Labour',
      description: 'Workforce for construction, projects, and general labor',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Comprehensive manpower solutions tailored to meet your specific business requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/30"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Need a custom manpower solution? We're here to help!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;