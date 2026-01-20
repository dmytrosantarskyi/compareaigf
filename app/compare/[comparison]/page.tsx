import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getAppBySlug } from '@/data/apps';
import { parseComparisonSlugs } from '@/lib/utils';
import { getLogoPath, getProductPath, getLogoRadiusValue } from '@/lib/imageUtils';

interface ComparisonPageProps {
  params: {
    comparison: string;
  };
}

// Generate metadata dynamically
export async function generateMetadata({ params }: ComparisonPageProps): Promise<Metadata> {
  const slugs = parseComparisonSlugs(params.comparison);
  
  if (!slugs) {
    return {
      title: 'Comparison Not Found | CompareAIGF',
    };
  }

  const app1 = getAppBySlug(slugs.slug1);
  const app2 = getAppBySlug(slugs.slug2);

  if (!app1 || !app2) {
    return {
      title: 'Comparison Not Found | CompareAIGF',
    };
  }

  return {
    title: `${app1.name} vs ${app2.name} | The Ultimate AI Girlfriend Comparison`,
    description: `${app1.name} vs ${app2.name}: Compare chat speed, roleplay quality, emotional intelligence, pricing, and features. Find which AI girlfriend app is better for you.`,
    keywords: `${app1.name}, ${app2.name}, AI girlfriend comparison, ${app1.name} vs ${app2.name}`,
  };
}

// Progress bar component for ratings
function RatingBar({ label, value1, value2, color1 = 'blue', color2 = 'rose' }: {
  label: string;
  value1: number;
  value2: number;
  color1?: string;
  color2?: string;
}) {
  const colorClasses1 = {
    blue: 'bg-blue-500',
    rose: 'bg-rose-500',
  };
  const colorClasses2 = {
    blue: 'bg-blue-500',
    rose: 'bg-rose-500',
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{label}</span>
        <div className="flex gap-4">
          <span className="text-sm text-blue-400">{value1}/10</span>
          <span className="text-sm text-rose-400">{value2}/10</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative h-6 bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full ${colorClasses1[color1 as keyof typeof colorClasses1]} transition-all`}
            style={{ width: `${(value1 / 10) * 100}%` }}
          />
        </div>
        <div className="relative h-6 bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full ${colorClasses2[color2 as keyof typeof colorClasses2]} transition-all`}
            style={{ width: `${(value2 / 10) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ComparisonPage({ params }: ComparisonPageProps): JSX.Element {
  const slugs = parseComparisonSlugs(params.comparison);

  if (!slugs) {
    notFound();
  }

  const app1 = getAppBySlug(slugs.slug1);
  const app2 = getAppBySlug(slugs.slug2);

  if (!app1 || !app2) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* VS Header */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 items-center justify-center">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/40 rounded-xl p-6 lg:p-8 text-center border-2 border-blue-500/50 w-full lg:w-auto lg:flex-1 max-w-md shadow-xl">
            <div 
              className="aspect-square mb-4 flex items-center justify-center overflow-hidden"
              style={{ borderRadius: `${getLogoRadiusValue(app1.slug)}px` }}
            >
              {getLogoPath(app1.slug) ? (
                <div 
                  className="relative w-full h-full p-6 overflow-hidden"
                  style={{ borderRadius: `${getLogoRadiusValue(app1.slug)}px` }}
                >
                  <Image
                    src={getLogoPath(app1.slug)!}
                    alt={app1.name}
                    fill
                    className="object-contain"
                    style={{ borderRadius: `${getLogoRadiusValue(app1.slug)}px` }}
                  />
                </div>
              ) : (
                <div 
                  className="w-full h-full bg-slate-800/50 flex items-center justify-center"
                  style={{ borderRadius: `${getLogoRadiusValue(app1.slug)}px` }}
                >
                  <span className="text-xl lg:text-2xl font-bold text-slate-300">{app1.name}</span>
                </div>
              )}
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-blue-400">{app1.name}</h2>
            <a
              href={`https://${app1.websiteUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Visit Site
            </a>
          </div>

          <div className="text-center lg:px-4">
            <span className="text-3xl lg:text-4xl font-bold text-slate-400">VS</span>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/40 rounded-xl p-6 lg:p-8 text-center border-2 border-rose-500/50 w-full lg:w-auto lg:flex-1 max-w-md shadow-xl">
            <div 
              className="aspect-square mb-4 flex items-center justify-center overflow-hidden"
              style={{ borderRadius: `${getLogoRadiusValue(app2.slug)}px` }}
            >
              {getLogoPath(app2.slug) ? (
                <div 
                  className="relative w-full h-full p-6 overflow-hidden"
                  style={{ borderRadius: `${getLogoRadiusValue(app2.slug)}px` }}
                >
                  <Image
                    src={getLogoPath(app2.slug)!}
                    alt={app2.name}
                    fill
                    className="object-contain"
                    style={{ borderRadius: `${getLogoRadiusValue(app2.slug)}px` }}
                  />
                </div>
              ) : (
                <div 
                  className="w-full h-full bg-slate-800/50 flex items-center justify-center"
                  style={{ borderRadius: `${getLogoRadiusValue(app2.slug)}px` }}
                >
                  <span className="text-xl lg:text-2xl font-bold text-slate-300">{app2.name}</span>
                </div>
              )}
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-rose-400">{app2.name}</h2>
            <a
              href={`https://${app2.websiteUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-rose-500/25"
            >
              Visit Site
            </a>
          </div>
        </div>
      </section>

      {/* Definitions */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
              <h2 className="text-3xl font-bold mb-4 text-blue-400">What is {app1.name}?</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {app1.description.long}
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
              <h2 className="text-3xl font-bold mb-4 text-rose-400">What is {app2.name}?</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {app2.description.long}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Table */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Key AI Girlfriend Features Compared
            </h2>
          </div>
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl border border-slate-800/50 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-800/50 border-b border-slate-700/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">{app1.name}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">{app2.name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-300">Voice Interactions</td>
                    <td className="px-6 py-4 text-center">
                      {app1.features.hasVoice ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-400 rounded-lg">✓</span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-400 rounded-lg">✗</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {app2.features.hasVoice ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-400 rounded-lg">✓</span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-400 rounded-lg">✗</span>
                      )}
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-300">Video Features</td>
                    <td className="px-6 py-4 text-center">
                      {app1.features.hasVideo ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-400 rounded-lg">✓</span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-400 rounded-lg">✗</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {app2.features.hasVideo ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-400 rounded-lg">✓</span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-400 rounded-lg">✗</span>
                      )}
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-300">NSFW Content</td>
                    <td className="px-6 py-4 text-center">
                      {app1.features.hasNsfw ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-400 rounded-lg">✓</span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-400 rounded-lg">✗</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {app2.features.hasNsfw ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-400 rounded-lg">✓</span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-400 rounded-lg">✗</span>
                      )}
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-300">Free Tier</td>
                    <td className="px-6 py-4 text-center">
                      {app1.features.freeTier ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-400 rounded-lg">✓</span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-400 rounded-lg">✗</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {app2.features.freeTier ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-400 rounded-lg">✓</span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-400 rounded-lg">✗</span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* UX Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-pink-400 bg-pink-400/10 px-4 py-2 rounded-full">Interface</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              User Experience & Interface Compared
            </h2>
          </div>
          <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto text-center leading-relaxed">
            According to recent community discussions on Reddit, users have shared mixed 
            experiences with both platforms. {app1.name} is generally praised for: {app1.redditSentiment}. 
            Meanwhile, {app2.name} receives feedback noting: {app2.redditSentiment}.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
          {getProductPath(app1.slug) ? (
            <div className="relative bg-slate-900 rounded-xl overflow-hidden border border-slate-700/50 shadow-lg group hover:shadow-xl transition-all">
              <div className="aspect-video relative">
                <Image
                  src={getProductPath(app1.slug)!}
                  alt={`${app1.name} interface screenshot`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
                <p className="text-sm text-slate-300 font-medium">{app1.name} Interface</p>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 rounded-lg p-4 aspect-video flex items-center justify-center border border-slate-700">
              <span className="text-slate-500">Screenshot: {app1.name} Chat Interface</span>
            </div>
          )}
          {getProductPath(app2.slug) ? (
            <div className="relative bg-slate-900 rounded-xl overflow-hidden border border-slate-700/50 shadow-lg group hover:shadow-xl transition-all">
              <div className="aspect-video relative">
                <Image
                  src={getProductPath(app2.slug)!}
                  alt={`${app2.name} interface screenshot`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
                <p className="text-sm text-slate-300 font-medium">{app2.name} Interface</p>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 rounded-lg p-4 aspect-video flex items-center justify-center border border-slate-700">
              <span className="text-slate-500">Screenshot: {app2.name} Chat Interface</span>
            </div>
          )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-yellow-400 bg-yellow-400/10 px-4 py-2 rounded-full">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Pricing & Value Compared
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all shadow-xl hover:shadow-blue-500/10">
              <h3 className="text-2xl font-bold mb-2 text-blue-400">{app1.name}</h3>
              <div className="mb-6">
                <p className="text-4xl font-bold mb-1 text-white">{app1.pricing.price}</p>
                <p className="text-sm text-slate-400">{app1.pricing.model}</p>
              </div>
              <div className="pt-6 border-t border-slate-700/50">
                <p className="text-slate-300 leading-relaxed">
                  {app1.features.freeTier 
                    ? 'Offers a free tier with limited features. Premium unlocks full access.'
                    : 'Premium subscription required for full access.'}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-rose-500/30 hover:border-rose-500/50 transition-all shadow-xl hover:shadow-rose-500/10">
              <h3 className="text-2xl font-bold mb-2 text-rose-400">{app2.name}</h3>
              <div className="mb-6">
                <p className="text-4xl font-bold mb-1 text-white">{app2.pricing.price}</p>
                <p className="text-sm text-slate-400">{app2.pricing.model}</p>
              </div>
              <div className="pt-6 border-t border-slate-700/50">
                <p className="text-slate-300 leading-relaxed">
                  {app2.features.freeTier 
                    ? 'Offers a free tier with limited features. Premium unlocks full access.'
                    : 'Premium subscription required for full access.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-purple-400 bg-purple-400/10 px-4 py-2 rounded-full">Analysis</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Pros & Cons</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* App 1 */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-6 border border-slate-800/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <h3 className="text-xl font-bold text-blue-400">{app1.name} - Pros</h3>
                </div>
                <ul className="space-y-3">
                  {app1.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs">✓</span>
                      </div>
                      <span className="text-slate-300 leading-relaxed">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-6 border border-slate-800/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <h3 className="text-xl font-bold text-blue-400">{app1.name} - Cons</h3>
                </div>
                <ul className="space-y-3">
                  {app1.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-400 text-xs">✗</span>
                      </div>
                      <span className="text-slate-300 leading-relaxed">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* App 2 */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-6 border border-slate-800/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                  <h3 className="text-xl font-bold text-rose-400">{app2.name} - Pros</h3>
                </div>
                <ul className="space-y-3">
                  {app2.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs">✓</span>
                      </div>
                      <span className="text-slate-300 leading-relaxed">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-6 border border-slate-800/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                  <h3 className="text-xl font-bold text-rose-400">{app2.name} - Cons</h3>
                </div>
                <ul className="space-y-3">
                  {app2.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-400 text-xs">✗</span>
                      </div>
                      <span className="text-slate-300 leading-relaxed">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up FAQ */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-indigo-400 bg-indigo-400/10 px-4 py-2 rounded-full">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Sign Up Requirements</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-slate-800/50">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Can I use {app1.name} with no sign up?
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {app1.features.freeTier 
                  ? `${app1.name} offers a free tier that may allow limited access without full registration, though some features may require account creation.`
                  : `${app1.name} requires account creation and subscription for access.`}
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-slate-800/50">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Can I use {app2.name} with no sign up?
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {app2.features.freeTier 
                  ? `${app2.name} offers a free tier that may allow limited access without full registration, though some features may require account creation.`
                  : `${app2.name} requires account creation and subscription for access.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Tests */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full">Testing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Comparison Tests We've Done
            </h2>
          </div>

          <div className="space-y-6">
            {/* Chat Speed */}
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Chat Speed and Response Quality
              </h3>
            <RatingBar
              label="Response Speed"
              value1={app1.ratings.speed}
              value2={app2.ratings.speed}
            />
            <p className="text-slate-300 mt-4">
              {app1.ratings.speed > app2.ratings.speed
                ? `${app1.name} generally provides faster response times, with an average rating of ${app1.ratings.speed}/10 compared to ${app2.name}'s ${app2.ratings.speed}/10. This makes ${app1.name} better for users who value quick, real-time conversations.`
                : app1.ratings.speed < app2.ratings.speed
                ? `${app2.name} generally provides faster response times, with an average rating of ${app2.ratings.speed}/10 compared to ${app1.name}'s ${app1.ratings.speed}/10. This makes ${app2.name} better for users who value quick, real-time conversations.`
                : `Both ${app1.name} and ${app2.name} offer similar response speeds, with both rating ${app1.ratings.speed}/10. Response quality is comparable between the two platforms.`}
            </p>
          </div>

            {/* Roleplay */}
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Roleplay Experience Comparison
              </h3>
            <RatingBar
              label="Roleplay Quality"
              value1={app1.ratings.roleplay}
              value2={app2.ratings.roleplay}
            />
            <p className="text-slate-300 mt-4">
              {app1.ratings.roleplay > app2.ratings.roleplay
                ? `${app1.name} excels in roleplay scenarios, scoring ${app1.ratings.roleplay}/10 for roleplay quality. The AI demonstrates strong character consistency and immersive scenario creation. ${app2.name} scores ${app2.ratings.roleplay}/10, offering solid roleplay but with less depth.`
                : app1.ratings.roleplay < app2.ratings.roleplay
                ? `${app2.name} excels in roleplay scenarios, scoring ${app2.ratings.roleplay}/10 for roleplay quality. The AI demonstrates strong character consistency and immersive scenario creation. ${app1.name} scores ${app1.ratings.roleplay}/10, offering solid roleplay but with less depth.`
                : `Both platforms offer comparable roleplay experiences, with ${app1.name} and ${app2.name} both scoring ${app1.ratings.roleplay}/10. Users can expect similar depth and quality in roleplay scenarios.`}
            </p>
          </div>

            {/* Emotional Intelligence */}
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Emotional Intelligence Comparison
              </h3>
            <RatingBar
              label="Emotional Intelligence (EQ)"
              value1={app1.ratings.eq}
              value2={app2.ratings.eq}
            />
            <p className="text-slate-300 mt-4">
              {app1.ratings.eq > app2.ratings.eq
                ? `${app1.name} demonstrates superior emotional intelligence with a rating of ${app1.ratings.eq}/10. The AI shows better understanding of emotional context, empathy, and relationship dynamics. ${app2.name} scores ${app2.ratings.eq}/10, providing good emotional awareness but with less sophistication.`
                : app1.ratings.eq < app2.ratings.eq
                ? `${app2.name} demonstrates superior emotional intelligence with a rating of ${app2.ratings.eq}/10. The AI shows better understanding of emotional context, empathy, and relationship dynamics. ${app1.name} scores ${app1.ratings.eq}/10, providing good emotional awareness but with less sophistication.`
                : `Both ${app1.name} and ${app2.name} show similar levels of emotional intelligence, both scoring ${app1.ratings.eq}/10. Users can expect comparable emotional understanding and empathy from both platforms.`}
            </p>
          </div>

            {/* Visual Style */}
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Visual Style Comparison
              </h3>
            <RatingBar
              label="Visual Quality"
              value1={app1.ratings.visual}
              value2={app2.ratings.visual}
            />
            <p className="text-slate-300 mt-4">
              {app1.ratings.visual > app2.ratings.visual
                ? `${app1.name} offers superior visual quality with a rating of ${app1.ratings.visual}/10. The platform provides ${app1.features.hasVideo ? 'video features and ' : ''}high-quality visual elements that enhance the user experience. ${app2.name} scores ${app2.ratings.visual}/10, offering ${app2.features.hasVideo ? 'video features and ' : ''}decent visuals but with less polish.`
                : app1.ratings.visual < app2.ratings.visual
                ? `${app2.name} offers superior visual quality with a rating of ${app2.ratings.visual}/10. The platform provides ${app2.features.hasVideo ? 'video features and ' : ''}high-quality visual elements that enhance the user experience. ${app1.name} scores ${app1.ratings.visual}/10, offering ${app1.features.hasVideo ? 'video features and ' : ''}decent visuals but with less polish.`
                : `Both platforms offer similar visual quality, with ${app1.name} and ${app2.name} both scoring ${app1.ratings.visual}/10. Visual experiences are comparable between the two.`}
            </p>
          </div>

            {/* First-Time User Experience */}
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-800/50">
              <h3 className="text-2xl font-bold mb-6 text-white">
                First-Time User Experience
              </h3>
            <p className="text-slate-300">
              For first-time users, {app1.features.freeTier ? `${app1.name} offers a free tier that allows new users to explore the platform without commitment. ` : `${app1.name} requires a subscription, which may be a barrier for new users. `}
              {app2.features.freeTier ? `${app2.name} also provides a free tier, making it accessible for newcomers. ` : `${app2.name} requires a subscription upfront. `}
              Both platforms have onboarding processes, but {app1.name} {app1.ratings.speed >= app2.ratings.speed ? 'tends to have' : 'may have'} faster initial setup, 
              while {app2.name} {app2.ratings.eq >= app1.ratings.eq ? 'offers' : 'may offer'} more personalized introduction experiences. 
              Overall, {app1.features.freeTier && app2.features.freeTier 
                ? 'both platforms are accessible to new users through their free tiers.'
                : app1.features.freeTier 
                ? `${app1.name} is more accessible to new users due to its free tier.`
                : app2.features.freeTier
                ? `${app2.name} is more accessible to new users due to its free tier.`
                : 'both platforms require commitment upfront, which may be challenging for first-time users.'}
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/20 via-slate-900/50 to-rose-900/20 rounded-2xl p-8 md:p-12 border border-slate-800/50 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-yellow-400 bg-yellow-400/10 px-4 py-2 rounded-full">Verdict</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Final Verdict: Which one should you choose?
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Choosing between {app1.name} and {app2.name} depends on your priorities:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">
                    Choose {app1.name} if:
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    You prioritize {app1.ratings.speed >= app2.ratings.speed ? 'fast response times' : 'roleplay quality'}, 
                    {app1.ratings.eq >= app2.ratings.eq ? ' emotional intelligence' : ''}, 
                    {app1.features.hasVoice ? ' voice interactions' : ''}, 
                    and {app1.features.freeTier ? 'a free tier option' : 'premium features'}.
                  </p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-rose-500/20">
                  <h3 className="text-lg font-semibold mb-3 text-rose-400">
                    Choose {app2.name} if:
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    You prioritize {app2.ratings.speed >= app1.ratings.speed ? 'fast response times' : 'roleplay quality'}, 
                    {app2.ratings.eq >= app1.ratings.eq ? ' emotional intelligence' : ''}, 
                    {app2.features.hasVoice ? ' voice interactions' : ''}, 
                    and {app2.features.freeTier ? 'a free tier option' : 'premium features'}.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-700/50">
                <p className="text-lg text-slate-300 leading-relaxed">
                  {app1.ratings.speed + app1.ratings.roleplay + app1.ratings.eq + app1.ratings.visual > 
                   app2.ratings.speed + app2.ratings.roleplay + app2.ratings.eq + app2.ratings.visual
                    ? `Overall, ${app1.name} scores slightly higher across our testing criteria, making it our top recommendation for most users.`
                    : app1.ratings.speed + app1.ratings.roleplay + app1.ratings.eq + app1.ratings.visual < 
                      app2.ratings.speed + app2.ratings.roleplay + app2.ratings.eq + app2.ratings.visual
                    ? `Overall, ${app2.name} scores slightly higher across our testing criteria, making it our top recommendation for most users.`
                    : `Both platforms are excellent choices, with ${app1.name} and ${app2.name} scoring similarly across our tests. Your decision should be based on specific features and pricing that match your needs.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
