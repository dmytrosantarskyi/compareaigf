import Link from 'next/link';
import Image from 'next/image';
import { apps } from '@/data/apps';

export default function Footer() {
  const popularApps = apps.slice(0, 8);

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo/favicon-32x32.png"
                alt="CompareAIGF"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <h3 className="text-xl font-bold text-blue-400">CompareAIGF</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Your comprehensive resource for comparing AI girlfriend applications. 
              Find the perfect AI companion that matches your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/compare/candy-ai-vs-lovescape" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Compare Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Apps */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Apps</h3>
            <ul className="space-y-2">
              {popularApps.map((app) => (
                <li key={app.id}>
                  <Link 
                    href={`/compare/${app.slug}-vs-${popularApps[0].slug === app.slug ? popularApps[1].slug : popularApps[0].slug}`}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {app.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} CompareAIGF. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            CompareAIGF is an independent comparison website. We may earn commissions from affiliate links.
          </p>
        </div>
      </div>
    </footer>
  );
}
