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
      className="group flex flex-col lg:flex-row flex-shrink-0 w-[110px] md:w-[180px] lg:w-[300px] md:p-2  rounded-md hover:shadow-md hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300 cursor-pointer"
    >
      <div className="overflow-hidden">
        <img 
          src={imageURL} 
          alt={`Cover of ${title}`} 
          className={`w-full h-auto mb-3 lg:mb-0 rounded transition-all duration-1000 ease-in-out
            ${isDesaturated ? 'grayscale' : 'grayscale-0'}
          `}
        />
      </div>
      <div className="lg:px-4">
        <p className="font-semibold dark:text-zinc-200">{title}</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-500 mt-1">{author}</p>
        <p className="font-medium text-sm mt-3 text-zinc-700 dark:text-zinc-300">{description}</p>
      </div>
    </a>
  );
};

export default SuggestedBook;