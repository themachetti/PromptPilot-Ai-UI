// Mock API responses and data for PromptPilot AI

export interface ContentPost {
  id: string;
  platform: 'Instagram' | 'TikTok' | 'LinkedIn' | 'Twitter';
  content: string;
  caption: string;
  hashtags: string[];
  status: 'draft' | 'scheduled' | 'published';
  scheduledDate?: Date;
  publishedDate?: Date;
  metrics?: {
    views: number;
    likes: number;
    comments: number;
    shares: number;
    engagement_rate: number;
  };
  aiGenerated: boolean;
  brandVoice: string;
}

export interface BrandVoice {
  id: string;
  name: string;
  tone: 'professional' | 'casual' | 'friendly' | 'authoritative' | 'playful';
  formality: 'very-formal' | 'formal' | 'neutral' | 'informal' | 'very-informal';
  vocabulary: 'simple' | 'moderate' | 'advanced' | 'technical';
  emoji_usage: 'none' | 'minimal' | 'moderate' | 'frequent';
  sample_text: string;
  keywords: string[];
}

export interface AnalyticsData {
  period: string;
  total_followers: number;
  follower_growth: number;
  total_posts: number;
  average_engagement: number;
  top_performing_post: string;
  platform_breakdown: Array<{
    platform: string;
    followers: number;
    engagement_rate: number;
    posts_count: number;
  }>;
}

// Mock data
export const mockPosts: ContentPost[] = [
  {
    id: '1',
    platform: 'Instagram',
    content: '5 AI tools that are revolutionizing content creation',
    caption: '🤖 Ready to 10x your content creation speed? These 5 AI tools are absolute game-changers!\n\n1️⃣ ChatGPT - Your writing co-pilot\n2️⃣ Midjourney - Stunning AI visuals\n3️⃣ Jasper - Marketing copy that converts\n4️⃣ Loom AI - Auto video summaries\n5️⃣ PromptPilot AI - Social media automation\n\nWhich one are you most excited to try? 👇\n\n#AITools #ContentCreation #MarketingTips #SocialMediaAutomation #AIRevolution',
    hashtags: ['#AITools', '#ContentCreation', '#MarketingTips', '#SocialMediaAutomation', '#AIRevolution'],
    status: 'published',
    publishedDate: new Date('2024-01-15T14:00:00Z'),
    metrics: {
      views: 12400,
      likes: 892,
      comments: 43,
      shares: 156,
      engagement_rate: 5.2
    },
    aiGenerated: true,
    brandVoice: 'Tech Enthusiast'
  },
  {
    id: '2',
    platform: 'TikTok',
    content: 'Behind the scenes: How I create viral content using AI',
    caption: 'POV: You discover AI can write your captions, pick your hashtags, AND schedule your posts 🤯 The future is here! #AIContentCreator #TechTips #ContentHacks #AITools #ViralContent',
    hashtags: ['#AIContentCreator', '#TechTips', '#ContentHacks', '#AITools', '#ViralContent'],
    status: 'scheduled',
    scheduledDate: new Date('2024-01-16T15:00:00Z'),
    aiGenerated: true,
    brandVoice: 'Tech Enthusiast'
  },
  {
    id: '3',
    platform: 'LinkedIn',
    content: 'The future of AI in social media marketing: A comprehensive analysis',
    caption: 'The AI revolution in social media marketing is not coming—it\'s already here.\n\nAfter analyzing 500+ marketing campaigns, here are the key insights:\n\n→ 73% of marketers using AI report increased engagement\n→ Content creation time reduced by 60% on average\n→ Personalization at scale is now achievable for SMBs\n\nBut here\'s what most people miss: AI isn\'t replacing creativity—it\'s amplifying it.\n\nThe most successful brands are those that combine AI efficiency with human strategic thinking.\n\nWhat\'s your experience with AI in marketing? Are you seeing similar results?\n\n#AIMarketing #SocialMediaStrategy #MarketingAutomation #DigitalTransformation',
    hashtags: ['#AIMarketing', '#SocialMediaStrategy', '#MarketingAutomation', '#DigitalTransformation'],
    status: 'published',
    publishedDate: new Date('2024-01-14T10:00:00Z'),
    metrics: {
      views: 5200,
      likes: 134,
      comments: 28,
      shares: 67,
      engagement_rate: 3.8
    },
    aiGenerated: true,
    brandVoice: 'Professional Expert'
  }
];

export const mockBrandVoices: BrandVoice[] = [
  {
    id: '1',
    name: 'Tech Enthusiast',
    tone: 'friendly',
    formality: 'informal',
    vocabulary: 'technical',
    emoji_usage: 'moderate',
    sample_text: 'Hey there! 👋 Ready to dive into some cutting-edge AI tools? I\'ve been geeking out over these latest innovations and can\'t wait to share them with you!',
    keywords: ['innovative', 'cutting-edge', 'game-changer', 'revolutionary', 'exciting']
  },
  {
    id: '2', 
    name: 'Professional Expert',
    tone: 'authoritative',
    formality: 'formal',
    vocabulary: 'advanced',
    emoji_usage: 'minimal',
    sample_text: 'Based on extensive industry analysis and empirical data, these findings demonstrate a significant paradigm shift in content marketing strategies.',
    keywords: ['strategic', 'analysis', 'insights', 'optimize', 'methodology']
  },
  {
    id: '3',
    name: 'Casual Creator',
    tone: 'playful',
    formality: 'very-informal',
    vocabulary: 'simple',
    emoji_usage: 'frequent',
    sample_text: 'OMG you guys! 😍 Just discovered this AMAZING tool and I\'m literally obsessed! Can\'t even... 🤯✨',
    keywords: ['amazing', 'obsessed', 'literally', 'vibes', 'mood']
  }
];

export const mockAnalytics: AnalyticsData = {
  period: '30_days',
  total_followers: 12847,
  follower_growth: 8.2,
  total_posts: 23,
  average_engagement: 4.8,
  top_performing_post: 'AI tools that are revolutionizing...',
  platform_breakdown: [
    {
      platform: 'Instagram',
      followers: 8234,
      engagement_rate: 5.2,
      posts_count: 12
    },
    {
      platform: 'TikTok', 
      followers: 3456,
      engagement_rate: 7.1,
      posts_count: 8
    },
    {
      platform: 'LinkedIn',
      followers: 1157,
      engagement_rate: 3.8,
      posts_count: 5
    },
    {
      platform: 'Twitter',
      followers: 2987,
      engagement_rate: 2.9,
      posts_count: 15
    }
  ]
};

// Mock API functions
export const mockApiService = {
  // Content generation
  generateContent: async (prompt: string, platform: string, brandVoice: string): Promise<ContentPost> => {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
    
    return {
      id: Date.now().toString(),
      platform: platform as ContentPost['platform'],
      content: prompt,
      caption: `AI-generated content based on: ${prompt}`,
      hashtags: ['#AIGenerated', '#ContentCreation', '#SocialMedia'],
      status: 'draft',
      aiGenerated: true,
      brandVoice
    };
  },

  // Hashtag suggestions
  suggestHashtags: async (content: string, platform: string): Promise<string[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const suggestions = [
      '#ContentCreation', '#SocialMedia', '#AITools', '#MarketingTips',
      '#DigitalMarketing', '#ContentStrategy', '#SocialMediaTips', '#AIRevolution'
    ];
    
    return suggestions.slice(0, 5);
  },

  // Best posting times
  getBestPostingTimes: async (platform: string): Promise<Array<{time: string, score: number}>> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return [
      { time: '9:00 AM', score: 85 },
      { time: '2:00 PM', score: 92 },
      { time: '7:00 PM', score: 78 },
      { time: '11:00 AM', score: 71 }
    ];
  },

  // Analytics
  fetchAnalytics: async (timeframe: string): Promise<AnalyticsData> => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return mockAnalytics;
  },

  // Brand voice operations
  saveBrandVoice: async (brandVoice: Omit<BrandVoice, 'id'>): Promise<BrandVoice> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      ...brandVoice,
      id: Date.now().toString()
    };
  },

  // Content repurposing
  repurposeContent: async (originalContent: string, targetPlatforms: string[]): Promise<ContentPost[]> => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    return targetPlatforms.map(platform => ({
      id: Date.now().toString() + platform,
      platform: platform as ContentPost['platform'],
      content: originalContent,
      caption: `Repurposed for ${platform}: ${originalContent}`,
      hashtags: ['#Repurposed', '#ContentStrategy', '#SocialMedia'],
      status: 'draft' as const,
      aiGenerated: true,
      brandVoice: 'Tech Enthusiast'
    }));
  }
};