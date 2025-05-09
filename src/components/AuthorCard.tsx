import Image from "next/image";

type Author = {
  name: string;
  bio: string;
  avatar: string;
  role: string;
  twitter: string;
};

export function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 flex flex-col sm:flex-row gap-6">
      <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden mx-auto sm:mx-0">
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <h4 className="text-xl font-bold mb-2">{author.name}</h4>
        <p className="text-emerald-400 mb-4">{author.role}</p>
        <p className="text-gray-300 mb-4">{author.bio}</p>

        <a
          href={`https://twitter.com/${author.twitter.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
          Follow on Twitter
        </a>
      </div>
    </div>
  );
}
