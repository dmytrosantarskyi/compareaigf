import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | CompareAIGF',
  description: 'CompareAIGF Terms of Service: Read our terms and conditions for using our AI girlfriend comparison website. Understand your rights and responsibilities.',
};

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Terms of Service</h1>
          <p className="text-slate-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="space-y-8">
          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Acceptance of Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              By accessing and using CompareAIGF ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Use License</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on CompareAIGF for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the Website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Disclaimer</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The materials on CompareAIGF are provided on an 'as is' basis. CompareAIGF makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Implied warranties or conditions of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property or other violation of rights</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Limitations</h2>
            <p className="text-slate-300 leading-relaxed">
              In no event shall CompareAIGF or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CompareAIGF, even if CompareAIGF or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Accuracy of Materials</h2>
            <p className="text-slate-300 leading-relaxed">
              The materials appearing on CompareAIGF could include technical, typographical, or photographic errors. CompareAIGF does not warrant that any of the materials on its website are accurate, complete, or current. CompareAIGF may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Links</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              CompareAIGF has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CompareAIGF of the site. Use of any such linked website is at the user's own risk.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Our website contains affiliate links. When you click on an affiliate link and make a purchase, we may receive a commission. This does not affect the price you pay.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Modifications</h2>
            <p className="text-slate-300 leading-relaxed">
              CompareAIGF may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Governing Law</h2>
            <p className="text-slate-300 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with applicable laws. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">9. User Conduct</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              You agree not to use the Website to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit any harmful, offensive, or inappropriate content</li>
              <li>Interfere with or disrupt the Website or servers</li>
              <li>Attempt to gain unauthorized access to any portion of the Website</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">10. Contact Information</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
