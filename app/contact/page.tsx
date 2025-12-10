import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CompareAI GF | Get in Touch",
  description: "Contact CompareAI GF with questions, feedback, or suggestions about AI girlfriend app comparisons.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
        <p className="text-gray-300 mb-6">
          Have questions, suggestions, or feedback about our AI girlfriend app comparisons? We'd love to hear from you!
        </p>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            Note: This is a demo contact form. In a production environment, you would integrate with an email service or contact form handler.
          </p>
        </div>
      </div>
    </div>
  );
}
