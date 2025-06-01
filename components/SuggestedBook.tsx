"use client";
import React from 'react';

// Define the props type explicitly
export type SuggestedBookProps = {
  title: string;
  imageURL: string;
  url: string;
  author: string;
  description: string;
  isDesaturated: boolean;
}

const SuggestedBook: React.FC<SuggestedBookProps> = ({
  title,
  imageURL,
  url,
  author,
  description,
  isDesaturated
}) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col min-w-[100px] md:min-w-[140px] md:p-2 rounded-md hover:shadow-md hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300 cursor-pointer"
    >
      <div className="overflow-hidden">
        <img 
          src={imageURL} 
          alt={`Cover of ${title}`} 
          className={`w-full h-auto mb-3 rounded transition-all duration-1000 ease-in-out
            ${isDesaturated ? 'grayscale' : 'grayscale-0'}
          `}
        />
      </div>
      <p className="font-medium duration-300">{title}</p>
      <p className="text-sm text-zinc-600 dark:text-zinc-500 mt-1">{author}</p>
      <p className="font-medium text-sm mt-2 text-zinc-700 dark:text-zinc-400">{description}</p>
    </a>
  );
};

export default SuggestedBook;