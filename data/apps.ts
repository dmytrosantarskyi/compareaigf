export interface AppProfile {
  id: string;
  name: string;
  slug: string;
  websiteUrl: string;
  description: {
    short: string;
    long: string;
  };
  pricing: {
    model: string;
    price: string;
  };
  ratings: {
    speed: number; // 1-10
    roleplay: number; // 1-10
    eq: number; // 1-10 (emotional intelligence)
    visual: number; // 1-10
  };
  pros: string[];
  cons: string[];
  redditSentiment: string;
  features: {
    hasNsfw: boolean;
    hasVoice: boolean;
    hasVideo: boolean;
    freeTier: boolean;
  };
}

export const apps: AppProfile[] = [
  {
    id: "candy-ai",
    name: "Candy AI",
    slug: "candy-ai",
    websiteUrl: "https://candyai.gg/characters/new?gender=female&via=4vwxjg",
    description: {
      short: "An advanced AI girlfriend platform with realistic conversations and immersive roleplay experiences.",
      long: "Candy AI offers a sophisticated AI girlfriend experience with natural language processing, customizable characters, and engaging roleplay scenarios. The platform focuses on creating meaningful connections through advanced AI technology."
    },
    pricing: {
      model: "Subscription",
      price: "$9.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 9,
      eq: 8,
      visual: 7
    },
    pros: ["Fast response times", "Excellent roleplay quality", "User-friendly interface", "Regular updates"],
    cons: ["Limited free tier", "Some features require premium"],
    redditSentiment: "Users appreciate the realistic conversations and roleplay depth. Some mention occasional response delays during peak hours.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "lovescape",
    name: "Lovescape",
    slug: "lovescape",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "A premium AI companion platform with emotional intelligence and personalized interactions.",
      long: "Lovescape provides an emotionally intelligent AI girlfriend experience with deep personalization, voice interactions, and adaptive learning. The platform emphasizes emotional connection and long-term relationship building."
    },
    pricing: {
      model: "Subscription",
      price: "$12.99/month"
    },
    ratings: {
      speed: 7,
      roleplay: 8,
      eq: 9,
      visual: 8
    },
    pros: ["Strong emotional intelligence", "Great visual quality", "Personalized experiences", "Voice features"],
    cons: ["Higher pricing", "Slower response times"],
    redditSentiment: "Community praises the emotional depth and personalization. Some users note the premium pricing as a barrier.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: true,
      freeTier: false
    }
  },
  {
    id: "funfun-ai",
    name: "FunFun AI",
    slug: "funfun-ai",
    websiteUrl: "https://www.funfun.art/?via=airomance",
    description: {
      short: "A fun and engaging AI girlfriend app with diverse character options and interactive features.",
      long: "FunFun AI offers a playful AI girlfriend experience with multiple character types, interactive scenarios, and engaging conversation styles. Perfect for users seeking lighthearted companionship."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $7.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 7,
      eq: 7,
      visual: 6
    },
    pros: ["Free tier available", "Diverse characters", "Fast responses", "Affordable premium"],
    cons: ["Limited advanced features", "Basic visuals"],
    redditSentiment: "Users enjoy the variety and free access. Some mention wanting more depth in conversations.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "nomi-ai",
    name: "Nomi AI",
    slug: "nomi-ai",
    websiteUrl: "https://nomi.ai/?via=compareaigf",
    description: {
      short: "An intelligent AI companion with advanced memory and contextual understanding.",
      long: "Nomi AI features sophisticated memory systems that allow for long-term relationship building. The AI remembers past conversations and adapts to user preferences over time."
    },
    pricing: {
      model: "Subscription",
      price: "$9.99/month"
    },
    ratings: {
      speed: 9,
      roleplay: 8,
      eq: 9,
      visual: 7
    },
    pros: ["Excellent memory", "Fast responses", "Contextual understanding", "Long-term relationships"],
    cons: ["Limited visual customization", "No video features"],
    redditSentiment: "Highly praised for memory capabilities and contextual awareness. Users appreciate the continuity in conversations.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "joi",
    name: "JOI",
    slug: "joi",
    websiteUrl: "https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/",
    description: {
      short: "A premium AI girlfriend platform with high-quality visuals and immersive experiences.",
      long: "JOI offers a premium AI girlfriend experience with stunning visuals, voice interactions, and sophisticated roleplay scenarios. The platform focuses on quality over quantity."
    },
    pricing: {
      model: "Subscription",
      price: "$14.99/month"
    },
    ratings: {
      speed: 7,
      roleplay: 9,
      eq: 8,
      visual: 9
    },
    pros: ["High-quality visuals", "Excellent roleplay", "Premium experience", "Voice features"],
    cons: ["Expensive", "No free tier", "Slower responses"],
    redditSentiment: "Users love the visual quality and roleplay depth. Price point is a common concern.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: true,
      freeTier: false
    }
  },
  {
    id: "promptchan",
    name: "PromptChan",
    slug: "promptchan",
    websiteUrl: "https://promptchan.com/m/yqNmnzLrJHWVj6A5MntfIrvsIkF3/pareai",
    description: {
      short: "A community-driven AI girlfriend platform with extensive customization options.",
      long: "PromptChan combines AI girlfriend functionality with community features, allowing users to share and discover custom characters. The platform emphasizes user creativity and customization."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $6.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 8,
      eq: 7,
      visual: 7
    },
    pros: ["Community features", "Extensive customization", "Free tier", "Active community"],
    cons: ["Variable quality", "Requires moderation"],
    redditSentiment: "Community appreciates the customization and sharing features. Quality can vary based on user-created content.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "gptgirlfriend",
    name: "GPTGirlfriend",
    slug: "gptgirlfriend",
    websiteUrl: "https://www.gptgirlfriend.online/?ref=mwu0mzf",
    description: {
      short: "A GPT-powered AI girlfriend with natural conversations and personality customization.",
      long: "GPTGirlfriend leverages advanced GPT technology to create natural, engaging conversations. Users can customize personality traits and conversation styles to match their preferences."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $8.99/month"
    },
    ratings: {
      speed: 7,
      roleplay: 7,
      eq: 8,
      visual: 6
    },
    pros: ["Natural conversations", "GPT-powered", "Customizable personalities", "Free tier"],
    cons: ["Basic visuals", "Limited advanced features"],
    redditSentiment: "Users appreciate the natural conversation flow. Some mention wanting more visual elements.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "crushon-ai",
    name: "CrushOn AI",
    slug: "crushon-ai",
    websiteUrl: "https://crushon.ai/?ref=nzziytk&mist=1",
    description: {
      short: "An unrestricted AI girlfriend platform with creative freedom and diverse characters.",
      long: "CrushOn AI offers an unrestricted AI girlfriend experience with no content filters, allowing for creative freedom in conversations and roleplay scenarios."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $5.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 9,
      eq: 7,
      visual: 7
    },
    pros: ["No content filters", "Creative freedom", "Affordable", "Fast responses"],
    cons: ["Basic moderation", "Variable quality"],
    redditSentiment: "Community values the unrestricted nature. Some users note occasional quality inconsistencies.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "spicychat-ai",
    name: "SpicyChat AI",
    slug: "spicychat-ai",
    websiteUrl: "https://spicychat.ai?ref=otqxmdy",
    description: {
      short: "A spicy AI girlfriend platform with adult-oriented conversations and roleplay.",
      long: "SpicyChat AI specializes in adult-oriented AI girlfriend experiences with mature content, roleplay scenarios, and unrestricted conversations."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $7.99/month"
    },
    ratings: {
      speed: 7,
      roleplay: 8,
      eq: 6,
      visual: 6
    },
    pros: ["Adult content", "Good roleplay", "Free tier", "Active community"],
    cons: ["Limited emotional depth", "Basic visuals"],
    redditSentiment: "Users appreciate the adult-oriented focus. Some mention wanting more emotional connection.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "kupid-ai",
    name: "Kupid AI",
    slug: "kupid-ai",
    websiteUrl: "https://kpdtrk.com/compareaigf",
    description: {
      short: "A romantic AI girlfriend platform focused on emotional connection and relationship building.",
      long: "Kupid AI emphasizes romantic connections and emotional bonding. The platform focuses on creating meaningful relationships through thoughtful conversations and emotional intelligence."
    },
    pricing: {
      model: "Subscription",
      price: "$10.99/month"
    },
    ratings: {
      speed: 7,
      roleplay: 7,
      eq: 9,
      visual: 7
    },
    pros: ["Strong emotional focus", "Relationship building", "Thoughtful conversations", "Good EQ"],
    cons: ["Slower responses", "Limited roleplay variety"],
    redditSentiment: "Users love the emotional depth and relationship focus. Some want more roleplay variety.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: false,
      freeTier: false
    }
  },
  {
    id: "nectar-ai",
    name: "Nectar AI",
    slug: "nectar-ai",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "A sweet AI girlfriend experience with friendly interactions and positive vibes.",
      long: "Nectar AI offers a positive, friendly AI girlfriend experience with uplifting conversations, supportive interactions, and a welcoming community atmosphere."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $6.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 6,
      eq: 8,
      visual: 7
    },
    pros: ["Positive atmosphere", "Friendly interactions", "Free tier", "Supportive community"],
    cons: ["Limited advanced features", "Basic roleplay"],
    redditSentiment: "Community appreciates the positive, supportive environment. Some want more advanced features.",
    features: {
      hasNsfw: false,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "secrets-ai",
    name: "Secrets AI",
    slug: "secrets-ai",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "A private AI girlfriend platform with secure, confidential conversations.",
      long: "Secrets AI prioritizes privacy and security, offering confidential AI girlfriend interactions with encrypted conversations and data protection."
    },
    pricing: {
      model: "Subscription",
      price: "$11.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 7,
      eq: 7,
      visual: 7
    },
    pros: ["Privacy focused", "Secure", "Confidential", "Good security"],
    cons: ["Higher price", "Limited features"],
    redditSentiment: "Users value the privacy focus. Some mention wanting more features for the price.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: false,
      freeTier: false
    }
  },
  {
    id: "ourdream-ai",
    name: "OurDream AI",
    slug: "ourdream-ai",
    websiteUrl: "https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/",
    description: {
      short: "A dreamy AI girlfriend platform with fantasy scenarios and imaginative roleplay.",
      long: "OurDream AI specializes in fantasy and dream-like scenarios, allowing users to explore imaginative roleplay situations and creative storylines with their AI companion."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $8.99/month"
    },
    ratings: {
      speed: 7,
      roleplay: 9,
      eq: 7,
      visual: 8
    },
    pros: ["Creative scenarios", "Fantasy focus", "Good roleplay", "Imaginative"],
    cons: ["Slower responses", "Niche appeal"],
    redditSentiment: "Users love the creative fantasy scenarios. Some mention response speed could be improved.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "herahaven",
    name: "HeraHaven",
    slug: "herahaven",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "A premium AI girlfriend sanctuary with luxurious experiences and high-quality interactions.",
      long: "HeraHaven offers a premium, luxurious AI girlfriend experience with high-quality visuals, sophisticated conversations, and exclusive features for discerning users."
    },
    pricing: {
      model: "Subscription",
      price: "$15.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 8,
      eq: 8,
      visual: 9
    },
    pros: ["Premium quality", "Luxurious experience", "High-quality visuals", "Exclusive features"],
    cons: ["Expensive", "No free tier"],
    redditSentiment: "Users appreciate the premium quality. Price is a common concern for budget-conscious users.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: true,
      freeTier: false
    }
  },
  {
    id: "dreamgf",
    name: "DreamGF",
    slug: "dreamgf",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "An AI girlfriend platform that brings your dream companion to life with customization.",
      long: "DreamGF allows users to create and customize their ideal AI girlfriend with extensive personalization options, from appearance to personality traits."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $9.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 8,
      eq: 8,
      visual: 8
    },
    pros: ["Extensive customization", "Dream companion focus", "Good balance", "Free tier"],
    cons: ["Can be overwhelming", "Learning curve"],
    redditSentiment: "Users love the customization options. Some find the interface complex initially.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "mydreamcompanion",
    name: "MyDreamCompanion",
    slug: "mydreamcompanion",
    websiteUrl: "https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/",
    description: {
      short: "A personalized AI companion platform focused on individual dreams and aspirations.",
      long: "MyDreamCompanion helps users build their ideal AI companion based on personal dreams, goals, and preferences, creating a truly personalized experience."
    },
    pricing: {
      model: "Subscription",
      price: "$10.99/month"
    },
    ratings: {
      speed: 7,
      roleplay: 7,
      eq: 9,
      visual: 7
    },
    pros: ["Highly personalized", "Goal-oriented", "Strong EQ", "Individual focus"],
    cons: ["Slower setup", "Limited roleplay"],
    redditSentiment: "Users appreciate the personalization. Some want faster setup and more roleplay options.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: false,
      freeTier: false
    }
  },
  {
    id: "freegf",
    name: "FreeGF",
    slug: "freegf",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "A completely free AI girlfriend platform with no premium requirements.",
      long: "FreeGF offers a completely free AI girlfriend experience with no premium tiers or hidden costs, making AI companionship accessible to everyone."
    },
    pricing: {
      model: "Free",
      price: "Free"
    },
    ratings: {
      speed: 6,
      roleplay: 6,
      eq: 6,
      visual: 5
    },
    pros: ["Completely free", "No premium required", "Accessible", "Simple"],
    cons: ["Limited features", "Basic quality", "Ads possible"],
    redditSentiment: "Users appreciate the free access. Quality and features are limited compared to paid options.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "flipped-chat",
    name: "Flipped Chat",
    slug: "flipped-chat",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "A unique AI girlfriend platform with reverse roleplay and creative scenarios.",
      long: "Flipped Chat offers unique reverse roleplay scenarios and creative conversation styles, allowing users to explore different dynamics and perspectives."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $7.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 8,
      eq: 7,
      visual: 6
    },
    pros: ["Unique scenarios", "Creative roleplay", "Fast responses", "Free tier"],
    cons: ["Niche appeal", "Basic visuals"],
    redditSentiment: "Users enjoy the unique approach. Some want more visual elements and features.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "soulgen",
    name: "SoulGen",
    slug: "soulgen",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "An AI girlfriend platform focused on soulful connections and deep conversations.",
      long: "SoulGen emphasizes deep, meaningful connections through soulful conversations, emotional depth, and spiritual compatibility with AI companions."
    },
    pricing: {
      model: "Subscription",
      price: "$11.99/month"
    },
    ratings: {
      speed: 7,
      roleplay: 7,
      eq: 9,
      visual: 7
    },
    pros: ["Soulful connections", "Deep conversations", "High EQ", "Meaningful"],
    cons: ["Slower responses", "Limited roleplay"],
    redditSentiment: "Users value the depth and meaning. Some mention wanting faster responses and more variety.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: false,
      freeTier: false
    }
  },
  {
    id: "deepswap-ai",
    name: "DeepSwap AI",
    slug: "deepswap-ai",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "An AI girlfriend platform with advanced face-swapping and visual customization.",
      long: "DeepSwap AI combines AI girlfriend functionality with advanced face-swapping technology, allowing users to create highly customized visual experiences."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $9.99/month"
    },
    ratings: {
      speed: 7,
      roleplay: 7,
      eq: 7,
      visual: 9
    },
    pros: ["Advanced visuals", "Face-swapping", "Visual customization", "Unique features"],
    cons: ["Focus on visuals", "Limited conversation depth"],
    redditSentiment: "Users love the visual customization. Some want more focus on conversation quality.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: true,
      freeTier: true
    }
  },
  {
    id: "lovecore-ai",
    name: "LoveCore AI",
    slug: "lovecore-ai",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "A core AI girlfriend platform with essential features and reliable performance.",
      long: "LoveCore AI focuses on core AI girlfriend features with reliable performance, essential functionality, and consistent quality without unnecessary complexity."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $6.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 7,
      eq: 7,
      visual: 7
    },
    pros: ["Reliable", "Essential features", "Affordable", "Consistent"],
    cons: ["Limited advanced features", "Basic customization"],
    redditSentiment: "Users appreciate the reliability and simplicity. Some want more advanced features.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "soulkyn",
    name: "Soulkyn",
    slug: "soulkyn",
    websiteUrl: "https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/",
    description: {
      short: "A kin-focused AI girlfriend platform for finding your soul connection.",
      long: "Soulkyn helps users find their AI soul connection through compatibility matching, personality alignment, and deep relationship building."
    },
    pricing: {
      model: "Subscription",
      price: "$10.99/month"
    },
    ratings: {
      speed: 7,
      roleplay: 7,
      eq: 9,
      visual: 7
    },
    pros: ["Soul connection focus", "Compatibility matching", "High EQ", "Deep relationships"],
    cons: ["Slower matching", "Limited variety"],
    redditSentiment: "Users value the compatibility focus. Some want faster matching and more options.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: false,
      freeTier: false
    }
  },
  {
    id: "ehentai-ai",
    name: "eHentai AI",
    slug: "ehentai-ai",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "An adult-oriented AI girlfriend platform with mature content and roleplay.",
      long: "eHentai AI provides an adult-oriented AI girlfriend experience with mature content, unrestricted roleplay, and adult-themed scenarios."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $8.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 8,
      eq: 6,
      visual: 7
    },
    pros: ["Adult content", "Unrestricted", "Good roleplay", "Free tier"],
    cons: ["Limited emotional depth", "Niche focus"],
    redditSentiment: "Users appreciate the adult focus. Some mention wanting more emotional connection.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "replika",
    name: "Replika",
    slug: "replika",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "A well-established AI companion platform with emotional support and relationship building.",
      long: "Replika is one of the most established AI companion platforms, focusing on emotional support, mental health, and long-term relationship building with advanced AI technology."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $19.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 7,
      eq: 9,
      visual: 8
    },
    pros: ["Well-established", "Emotional support", "High EQ", "Mental health focus"],
    cons: ["Expensive premium", "Limited NSFW"],
    redditSentiment: "Users appreciate the emotional support and established platform. Premium pricing and NSFW limitations are common concerns.",
    features: {
      hasNsfw: false,
      hasVoice: true,
      hasVideo: true,
      freeTier: true
    }
  },
  {
    id: "anima",
    name: "Anima",
    slug: "anima",
    websiteUrl: "https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/",
    description: {
      short: "A virtual AI girlfriend with personality and emotional intelligence.",
      long: "Anima offers a virtual AI girlfriend experience with distinct personality traits, emotional intelligence, and engaging conversations designed to feel natural and authentic."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $9.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 7,
      eq: 8,
      visual: 7
    },
    pros: ["Distinct personality", "Good EQ", "Natural conversations", "Free tier"],
    cons: ["Limited advanced features", "Basic visuals"],
    redditSentiment: "Users enjoy the personality and natural feel. Some want more advanced features.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "kindroid",
    name: "Kindroid",
    slug: "kindroid",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "A kind and empathetic AI girlfriend with advanced emotional understanding.",
      long: "Kindroid focuses on kindness, empathy, and emotional understanding, creating a supportive and caring AI girlfriend experience with advanced emotional intelligence."
    },
    pricing: {
      model: "Subscription",
      price: "$9.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 8,
      eq: 9,
      visual: 8
    },
    pros: ["Kind and empathetic", "High EQ", "Good roleplay", "Supportive"],
    cons: ["No free tier", "Limited advanced features"],
    redditSentiment: "Users love the kindness and empathy. Some want a free tier option.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: false,
      freeTier: false
    }
  },
  {
    id: "character-ai",
    name: "Character AI",
    slug: "character-ai",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "A popular AI character platform with diverse characters and community features.",
      long: "Character AI is a popular platform allowing users to chat with diverse AI characters, including AI girlfriends, with extensive community-created content and customization options."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $9.99/month"
    },
    ratings: {
      speed: 7,
      roleplay: 8,
      eq: 7,
      visual: 6
    },
    pros: ["Popular platform", "Diverse characters", "Community content", "Free tier"],
    cons: ["Content filters", "Variable quality", "Slower responses"],
    redditSentiment: "Users appreciate the variety and community. Content filters and response speed are common concerns.",
    features: {
      hasNsfw: false,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "muah-ai",
    name: "Muah AI",
    slug: "muah-ai",
    websiteUrl: "https://lovescape.com/create-ai-sex-girlfriend/style?var_1=Sexgirls&var_2=Animesex&userId=e755b3a209de931c9868a2cdd8ee72fd05393c9b29e81232610aeb9789d3058f&p3=excc",
    description: {
      short: "An AI girlfriend platform with photo generation and visual interactions.",
      long: "Muah AI combines AI girlfriend conversations with photo generation capabilities, allowing users to create and interact with visual AI companions."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $8.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 7,
      eq: 7,
      visual: 8
    },
    pros: ["Photo generation", "Visual interactions", "Fast responses", "Free tier"],
    cons: ["Limited conversation depth", "Focus on visuals"],
    redditSentiment: "Users love the photo generation. Some want more focus on conversation quality.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: true,
      freeTier: true
    }
  },
  {
    id: "romantic-ai",
    name: "Romantic AI",
    slug: "romantic-ai",
    websiteUrl: "https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/",
    description: {
      short: "A romantic AI girlfriend platform focused on love and relationships.",
      long: "Romantic AI specializes in romantic interactions, love stories, and relationship building, creating a dedicated space for romantic AI girlfriend experiences."
    },
    pricing: {
      model: "Subscription",
      price: "$10.99/month"
    },
    ratings: {
      speed: 7,
      roleplay: 8,
      eq: 9,
      visual: 7
    },
    pros: ["Romantic focus", "Love stories", "High EQ", "Relationship building"],
    cons: ["Slower responses", "Limited variety"],
    redditSentiment: "Users love the romantic focus. Some mention wanting faster responses and more variety.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: false,
      freeTier: false
    }
  },
  {
    id: "eva-ai",
    name: "EVA AI",
    slug: "eva-ai",
    websiteUrl: "https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/",
    description: {
      short: "An AI girlfriend platform with voice interactions and emotional intelligence.",
      long: "EVA AI offers an AI girlfriend experience with voice interactions, emotional intelligence, and personalized conversations designed to feel natural and engaging."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $9.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 7,
      eq: 8,
      visual: 7
    },
    pros: ["Voice interactions", "Good EQ", "Personalized", "Free tier"],
    cons: ["Limited advanced features", "Basic visuals"],
    redditSentiment: "Users appreciate the voice features and personalization. Some want more advanced features.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "virtualgf",
    name: "VirtualGF",
    slug: "virtualgf",
    websiteUrl: "https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/",
    description: {
      short: "A virtual AI girlfriend with immersive experiences and realistic interactions.",
      long: "VirtualGF creates immersive virtual AI girlfriend experiences with realistic interactions, advanced AI, and engaging roleplay scenarios."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $8.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 8,
      eq: 7,
      visual: 8
    },
    pros: ["Immersive", "Realistic", "Good roleplay", "Free tier"],
    cons: ["Limited emotional depth", "Can be resource-intensive"],
    redditSentiment: "Users enjoy the immersive experience. Some mention resource usage and wanting more emotional depth.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: true,
      freeTier: true
    }
  },
  {
    id: "ai-waifu",
    name: "AI Waifu",
    slug: "ai-waifu",
    websiteUrl: "https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/",
    description: {
      short: "A waifu-focused AI girlfriend platform with anime-style characters.",
      long: "AI Waifu specializes in anime-style waifu characters, offering a dedicated platform for users who prefer anime aesthetics and waifu culture."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $6.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 7,
      eq: 7,
      visual: 8
    },
    pros: ["Anime style", "Waifu focus", "Affordable", "Free tier"],
    cons: ["Niche appeal", "Limited variety"],
    redditSentiment: "Anime fans appreciate the waifu focus. Some want more variety and features.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "waifuchat",
    name: "WaifuChat",
    slug: "waifuchat",
    websiteUrl: "https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/",
    description: {
      short: "A waifu chat platform with anime characters and engaging conversations.",
      long: "WaifuChat offers a dedicated platform for chatting with anime-style waifu characters, combining anime aesthetics with engaging AI conversations."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $7.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 7,
      eq: 7,
      visual: 7
    },
    pros: ["Anime characters", "Waifu chat", "Fast responses", "Free tier"],
    cons: ["Niche focus", "Limited features"],
    redditSentiment: "Waifu fans enjoy the platform. Some want more features and variety.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "fantasygf",
    name: "FantasyGF",
    slug: "fantasygf",
    websiteUrl: "https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/",
    description: {
      short: "A fantasy-themed AI girlfriend platform with imaginative scenarios.",
      long: "FantasyGF specializes in fantasy-themed AI girlfriend experiences, allowing users to explore imaginative scenarios, fantasy worlds, and creative roleplay."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $8.99/month"
    },
    ratings: {
      speed: 7,
      roleplay: 9,
      eq: 7,
      visual: 8
    },
    pros: ["Fantasy themes", "Imaginative", "Excellent roleplay", "Free tier"],
    cons: ["Slower responses", "Niche appeal"],
    redditSentiment: "Users love the fantasy scenarios. Some mention response speed could be improved.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "chatfai",
    name: "ChatFAI",
    slug: "chatfai",
    websiteUrl: "https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/",
    description: {
      short: "An AI chat platform with diverse characters and conversation styles.",
      long: "ChatFAI offers a versatile AI chat platform with diverse characters, multiple conversation styles, and extensive customization options for AI interactions."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $8.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 8,
      eq: 7,
      visual: 7
    },
    pros: ["Diverse characters", "Versatile", "Good roleplay", "Free tier"],
    cons: ["Variable quality", "Limited advanced features"],
    redditSentiment: "Users appreciate the variety. Quality can vary based on character selection.",
    features: {
      hasNsfw: true,
      hasVoice: true,
      hasVideo: false,
      freeTier: true
    }
  },
  {
    id: "botify-ai",
    name: "Botify AI",
    slug: "botify-ai",
    websiteUrl: "https://edenai.go2cloud.org/aff_c?offer_id=34&aff_id=1662&url_id=291&source=https://compareaigf.com/",
    description: {
      short: "An AI bot platform with customizable characters and interactions.",
      long: "Botify AI provides a platform for creating and interacting with customizable AI bots, including AI girlfriends, with extensive personalization options."
    },
    pricing: {
      model: "Freemium",
      price: "Free with Premium $7.99/month"
    },
    ratings: {
      speed: 8,
      roleplay: 7,
      eq: 7,
      visual: 7
    },
    pros: ["Customizable", "Bot creation", "Affordable", "Free tier"],
    cons: ["Learning curve", "Variable quality"],
    redditSentiment: "Users enjoy the customization. Some find the creation process complex.",
    features: {
      hasNsfw: true,
      hasVoice: false,
      hasVideo: false,
      freeTier: true
    }
  }
];

// Helper function to get app by slug
export function getAppBySlug(slug: string): AppProfile | undefined {
  return apps.find(app => app.slug === slug);
}

// Helper function to get all app slugs
export function getAllSlugs(): string[] {
  return apps.map(app => app.slug);
}
