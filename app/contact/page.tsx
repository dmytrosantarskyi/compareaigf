import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | CompareAIGF',
  description: 'Contact CompareAIGF: Get in touch with us for questions, feedback, app suggestions, or partnership inquiries. We respond within 24-48 hours. Send us a message.',
};

export default function Contact() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-slate-400">
            Have a question, suggestion, or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Get in Touch</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              We're here to help! Whether you have a question about our comparisons, want to suggest a new app to review, or need assistance with something else, feel free to reach out.
            </p>
            
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="suggestion">App Suggestion</option>
                  <option value="feedback">Feedback</option>
                  <option value="technical">Technical Issue</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Send Message
              </button>
            </form>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Other Ways to Reach Us</h2>
            <div className="space-y-4 text-slate-300">
              <p className="leading-relaxed">
                <strong className="text-slate-200">Response Time:</strong> We typically respond within 24-48 hours during business days.
              </p>
              <p className="leading-relaxed">
                <strong className="text-slate-200">App Suggestions:</strong> Have an AI girlfriend app you'd like us to review? Let us know! We're always looking to expand our comparison database.
              </p>
              <p className="leading-relaxed">
                <strong className="text-slate-200">Partnership Inquiries:</strong> Interested in partnering with CompareAIGF? We'd love to discuss potential collaborations.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-200">How do you test the apps?</h3>
                <p className="text-slate-300 leading-relaxed">
                  We conduct hands-on testing of each AI girlfriend app, evaluating factors like response speed, roleplay quality, emotional intelligence, visual presentation, and user experience. Our comparisons are based on real testing and user feedback.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-200">Do you accept payment for positive reviews?</h3>
                <p className="text-slate-300 leading-relaxed">
                  No. We maintain editorial independence and do not accept payment for positive reviews. Our comparisons are based on objective testing and analysis. We may earn commissions through affiliate links, but this does not influence our reviews.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-200">Can I suggest an app to be added?</h3>
                <p className="text-slate-300 leading-relaxed">
                  Absolutely! We welcome suggestions for new apps to review. Please use the contact form above and select "App Suggestion" as the subject.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
