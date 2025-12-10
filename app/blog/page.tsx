import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Girlfriend Apps Blog | Guides, Tips & Reviews",
  description: "Learn about AI girlfriend apps, how they work, safety tips, and more. Comprehensive guides and articles.",
};

const blogPosts = [
  {
    slug: "ai-girlfriend-apps-without-signup",
    title: "AI Girlfriend Apps Without Signup: Instant Access Guide",
    excerpt: "Discover AI girlfriend apps you can use immediately without creating an account. Quick access, no registration required.",
    date: "2025-01-15"
  },
  {
    slug: "best-nsfw-ai-chat-alternatives",
    title: "Best NSFW AI Chat Alternatives: Complete Guide",
    excerpt: "Explore the best NSFW AI chat platforms with adult content. Compare features, pricing, and find your perfect match.",
    date: "2025-01-10"
  },
  {
    slug: "are-ai-girlfriend-apps-safe",
    title: "Are AI Girlfriend Apps Safe? Privacy & Security Guide",
    excerpt: "Learn about safety, privacy, and security when using AI girlfriend apps. What you need to know before signing up.",
    date: "2025-01-05"
  },
  {
    slug: "how-ai-companion-apps-work",
    title: "How AI Companion Apps Work: Technical Deep Dive",
    excerpt: "Understanding the technology behind AI companion apps. How they learn, remember, and create realistic conversations.",
    date: "2024-12-28"
  },
  {
    slug: "how-to-choose-ai-girlfriend-app",
    title: "How to Choose an AI Girlfriend App: Complete Guide",
    excerpt: "Step-by-step guide to choosing the perfect AI girlfriend app for your needs. Features to consider and questions to ask.",
    date: "2024-12-20"
  },
  {
    slug: "ai-roleplay-prompts-list",
    title: "AI Roleplay Prompts List: Best Conversation Starters",
    excerpt: "Collection of the best AI roleplay prompts to enhance your conversations. Creative scenarios and conversation starters.",
    date: "2024-12-15"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-4">AI Girlfriend Apps Blog</h1>
      <p className="text-gray-400 mb-12">Guides, tips, reviews, and everything you need to know about AI girlfriend apps.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-pink-500 transition"
          >
            <div className="text-sm text-gray-400 mb-2">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
            <p className="text-gray-300 text-sm">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
