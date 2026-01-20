import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            CompareAIGF
          </Link>
          <div className="flex items-center gap-6">
            <Link 
              href="/compare/candy-ai-vs-lovescape" 
              className="text-slate-300 hover:text-white transition-colors"
            >
              Compare Apps
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
