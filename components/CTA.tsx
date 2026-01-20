const LOVESCAPE_URL = 'https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc';
const JOI_URL = 'https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/';

// Unique button text variations for each index (20+ unique options)
const BUTTON_TEXTS = [
  'Get Started Today →',
  'Start Your Journey →',
  'Explore Premium AI →',
  'Begin Experience →',
  'Discover More →',
  'Join Now →',
  'Start Free Trial →',
  'Try Premium Features →',
  'Create Your AI Companion →',
  'Experience Now →',
  'Get Premium Access →',
  'Start Chatting →',
  'Unlock Premium →',
  'Try It Free →',
  'Begin Your Journey →',
  'Explore Features →',
  'Get Started →',
  'Start Now →',
  'Join Today →',
  'Discover AI →',
  'Try Premium →',
  'Access Now →',
];

// Unique title variations (15+ unique options)
const TITLE_TEXTS = [
  'Ready to Find Your Perfect AI Companion?',
  'Start Your AI Journey Today',
  'Experience Premium AI Companionship',
  'Discover Your Ideal AI Partner',
  'Begin Your AI Relationship',
  'Find Your Perfect Match',
  'Ready to Begin?',
  'Your AI Companion Awaits',
  'Start Exploring Today',
  'Discover Premium AI',
  'Begin Your Experience',
  'Join the AI Revolution',
  'Experience the Future',
  'Find Your Match',
  'Start Today',
  'Ready to Start?',
  'Your Journey Begins Here',
  'Discover Now',
];

// Unique description variations for Lovescape (12+ unique options)
const LOVESCAPE_DESCRIPTIONS = [
  'Experience premium AI companionship with emotional intelligence and personalized interactions. Start your journey today.',
  'Connect with an AI companion that understands you. Premium emotional intelligence and deep personalization await.',
  'Discover the power of emotionally intelligent AI. Build meaningful connections with personalized interactions.',
  'Premium AI companionship with advanced emotional understanding. Your perfect AI partner is waiting.',
  'Emotionally intelligent AI designed for meaningful connections. Experience personalized companionship like never before.',
  'Advanced AI technology meets emotional depth. Create lasting bonds with your perfect AI companion.',
  'Premium emotional intelligence and personalized experiences. Your ideal AI partner is just a click away.',
  'Build deep connections with emotionally aware AI. Premium features for the most meaningful interactions.',
  'Experience the future of AI companionship. Emotional intelligence meets cutting-edge technology.',
  'Personalized AI interactions with emotional depth. Start building your perfect relationship today.',
  'Advanced emotional AI for meaningful connections. Premium features designed for authentic experiences.',
  'Discover emotionally intelligent AI companionship. Premium personalization and deep connections await.',
];

// Unique description variations for JOI (12+ unique options)
const JOI_DESCRIPTIONS = [
  'Discover high-quality visuals and immersive AI girlfriend experiences. Premium quality for discerning users.',
  'Experience stunning visuals and premium AI interactions. High-quality roleplay and immersive conversations.',
  'Premium AI girlfriend platform with exceptional visual quality. Start your premium experience today.',
  'High-quality visuals meet sophisticated AI. Premium experiences designed for the most discerning users.',
  'Exceptional visual quality and immersive roleplay. Premium AI girlfriend experiences await you.',
  'Stunning visuals and sophisticated AI technology. Experience premium quality like never before.',
  'High-fidelity visuals with advanced AI interactions. Premium experiences for quality-focused users.',
  'Visual excellence meets intelligent AI. Discover premium girlfriend experiences with stunning quality.',
  'Premium visual quality and immersive interactions. Experience the best in AI girlfriend technology.',
  'Sophisticated visuals and advanced AI features. Premium quality designed for discerning users.',
  'Exceptional quality visuals with intelligent AI. Start your premium girlfriend experience today.',
  'High-quality visuals and premium AI interactions. Discover the finest in AI girlfriend experiences.',
];

// Deterministic function to get CTA type based on index
function getCTAType(index: number): 'lovescape' | 'joi' {
  return index % 2 === 0 ? 'joi' : 'lovescape';
}

function getButtonText(index: number): string {
  return BUTTON_TEXTS[index % BUTTON_TEXTS.length];
}

function getTitleText(index: number): string {
  return TITLE_TEXTS[index % TITLE_TEXTS.length];
}

function getDescription(isLovescape: boolean, index: number): string {
  const descriptions = isLovescape ? LOVESCAPE_DESCRIPTIONS : JOI_DESCRIPTIONS;
  return descriptions[index % descriptions.length];
}

interface CTAProps {
  variant?: 'lovescape' | 'joi' | 'random';
  className?: string;
  buttonText?: string;
  title?: string;
  description?: string;
  index?: number; // For consistent text selection
  minimal?: boolean; // Minimalistic version (button only)
}

export default function CTA({ 
  variant = 'random', 
  className = '',
  buttonText,
  title,
  description,
  index = 0,
  minimal = false
}: CTAProps) {
  // Use deterministic selection based on index for 'random' variant
  const ctaType = variant === 'random' ? getCTAType(index) : variant;
  const isLovescape = ctaType === 'lovescape';
  const url = isLovescape ? LOVESCAPE_URL : JOI_URL;
  const colorClass = isLovescape 
    ? 'from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 shadow-rose-500/25' 
    : 'from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-blue-500/25';

  const finalButtonText = buttonText || getButtonText(index);
  const finalTitle = title || getTitleText(index);
  const finalDescription = description || getDescription(isLovescape, index);

  // Minimalistic version - just button
  if (minimal) {
    return (
      <div className={`text-center ${className}`}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block bg-gradient-to-r ${colorClass} text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
        >
          {finalButtonText}
        </a>
      </div>
    );
  }

  // Full version with title and description
  return (
    <div className={`bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 md:p-10 border border-slate-800/50 shadow-xl ${className}`}>
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          {finalTitle}
        </h3>
        <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
          {finalDescription}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block bg-gradient-to-r ${colorClass} text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
        >
          {finalButtonText}
        </a>
      </div>
    </div>
  );
}
