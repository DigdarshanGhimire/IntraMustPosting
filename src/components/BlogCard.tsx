import Image from 'next/image';
import Link from 'next/link';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
      <Link href={`/post/${post.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-emerald-500 text-gray-900 text-xs font-medium px-2 py-1 rounded">
            {post.category}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>{post.author}</span>
            <div className="flex items-center">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}