import type { Metadata } from 'next';
import { apps } from '@/data/apps';
import VSSelector from '@/components/VSSelector';
import AppGrid from '@/components/AppGrid';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Choose the Best AI Girlfriend with CompareAIGF',
  description: 'Compare top AI girlfriend apps side-by-side. We test speed, roleplay quality, emotional intelligence, and visuals to help you find the perfect AI companion.',
  keywords: 'ai girlfriend comparison, ai girlfriend app comparison, ai girlfriend chatbot comparison, ai girlfriend app features comparison, ai girlfriend apps comparison, virtual girlfriend comparison',
  alternates: {
    canonical: 'https://compareaigf.com/',
  },
};

// FAQ data for structured data
const faqData = [
  {
    question: 'Which AI girlfriend app is the most realistic?',
    answer: 'Realism in AI girlfriend apps depends on multiple factors including emotional intelligence, response quality, and visual presentation. Apps like Nomi AI, Kindroid, and Lovescape are often praised for their realistic conversations and emotional depth. Use our comparison tool to find the app that best matches your definition of realism.'
  },
  {
    question: 'What features should I look for in an AI girlfriend app?',
    answer: 'Key features to consider include: chat speed and response quality, roleplay capabilities, emotional intelligence, visual quality, voice interactions, video features, NSFW content support (if desired), pricing model, and free tier availability. Our comparison tool helps you evaluate all these aspects side-by-side.'
  },
  {
    question: 'Are there free AI girlfriend apps?',
    answer: 'Yes, many AI girlfriend apps offer free tiers with limited features. Apps like Character AI, CrushOn AI, and FunFun AI provide free access, though premium features typically require a subscription. Check our comparison table to see which apps offer free tiers.'
  },
  {
    question: 'How do I choose between different AI girlfriend apps?',
    answer: 'Use our comparison tool to select two apps and see detailed side-by-side comparisons. Consider your priorities: if you value emotional connection, look for high EQ ratings. If roleplay is important, check roleplay ratings. Budget-conscious users should compare pricing and free tier availability. Our comprehensive comparisons help you make an informed decision.'
  },
  {
    question: 'Do AI girlfriend apps support NSFW content?',
    answer: 'Many AI girlfriend apps support NSFW content, but policies vary. Apps like CrushOn AI, SpicyChat AI, and Candy AI are known for unrestricted content, while others like Character AI and Replika have content filters. Check our feature comparison table to see which apps support NSFW content.'
  }
];

export default function Home() {
  // Get top 5-6 apps for the comparison table
  const topApps = apps.slice(0, 6);

  // Generate FAQPage structured data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      {/* FAQ Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="min-h-screen bg-slate-950 text-slate-200">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-950 to-rose-950/20"></div>
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
                Find Your Perfect
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
                  AI Companion
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Compare the top AI girlfriend apps side-by-side. We test speed, quality, and features to help you choose.
              </p>
            </div>
            
            {/* VS Selector */}
            <VSSelector />
          </div>
        </section>

        {/* Intro Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">What is CompareAIGF?</h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                CompareAIGF is your comprehensive resource for comparing AI girlfriend applications. 
                With the growing number of AI companion platforms available, choosing the right one 
                can be overwhelming. We provide detailed, side-by-side comparisons of the top AI 
                girlfriend apps, testing everything from chat speed and response quality to roleplay 
                capabilities and visual features.
              </p>
              <p>
                Our mission is to help you make informed decisions by providing transparent, 
                data-driven comparisons. We analyze each platform's strengths and weaknesses, 
                pricing models, and unique features to help you find the perfect AI companion 
                that matches your preferences and needs.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-rose-400 bg-rose-400/10 px-4 py-2 rounded-full">Our Process</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">How We Compare Apps</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                We use a comprehensive testing methodology to ensure accurate and unbiased comparisons
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Testing Criteria</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Chat Speed & Response Quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Roleplay Experience & Depth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Emotional Intelligence (EQ)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Visual Style & Quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>First-Time User Experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Pricing & Value Proposition</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50 hover:border-rose-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Our Process</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-rose-400 mr-3 mt-1">•</span>
                    <span>Hands-on testing of each platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-400 mr-3 mt-1">•</span>
                    <span>Community sentiment analysis (Reddit, forums)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-400 mr-3 mt-1">•</span>
                    <span>Feature comparison and verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-400 mr-3 mt-1">•</span>
                    <span>Regular updates as platforms evolve</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-400 mr-3 mt-1">•</span>
                    <span>User feedback integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-400 mr-3 mt-1">•</span>
                    <span>Transparent rating methodology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Grid Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-purple-400 bg-purple-400/10 px-4 py-2 rounded-full">2026 Reviews</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                AI Girlfriend Apps We've Reviewed
              </h2>
              <p className="text-lg text-slate-400">Explore {apps.length} platforms we've analyzed</p>
            </div>
            <AppGrid />
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-green-400 bg-green-400/10 px-4 py-2 rounded-full">Quick Compare</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Top Apps Feature Comparison
              </h2>
              <p className="text-lg text-slate-400">Compare key features at a glance</p>
            </div>
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl border border-slate-800/50 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-800/50 border-b border-slate-700/50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">App</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">Voice</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">Video</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">NSFW</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">Free Tier</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {topApps.map((app, index) => (
                      <tr 
                        key={app.id} 
                        className="hover:bg-slate-800/30 transition-all duration-200 group"
                      >
                        <td className="px-6 py-4">
                          <Link
                            href={`/compare/${app.slug}-vs-${topApps[0].slug === app.slug ? topApps[1].slug : topApps[0].slug}`}
                            className="font-semibold text-blue-400 hover:text-blue-300 transition-colors group-hover:underline"
                          >
                            {app.name}
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {app.features.hasVoice ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-400 rounded-lg">✓</span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-400 rounded-lg">✗</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {app.features.hasVideo ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-400 rounded-lg">✓</span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-400 rounded-lg">✗</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {app.features.hasNsfw ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-400 rounded-lg">✓</span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-400 rounded-lg">✗</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {app.features.freeTier ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-400 rounded-lg">✓</span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-400 rounded-lg">✗</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-slate-300">
                          {app.pricing.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 md:p-12 border border-slate-800/50 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-yellow-400 bg-yellow-400/10 px-4 py-2 rounded-full">Trust & Transparency</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Can You Trust Our Comparisons?
                </h2>
              </div>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Absolutely. At CompareAIGF, we are committed to providing honest, unbiased 
                  comparisons of AI girlfriend applications. Our reviews are based on:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  {[
                    { title: 'Independent Testing', desc: 'We test each platform ourselves, spending significant time using the apps' },
                    { title: 'Community Insights', desc: 'We analyze discussions from Reddit, forums, and user communities' },
                    { title: 'Transparent Methodology', desc: 'Our rating system is clearly defined and explained' },
                    { title: 'Regular Updates', desc: 'We update comparisons as platforms evolve and improve' }
                  ].map((item, index) => (
                    <div key={index} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                      <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 pt-8 border-t border-slate-700/50">
                  Our goal is to help you make the best choice for your needs, not to promote 
                  any particular platform. We believe in transparency and honesty in all our reviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with proper semantic HTML */}
        <section className="container mx-auto px-4 py-20" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-indigo-400 bg-indigo-400/10 px-4 py-2 rounded-full">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 md:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 hover:shadow-xl"
                  itemScope 
                  itemType="https://schema.org/Question"
                >
                  <h3 
                    className="text-xl md:text-2xl font-semibold mb-4 text-white"
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-slate-300 leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
