'use client'
import { useState } from 'react';

export function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="relative">
      {isExpanded ? (
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search articles..."
            className="bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-400 w-64"
            autoFocus
            onBlur={() => setIsExpanded(false)}
          />
          <button 
            className="absolute right-3 text-gray-400"
            onClick={() => setIsExpanded(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ) : (
        <button 
          className="text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsExpanded(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      )}
    </div>
  );
}