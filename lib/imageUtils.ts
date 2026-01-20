/**
 * Maps app slugs to logo filenames
 */
const logoMap: Record<string, string> = {
  'candy-ai': 'candyai',
  'crushon-ai': 'crushonai',
  'deepswap-ai': 'deepswap',
  'dreamgf': 'dreamgf',
  'ehentai-ai': 'ehentai',
  'eva-ai': 'evaapp',
  'flipped-chat': 'flipped',
  'freegf': 'freegf',
  'funfun-ai': 'funfun',
  'girlfriendgpt': 'girlfriendgpt',
  'herahaven': 'herahaven',
  'joi': 'joiai',
  'kupid-ai': 'kupid',
  'lovecore-ai': 'lovecoreai',
  'lovescape': 'lovescapeai',
  'mydreamcompanion': 'mydreamcompanion',
  'nectar-ai': 'nectar',
  'nomi-ai': 'nomiai',
  'ourdream-ai': 'ourdreamai',
  'promptchan': 'promptchan',
  'secrets-ai': 'secrets',
  'soulgen': 'soulgen',
  'soulkyn': 'soulkyn',
  'spicychat-ai': 'spicychat',
  // Add more mappings as needed
};

/**
 * Maps app slugs to product screenshot filenames
 */
const productMap: Record<string, string> = {
  'candy-ai': 'candy',
  'crushon-ai': 'crushon',
  'deepswap-ai': 'deepswap',
  'dreamgf': 'dreamgf',
  'ehentai-ai': 'ehentai',
  'eva-ai': 'evaapp',
  'flipped-chat': 'flipped',
  'freegf': 'freegf',
  'funfun-ai': 'funfun',
  'girlfriendgpt': 'girlfriendgpt',
  'herahaven': 'herahaven',
  'joi': 'joi',
  'kupid-ai': 'kupid',
  'lovecore-ai': 'lovecoreai',
  'lovescape': 'lovescape',
  'mydreamcompanion': 'mydreamcompanion',
  'nectar-ai': 'trynectar',
  'nomi-ai': 'nomi',
  'ourdream-ai': 'ourdream',
  'promptchan': 'promptchan',
  'secrets-ai': 'secrets',
  'soulgen': 'soulgen',
  'soulkyn': 'soulkyn',
  'spicychat-ai': 'spicychat',
  // Add more mappings as needed
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
 * Returns null if screenshot doesn't exist
 */
export function getProductPath(slug: string): string | null {
  const productName = productMap[slug];
  if (!productName) return null;
  return `/products/${productName}.webp`;
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
 */
export function hasProduct(slug: string): boolean {
  return productMap[slug] !== undefined;
}
