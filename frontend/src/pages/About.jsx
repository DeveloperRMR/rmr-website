import { Link } from 'react-router-dom';

function About() {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '5000+', label: 'Loads Delivered' },
    { value: '48', label: 'States Covered' },
    { value: '99.8%', label: 'On-Time Delivery' },
  ];

  const values = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Safety First',
      description: 'We prioritize the safety of our drivers, cargo, and the public in every decision we make.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      title: 'Reliability',
      description: 'Our commitment to on-time delivery and consistent service has made us a trusted partner.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Driver-Focused',
      description: 'We support our drivers with competitive pay, respect, and the tools they need to succeed.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Integrity',
      description: 'Honesty and transparency guide our relationships with clients, drivers, and partners.',
    },
  ];

  const team = [
    {
      role: 'Operations',
      description: 'Experienced dispatchers and logistics coordinators ensuring smooth operations 24/7.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      role: 'Safety & Compliance',
      description: 'Dedicated team ensuring all DOT regulations and safety standards are met.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      role: 'Driver Support',
      description: 'Always available to assist our drivers with any needs or concerns on the road.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              About <span className="text-gradient">RMR Transportation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A trusted name in freight logistics, dedicated to moving America forward one load at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container bg-trucking-darker">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="section-container bg-trucking-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">Our Story</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-trucking-blue to-trucking-orange mx-auto mb-12"></div>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Founded in Kansas City, Missouri, <strong className="text-white">RMR TRANSPORTATION LLC</strong> has grown from a small operation to a respected name in the freight logistics industry. Our journey began with a simple mission: to provide reliable, efficient, and honest transportation services that keep America's supply chain moving.
            </p>
            <p>
              Based in the heart of the Midwest, we understand the critical role that freight transportation plays in connecting businesses across the nation. Our strategic location in Kansas City allows us to efficiently serve major corridors throughout the continental United States, from coast to coast.
            </p>
            <p>
              What sets us apart is our unwavering commitment to both our clients and our drivers. We believe that success comes from building strong relationships based on trust, reliability, and mutual respect. Every load we handle is treated with the same care and attention, whether it's going 100 miles or 1,000 miles.
            </p>
            <p>
              Our team of experienced logistics professionals works around the clock to ensure seamless operations. With modern technology, a robust network of carriers, and decades of combined industry experience, we deliver solutions that meet the evolving needs of today's supply chain challenges.
            </p>
            <div className="card bg-trucking-darker border-l-4 border-trucking-blue">
              <p className="text-trucking-blue font-semibold mb-2">Our Mission</p>
              <p className="text-white text-lg italic">
                "To be the most reliable and driver-focused freight logistics company in America, moving goods safely and efficiently while supporting the drivers who make it all possible."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-container bg-trucking-darker">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Core Values</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-trucking-blue to-trucking-orange mx-auto mb-8"></div>
          <p className="section-subtitle mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="card hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-trucking-blue to-trucking-orange rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section-container bg-trucking-dark">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-trucking-blue to-trucking-orange mx-auto mb-8"></div>
          <p className="section-subtitle mx-auto">
            Dedicated professionals committed to your success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <div key={index} className="card text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-trucking-blue to-trucking-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {member.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{member.role}</h3>
              <p className="text-gray-400 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="card bg-gradient-to-r from-trucking-blue/20 to-trucking-orange/20 border-trucking-blue text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for experienced drivers and logistics professionals who share our values and commitment to excellence.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Contact Us About Opportunities
          </Link>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="section-container bg-trucking-darker">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">Compliance & Safety</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-trucking-blue to-trucking-orange mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">DOT Compliance</h3>
              <p className="text-gray-400 mb-4">
                We maintain full compliance with all FMCSA regulations and DOT requirements.
              </p>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">
                  <strong className="text-trucking-blue">USDOT:</strong> 3590337
                </p>
                <p className="text-gray-300 text-sm">
                  <strong className="text-trucking-blue">Location:</strong> Kansas City, MO
                </p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">Safety Program</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-trucking-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Regular safety training and updates
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-trucking-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ELD compliance and monitoring
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-trucking-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vehicle maintenance programs
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-trucking-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Comprehensive insurance coverage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-br from-trucking-blue to-trucking-blue/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Experience the RMR Transportation difference. Let's discuss how we can meet your freight needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-trucking-blue hover:bg-gray-100">
              Get in Touch
            </Link>
            <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-trucking-blue">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
