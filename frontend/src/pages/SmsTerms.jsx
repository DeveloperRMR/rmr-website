import { Link } from 'react-router-dom';

function SmsTerms() {
  const lastUpdated = 'October 24, 2025';

  return (
    <div className="min-h-screen pt-20 bg-trucking-darker">
      {/* Header */}
      <section className="bg-trucking-dark py-12 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            SMS Terms & Conditions
          </h1>
          <p className="text-gray-400">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-300 leading-relaxed mb-4">
                These SMS Terms and Conditions ("SMS Terms") govern your use of the SMS notification service provided by RMR TRANSPORTATION LLC ("we," "us," or "our"). By providing your mobile phone number and opting in to receive SMS messages, you agree to be bound by these terms.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Please read these terms carefully before subscribing to our SMS service. If you do not agree with these terms, please do not register for SMS notifications.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                1. Service Description
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                RMR TRANSPORTATION LLC provides SMS notification services to registered users for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li><strong>Load Assignments:</strong> Notifications about available loads and freight opportunities</li>
                <li><strong>Scheduling Updates:</strong> Changes to pickup/delivery times and route modifications</li>
                <li><strong>Delivery Confirmations:</strong> Status updates on completed deliveries</li>
                <li><strong>Payment Notifications:</strong> Information about payment processing and invoicing</li>
                <li><strong>Documentation Reminders:</strong> Alerts for required paperwork and compliance documents</li>
                <li><strong>Service Alerts:</strong> Important updates about our services and operations</li>
                <li><strong>Logistics Coordination:</strong> Real-time communication for operational efficiency</li>
              </ul>

              <div className="bg-trucking-dark rounded-lg p-6 border-l-4 border-trucking-blue">
                <p className="text-gray-300">
                  <strong className="text-white">Service Purpose:</strong> Our SMS service is designed exclusively for business-related logistics communications. We do not send promotional messages or advertisements unrelated to our core freight and transportation services.
                </p>
              </div>
            </div>

            {/* Enrollment and Consent */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                2. Enrollment and Consent
              </h2>
              
              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Opt-In Requirement
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                By providing your mobile phone number and checking the consent box on our registration form, you expressly consent to receive SMS text messages from RMR TRANSPORTATION LLC at the phone number provided. This consent is not a condition of purchase or service, but is necessary to receive SMS notifications.
              </p>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Age Requirement
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                You must be at least 18 years old to register for SMS notifications. By registering, you confirm that you are 18 years of age or older.
              </p>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Phone Number Accuracy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                You are responsible for providing an accurate and current mobile phone number. You must notify us immediately if your phone number changes by contacting us at <a href="mailto:info@rmrtransportationllc.com" className="text-trucking-blue hover:underline">info@rmrtransportationllc.com</a> or <a href="tel:+15734151555" className="text-trucking-blue hover:underline">+1 (573) 415-1555</a>.
              </p>
            </div>

            {/* Message Frequency */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                3. Message Frequency and Timing
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Message frequency varies</strong> based on your activity level and operational needs. You may receive:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Multiple messages per day during active load assignments</li>
                <li>Fewer messages during periods of inactivity</li>
                <li>Urgent messages at any time for time-sensitive logistics coordination</li>
                <li>Occasional service updates and important announcements</li>
              </ul>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-6">
                <p className="text-yellow-200">
                  <strong className="block mb-2">Important Note:</strong>
                  SMS messages may be sent at any time, including early morning, evening, or overnight hours, when immediate logistics coordination is required for time-sensitive freight operations.
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                We strive to send messages only when necessary for operational purposes. However, the nature of the trucking and logistics industry requires 24/7 communication capability.
              </p>
            </div>

            {/* Costs and Charges */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                4. Costs and Charges
              </h2>
              
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-6">
                <p className="text-red-200 text-lg font-semibold mb-2">
                  Message and data rates may apply.
                </p>
                <p className="text-gray-300">
                  Standard text messaging rates from your mobile carrier will apply to all SMS messages sent and received. RMR TRANSPORTATION LLC does not charge for the SMS service itself, but your carrier may charge you for text messages based on your mobile plan.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Your Responsibility
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>You are solely responsible for any charges from your mobile carrier</li>
                <li>Check with your carrier about your text messaging plan and rates</li>
                <li>Consider unlimited text messaging plans if you expect high message volume</li>
                <li>We are not responsible for carrier charges or overages</li>
              </ul>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Supported Carriers
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our SMS service is available on major U.S. mobile carriers. If you experience issues receiving messages, contact your carrier or our support team for assistance.
              </p>
            </div>

            {/* TCPA Compliance */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                5. TCPA Compliance
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                RMR TRANSPORTATION LLC complies with the Telephone Consumer Protection Act (TCPA) and all applicable federal and state regulations regarding SMS communications.
              </p>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Express Written Consent
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                By submitting your phone number through our registration form and checking the consent box, you provide your express written consent to receive automated SMS text messages from RMR TRANSPORTATION LLC using an automatic telephone dialing system or artificial or prerecorded voice.
              </p>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Business Relationship
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                SMS communications are part of our established business relationship for logistics coordination and operational communication. Messages are sent for legitimate business purposes related to freight transportation services.
              </p>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                No Sale of Information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We do not sell, rent, or share your phone number with third parties for marketing purposes. Your phone number is used exclusively for RMR TRANSPORTATION LLC business communications.
              </p>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <svg className="w-6 h-6 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  No Third-Party SMS Marketing
                </h3>
                <p className="text-red-200 leading-relaxed">
                  <strong>We do not share, sell, or rent mobile numbers or SMS consent information with third parties for marketing or promotional purposes.</strong>
                </p>
                <p className="text-red-200 leading-relaxed mt-3">
                  Your mobile number and consent data remain confidential and are used solely by RMR TRANSPORTATION LLC for operational logistics communications. We will never provide your contact information to advertisers, marketing agencies, or any third-party promotional services.
                </p>
              </div>
            </div>

            {/* Opting Out */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                6. How to Opt-Out (Unsubscribe)
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                You may opt-out of SMS notifications at any time using any of the following methods:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="card bg-trucking-dark">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-trucking-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-trucking-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-2">Text STOP</h3>
                    <p className="text-gray-400 text-sm">
                      Reply <strong>STOP</strong> to any message to instantly unsubscribe
                    </p>
                  </div>
                </div>

                <div className="card bg-trucking-dark">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-trucking-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-trucking-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-400 text-sm">
                      Send an unsubscribe request to <a href="mailto:info@rmrtransportationllc.com" className="text-trucking-blue hover:underline break-all">info@rmrtransportationllc.com</a>
                    </p>
                  </div>
                </div>

                <div className="card bg-trucking-dark">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-trucking-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-trucking-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-400 text-sm">
                      Call <a href="tel:+15734151555" className="text-trucking-blue hover:underline">+1 (573) 415-1555</a> to request removal
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-trucking-dark rounded-lg p-6 border-l-4 border-green-500 mb-6">
                <h3 className="text-white font-semibold mb-2">Opt-Out Processing:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>STOP requests are processed immediately (usually within minutes)</li>
                  <li>You will receive a confirmation message acknowledging your opt-out</li>
                  <li>Email and phone opt-out requests are processed within 24 hours</li>
                  <li>You may receive a final message confirming your unsubscription</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Re-Subscribing
              </h3>
              <p className="text-gray-300 leading-relaxed">
                If you opt-out and later wish to receive SMS notifications again, you may text START to our number or contact us directly for assistance.
              </p>
            </div>

            {/* Help and Support */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                7. Help and Customer Support
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                For assistance with our SMS service, you have multiple options:
              </p>

              <div className="bg-trucking-dark rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Get Help:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-trucking-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-gray-300">
                      <strong className="text-white">Text HELP:</strong> Reply HELP to any message for instant support information
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-trucking-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-300">
                      <strong className="text-white">Call:</strong> <a href="tel:+15734151555" className="text-trucking-blue hover:underline">+1 (573) 415-1555</a> (Available 24/7)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-trucking-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-300">
                      <strong className="text-white">Email:</strong> <a href="mailto:info@rmrtransportationllc.com" className="text-trucking-blue hover:underline break-all">info@rmrtransportationllc.com</a>
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Common Issues
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you're experiencing issues with SMS delivery:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Verify your phone number is correct in our system</li>
                <li>Check your phone's message blocking settings</li>
                <li>Ensure you have adequate signal strength</li>
                <li>Confirm your carrier supports SMS from short codes and toll-free numbers</li>
                <li>Check if your messaging inbox is full</li>
                <li>Contact your carrier to verify SMS service is active on your account</li>
              </ul>
            </div>

            {/* Privacy and Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                8. Privacy and Data Security
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Your privacy is important to us. Information collected through SMS registration is governed by our <Link to="/privacy-policy" className="text-trucking-blue hover:underline">Privacy Policy</Link>.
              </p>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                What We Collect
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Mobile phone number</li>
                <li>Name and email address</li>
                <li>SMS delivery status and timestamps</li>
                <li>Opt-in and opt-out history</li>
              </ul>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                How We Protect Your Information
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Secure encrypted database storage</li>
                <li>Access limited to authorized personnel only</li>
                <li>Regular security audits and updates</li>
                <li>Compliance with industry data protection standards</li>
              </ul>

              <p className="text-gray-300 leading-relaxed">
                We do not sell, rent, or share your phone number with third parties for marketing purposes. Your information is used solely for RMR TRANSPORTATION LLC operational communications.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                9. Disclaimers and Limitations
              </h2>
              
              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Service Availability
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                While we strive for reliable SMS delivery, we cannot guarantee uninterrupted service. Message delivery may be affected by:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Mobile carrier outages or technical issues</li>
                <li>Network congestion or poor signal strength</li>
                <li>Phone settings or device compatibility</li>
                <li>Maintenance or updates to our SMS platform</li>
                <li>Force majeure events beyond our control</li>
              </ul>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                No Emergency Service
              </h3>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-6">
                <p className="text-red-200">
                  <strong className="block mb-2">Important:</strong>
                  SMS should not be used for emergency communications. For urgent matters requiring immediate attention, always call +1 (573) 415-1555 directly. We cannot guarantee immediate receipt or response to SMS messages.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                No Liability for Carrier Charges
              </h3>
              <p className="text-gray-300 leading-relaxed">
                RMR TRANSPORTATION LLC is not responsible for any charges, fees, or overages incurred from your mobile carrier for SMS message delivery.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                10. Changes to These Terms
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right to modify these SMS Terms at any time. Changes will be effective immediately upon posting the updated terms on our website. The "Last Updated" date at the top of this page indicates when the terms were last revised.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Material changes to these terms will be communicated to active SMS subscribers via:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>SMS notification</li>
                <li>Email notification</li>
                <li>Notice on our website</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Your continued use of the SMS service after changes are posted constitutes your acceptance of the modified terms. If you do not agree with the changes, you may opt-out by replying STOP.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                11. Termination
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right to terminate or suspend your access to SMS services at our discretion, without notice, for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Violation of these terms</li>
                <li>Abusive or harassing behavior toward our staff</li>
                <li>Providing false or misleading information</li>
                <li>Suspected fraud or illegal activity</li>
                <li>Discontinuation of business relationship</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Upon termination, you will no longer receive SMS messages from RMR TRANSPORTATION LLC.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                12. Contact Information
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                For questions, concerns, or support regarding our SMS service or these terms, please contact:
              </p>

              <div className="bg-trucking-dark rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-2">RMR TRANSPORTATION LLC</h3>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Address:</p>
                  <p className="text-gray-300">
                    5203 Oakleaf Dr, Kansas City,<br />
                    Missouri 64129 Apt 3
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone (24/7):</p>
                  <a href="tel:+15734151555" className="text-trucking-blue hover:underline">
                    +1 (573) 415-1555
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email:</p>
                  <a href="mailto:info@rmrtransportationllc.com" className="text-trucking-blue hover:underline break-all">
                    info@rmrtransportationllc.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">USDOT:</p>
                  <p className="text-gray-300">3590337</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Business Hours:</p>
                  <p className="text-gray-300">24/7 Operations</p>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                13. Governing Law
              </h2>
              
              <p className="text-gray-300 leading-relaxed">
                These SMS Terms shall be governed by and construed in accordance with the laws of the State of Missouri, United States, without regard to its conflict of law provisions. Any disputes arising from these terms or the SMS service shall be subject to the exclusive jurisdiction of the courts located in Kansas City, Missouri.
              </p>
            </div>

            {/* Acceptance */}
            <div className="bg-gradient-to-r from-trucking-blue/20 to-trucking-orange/20 rounded-lg p-8 border border-trucking-blue/30">
              <h3 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                By registering for SMS notifications from RMR TRANSPORTATION LLC, you acknowledge that you have read, understood, and agree to be bound by these SMS Terms and Conditions, as well as our <Link to="/privacy-policy" className="text-trucking-blue hover:underline">Privacy Policy</Link>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If you do not agree with any part of these terms, please do not register for our SMS service.
              </p>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex justify-center">
              <Link
                to="/privacy-policy"
                className="text-trucking-blue hover:text-trucking-orange transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SmsTerms;
