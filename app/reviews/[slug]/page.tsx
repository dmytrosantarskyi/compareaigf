import { getAppBySlug, apps } from "@/data/apps";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Star, Check, X, ArrowLeft } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const app = getAppBySlug(params.slug);
  
  if (!app) {
    return {
      title: "Review Not Found",
    };
  }

  return {
    title: `${app.name} Review 2025 - Is It Legit? Features, Pricing & Alternatives`,
    description: `Complete ${app.name} review. Features, pricing, pros, cons, and alternatives. Find out if ${app.name} is the right AI girlfriend app for you.`,
  };
}

export async function generateStaticParams() {
  return apps.map((app) => ({
    slug: app.slug,
  }));
}

export default function ReviewPage({ params }: PageProps) {
  const app = getAppBySlug(params.slug);

  if (!app) {
    notFound();
  }

  const alternatives = apps
    .filter(a => a.id !== app.id)
    .slice(0, 5);

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-400 mb-8 transition">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{app.name} Review</h1>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-6 h-6 ${i < Math.floor(app.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />
            ))}
            <span className="ml-2 text-2xl font-semibold">{app.rating}</span>
          </div>
          <span className="text-gray-400">•</span>
          <span className="text-gray-400">{app.price}</span>
        </div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{app.description}</p>
        <a
          href={app.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold text-lg hover:opacity-90 transition"
        >
          Try {app.name} Now <ExternalLink className="w-5 h-5 inline ml-2" />
        </a>
      </div>

      {/* Key Features */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {app.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Breakdown */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Platform & Pricing</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Price:</span>
              <span className="font-semibold">{app.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Free Tier:</span>
              {app.freeTier ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Platforms:</span>
              <span>{app.platforms.join(', ')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Daily Messages:</span>
              <span>{app.dailyMessageLimit || 'Unlimited'}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Capabilities</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">NSFW Allowed:</span>
              {app.nsfwAllowed ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Voice:</span>
              {app.voice ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Video:</span>
              {app.video ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Image Replies:</span>
              {app.imageReplies ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-gray-600" />}
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Realism Score:</span>
              <span className="font-semibold">{app.realism}/10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pros and Cons */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-green-400">What Users Like</h3>
          <ul className="space-y-2">
            {app.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-red-400">What Users Don't Like</h3>
          <ul className="space-y-2">
            {app.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Best Use Cases</h2>
        <p className="text-gray-300 mb-4">{app.name} is ideal for:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          {app.useCases.map((useCase, i) => (
            <li key={i}>{useCase}</li>
          ))}
        </ul>
      </div>

      {/* Alternatives */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Alternatives to {app.name}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {alternatives.map((alt) => (
            <Link
              key={alt.id}
              href={`/reviews/${alt.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-pink-500 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{alt.name}</h3>
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{alt.rating}</span>
              </div>
              <p className="text-sm text-gray-400">{alt.description.substring(0, 100)}...</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Verdict */}
      <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Final Verdict</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          {app.name} is a {app.rating >= 4.5 ? 'top-tier' : app.rating >= 4 ? 'solid' : 'decent'} AI girlfriend app 
          that excels in {app.useCases[0].toLowerCase()}. With a rating of {app.rating}/5, it offers 
          {app.freeTier ? ' a generous free tier and' : ''} {app.features.slice(0, 2).join(' and ')}. 
          {app.nsfwAllowed ? ' NSFW content is allowed, making it suitable for adult users.' : ' Note that NSFW content is not allowed.'}
        </p>
        <a
          href={app.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold text-lg hover:opacity-90 transition"
        >
          Try {app.name} Now <ExternalLink className="w-5 h-5 inline ml-2" />
        </a>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": app.name,
              "applicationCategory": "CompanionApp",
              "offers": {
                "@type": "Offer",
                "price": app.price
              }
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": app.rating,
              "bestRating": "5"
            },
            "author": {
              "@type": "Organization",
              "name": "CompareAI GF"
            }
          }),
        }}
      />
    </div>
  );
}
