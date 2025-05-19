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
      className="flex flex-col min-w-[180px] p-2 max-w-xs rounded-md hover:shadow-md hover:bg-white transition-all cursor-pointer"
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
      <p className="font-medium hover:underline">{title}</p>
      <p className="text-sm text-zinc-600 mt-1">{author}</p>
      <p className="font-medium text-sm mt-2 text-zinc-700">{description}</p>
    </a>
  );
};

export default SuggestedBook;