import Image from 'next/image';
import Link from 'next/link';

type RelatedPostType = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
};

export function RelatedPost({ post }: { post: RelatedPostType }) {
  return (
    <article className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
      <Link href={`/post/${post.id}`}>
        <div className="relative h-40 w-full">
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
        
        <div className="p-5">
          <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}