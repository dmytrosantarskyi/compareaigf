import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | CompareAIGF',
  description: 'CompareAIGF Disclaimer: Important information about our AI girlfriend comparison website, affiliate relationships, and limitations of liability.',
};

export default function Disclaimer() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Disclaimer</h1>
          <p className="text-slate-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="space-y-8">
          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">General Information</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              CompareAIGF is an independent comparison website that provides information, reviews, and comparisons of various AI girlfriend applications. The information on this website is provided for general informational purposes only.
            </p>
            <p className="text-slate-300 leading-relaxed">
              While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">No Professional Advice</h2>
            <p className="text-slate-300 leading-relaxed">
              The information provided on CompareAIGF is not intended to constitute professional advice of any kind. The content is based on our research, testing, and analysis, but individual experiences may vary. We recommend that you conduct your own research and consult with appropriate professionals before making any decisions based on the information provided on this website.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Affiliate Relationships</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              CompareAIGF participates in various affiliate marketing programs. This means that we may earn commissions when you click on links to third-party websites and make purchases. These commissions help support the operation of our website and allow us to continue providing free comparison services.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Important points about our affiliate relationships:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>We only recommend products and services that we believe may be valuable to our users</li>
              <li>Affiliate relationships do not influence our reviews or comparisons</li>
              <li>The price you pay is not affected by our affiliate relationships</li>
              <li>We maintain editorial independence in our content</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Third-Party Websites</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Our website contains links to third-party websites that are not owned or controlled by CompareAIGF. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
            </p>
            <p className="text-slate-300 leading-relaxed">
              By clicking on external links, you acknowledge and agree that CompareAIGF shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Accuracy of Information</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              While we make every effort to ensure the accuracy of the information on our website, we cannot guarantee that all information is current, complete, or error-free. Information about products, services, pricing, and features may change without notice.
            </p>
            <p className="text-slate-300 leading-relaxed">
              We recommend that you verify any information directly with the respective service providers before making any decisions or purchases.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Limitation of Liability</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              To the fullest extent permitted by law, CompareAIGF, its owners, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Your use or inability to use our website</li>
              <li>Any errors or omissions in our content</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of transmission to or from our website</li>
              <li>Any bugs, viruses, or other harmful code transmitted through our website</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">User Responsibility</h2>
            <p className="text-slate-300 leading-relaxed">
              You are solely responsible for your use of the information provided on CompareAIGF. We encourage you to conduct your own research, read user reviews, and make informed decisions based on your individual needs and circumstances.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Changes to This Disclaimer</h2>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right to modify this disclaimer at any time. We will notify users of any material changes by updating the "Last updated" date at the top of this page. Your continued use of the website after any changes constitutes acceptance of the new disclaimer.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Contact Us</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you have any questions about this disclaimer, please contact us:
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
