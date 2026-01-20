/**
 * Maps app slugs to logo filenames
 */
const logoMap: Record<string, string> = {
  'candy-ai': 'candyai',
  'lovescape': 'lovescapeai',
  'funfun-ai': 'funfun',
  'nomi-ai': 'nomiai',
  'joi': 'joiai',
  'promptchan': 'promptchan',
  'gptgirlfriend': 'girlfriendgpt', // Using girlfriendgpt.webp file
  'crushon-ai': 'crushonai',
  'spicychat-ai': 'spicychat',
  'kupid-ai': 'kupid',
  'nectar-ai': 'nectar',
  'secrets-ai': 'secrets',
  'ourdream-ai': 'ourdreamai',
  'herahaven': 'herahaven',
  'dreamgf': 'dreamgf',
  'mydreamcompanion': 'mydreamcompanion',
  'freegf': 'freegf',
  'flipped-chat': 'flipped',
  'soulgen': 'soulgen',
  'deepswap-ai': 'deepswap',
  'lovecore-ai': 'lovecoreai',
  'soulkyn': 'soulkyn',
  'ehentai-ai': 'ehentai',
  'replika': 'replika',
  'anima': 'animaapp',
  'kindroid': 'kindroid',
  'character-ai': 'character',
  'muah-ai': 'muah',
  'romantic-ai': 'romanticai',
  'eva-ai': 'evaapp',
  'virtualgf': 'virtualgf',
  'ai-waifu': 'aiwaifu',
  'waifuchat': 'waifuchat',
  'fantasygf': 'fantasygf',
  'chatfai': 'chatfai',
  'botify-ai': 'botify',
};

/**
 * Maps app slugs to product screenshot filenames
 * If product doesn't exist, logo will be used as fallback
 */
const productMap: Record<string, string> = {
  'candy-ai': 'candy',
  'lovescape': 'lovescape',
  'funfun-ai': 'funfun',
  'nomi-ai': 'nomi',
  'joi': 'joi',
  'promptchan': 'promptchan',
  // gptgirlfriend product not found, will use logo (girlfriendgpt.webp)
  'crushon-ai': 'crushon',
  'spicychat-ai': 'spicychat',
  'kupid-ai': 'kupid',
  'nectar-ai': 'trynectar',
  'secrets-ai': 'secrets',
  'ourdream-ai': 'ourdream',
  'herahaven': 'herahaven',
  'dreamgf': 'dreamgf',
  'mydreamcompanion': 'mydreamcompanion',
  'freegf': 'freegf',
  'flipped-chat': 'flipped',
  'soulgen': 'soulgen',
  'deepswap-ai': 'deepswap',
  'lovecore-ai': 'lovecoreai',
  'soulkyn': 'soulkyn',
  'ehentai-ai': 'ehentai',
  'replika': 'replika',
  'anima': 'animaapp',
  'kindroid': 'kindroid',
  'character-ai': 'character',
  'muah-ai': 'muah',
  'romantic-ai': 'romanticai',
  'eva-ai': 'evaapp',
  'virtualgf': 'virtualgf',
  'ai-waifu': 'aiwaifu', // Will use logo as product fallback
  'waifuchat': 'waifuchat',
  'fantasygf': 'fantasygf',
  'chatfai': 'chatfai',
  'botify-ai': 'botify',
};

/**
 * Get logo path for an app by slug
 * Returns null if logo doesn't exist
 */
export function getLogoPath(slug: string): string | null {
  const logoName = logoMap[slug];
  if (!logoName) return null;
  return `/logos/${logoName}.webp`;
}

/**
 * Get product screenshot path for an app by slug
 * If product doesn't exist, returns logo path as fallback
 * Returns null if neither product nor logo exists
 */
export function getProductPath(slug: string): string | null {
  const productName = productMap[slug];
  
  // If product mapping exists, try to use it
  if (productName) {
    return `/products/${productName}.webp`;
  }
  
  // If product doesn't exist, fallback to logo
  const logoPath = getLogoPath(slug);
  if (logoPath) {
    return logoPath;
  }
  
  // If neither exists, return null
  return null;
}

/**
 * Get border radius value in pixels for logo based on app slug
 */
export function getLogoRadiusValue(slug: string): number {
  return 30;
}

/**
 * Get border radius class for logo based on app slug
 */
export function getLogoRadius(slug: string): string {
  return 'rounded-[30px]';
}

/**
 * Check if logo exists for an app
 */
export function hasLogo(slug: string): boolean {
  return logoMap[slug] !== undefined;
}

/**
 * Check if product screenshot exists for an app
 * Returns true if either product or logo exists
 */
export function hasProduct(slug: string): boolean {
  return productMap[slug] !== undefined || logoMap[slug] !== undefined;
}
