'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { apps } from '@/data/apps';
import { getLogoPath, getLogoRadius, getLogoRadiusValue } from '@/lib/imageUtils';

export default function AppGrid() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {apps.map((app) => {
        const logoPath = getLogoPath(app.slug);
        return (
          <div
            key={app.id}
            className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/40 rounded-xl p-4 hover:from-slate-800/80 hover:to-slate-700/40 transition-all duration-300 cursor-pointer border border-slate-800/50 hover:border-slate-700/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            onClick={() => router.push(`/compare/${app.slug}-vs-${apps[0].slug === app.slug ? apps[1].slug : apps[0].slug}`)}
          >
            <div 
              className="aspect-square mb-3 flex items-center justify-center overflow-hidden"
              style={{ borderRadius: `${getLogoRadiusValue(app.slug)}px` }}
            >
              {logoPath ? (
                <div 
                  className="relative w-full h-full p-3 overflow-hidden"
                  style={{ borderRadius: `${getLogoRadiusValue(app.slug)}px` }}
                >
                  <Image
                    src={logoPath}
                    alt={app.name}
                    fill
                    className="object-contain"
                    style={{ borderRadius: `${getLogoRadiusValue(app.slug)}px` }}
                  />
                </div>
              ) : (
                <div 
                  className="w-full h-full bg-gradient-to-br from-slate-800/50 to-slate-700/30 flex items-center justify-center group-hover:from-slate-700/50 group-hover:to-slate-600/30 transition-all"
                  style={{ borderRadius: `${getLogoRadiusValue(app.slug)}px` }}
                >
                  <span className="text-xs font-semibold text-center px-2 text-slate-300 group-hover:text-white transition-colors">{app.name}</span>
                </div>
              )}
            </div>
            <p className="text-xs text-slate-400 text-center truncate group-hover:text-slate-300 transition-colors">{app.name}</p>
          </div>
        );
      })}
    </div>
  );
}
