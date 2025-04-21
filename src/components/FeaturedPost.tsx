import Image from 'next/image';
import Link from 'next/link';

type FeaturedPost = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export function FeaturedPost({ post }: { post: FeaturedPost }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-800 rounded-xl overflow-hidden">
      <div className="relative h-64 lg:h-full w-full">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-8 flex flex-col justify-center">
        <div className="bg-emerald-500 text-gray-900 text-sm font-medium px-3 py-1 rounded w-fit mb-4">
          {post.category}
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h3>
        <p className="text-gray-300 mb-6">{post.excerpt}</p>
        
        <div className="flex items-center justify-between mb-6">
          <span className="font-medium">{post.author}</span>
          <div className="flex items-center text-sm text-gray-400">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <Link 
          href={`/post/${post.id}`}
          className="bg-transparent border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 transition-colors font-medium px-6 py-3 rounded-lg text-center w-full lg:w-fit"
        >
          Read Article
        </Link>
      </div>
    </article>
  );
}