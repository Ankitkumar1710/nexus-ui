'use client';
import { CheckCircle2, Users, Clock, Award, Star, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Reliable Manpower',
      description: 'Verified and trained professionals ready to serve your business needs',
    },
    {
      icon: Clock,
      title: 'Quick Deployment',
      description: 'Fast turnaround time to get your workforce in place when you need them',
    },
    {
      icon: Award,
      title: 'Long-term Satisfaction',
      description: 'Committed to building lasting relationships with quality service delivery',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Factory Manager',
      content: 'Nexus Solutions provided us with skilled workers on time. Their service is reliable and professional.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Hospital Admin',
      content: 'Excellent manpower solutions. All staff were well-trained and compliant with hospital standards.',
      rating: 5,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-orange-500">Nexus Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nexus Solutions is a leading manpower services provider based in Patna, Bihar. We specialize in supplying
            skilled and unskilled workforce to hospitals, factories, offices, construction sites, and various other
            industries. With our commitment to quality, reliability, and customer satisfaction, we have successfully
            completed over 500 projects and continue to be the trusted partner for businesses across the region.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Commitment */}
        <div className="bg-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mb-16 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Commitment</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Thoroughly verified and background-checked candidates',
              'Compliance with all labor laws and regulations',
              'Transparent pricing with no hidden costs',
              '24/7 customer support and assistance',
              'Flexible hiring solutions tailored to your needs',
              'Continuous training and skill development programs',
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">What Our Clients Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h3>
          <p className="text-gray-600 mb-6">Contact us today to discuss your manpower requirements.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('tel:+917070637489', '_self')}
              className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Call Now
            </button>
            <button
              onClick={() => window.open('https://wa.me/917070637489', '_blank')}
              className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;