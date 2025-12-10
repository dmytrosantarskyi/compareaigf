import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import { Search, Menu } from "lucide-react";

export const metadata: Metadata = {
  title: "Best AI Girlfriend Apps Comparison 2025 | CompareAI GF",
  description: "Unbiased comparison of the best AI girlfriend apps. Compare features, prices, NSFW options, voice capabilities, and more. Find your perfect AI companion today.",
  keywords: "AI girlfriend apps, AI companion, best AI girlfriend, AI chat apps, NSFW AI, free AI girlfriend",
  openGraph: {
    title: "Best AI Girlfriend Apps Comparison 2025",
    description: "Compare all AI girlfriend apps in one place. Find the perfect AI companion for you.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1EJFKC35F7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1EJFKC35F7');
          `}
        </Script>
        <nav className="border-b border-gray-800 bg-[#0f0f0f] sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                CompareAI GF
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/compare" className="hover:text-pink-400 transition">Compare</Link>
                <Link href="/categories/free" className="hover:text-pink-400 transition">Free Apps</Link>
                <Link href="/categories/nsfw" className="hover:text-pink-400 transition">NSFW</Link>
                <Link href="/blog" className="hover:text-pink-400 transition">Blog</Link>
                <Link href="/about" className="hover:text-pink-400 transition">About</Link>
              </div>
              <button className="md:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-gray-800 bg-[#0f0f0f] mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">CompareAI GF</h3>
                <p className="text-gray-400 text-sm">Unbiased comparison of AI girlfriend apps. Find your perfect AI companion.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/categories/free" className="hover:text-pink-400">Free Apps</Link></li>
                  <li><Link href="/categories/nsfw" className="hover:text-pink-400">NSFW Apps</Link></li>
                  <li><Link href="/categories/no-signup" className="hover:text-pink-400">No Signup</Link></li>
                  <li><Link href="/categories/voice" className="hover:text-pink-400">Voice Apps</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/blog" className="hover:text-pink-400">Blog</Link></li>
                  <li><Link href="/compare" className="hover:text-pink-400">All Comparisons</Link></li>
                  <li><Link href="/about" className="hover:text-pink-400">About</Link></li>
                  <li><Link href="/contact" className="hover:text-pink-400">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/privacy" className="hover:text-pink-400">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-pink-400">Terms of Service</Link></li>
                  <li><Link href="/disclaimer" className="hover:text-pink-400">Disclaimer</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
              <p>© 2025 CompareAI GF. All rights reserved. We may earn commissions from affiliate links.</p>
            </div>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "CompareAI GF",
              "url": "https://compareaigf.com",
              "description": "Unbiased comparison of AI girlfriend apps",
            }),
          }}
        />
      </body>
    </html>
  );
}
