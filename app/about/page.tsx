import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CompareAI GF | Unbiased AI Girlfriend App Comparisons",
  description: "Learn about CompareAI GF. We provide unbiased, comprehensive comparisons of AI girlfriend apps to help you find your perfect AI companion.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">About CompareAI GF</h1>
      
      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            CompareAI GF is the only unbiased comparison hub for AI girlfriend apps. Our mission is to help users find the perfect AI companion by providing comprehensive, honest comparisons of features, pricing, and capabilities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <p>
            We test and review AI girlfriend apps across multiple categories, comparing everything from pricing and features to NSFW policies and platform availability. Our detailed reviews and side-by-side comparisons help you make informed decisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p>
            We maintain strict editorial independence. While we may earn commissions from affiliate links, our reviews and comparisons are based on thorough testing and honest evaluation. We never let affiliate relationships influence our ratings or recommendations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Transparency</h2>
          <p>
            We believe in transparency. All affiliate links are clearly marked, and we disclose our affiliate relationships. Our goal is to provide value to users while maintaining the highest standards of editorial integrity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            Have questions, suggestions, or feedback? We'd love to hear from you. Visit our <a href="/contact" className="text-pink-400 hover:text-pink-300">contact page</a> to get in touch.
          </p>
        </section>
      </div>
    </div>
  );
}
