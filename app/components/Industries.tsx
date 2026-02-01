'use client';
import { Building2, Factory, Briefcase, HardHat, Warehouse } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Hospitals',
      description: 'Healthcare facilities requiring medical and support staff',
    },
    {
      icon: Factory,
      title: 'Factories',
      description: 'Manufacturing units needing skilled and unskilled workers',
    },
    {
      icon: Briefcase,
      title: 'Offices',
      description: 'Corporate offices requiring support and administrative staff',
    },
    {
      icon: HardHat,
      title: 'Construction',
      description: 'Building projects needing construction workers and laborers',
    },
    {
      icon: Warehouse,
      title: 'Warehouses',
      description: 'Storage facilities requiring logistics and handling staff',
    },
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industries We <span className="text-orange-500">Serve</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Providing specialized manpower solutions across diverse sectors and industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-500/50 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-orange-500 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-orange-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Don't See Your Industry?</h3>
              <p className="text-lg text-gray-600 mb-6">
                We work with businesses across various sectors. Contact us to discuss your specific manpower requirements.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;