
"use client"
export function ShareButtons({ url, title }: { url: string; title: string }) {
    const shareData = [
      {
        name: 'Twitter',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        ),
        color: 'bg-blue-500 hover:bg-blue-600',
      },
      {
        name: 'Facebook',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        ),
        color: 'bg-blue-600 hover:bg-blue-700',
      },
      {
        name: 'LinkedIn',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        ),
        color: 'bg-blue-700 hover:bg-blue-800',
      },
      {
        name: 'Copy Link',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
        color: 'bg-gray-700 hover:bg-gray-600',
      },
    ];
  
    const handleShare = (name: string) => {
      if (name === 'Copy Link') {
        navigator.clipboard.writeText(url);
        // You would typically show a toast notification here
      } else {
        // Open share dialogs (simplified for example)
        window.open(
          name === 'Twitter'
            ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
            : name === 'Facebook'
            ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
            : `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
          '_blank'
        );
      }
    };
  
    return (
      <div className="flex flex-wrap gap-2">
        {shareData.map((item) => (
          <button
            key={item.name}
            onClick={() => handleShare(item.name)}
            className={`${item.color} text-white p-2 rounded-full transition-colors`}
            aria-label={`Share on ${item.name}`}
          >
            {item.icon}
          </button>
        ))}
      </div>
    );
  }