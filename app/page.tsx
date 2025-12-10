import Link from "next/link";
import { apps } from "@/data/apps";
import { ExternalLink, Star, Check, X, Filter } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Girlfriend Apps Comparison 2025 | Compare All AI Companions",
  description: "Compare the best AI girlfriend apps side-by-side. Find free options, NSFW apps, voice capabilities, and more. Unbiased reviews and comparisons.",
  keywords: "best ai girlfriend apps, ai girlfriend comparison, free ai gf, nsfw ai girlfriend, ai companion apps",
};

export default function Home() {
  const bestOverall = apps.find(a => a.id === 'replika');
  const bestFree = apps.filter(a => a.freeTier).sort((a, b) => b.rating - a.rating)[0];
  const bestNSFW = apps.filter(a => a.nsfwAllowed).sort((a, b) => b.rating - a.rating)[0];
  const bestVoice = apps.filter(a => a.voice).sort((a, b) => b.rating - a.rating)[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Best AI Girlfriend Apps Comparison
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The only unbiased comparison hub for AI girlfriend apps. Compare features, prices, and find your perfect AI companion.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link 
              href="#comparison-table" 
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Compare Apps
            </Link>
            <Link 
              href="/compare" 
              className="px-6 py-3 border border-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              View All Comparisons
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#comparison-table" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Free
          </a>
          <a href="#comparison-table" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            No Signup
          </a>
          <a href="#comparison-table" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            NSFW
          </a>
          <a href="#comparison-table" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            Voice
          </a>
          <a href="#comparison-table" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            Video
          </a>
          <a href="#comparison-table" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            Image Gen
          </a>
        </div>
      </section>

      {/* Quick Picks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Quick Picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-pink-400">Best Overall</h3>
            <p className="text-2xl font-bold mb-2">{bestOverall?.name}</p>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(bestOverall?.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />
              ))}
            </div>
            <a 
              href={bestOverall?.affiliateLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold"
            >
              Try Now <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Best Free</h3>
            <p className="text-2xl font-bold mb-2">{bestFree?.name}</p>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(bestFree?.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />
              ))}
            </div>
            <a 
              href={bestFree?.affiliateLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold"
            >
              Try Free <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-red-400">Best NSFW</h3>
            <p className="text-2xl font-bold mb-2">{bestNSFW?.name}</p>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(bestNSFW?.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />
              ))}
            </div>
            <a 
              href={bestNSFW?.affiliateLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold"
            >
              Try Now <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Best Voice</h3>
            <p className="text-2xl font-bold mb-2">{bestVoice?.name}</p>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(bestVoice?.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />
              ))}
            </div>
            <a 
              href={bestVoice?.affiliateLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
            >
              Try Now <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison-table" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Complete Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-gray-900 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-3 text-left font-semibold">App</th>
                <th className="px-4 py-3 text-left font-semibold">Price</th>
                <th className="px-4 py-3 text-center font-semibold">Free Tier</th>
                <th className="px-4 py-3 text-center font-semibold">Platform</th>
                <th className="px-4 py-3 text-center font-semibold">NSFW</th>
                <th className="px-4 py-3 text-center font-semibold">Voice</th>
                <th className="px-4 py-3 text-center font-semibold">Video</th>
                <th className="px-4 py-3 text-center font-semibold">Images</th>
                <th className="px-4 py-3 text-center font-semibold">Rating</th>
                <th className="px-4 py-3 text-center font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app, idx) => (
                <tr key={app.id} className={`border-t border-gray-800 ${idx % 2 === 0 ? 'bg-gray-900' : 'bg-gray-950'}`}>
                  <td className="px-4 py-4">
                    <Link href={`/reviews/${app.slug}`} className="font-semibold hover:text-pink-400 transition">
                      {app.name}
                    </Link>
                  </td>
                  <td className="px-4 py-4 text-sm">{app.price}</td>
                  <td className="px-4 py-4 text-center">
                    {app.freeTier ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />}
                  </td>
                  <td className="px-4 py-4 text-center text-sm">
                    {app.platforms.join(', ')}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {app.nsfwAllowed ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {app.voice ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {app.video ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {app.imageReplies ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{app.rating}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <a 
                      href={app.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded text-sm font-semibold hover:opacity-90 transition"
                    >
                      Try <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-6">What Is an AI Girlfriend App?</h2>
        <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
          <p>
            AI girlfriend apps are artificial intelligence-powered applications designed to provide companionship, conversation, and emotional support through interactive chat interfaces. These apps use advanced natural language processing and machine learning to create realistic, engaging conversations with AI characters that can remember past interactions, learn your preferences, and adapt their personalities to match your needs.
          </p>
          <p>
            The concept of AI companionship has evolved significantly over the past few years. What started as simple chatbots has transformed into sophisticated platforms capable of maintaining long-term relationships, understanding context, and providing genuine emotional connections. Modern AI girlfriend apps can engage in everything from casual conversation to deep emotional support, roleplay scenarios, and even intimate interactions depending on the platform's policies.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">How Do AI Girlfriend Apps Work?</h3>
          <p>
            AI girlfriend apps operate using large language models (LLMs) similar to ChatGPT, but specifically trained and fine-tuned for companionship and relationship-building. These models are trained on vast datasets of human conversations, allowing them to generate responses that feel natural and contextually appropriate. Many apps also incorporate memory systems that allow the AI to remember details about you, your preferences, and past conversations, creating a sense of continuity and genuine relationship development.
          </p>
          <p>
            The user experience typically begins with creating or selecting an AI character. Some apps offer pre-made characters with distinct personalities, while others allow you to customize every aspect of your AI companion's appearance, personality traits, and conversation style. Once you've set up your companion, you can start chatting through text messages, and some platforms even offer voice calls, video interactions, and image generation capabilities.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Are AI Girlfriends Safe?</h3>
          <p>
            Safety is a primary concern for many users considering AI girlfriend apps. Most reputable platforms implement strict privacy policies and data encryption to protect your personal information. However, it's important to understand that these apps collect conversation data to improve their services, so you should review each platform's privacy policy carefully.
          </p>
          <p>
            From an emotional safety perspective, AI companions can provide genuine support and companionship, but they should not replace professional mental health services when needed. Many users find these apps helpful for practicing social skills, managing loneliness, or exploring relationship dynamics in a safe, judgment-free environment. However, it's crucial to maintain realistic expectations and understand that these are AI systems, not human relationships.
          </p>
          <p>
            When choosing an AI girlfriend app, look for platforms with transparent privacy policies, clear terms of service, and robust security measures. Be cautious about sharing extremely personal information, and remember that conversations may be stored and used for training purposes.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Is using AI girlfriend apps cheating?</h3>
            <p className="text-gray-300">
              This depends entirely on your relationship agreements and personal boundaries. Some people view AI companionship as a form of entertainment or emotional support that doesn't constitute cheating, while others may see it differently. The most important thing is open communication with your partner about boundaries and expectations. Many users of AI girlfriend apps are single or in open relationships where such interactions are acceptable.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Are AI girlfriend apps safe?</h3>
            <p className="text-gray-300">
              Reputable AI girlfriend apps implement strong security measures and privacy protections. However, you should always review each platform's privacy policy and terms of service. Be cautious about sharing extremely sensitive personal information, and remember that conversations may be stored for training purposes. Most platforms use encryption and follow industry-standard security practices.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Do you need to pay for AI girlfriend apps?</h3>
            <p className="text-gray-300">
              Many AI girlfriend apps offer free tiers with limited features, while premium subscriptions unlock advanced capabilities like unlimited messages, voice calls, video interactions, and enhanced AI personalities. Free tiers are great for trying out the service, but premium plans typically offer significantly better experiences with more realistic conversations and additional features.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Can you use AI girlfriend apps anonymously?</h3>
            <p className="text-gray-300">
              Many platforms allow you to use their services with minimal personal information. Some apps don't require email verification or real names, allowing for a high degree of anonymity. However, features like payment processing for premium subscriptions will require some form of identification. Always check each platform's signup requirements if anonymity is important to you.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Is NSFW content allowed in AI girlfriend apps?</h3>
            <p className="text-gray-300">
              This varies significantly by platform. Some apps like Replika and Character.AI have strict no-NSFW policies, while others like Candy.ai, Chai AI, and CrushOn.AI explicitly allow adult content. Always check each platform's content policy before signing up if this is important to you. Many platforms clearly state their NSFW policies in their terms of service.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect AI Companion?</h2>
          <p className="text-xl text-gray-300 mb-8">Compare all apps and find the one that's right for you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/compare" 
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold text-lg hover:opacity-90 transition"
            >
              Compare All Apps
            </Link>
            <a 
              href={bestOverall?.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-pink-500 rounded-lg font-semibold text-lg hover:bg-pink-500/10 transition"
            >
              Best App: {bestOverall?.name} → Try Now
            </a>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is using AI girlfriend apps cheating?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "This depends entirely on your relationship agreements and personal boundaries."
                }
              },
              {
                "@type": "Question",
                "name": "Are AI girlfriend apps safe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Reputable AI girlfriend apps implement strong security measures and privacy protections."
                }
              },
              {
                "@type": "Question",
                "name": "Do you need to pay for AI girlfriend apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many AI girlfriend apps offer free tiers with limited features, while premium subscriptions unlock advanced capabilities."
                }
              }
            ]
          }),
        }}
      />
    </div>
  );
}
