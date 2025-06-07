"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';

// Define the type for your gif objects
type GifLink = {
    creator: string;
    url: string;
    creatorURL: string;
};

const arrGifLinks = [
        {
            creator: "Will Kim",
            url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHhndnN1eWppdTc4cjZ1MzNuMzNmcm1mb2lobGlvMGx0aTd3azhnMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h00IVlxNjPxdu/giphy.gif",
            creatorURL: "https://giphy.com/gifs/willkim-art-film-animation-h00IVlxNjPxdu"
        },
        {
            creator: "Nino Paulito",
            url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTNnMjU3M2toOHB0NnVkMG9sZ3A2dzhxZG52aXJneDFteXFtOXh2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0BKANEFmmlYCWm1q/giphy.gif",
            creatorURL: "https://giphy.com/gifs/nino-paulito-lurk-melissa-choong-xT0BKANEFmmlYCWm1q"
        },
        {
            creator: "Miranda Javid",
            url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjJ0MmQycm0zMjUzZ2Z5bXBmYWNzaXY2NHIzdWozMmNodThmejJuaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kIL1DN9XCtxfxF5mMR/giphy.gif",
            creatorURL: "https://giphy.com/gifs/kIL1DN9XCtxfxF5mMR"
        }
    ];

function InfoAbout() {

    const [randomGif, setRandomGif] = useState<GifLink | null>(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * arrGifLinks.length);
        setRandomGif(arrGifLinks[randomIndex]);
    }, []);

    // Show a placeholder or the first item while loading
    if (!randomGif) {
        return (
            <div className="w-full flex justify-center">
                <div className="flex items-center">
                    <div className="w-16 aspect-square overflow-hidden rounded-full shadow-xl/18 bg-gray-200 animate-pulse">
                        {/* Loading placeholder */}
                    </div>
                    <div className="ml-6 flex flex-col">
                        <p className="lg:text-lg">More on this digital thingy in the <Link href="/about" className="underline underline-offset-4">About</Link> page.</p>
                        <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-2">Loading...</p>
                    </div>
                </div>
            </div>
        );
    }
  
    return (

    <div className="w-full flex justify-center cursor-default">
            <div className="flex items-center">
                <div className="w-12 xl:w-16 h-auto flex-shrink-0 aspect-square overflow-hidden rounded-full shadow-xl/18">
                    <img src={randomGif.url} alt="Random GIF" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="ml-6 flex flex-col min-w-0">
                    <p className="dark:text-zinc-300">More on this digital thingy in the <Link href="/about" className="underline underline-offset-4">About</Link> page.</p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-700 mt-2">Gif from <a href={randomGif.creatorURL} target="_blank">{randomGif.creator}</a></p>
                </div>
        </div>
    </div>
  );
}
export default InfoAbout;