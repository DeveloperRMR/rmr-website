import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  const lastUpdated = 'October 24, 2025';

  return (
    <div className="min-h-screen pt-20 bg-trucking-darker">
      {/* Header */}
      <section className="bg-trucking-dark py-12 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Privacy Policy
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
                RMR TRANSPORTATION LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our SMS notification services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                1. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Personal Information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Register for SMS notifications</li>
                <li>Submit a contact form</li>
                <li>Communicate with us via email or phone</li>
                <li>Apply for employment or contractor positions</li>
              </ul>

              <p className="text-gray-300 leading-relaxed mb-4">
                The personal information we collect may include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name (if applicable)</li>
                <li>Message content from contact forms</li>
              </ul>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Date and time of visits</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                2. How We Use Your Information
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect or receive to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Deliver SMS notifications about load assignments, scheduling, and logistics updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you administrative information, such as service updates</li>
                <li>Improve our website and services</li>
                <li>Monitor and analyze usage and trends to improve user experience</li>
                <li>Process employment applications</li>
                <li>Comply with legal obligations and enforce our terms and policies</li>
                <li>Prevent fraudulent activity and enhance security</li>
              </ul>
            </div>

            {/* SMS Communications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                3. SMS Communications and Consent
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                By providing your phone number and consenting to receive SMS messages from RMR TRANSPORTATION LLC, you agree to receive text messages related to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Load assignments and freight opportunities</li>
                <li>Scheduling updates and delivery confirmations</li>
                <li>Route changes and logistics alerts</li>
                <li>Payment notifications and documentation reminders</li>
                <li>Service updates and important announcements</li>
              </ul>

              <div className="bg-trucking-dark rounded-lg p-6 border-l-4 border-trucking-blue mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Your Rights:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>You can opt-out of SMS messages at any time by replying STOP</li>
                  <li>Reply HELP for assistance or contact information</li>
                  <li>Message and data rates may apply based on your carrier plan</li>
                  <li>Message frequency varies based on load activity</li>
                </ul>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                We use RingCentral as our SMS service provider. Your phone number will be stored securely and used solely for the purposes stated in this policy and our <Link to="/sms-terms" className="text-trucking-blue hover:underline">SMS Terms & Conditions</Link>.
              </p>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                  <svg className="w-6 h-6 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  No Third-Party SMS Marketing
                </h3>
                <p className="text-red-200">
                  <strong>We do not share, sell, or rent mobile numbers or SMS consent information with third parties for marketing or promotional purposes.</strong> Your phone number is exclusively used for operational communications from RMR TRANSPORTATION LLC and will never be provided to advertisers or marketing companies.
                </p>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                4. How We Share Your Information
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information to third parties. We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Service Providers
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We may share your information with third-party service providers who perform services on our behalf, such as:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>SMS delivery services (RingCentral)</li>
                <li>Website hosting and maintenance</li>
                <li>Data analysis and storage</li>
                <li>Customer support services</li>
              </ul>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Legal Requirements
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
              </p>

              <h3 className="text-xl font-semibold text-trucking-blue mb-3">
                Business Transfers
              </h3>
              <p className="text-gray-300 leading-relaxed">
                If we are involved in a merger, acquisition, or asset sale, your personal information may be transferred. We will provide notice before your information is transferred and becomes subject to a different privacy policy.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                5. Data Security
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure database storage</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
                <li>Employee training on data protection</li>
              </ul>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                <p className="text-yellow-200 text-sm">
                  <strong className="block mb-2">Important Note:</strong>
                  While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                6. Data Retention
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
              <p className="text-gray-300 leading-relaxed">
                SMS registration data is retained for the duration of your subscription plus 90 days after opt-out, unless otherwise required for legal compliance.
              </p>
            </div>

            {/* Your Privacy Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                7. Your Privacy Rights
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of processing your information</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Data Portability:</strong> Request transfer of your information to another party</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for SMS communications at any time</li>
              </ul>

              <p className="text-gray-300 leading-relaxed">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                8. Children's Privacy
              </h2>
              
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately so we can delete that information.
              </p>
            </div>

            {/* Third-Party Websites */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                9. Third-Party Websites
              </h2>
              
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                10. Changes to This Privacy Policy
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. The updated policy will be indicated by an updated "Last Updated" date.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We will notify you of any material changes by posting the new Privacy Policy on this page and, if appropriate, through email or SMS notification. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                11. Contact Us
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
                  <p className="text-gray-400 text-sm mb-1">Phone:</p>
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
              </div>
            </div>

            {/* CCPA Notice */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                12. California Privacy Rights (CCPA)
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>The right to know what personal information we collect, use, disclose, and sell</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt-out of the sale of personal information (we do not sell your information)</li>
                <li>The right to non-discrimination for exercising your CCPA rights</li>
              </ul>

              <p className="text-gray-300 leading-relaxed">
                To exercise these rights, please contact us using the information provided above. We will verify your identity before processing your request.
              </p>
            </div>

            {/* Policy Acceptance */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-trucking-blue/20 to-trucking-orange/20 rounded-lg p-8 border border-trucking-blue/30">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <svg className="w-8 h-8 text-trucking-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Policy Acceptance
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  <strong className="text-white">By using our website or services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</strong> If you do not agree with any part of this policy, please discontinue use of our website and services immediately.
                </p>
                <p className="text-gray-400 mt-4 text-sm">
                  Your continued use of our website after any changes to this Privacy Policy will constitute your acceptance of such changes.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                to="/sms-terms"
                className="text-trucking-blue hover:text-trucking-orange transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                SMS Terms & Conditions
              </Link>
              <Link
                to="/"
                className="text-trucking-blue hover:text-trucking-orange transition-colors flex items-center"
              >
                Back to Home
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
