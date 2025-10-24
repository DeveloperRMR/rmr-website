import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Freight Dispatching',
    'Truckload Transportation',
    'Owner-Operator Support',
    '24/7 Logistics Coordination',
  ];

  return (
    <footer className="bg-trucking-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-trucking-blue to-trucking-orange rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">
                  RMR TRANSPORTATION
                </h3>
                <p className="text-xs text-gray-400">LLC</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Moving America Forward, One Load at a Time.
            </p>
            <p className="text-gray-500 text-xs">
              <strong className="text-gray-400">USDOT:</strong> 3590337
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-trucking-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm flex items-start">
                  <svg
                    className="w-4 h-4 text-trucking-blue mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-trucking-orange flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-gray-400 text-sm">
                  5203 Oakleaf Dr, Kansas City,
                  <br />
                  Missouri 64129 Apt 3
                </p>
              </div>

              <a
                href="tel:+15734151555"
                className="flex items-center space-x-3 text-gray-400 hover:text-trucking-orange transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm">+1 (573) 415-1555</span>
              </a>

              <a
                href="mailto:info@rmrtransportationllc.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-trucking-orange transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm break-all">info@rmrtransportationllc.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 bg-trucking-gray rounded-lg flex items-center justify-center hover:bg-trucking-blue transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-trucking-gray rounded-lg flex items-center justify-center hover:bg-trucking-blue transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          {/* SMS Consent Notice */}
          <div className="bg-trucking-gray/50 rounded-lg p-4 mb-6 border border-gray-700">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-trucking-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <div className="flex-1">
                <p className="text-gray-400 text-xs leading-relaxed">
                  <strong className="text-gray-300">SMS Consent Notice:</strong> By providing your phone number, you consent to receive SMS messages from RMR TRANSPORTATION LLC. Message frequency varies. Message & data rates may apply. Reply STOP to opt-out. For help, reply HELP or contact{' '}
                  <a href="mailto:info@rmrtransportationllc.com" className="text-trucking-blue hover:underline">
                    info@rmrtransportationllc.com
                  </a>
                  {' '}or{' '}
                  <a href="tel:+15734151555" className="text-trucking-blue hover:underline">
                    +1 (573) 415-1555
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} RMR TRANSPORTATION LLC. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-trucking-blue transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/sms-terms"
                className="text-gray-400 hover:text-trucking-blue transition-colors"
              >
                SMS Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
