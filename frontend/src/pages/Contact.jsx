import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';
      const response = await axios.post(`${apiUrl}/api/contact`, formData);

      if (response.data.success) {
        setStatus({
          type: 'success',
          message: response.data.message,
        });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.error || 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      content: '+1 (573) 415-1555',
      link: 'tel:+15734151555',
      description: 'Available 24/7 for urgent matters',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'info@rmrtransportationllc.com',
      link: 'mailto:info@rmrtransportationllc.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Office',
      content: '5203 Oakleaf Dr, Kansas City, MO 64129 Apt 3',
      link: 'https://maps.google.com/?q=5203+Oakleaf+Dr+Kansas+City+MO+64129',
      description: 'Visit us by appointment',
    },
  ];

  const reasons = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'Shipping Quote',
      description: 'Need a freight quote? Get competitive rates for your shipment.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Driver Inquiry',
      description: 'Interested in driving with us? Learn about our opportunities.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Partnership',
      description: 'Want to partner with us? Let\'s discuss collaboration.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: 'General Questions',
      description: 'Have questions about our services? We\'re here to help.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-trucking-dark via-trucking-darker to-trucking-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're here to answer your questions and discuss how we can help with your freight needs.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-container bg-trucking-darker">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.title === 'Office' ? '_blank' : '_self'}
              rel={method.title === 'Office' ? 'noopener noreferrer' : ''}
              className="card hover:scale-105 transition-transform duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-trucking-blue to-trucking-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-trucking-blue font-medium mb-2 break-all">{method.content}</p>
              <p className="text-gray-400 text-sm">{method.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-container bg-trucking-dark">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
            <p className="text-gray-400 mb-8">
              Fill out the form below and we'll get back to you as soon as possible. For urgent matters, please call us directly.
            </p>

            <form onSubmit={handleSubmit} className="card space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-300 font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="input-field resize-none"
                  placeholder="Tell us about your freight needs or questions..."
                ></textarea>
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg flex items-start ${
                    status.type === 'success'
                      ? 'bg-green-500/20 border border-green-500'
                      : 'bg-red-500/20 border border-red-500'
                  }`}
                >
                  {status.type === 'success' ? (
                    <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  <p className={status.type === 'success' ? 'text-green-300' : 'text-red-300'}>
                    {status.message}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">How Can We Help?</h2>
              <p className="text-gray-400 mb-8">
                Whether you need freight services, have questions about our company, or want to join our team, we're ready to assist you.
              </p>

              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="card bg-trucking-darker hover:border-trucking-blue transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-trucking-blue to-trucking-orange rounded-full flex items-center justify-center text-white flex-shrink-0">
                        {reason.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                        <p className="text-gray-400 text-sm">{reason.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="card bg-gradient-to-br from-trucking-blue/20 to-trucking-orange/20 border-trucking-blue">
              <h3 className="text-xl font-bold text-white mb-4">Business Information</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-trucking-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-white">Dispatch Hours</p>
                    <p className="text-sm">24/7 Operations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-trucking-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-white">Office Hours</p>
                    <p className="text-sm">Mon-Fri: 8:00 AM - 6:00 PM CST</p>
                    <p className="text-sm">Sat: 9:00 AM - 2:00 PM CST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-trucking-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-white">USDOT Number</p>
                    <p className="text-sm">3590337</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="card bg-red-500/10 border-red-500">
              <h3 className="text-xl font-bold text-white mb-2">Emergency Contact</h3>
              <p className="text-gray-300 mb-4 text-sm">
                For urgent dispatch or roadside assistance, call our 24/7 emergency line:
              </p>
              <a
                href="tel:+15734151555"
                className="inline-flex items-center text-red-400 font-bold text-lg hover:text-red-300 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (573) 415-1555
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="section-container bg-trucking-darker">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Our Location</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-trucking-blue to-trucking-orange mx-auto mb-8"></div>
          <p className="text-gray-400 mb-8">
            Based in Kansas City, Missouri - Strategically located in the heart of America
          </p>
          <div className="card">
            <div className="aspect-video bg-trucking-dark rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.0833333333335!2d-94.5!3d39.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDAwJzAwLjAiTiA5NMKwMzAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RMR Transportation Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
