// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { BlogCard } from '@/components/BlogCard';
import { FeaturedPost } from '@/components/FeaturedPost';
import { SearchBar } from '@/components/SearchBar';

export default function Home() {
  // Mock data for blog posts
  const featuredPost = {
    id: '1',
    title: 'The Future of Generative AI in Content Creation',
    excerpt: 'Exploring how generative AI is revolutionizing the way we create and consume digital content across industries.',
    imageUrl: '/api/placeholder/800/450',
    author: 'Alex Chen',
    date: 'April 8, 2025',
    readTime: '8 min read',
    category: 'AI Trends',
  };

  const blogPosts = [
    {
      id: '2',
      title: 'Large Language Models: The Next Generation',
      excerpt: 'A deep dive into how the next wave of LLMs will transform business operations.',
      imageUrl: '/api/placeholder/400/300',
      author: 'Maria Rodriguez',
      date: 'April 5, 2025',
      readTime: '6 min read',
      category: 'Research',
    },
    {
      id: '3',
      title: 'Ethical Considerations in AI Development',
      excerpt: 'Examining the ethical frameworks needed for responsible AI innovation.',
      imageUrl: '/api/placeholder/400/300',
      author: 'James Wilson',
      date: 'April 2, 2025',
      readTime: '7 min read',
      category: 'Ethics',
    },
    {
      id: '4',
      title: 'How to Prompt Engineer Like a Pro',
      excerpt: 'Master the art of prompt engineering with these expert techniques.',
      imageUrl: '/api/placeholder/400/300',
      author: 'Sarah Johnson',
      date: 'March 28, 2025',
      readTime: '5 min read',
      category: 'Tutorials',
    },
    {
      id: '5',
      title: 'AI in Healthcare: 2025 Breakthroughs',
      excerpt: 'Exploring the latest AI applications revolutionizing patient care and diagnosis.',
      imageUrl: '/api/placeholder/400/300',
      author: 'Dr. Michael Lee',
      date: 'March 25, 2025',
      readTime: '9 min read',
      category: 'Healthcare',
    },
  ];

  const trendingPosts = [
    {
      id: '6',
      title: 'Multimodal AI: Beyond Text and Images',
      category: 'Technology',
    },
    {
      id: '7',
      title: 'AI Governance: Global Policies Taking Shape',
      category: 'Policy',
    },
    {
      id: '8',
      title: 'Setting Up Your Own AI Lab: A Beginner Guide',
      category: 'Tutorials',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <Image 
                src="/api/placeholder/32/32" 
                alt="Refinework Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <Link href="/" className="text-xl font-bold text-emerald-400">
              Refinework
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/trending" className="hover:text-emerald-400 transition-colors">
              Trending
            </Link>
            <Link href="/recent" className="hover:text-emerald-400 transition-colors">
              Recent
            </Link>
            <Link href="/topics" className="hover:text-emerald-400 transition-colors">
              Topics
            </Link>
            <Link href="/about" className="hover:text-emerald-400 transition-colors">
              About
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <SearchBar />
            <button className="hidden md:block bg-emerald-500 hover:bg-emerald-600 transition-colors text-gray-900 font-medium px-4 py-2 rounded-lg">
              Subscribe
            </button>
            <button className="md:hidden text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero/Intro Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
        <div className="container mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Navigating the <span className="text-emerald-400">AI Revolution</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Refinework brings you cutting-edge insights, tutorials, and analyses on artificial intelligence, machine learning, and the future of technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-500 hover:bg-emerald-600 transition-colors text-gray-900 font-medium px-6 py-3 rounded-lg">
                  Latest Articles
                </button>
                <button className="bg-transparent border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 transition-colors font-medium px-6 py-3 rounded-lg">
                  Join Newsletter
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-96 w-full">
              <Image 
                src="/api/placeholder/600/500" 
                alt="AI Illustration" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto max-w-screen-xl">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Article</h2>
            <Link href="/featured" className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2">
              View all featured
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <FeaturedPost post={featuredPost} />
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-screen-xl">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Recent Articles</h2>
            <Link href="/recent" className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2">
              View all articles
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending and Categories Section */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Trending Posts */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6">Trending Now</h3>
              <div className="bg-gray-800 rounded-xl p-6">
                <ul className="space-y-6">
                  {trendingPosts.map((post) => (
                    <li key={post.id}>
                      <Link href={`/post/${post.id}`} className="block group">
                        <span className="block text-emerald-400 text-sm mb-1">{post.category}</span>
                        <span className="text-lg font-medium group-hover:text-emerald-300 transition-colors">{post.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Stay Updated</h3>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8">
                <h4 className="text-xl font-semibold mb-2">Join our newsletter</h4>
                <p className="text-gray-300 mb-6">Get the latest AI insights and Refinework updates delivered directly to your inbox.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                  <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 transition-colors text-gray-900 font-medium rounded-lg whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-screen-xl">
          <h2 className="text-3xl font-bold mb-10">Explore Topics</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['AI Research', 'Tutorials', 'Ethics', 'Machine Learning', 'Business', 'Robotics'].map((topic, index) => (
              <Link 
                href={`/topic/${topic.toLowerCase().replace(' ', '-')}`} 
                key={index}
                className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg p-6 text-center"
              >
                <span className="block text-lg font-medium">{topic}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative h-8 w-8">
                  <Image 
                    src="/api/placeholder/32/32" 
                    alt="Refinework Logo" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-emerald-400">Refinework</span>
              </div>
              <p className="text-gray-400 mb-6">
                Illuminating the path forward in artificial intelligence and machine learning.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'linkedin', 'github'].map((social) => (
                  <a key={social} href={`#${social}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {['Home', 'About', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link) => (
                  <li key={link}>
                    <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Categories</h3>
              <ul className="space-y-4">
                {['AI Research', 'Machine Learning', 'Ethics', 'Tutorials', 'Industry News'].map((category) => (
                  <li key={category}>
                    <Link href={`/category/${category.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Stay in the loop with our latest updates and insights.
              </p>
              <form className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <button className="bg-emerald-500 hover:bg-emerald-600 transition-colors text-gray-900 font-medium px-4 py-2 rounded-lg">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Refinework. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}