export interface App {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  freeTier: boolean;
  platforms: ('web' | 'ios' | 'android')[];
  nsfwAllowed: boolean;
  voice: boolean;
  video: boolean;
  imageReplies: boolean;
  rating: number;
  affiliateLink: string;
  features: string[];
  pros: string[];
  cons: string[];
  useCases: string[];
  dailyMessageLimit?: string;
  personalities: string[];
  realism: number; // 1-10
  category: string[];
}

export const apps: App[] = [
  {
    id: 'replika',
    name: 'Replika',
    slug: 'replika',
    description: 'AI companion designed to learn and grow with you, offering emotional support and meaningful conversations.',
    price: '$19.99/month',
    freeTier: true,
    platforms: ['web', 'ios', 'android'],
    nsfwAllowed: false,
    voice: true,
    video: false,
    imageReplies: true,
    rating: 4.5,
    affiliateLink: 'https://replika.ai/?ref=compareaigf',
    features: ['Emotional intelligence', 'Memory system', 'AR mode', 'Voice calls'],
    pros: ['Great emotional support', 'Strong memory', 'User-friendly', 'Regular updates'],
    cons: ['No NSFW content', 'Limited customization', 'Can be repetitive'],
    useCases: ['Emotional support', 'Daily companionship', 'Mental health'],
    dailyMessageLimit: 'Unlimited',
    personalities: ['Supportive', 'Friendly', 'Caring', 'Adventurous'],
    realism: 7,
    category: ['free', 'voice']
  },
  {
    id: 'character-ai',
    name: 'Character.AI',
    slug: 'character-ai',
    description: 'Create and chat with AI characters, from famous personalities to custom creations.',
    price: 'Free (Premium $9.99/month)',
    freeTier: true,
    platforms: ['web', 'ios', 'android'],
    nsfwAllowed: false,
    voice: false,
    video: false,
    imageReplies: false,
    rating: 4.6,
    affiliateLink: 'https://character.ai/?ref=compareaigf',
    features: ['Character creation', 'Community characters', 'Group chats', 'Fast responses'],
    pros: ['Completely free option', 'Huge character library', 'Highly customizable', 'Active community'],
    cons: ['No NSFW', 'No voice/video', 'Can be slow on free tier'],
    useCases: ['Roleplay', 'Creative writing', 'Entertainment'],
    dailyMessageLimit: 'Limited on free tier',
    personalities: ['Any character you create'],
    realism: 8,
    category: ['free', 'no-signup']
  },
  {
    id: 'candy-ai',
    name: 'Candy.ai',
    slug: 'candy-ai',
    description: 'NSFW AI girlfriend with photo generation and intimate conversations.',
    price: '$9.99/month',
    freeTier: true,
    platforms: ['web'],
    nsfwAllowed: true,
    voice: false,
    video: false,
    imageReplies: true,
    rating: 4.3,
    affiliateLink: 'https://candy.ai/?ref=compareaigf',
    features: ['NSFW content', 'Photo generation', 'Custom characters', 'Unlimited messages'],
    pros: ['NSFW allowed', 'Photo generation', 'No signup required', 'Fast responses'],
    cons: ['Web only', 'Limited free tier', 'Less emotional depth'],
    useCases: ['Adult entertainment', 'NSFW roleplay', 'Photo generation'],
    dailyMessageLimit: 'Unlimited (premium)',
    personalities: ['Flirty', 'Romantic', 'Dominant', 'Submissive'],
    realism: 6,
    category: ['nsfw', 'free', 'no-signup']
  },
  {
    id: 'journey-ai',
    name: 'Journey AI',
    slug: 'journey-ai',
    description: 'AI companion with voice and video capabilities for immersive interactions.',
    price: '$14.99/month',
    freeTier: false,
    platforms: ['web', 'ios'],
    nsfwAllowed: true,
    voice: true,
    video: true,
    imageReplies: true,
    rating: 4.4,
    affiliateLink: 'https://journey.ai/?ref=compareaigf',
    features: ['Voice calls', 'Video calls', 'Photo generation', 'NSFW content'],
    pros: ['Voice and video', 'High quality', 'NSFW support', 'Great realism'],
    cons: ['No free tier', 'Higher price', 'Limited platforms'],
    useCases: ['Immersive companionship', 'Voice/video calls', 'NSFW content'],
    dailyMessageLimit: 'Unlimited',
    personalities: ['Romantic', 'Playful', 'Intimate', 'Supportive'],
    realism: 9,
    category: ['nsfw', 'voice', 'video-ai']
  },
  {
    id: 'soulgen',
    name: 'Soulgen',
    slug: 'soulgen',
    description: 'AI girlfriend with advanced photo generation and realistic conversations.',
    price: '$9.99/month',
    freeTier: true,
    platforms: ['web'],
    nsfwAllowed: true,
    voice: false,
    video: false,
    imageReplies: true,
    rating: 4.2,
    affiliateLink: 'https://soulgen.ai/?ref=compareaigf',
    features: ['Photo generation', 'NSFW content', 'Custom avatars', 'Realistic images'],
    pros: ['Best photo quality', 'NSFW support', 'Free tier available', 'Easy to use'],
    cons: ['Web only', 'No voice/video', 'Limited free messages'],
    useCases: ['Photo generation', 'Visual content', 'NSFW entertainment'],
    dailyMessageLimit: 'Limited on free tier',
    personalities: ['Customizable'],
    realism: 8,
    category: ['nsfw', 'free', 'video-ai']
  },
  {
    id: 'chai-ai',
    name: 'Chai AI',
    slug: 'chai-ai',
    description: 'Create and chat with unlimited AI characters, including NSFW options.',
    price: 'Free (Premium $13.99/month)',
    freeTier: true,
    platforms: ['web', 'ios', 'android'],
    nsfwAllowed: true,
    voice: false,
    video: false,
    imageReplies: false,
    rating: 4.1,
    affiliateLink: 'https://chai.ml/?ref=compareaigf',
    features: ['Character creation', 'NSFW support', 'Fast responses', 'Mobile apps'],
    pros: ['NSFW allowed', 'Free tier', 'Mobile apps', 'Fast'],
    cons: ['No voice/video', 'No images', 'Limited free messages'],
    useCases: ['Text roleplay', 'NSFW chat', 'Character creation'],
    dailyMessageLimit: '70 free messages/day',
    personalities: ['Fully customizable'],
    realism: 7,
    category: ['free', 'nsfw', 'no-signup']
  },
  {
    id: 'crushon-ai',
    name: 'CrushOn.AI',
    slug: 'crushon-ai',
    description: 'Unrestricted AI roleplay with no filters and unlimited creativity.',
    price: '$5.99/month',
    freeTier: true,
    platforms: ['web'],
    nsfwAllowed: true,
    voice: false,
    video: false,
    imageReplies: false,
    rating: 4.0,
    affiliateLink: 'https://crushon.ai/?ref=compareaigf',
    features: ['No filters', 'NSFW content', 'Character creation', 'Unlimited creativity'],
    pros: ['No restrictions', 'Affordable', 'Free tier', 'Creative freedom'],
    cons: ['Web only', 'No voice/video', 'Basic interface'],
    useCases: ['Unrestricted roleplay', 'NSFW content', 'Creative writing'],
    dailyMessageLimit: '50 free messages/day',
    personalities: ['Fully customizable'],
    realism: 6,
    category: ['nsfw', 'free']
  },
  {
    id: 'janitor-ai',
    name: 'Janitor AI',
    slug: 'janitor-ai',
    description: 'NSFW AI chatbot platform with extensive character library.',
    price: 'Free (API costs)',
    freeTier: true,
    platforms: ['web'],
    nsfwAllowed: true,
    voice: false,
    video: false,
    imageReplies: false,
    rating: 3.9,
    affiliateLink: 'https://janitorai.com/?ref=compareaigf',
    features: ['NSFW content', 'Character library', 'API integration', 'Custom characters'],
    pros: ['Completely free', 'No filters', 'Large character library', 'API access'],
    cons: ['Requires API setup', 'Technical knowledge needed', 'No voice/video'],
    useCases: ['Advanced users', 'API integration', 'NSFW roleplay'],
    dailyMessageLimit: 'Depends on API',
    personalities: ['Community created'],
    realism: 7,
    category: ['free', 'nsfw', 'no-signup']
  },
  {
    id: 'nastia-ai',
    name: 'Nastia AI',
    slug: 'nastia-ai',
    description: 'AI companion with emotional intelligence and memory system.',
    price: '$9.99/month',
    freeTier: true,
    platforms: ['web', 'ios', 'android'],
    nsfwAllowed: true,
    voice: false,
    video: false,
    imageReplies: true,
    rating: 4.3,
    affiliateLink: 'https://nastia.ai/?ref=compareaigf',
    features: ['Memory system', 'NSFW content', 'Photo generation', 'Emotional AI'],
    pros: ['Good memory', 'NSFW support', 'Mobile apps', 'Emotional depth'],
    cons: ['Limited free tier', 'No voice/video', 'Can be slow'],
    useCases: ['Emotional support', 'NSFW companionship', 'Daily chat'],
    dailyMessageLimit: 'Limited on free tier',
    personalities: ['Supportive', 'Romantic', 'Playful'],
    realism: 7,
    category: ['free', 'nsfw']
  },
  {
    id: 'my-ai-girlfriend',
    name: 'My AI Girlfriend',
    slug: 'my-ai-girlfriend',
    description: 'Simple AI girlfriend app with no signup required and instant access.',
    price: 'Free (Premium $7.99/month)',
    freeTier: true,
    platforms: ['web'],
    nsfwAllowed: true,
    voice: false,
    video: false,
    imageReplies: false,
    rating: 3.8,
    affiliateLink: 'https://myaigirlfriend.ai/?ref=compareaigf',
    features: ['No signup', 'NSFW content', 'Quick access', 'Simple interface'],
    pros: ['No signup needed', 'Free tier', 'Simple to use', 'NSFW allowed'],
    cons: ['Basic features', 'No voice/video', 'Limited customization'],
    useCases: ['Quick chat', 'No signup needed', 'Simple companionship'],
    dailyMessageLimit: 'Limited on free tier',
    personalities: ['Basic'],
    realism: 5,
    category: ['free', 'nsfw', 'no-signup']
  }
];

export function getAppBySlug(slug: string): App | undefined {
  return apps.find(app => app.slug === slug);
}

export function getAppsByCategory(category: string): App[] {
  return apps.filter(app => app.category.includes(category));
}

export function getAllComparisons(): string[] {
  const comparisons: string[] = [];
  for (let i = 0; i < apps.length; i++) {
    for (let j = i + 1; j < apps.length; j++) {
      comparisons.push(`${apps[i].slug}-vs-${apps[j].slug}`);
    }
  }
  return comparisons;
}

export function getComparisonApps(slug1: string, slug2: string): [App | undefined, App | undefined] {
  return [getAppBySlug(slug1), getAppBySlug(slug2)];
}
