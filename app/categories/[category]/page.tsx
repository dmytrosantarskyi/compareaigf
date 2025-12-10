import { getAppsByCategory, apps } from "@/data/apps";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Star, Check, X } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

const categoryNames: Record<string, { title: string; description: string }> = {
  free: {
    title: "Best Free AI Girlfriend Apps (2025)",
    description: "Discover the best free AI girlfriend apps. Compare features, limitations, and find the perfect free AI companion for you."
  },
  nsfw: {
    title: "Best NSFW AI Girlfriend Apps (2025)",
    description: "Compare NSFW AI girlfriend apps with adult content. Find the best platforms for unrestricted AI companionship."
  },
  "no-signup": {
    title: "Best AI Girlfriend Apps Without Signup (2025)",
    description: "AI girlfriend apps you can use instantly without creating an account. Quick access, no registration required."
  },
  voice: {
    title: "Best AI Girlfriend Apps with Voice (2025)",
    description: "Compare AI girlfriend apps with voice call capabilities. Experience realistic voice conversations with your AI companion."
  },
  "video-ai": {
    title: "Best AI Girlfriend Apps with Video & Image Generation (2025)",
    description: "AI girlfriend apps with video calls and image generation. Create visual content and have video conversations with your AI companion."
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = categoryNames[category];
  
  if (!categoryInfo) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: categoryInfo.title,
    description: categoryInfo.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(categoryNames).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryInfo = categoryNames[category];
  const categoryApps = getAppsByCategory(category);

  if (!categoryInfo || categoryApps.length === 0) {
    notFound();
  }

  const sortedApps = [...categoryApps].sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryInfo.title}</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{categoryInfo.description}</p>
      </div>

      {/* Ranking List */}
      <div className="space-y-6 mb-12">
        {sortedApps.map((app, index) => (
          <div key={app.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl font-bold">
                  #{index + 1}
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <Link href={`/reviews/${app.slug}`} className="text-2xl font-bold hover:text-pink-400 transition">
                    {app.name}
                  </Link>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xl font-semibold">{app.rating}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{app.description}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="text-sm text-gray-400">Price: <span className="text-white font-semibold">{app.price}</span></span>
                  {app.freeTier && <span className="text-sm text-green-400 flex items-center gap-1"><Check className="w-4 h-4" /> Free Tier</span>}
                  {app.nsfwAllowed && <span className="text-sm text-red-400 flex items-center gap-1"><Check className="w-4 h-4" /> NSFW</span>}
                  {app.voice && <span className="text-sm text-blue-400 flex items-center gap-1"><Check className="w-4 h-4" /> Voice</span>}
                  {app.video && <span className="text-sm text-purple-400 flex items-center gap-1"><Check className="w-4 h-4" /> Video</span>}
                </div>
                <a
                  href={app.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Try {app.name} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Comparison Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-4 py-3 text-left font-semibold">App</th>
                <th className="px-4 py-3 text-center font-semibold">Rating</th>
                <th className="px-4 py-3 text-center font-semibold">Price</th>
                <th className="px-4 py-3 text-center font-semibold">Free</th>
                <th className="px-4 py-3 text-center font-semibold">Platforms</th>
              </tr>
            </thead>
            <tbody>
              {sortedApps.map((app) => (
                <tr key={app.id} className="border-b border-gray-800">
                  <td className="px-4 py-4">
                    <Link href={`/reviews/${app.slug}`} className="font-semibold hover:text-pink-400 transition">
                      {app.name}
                    </Link>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{app.rating}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-sm">{app.price}</td>
                  <td className="px-4 py-4 text-center">
                    {app.freeTier ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />}
                  </td>
                  <td className="px-4 py-4 text-center text-sm">{app.platforms.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">What makes an app the best in this category?</h3>
            <p className="text-gray-300">
              We evaluate apps based on ratings, features, user experience, pricing, and how well they meet the specific category requirements.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Are these apps safe to use?</h3>
            <p className="text-gray-300">
              All apps listed have been reviewed for security and privacy. However, always review each app's privacy policy before signing up.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Can I switch between apps?</h3>
            <p className="text-gray-300">
              Yes, most apps offer free tiers that allow you to try them out before committing to a paid subscription.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Try the Best {categoryInfo.title.split('(')[0]}?</h2>
        <p className="text-gray-300 mb-6">Start with our top pick: {sortedApps[0].name}</p>
        <a
          href={sortedApps[0].affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold text-lg hover:opacity-90 transition"
        >
          Try {sortedApps[0].name} Now <ExternalLink className="w-5 h-5 inline ml-2" />
        </a>
      </div>
    </div>
  );
}
