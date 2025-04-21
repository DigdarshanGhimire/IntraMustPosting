"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

type TOCItem = {
  id: string;
  title: string;
  level: number;
};

export function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h4 className="text-lg font-bold mb-4">Table of Contents</h4>
      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
            <li 
              key={item.id} 
              className={`${item.level > 1 ? 'ml-4' : ''}`}
            >
              <Link
                href={`#${item.id}`}
                className={`block py-1 border-l-2 pl-3 text-sm transition-colors ${
                  activeId === item.id
                    ? 'border-emerald-500 text-emerald-400'
                    : 'border-gray-700 text-gray-400 hover:text-gray-200'
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}