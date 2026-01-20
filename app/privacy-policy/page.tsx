import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | CompareAIGF',
  description: 'Privacy Policy for CompareAIGF - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 mb-6"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="space-y-8">
          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Introduction</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              CompareAIGF ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="text-slate-300 leading-relaxed">
              By using our website, you consent to the data practices described in this policy. If you do not agree with the data practices described, please do not use our website.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-200">2.1 Automatically Collected Information</h3>
                <p className="text-slate-300 leading-relaxed">
                  When you visit our website, we automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-300 ml-4">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages you visit and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-200">2.2 Cookies and Tracking Technologies</h3>
                <p className="text-slate-300 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">3. How We Use Your Information</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Provide, maintain, and improve our website</li>
              <li>Analyze how users interact with our website</li>
              <li>Personalize your experience</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Third-Party Services</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.
            </p>
            <p className="text-slate-300 leading-relaxed">
              We may use third-party analytics services (such as Google Analytics) to help analyze how users use our website. These services may use cookies and other tracking technologies.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Affiliate Links</h2>
            <p className="text-slate-300 leading-relaxed">
              Our website contains affiliate links. When you click on an affiliate link and make a purchase, we may receive a commission. This does not affect the price you pay. We only recommend products and services we believe will be valuable to our users.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Data Security</h2>
            <p className="text-slate-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Your Rights</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Children's Privacy</h2>
            <p className="text-slate-300 leading-relaxed">
              Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">9. Changes to This Privacy Policy</h2>
            <p className="text-slate-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">10. Contact Us</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-2 text-slate-300">
              <p>Email: <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">Contact Form</Link></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
