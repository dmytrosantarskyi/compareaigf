import Link from "next/link";
import { apps } from "@/data/apps";
import { ExternalLink, Star, Check, X, Filter, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
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
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-medium text-gray-300">Unbiased AI Companion Reviews</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Best AI Girlfriend Apps
            </span>
            <br />
            <span className="text-white">Comparison 2025</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            The only <span className="text-pink-400 font-semibold">unbiased comparison hub</span> for AI girlfriend apps. 
            Compare features, prices, and find your perfect AI companion.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link 
              href="#comparison-table" 
              className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              Compare Apps
            </Link>
            <Link 
              href="/compare" 
              className="px-8 py-4 border-2 border-gray-700 rounded-xl font-semibold text-lg hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300 transform hover:scale-105"
            >
              View All Comparisons
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-pink-400 mb-1">{apps.length}+</div>
              <div className="text-sm text-gray-400">Apps Compared</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">100%</div>
              <div className="text-sm text-gray-400">Unbiased</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-400 mb-1">24/7</div>
              <div className="text-sm text-gray-400">Updated</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400 mb-1">
                <Shield className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-sm text-gray-400">Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap gap-3 justify-center">
          <a 
            href="#comparison-table" 
            className="group px-6 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl hover:border-green-500 hover:bg-green-500/20 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
          >
            <Filter className="w-4 h-4 text-green-400" />
            <span className="font-medium">Free</span>
          </a>
          <a 
            href="#comparison-table" 
            className="group px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl hover:border-blue-500 hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-105"
          >
            <span className="font-medium">No Signup</span>
          </a>
          <a 
            href="#comparison-table" 
            className="group px-6 py-3 bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/30 rounded-xl hover:border-red-500 hover:bg-red-500/20 transition-all duration-300 transform hover:scale-105"
          >
            <span className="font-medium">NSFW</span>
          </a>
          <a 
            href="#comparison-table" 
            className="group px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105"
          >
            <span className="font-medium">Voice</span>
          </a>
          <a 
            href="#comparison-table" 
            className="group px-6 py-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-xl hover:border-orange-500 hover:bg-orange-500/20 transition-all duration-300 transform hover:scale-105"
          >
            <span className="font-medium">Video</span>
          </a>
          <a 
            href="#comparison-table" 
            className="group px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/30 rounded-xl hover:border-indigo-500 hover:bg-indigo-500/20 transition-all duration-300 transform hover:scale-105"
          >
            <span className="font-medium">Image Gen</span>
          </a>
        </div>
      </section>

      {/* Quick Picks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Quick Picks</span>
          </h2>
          <p className="text-gray-400 text-lg">Top recommendations for every need</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-6 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-30 transition">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-sm font-semibold mb-3 text-pink-400 uppercase tracking-wider">Best Overall</h3>
            <p className="text-2xl font-bold mb-3 text-white">{bestOverall?.name}</p>
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(bestOverall?.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />
              ))}
              <span className="ml-2 text-gray-400 font-semibold">{bestOverall?.rating}</span>
            </div>
            <a 
              href={bestOverall?.affiliateLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 w-full justify-center"
            >
              Try Now <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="group relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-30 transition">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-sm font-semibold mb-3 text-green-400 uppercase tracking-wider">Best Free</h3>
            <p className="text-2xl font-bold mb-3 text-white">{bestFree?.name}</p>
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(bestFree?.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />
              ))}
              <span className="ml-2 text-gray-400 font-semibold">{bestFree?.rating}</span>
            </div>
            <a 
              href={bestFree?.affiliateLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 w-full justify-center"
            >
              Try Free <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="group relative bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/30 rounded-2xl p-6 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-30 transition">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-sm font-semibold mb-3 text-red-400 uppercase tracking-wider">Best NSFW</h3>
            <p className="text-2xl font-bold mb-3 text-white">{bestNSFW?.name}</p>
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(bestNSFW?.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />
              ))}
              <span className="ml-2 text-gray-400 font-semibold">{bestNSFW?.rating}</span>
            </div>
            <a 
              href={bestNSFW?.affiliateLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-rose-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 w-full justify-center"
            >
              Try Now <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-30 transition">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-sm font-semibold mb-3 text-blue-400 uppercase tracking-wider">Best Voice</h3>
            <p className="text-2xl font-bold mb-3 text-white">{bestVoice?.name}</p>
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(bestVoice?.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />
              ))}
              <span className="ml-2 text-gray-400 font-semibold">{bestVoice?.rating}</span>
            </div>
            <a 
              href={bestVoice?.affiliateLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 w-full justify-center"
            >
              Try Now <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison-table" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Complete Comparison</span>
          </h2>
          <p className="text-gray-400 text-lg">Compare all features side-by-side</p>
        </div>
        
        <div className="overflow-x-auto rounded-2xl border border-gray-800 shadow-2xl">
          <table className="w-full border-collapse bg-gray-900/50 backdrop-blur-sm">
            <thead>
              <tr className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                <th className="px-6 py-4 text-left font-bold text-white">App</th>
                <th className="px-6 py-4 text-left font-bold text-white">Price</th>
                <th className="px-6 py-4 text-center font-bold text-white">Free Tier</th>
                <th className="px-6 py-4 text-center font-bold text-white">Platform</th>
                <th className="px-6 py-4 text-center font-bold text-white">NSFW</th>
                <th className="px-6 py-4 text-center font-bold text-white">Voice</th>
                <th className="px-6 py-4 text-center font-bold text-white">Video</th>
                <th className="px-6 py-4 text-center font-bold text-white">Images</th>
                <th className="px-6 py-4 text-center font-bold text-white">Rating</th>
                <th className="px-6 py-4 text-center font-bold text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app, idx) => (
                <tr 
                  key={app.id} 
                  className={`border-b border-gray-800/50 transition-all duration-200 hover:bg-gray-800/30 ${idx % 2 === 0 ? 'bg-gray-900/30' : 'bg-gray-950/30'}`}
                >
                  <td className="px-6 py-5">
                    <Link href={`/reviews/${app.slug}`} className="font-bold text-white hover:text-pink-400 transition-colors duration-200">
                      {app.name}
                    </Link>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-300">{app.price}</td>
                  <td className="px-6 py-5 text-center">
                    {app.freeTier ? (
                      <div className="flex justify-center">
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <X className="w-5 h-5 text-gray-600" />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-5 text-center text-sm text-gray-300">
                    {app.platforms.join(', ')}
                  </td>
                  <td className="px-6 py-5 text-center">
                    {app.nsfwAllowed ? (
                      <div className="flex justify-center">
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <X className="w-5 h-5 text-gray-600" />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-5 text-center">
                    {app.voice ? (
                      <div className="flex justify-center">
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <X className="w-5 h-5 text-gray-600" />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-5 text-center">
                    {app.video ? (
                      <div className="flex justify-center">
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <X className="w-5 h-5 text-gray-600" />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-5 text-center">
                    {app.imageReplies ? (
                      <div className="flex justify-center">
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <X className="w-5 h-5 text-gray-600" />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-white">{app.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <a 
                      href={app.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                      Try <ExternalLink className="w-4 h-4" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            What Is an AI Girlfriend App?
          </h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-6 text-lg leading-relaxed">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to know</p>
        </div>
        
        <div className="space-y-4">
          <div className="group bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-xl p-6 md:p-8 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-pink-400 transition-colors">
              Is using AI girlfriend apps cheating?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              This depends entirely on your relationship agreements and personal boundaries. Some people view AI companionship as a form of entertainment or emotional support that doesn't constitute cheating, while others may see it differently. The most important thing is open communication with your partner about boundaries and expectations. Many users of AI girlfriend apps are single or in open relationships where such interactions are acceptable.
            </p>
          </div>
          
          <div className="group bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
              Are AI girlfriend apps safe?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Reputable AI girlfriend apps implement strong security measures and privacy protections. However, you should always review each platform's privacy policy and terms of service. Be cautious about sharing extremely sensitive personal information, and remember that conversations may be stored for training purposes. Most platforms use encryption and follow industry-standard security practices.
            </p>
          </div>
          
          <div className="group bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-xl p-6 md:p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
              Do you need to pay for AI girlfriend apps?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Many AI girlfriend apps offer free tiers with limited features, while premium subscriptions unlock advanced capabilities like unlimited messages, voice calls, video interactions, and enhanced AI personalities. Free tiers are great for trying out the service, but premium plans typically offer significantly better experiences with more realistic conversations and additional features.
            </p>
          </div>
          
          <div className="group bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
              Can you use AI girlfriend apps anonymously?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Many platforms allow you to use their services with minimal personal information. Some apps don't require email verification or real names, allowing for a high degree of anonymity. However, features like payment processing for premium subscriptions will require some form of identification. Always check each platform's signup requirements if anonymity is important to you.
            </p>
          </div>
          
          <div className="group bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-xl p-6 md:p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">
              Is NSFW content allowed in AI girlfriend apps?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              This varies significantly by platform. Some apps like Replika and Character.AI have strict no-NSFW policies, while others like Candy.ai, Chai AI, and CrushOn.AI explicitly allow adult content. Always check each platform's content policy before signing up if this is important to you. Many platforms clearly state their NSFW policies in their terms of service.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="relative bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-pink-500/20 border border-pink-500/30 rounded-2xl p-12 md:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Find Your Perfect AI Companion?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Compare all apps and find the one that's right for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/compare" 
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Compare All Apps
              </Link>
              <a 
                href={bestOverall?.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-pink-500 rounded-xl font-semibold text-lg hover:bg-pink-500/20 hover:border-pink-400 transition-all duration-300 transform hover:scale-105"
              >
                Best App: {bestOverall?.name} → Try Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup - FAQPage */}
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
                  "text": "This depends entirely on your relationship agreements and personal boundaries. Some people view AI companionship as a form of entertainment or emotional support that doesn't constitute cheating, while others may see it differently. The most important thing is open communication with your partner about boundaries and expectations. Many users of AI girlfriend apps are single or in open relationships where such interactions are acceptable."
                }
              },
              {
                "@type": "Question",
                "name": "Are AI girlfriend apps safe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Reputable AI girlfriend apps implement strong security measures and privacy protections. However, you should always review each platform's privacy policy and terms of service. Be cautious about sharing extremely sensitive personal information, and remember that conversations may be stored for training purposes. Most platforms use encryption and follow industry-standard security practices."
                }
              },
              {
                "@type": "Question",
                "name": "Do you need to pay for AI girlfriend apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many AI girlfriend apps offer free tiers with limited features, while premium subscriptions unlock advanced capabilities like unlimited messages, voice calls, video interactions, and enhanced AI personalities. Free tiers are great for trying out the service, but premium plans typically offer significantly better experiences with more realistic conversations and additional features."
                }
              },
              {
                "@type": "Question",
                "name": "Can you use AI girlfriend apps anonymously?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many platforms allow you to use their services with minimal personal information. Some apps don't require email verification or real names, allowing for a high degree of anonymity. However, features like payment processing for premium subscriptions will require some form of identification. Always check each platform's signup requirements if anonymity is important to you."
                }
              },
              {
                "@type": "Question",
                "name": "Is NSFW content allowed in AI girlfriend apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "This varies significantly by platform. Some apps like Replika and Character.AI have strict no-NSFW policies, while others like Candy.ai, Chai AI, and CrushOn.AI explicitly allow adult content. Always check each platform's content policy before signing up if this is important to you. Many platforms clearly state their NSFW policies in their terms of service."
                }
              }
            ]
          }),
        }}
      />
    </div>
  );
}
