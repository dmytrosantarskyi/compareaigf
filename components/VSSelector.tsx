'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { apps, getAppBySlug } from '@/data/apps';
import { getLogoPath, getLogoRadius, getLogoRadiusValue } from '@/lib/imageUtils';

export default function VSSelector() {
  const router = useRouter();
  const [app1, setApp1] = useState('joi');
  const [app2, setApp2] = useState('lovescape');

  const selectedApp1 = useMemo(() => getAppBySlug(app1), [app1]);
  const selectedApp2 = useMemo(() => getAppBySlug(app2), [app2]);

  const logo1 = selectedApp1 ? getLogoPath(selectedApp1.slug) : null;
  const logo2 = selectedApp2 ? getLogoPath(selectedApp2.slug) : null;

  const handleCompare = () => {
    if (app1 && app2 && app1 !== app2) {
      router.push(`/compare/${app1}-vs-${app2}`);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-slate-800/50 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-400 mb-2">Select First App</label>
            <select
              value={app1}
              onChange={(e) => setApp1(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-5 py-3.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm hover:border-slate-600"
            >
              {apps.map((app) => (
                <option key={app.id} value={app.slug}>
                  {app.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-400 mb-2">Select Second App</label>
            <select
              value={app2}
              onChange={(e) => setApp2(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-5 py-3.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500/50 transition-all backdrop-blur-sm hover:border-slate-600"
            >
              {apps.map((app) => (
                <option key={app.id} value={app.slug}>
                  {app.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Preview Section */}
        {selectedApp1 && selectedApp2 && (
          <div className="mb-8 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-slate-400">VS</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* App 1 Preview */}
              <div className="bg-gradient-to-br from-blue-900/20 to-slate-800/30 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center gap-4 mb-4">
                  {logo1 ? (
                    <div 
                      className={`relative w-16 h-16 overflow-hidden flex-shrink-0`}
                      style={{ borderRadius: `${getLogoRadiusValue(selectedApp1.slug)}px` }}
                    >
                      <Image
                        src={logo1}
                        alt={selectedApp1.name}
                        fill
                        className="object-contain p-2"
                        style={{ borderRadius: `${getLogoRadiusValue(selectedApp1.slug)}px` }}
                      />
                    </div>
                  ) : (
                    <div 
                      className="w-16 h-16 flex items-center justify-center flex-shrink-0 bg-slate-800/50"
                      style={{ borderRadius: `${getLogoRadiusValue(selectedApp1.slug)}px` }}
                    >
                      <span className="text-xs font-bold text-slate-400">{selectedApp1.name.charAt(0)}</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-blue-400">{selectedApp1.name}</h3>
                </div>
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">{selectedApp1.description.short}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Speed</span>
                    <span className="text-slate-300 font-semibold">{selectedApp1.ratings.speed}/10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Roleplay</span>
                    <span className="text-slate-300 font-semibold">{selectedApp1.ratings.roleplay}/10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">EQ</span>
                    <span className="text-slate-300 font-semibold">{selectedApp1.ratings.eq}/10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Visual</span>
                    <span className="text-slate-300 font-semibold">{selectedApp1.ratings.visual}/10</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {selectedApp1.features.hasVoice && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Voice</span>
                  )}
                  {selectedApp1.features.hasVideo && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Video</span>
                  )}
                  {selectedApp1.features.hasNsfw && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">NSFW</span>
                  )}
                  {selectedApp1.features.freeTier && (
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Free Tier</span>
                  )}
                </div>
                <p className="text-sm font-semibold text-slate-300 mb-4">{selectedApp1.pricing.price}</p>
                <a
                  href={selectedApp1.websiteUrl.startsWith('http') ? selectedApp1.websiteUrl : `https://${selectedApp1.websiteUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-center text-sm"
                >
                  Visit {selectedApp1.name} →
                </a>
              </div>

              {/* App 2 Preview */}
              <div className="bg-gradient-to-br from-rose-900/20 to-slate-800/30 rounded-xl p-6 border border-rose-500/20">
                <div className="flex items-center gap-4 mb-4">
                  {logo2 ? (
                    <div 
                      className={`relative w-16 h-16 overflow-hidden flex-shrink-0`}
                      style={{ borderRadius: `${getLogoRadiusValue(selectedApp2.slug)}px` }}
                    >
                      <Image
                        src={logo2}
                        alt={selectedApp2.name}
                        fill
                        className="object-contain p-2"
                        style={{ borderRadius: `${getLogoRadiusValue(selectedApp2.slug)}px` }}
                      />
                    </div>
                  ) : (
                    <div 
                      className="w-16 h-16 flex items-center justify-center flex-shrink-0 bg-slate-800/50"
                      style={{ borderRadius: `${getLogoRadiusValue(selectedApp2.slug)}px` }}
                    >
                      <span className="text-xs font-bold text-slate-400">{selectedApp2.name.charAt(0)}</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-rose-400">{selectedApp2.name}</h3>
                </div>
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">{selectedApp2.description.short}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Speed</span>
                    <span className="text-slate-300 font-semibold">{selectedApp2.ratings.speed}/10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Roleplay</span>
                    <span className="text-slate-300 font-semibold">{selectedApp2.ratings.roleplay}/10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">EQ</span>
                    <span className="text-slate-300 font-semibold">{selectedApp2.ratings.eq}/10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Visual</span>
                    <span className="text-slate-300 font-semibold">{selectedApp2.ratings.visual}/10</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {selectedApp2.features.hasVoice && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Voice</span>
                  )}
                  {selectedApp2.features.hasVideo && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Video</span>
                  )}
                  {selectedApp2.features.hasNsfw && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">NSFW</span>
                  )}
                  {selectedApp2.features.freeTier && (
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Free Tier</span>
                  )}
                </div>
                <p className="text-sm font-semibold text-slate-300 mb-4">{selectedApp2.pricing.price}</p>
                <a
                  href={selectedApp2.websiteUrl.startsWith('http') ? selectedApp2.websiteUrl : `https://${selectedApp2.websiteUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-rose-500/25 text-center text-sm"
                >
                  Visit {selectedApp2.name} →
                </a>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleCompare}
          disabled={!app1 || !app2 || app1 === app2}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:from-slate-700 disabled:to-slate-800 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:shadow-none transform hover:scale-[1.02] disabled:transform-none"
        >
          View Full Comparison
        </button>
      </div>
    </div>
  );
}
