import { Link } from 'react-router-dom';

function Services() {
  const mainServices = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Freight Dispatching',
      description: 'Professional dispatch services that maximize your earning potential and minimize your downtime.',
      features: [
        'Real-time load matching',
        '24/7 dispatch support',
        'Route optimization',
        'Rate negotiation',
        'Fuel-efficient routing',
      ],
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Full Truckload (FTL)',
      description: 'Reliable full truckload transportation services across all 48 contiguous states.',
      features: [
        'Dry van transportation',
        'Refrigerated freight',
        'Flatbed hauling',
        'Dedicated lanes',
        'On-time delivery guarantee',
      ],
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Owner-Operator Support',
      description: 'Comprehensive support programs designed specifically for independent owner-operators.',
      features: [
        'Weekly settlements',
        'Fuel card programs',
        'Insurance assistance',
        'Compliance support',
        'Fleet management tools',
      ],
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '24/7 Logistics Coordination',
      description: 'Round-the-clock support to keep your freight moving and your business running smoothly.',
      features: [
        'Live tracking updates',
        'Emergency dispatch',
        'Customer service',
        'Documentation support',
        'Problem resolution',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'Cross-Docking',
      description: 'Efficient transfer of freight between vehicles to optimize delivery times.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: 'Route Planning',
      description: 'Advanced route optimization to save fuel costs and reduce transit times.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Back Office Support',
      description: 'Complete administrative support including billing, paperwork, and compliance.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fleet Management',
      description: 'Comprehensive fleet tracking and management solutions for owner-operators.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: 'Compliance Assistance',
      description: 'Help with FMCSA regulations, ELD compliance, and DOT requirements.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Factoring Services',
      description: 'Quick payment solutions to improve your cash flow and reduce waiting time.',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Competitive Rates',
      description: 'We negotiate the best rates for our loads, ensuring maximum profitability for our carriers.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Nationwide Coverage',
      description: 'Operating across all 48 contiguous states with an extensive network of shippers.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Quick Pay Options',
      description: 'Fast payment processing with factoring available for immediate cash flow.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Modern Technology',
      description: 'Advanced load boards, GPS tracking, and mobile apps for seamless operations.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-trucking-dark via-trucking-darker to-trucking-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2073&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive freight and logistics solutions designed to keep America's supply chain moving efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
            <a href="tel:+15734151555" className="btn-secondary">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-container bg-trucking-darker">
        <div className="text-center mb-16">
          <h2 className="section-title">Core Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-trucking-blue to-trucking-orange mx-auto mb-8"></div>
          <p className="section-subtitle mx-auto">
            Professional logistics solutions tailored to your transportation needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {mainServices.map((service, index) => (
            <div key={index} className="card hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-trucking-blue to-trucking-orange rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <svg className="w-5 h-5 text-trucking-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-container bg-trucking-dark">
        <div className="text-center mb-16">
          <h2 className="section-title">Additional Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-trucking-blue to-trucking-orange mx-auto mb-8"></div>
          <p className="section-subtitle mx-auto">
            Extended support services to enhance your logistics operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div key={index} className="card text-center hover:border-trucking-blue transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-trucking-blue to-trucking-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container bg-trucking-darker">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose RMR Transportation</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-trucking-blue to-trucking-orange mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="card text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-trucking-blue to-trucking-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-container bg-trucking-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Service Coverage</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-trucking-blue to-trucking-orange mx-auto mb-8"></div>
          <p className="section-subtitle mb-8">
            We provide freight services across the entire continental United States
          </p>
          
          <div className="card">
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-lg font-bold text-trucking-orange mb-4">Regional Coverage</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-trucking-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Midwest
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-trucking-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Northeast
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-trucking-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Southeast
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-trucking-orange mb-4">Long Haul</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-trucking-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    West Coast
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-trucking-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Southwest
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-trucking-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Pacific Northwest
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-trucking-orange mb-4">Specialized</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-trucking-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cross-border (Mexico/Canada)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-trucking-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Port-to-door delivery
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-trucking-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Expedited shipping
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-br from-trucking-blue to-trucking-blue/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join hundreds of satisfied clients who trust RMR Transportation for their logistics needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-trucking-blue hover:bg-gray-100">
              Request a Quote
            </Link>
            <a href="tel:+15734151555" className="btn-secondary border-white text-white hover:bg-white hover:text-trucking-blue">
              Call +1 (573) 415-1555
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
