import { getComparisonApps } from "@/data/apps";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Check, X, Star } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
  params: {
    comparison: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const [slug1, slug2] = params.comparison.split('-vs-');
  const [app1, app2] = getComparisonApps(slug1, slug2);
  
  if (!app1 || !app2) {
    return {
      title: "Comparison Not Found",
    };
  }

  return {
    title: `${app1.name} vs ${app2.name} - Which Is Better in 2025?`,
    description: `Compare ${app1.name} and ${app2.name} side-by-side. Features, prices, NSFW options, and more. Find out which AI girlfriend app is better for you.`,
  };
}

export default function ComparisonPage({ params }: PageProps) {
  const [slug1, slug2] = params.comparison.split('-vs-');
  const [app1, app2] = getComparisonApps(slug1, slug2);

  if (!app1 || !app2) {
    notFound();
  }

  const winner = app1.rating > app2.rating ? app1 : app2;
  const loser = app1.rating > app2.rating ? app2 : app1;

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {app1.name} vs {app2.name} — Which One Is Better in 2025?
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {winner.name} comes out on top with a {winner.rating} rating, offering {winner.features.slice(0, 2).join(' and ')}. 
          However, {loser.name} excels in {loser.useCases[0]} scenarios.
        </p>
      </div>

      {/* App Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{app1.name}</h2>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-xl font-semibold">{app1.rating}</span>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{app1.description}</p>
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Price:</span>
              <span className="font-semibold">{app1.price}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Platforms:</span>
              <span>{app1.platforms.join(', ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">NSFW:</span>
              {app1.nsfwAllowed ? <Check className="w-4 h-4 text-green-400" /> : <X className="w-4 h-4 text-gray-600" />}
            </div>
          </div>
          <a
            href={app1.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Try {app1.name} <ExternalLink className="w-4 h-4 inline ml-2" />
          </a>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{app2.name}</h2>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-xl font-semibold">{app2.rating}</span>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{app2.description}</p>
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Price:</span>
              <span className="font-semibold">{app2.price}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Platforms:</span>
              <span>{app2.platforms.join(', ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">NSFW:</span>
              {app2.nsfwAllowed ? <Check className="w-4 h-4 text-green-400" /> : <X className="w-4 h-4 text-gray-600" />}
            </div>
          </div>
          <a
            href={app2.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Try {app2.name} <ExternalLink className="w-4 h-4 inline ml-2" />
          </a>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-6">Feature Comparison</h2>
        <table className="w-full">
          <tbody className="space-y-4">
            <tr className="border-b border-gray-800">
              <td className="py-4 font-semibold">Price</td>
              <td className="py-4">{app1.price}</td>
              <td className="py-4">{app2.price}</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="py-4 font-semibold">Free Tier</td>
              <td className="py-4">{app1.freeTier ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}</td>
              <td className="py-4">{app2.freeTier ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="py-4 font-semibold">NSFW Allowed</td>
              <td className="py-4">{app1.nsfwAllowed ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}</td>
              <td className="py-4">{app2.nsfwAllowed ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="py-4 font-semibold">Voice</td>
              <td className="py-4">{app1.voice ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}</td>
              <td className="py-4">{app2.voice ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="py-4 font-semibold">Video</td>
              <td className="py-4">{app1.video ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}</td>
              <td className="py-4">{app2.video ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="py-4 font-semibold">Image Generation</td>
              <td className="py-4">{app1.imageReplies ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}</td>
              <td className="py-4">{app2.imageReplies ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="py-4 font-semibold">Daily Message Limit</td>
              <td className="py-4">{app1.dailyMessageLimit || 'Unlimited'}</td>
              <td className="py-4">{app2.dailyMessageLimit || 'Unlimited'}</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="py-4 font-semibold">Realism Score</td>
              <td className="py-4">{app1.realism}/10</td>
              <td className="py-4">{app2.realism}/10</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pros and Cons */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">{app1.name} Pros & Cons</h3>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-4">
            <h4 className="font-semibold text-green-400 mb-2">Pros</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {app1.pros.map((pro, i) => (
                <li key={i}>{pro}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h4 className="font-semibold text-red-400 mb-2">Cons</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {app1.cons.map((con, i) => (
                <li key={i}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">{app2.name} Pros & Cons</h3>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-4">
            <h4 className="font-semibold text-green-400 mb-2">Pros</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {app2.pros.map((pro, i) => (
                <li key={i}>{pro}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h4 className="font-semibold text-red-400 mb-2">Cons</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {app2.cons.map((con, i) => (
                <li key={i}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Best Use Cases */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Best Use Cases</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">{app1.name} is better if...</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
              {app1.useCases.map((useCase, i) => (
                <li key={i}>You want {useCase.toLowerCase()}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{app2.name} is better if...</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
              {app2.useCases.map((useCase, i) => (
                <li key={i}>You want {useCase.toLowerCase()}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Final Verdict */}
      <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Final Verdict</h2>
        <p className="text-xl mb-6">
          Winner: <span className="font-bold text-pink-400">{winner.name}</span>
        </p>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          {winner.name} takes the lead with superior ratings and features. However, both apps have their strengths, 
          and the best choice depends on your specific needs and preferences.
        </p>
        <a
          href={winner.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold text-lg hover:opacity-90 transition"
        >
          Try {winner.name} Free <ExternalLink className="w-5 h-5 inline ml-2" />
        </a>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `${app1.name} vs ${app2.name}`,
            "description": `Comparison between ${app1.name} and ${app2.name}`,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": winner.rating,
              "bestRating": "5"
            }
          }),
        }}
      />
    </div>
  );
}
