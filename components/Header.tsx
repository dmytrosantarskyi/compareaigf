import Link from 'next/link';
import Image from 'next/image';

const LOVESCAPE_URL = 'https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc';
const JOI_URL = 'https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/';

// Deterministic selection for header CTA (use JOI as default)
const HEADER_CTA_URL = JOI_URL;
const HEADER_CTA_TEXT = 'Try Now';

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            <Image
              src="/logo/favicon-32x32.png"
              alt="CompareAIGF"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span>CompareAIGF</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link 
              href="/compare/candy-ai-vs-lovescape" 
              className="text-slate-300 hover:text-white transition-colors hidden sm:block"
            >
              Compare Apps
            </Link>
            <a
              href={HEADER_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
            >
              {HEADER_CTA_TEXT}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
