"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function GiveFeedback(){
    
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const imageSrc = mounted && resolvedTheme === 'dark' 
        ? '/like-black.svg'  // Dark mode: black icon on light background
        : '/like-white.svg';

    return (
        <div className="lg:w-1/2">
            <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-black dark:bg-zinc-300 flex items-center justify-center animate-rotate-infinite">
                    <Image
                    src={imageSrc}
                    alt="Feedback Illustration"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain p-2"
                    />
                </div>
                <p className="ml-3 text-2xl font-semibold cursor-default">Give Feedback</p>
            </div>
            <p className="mt-8 dark:text-zinc-300 cursor-default">Your feedback makes stuff better!</p>
            <p className="dark:text-zinc-300 cursor-default">Let me know, how can this thing be improved for you.</p>
            <div className="mt-8">
                <Button>Go to Feedback</Button>
            </div>
        </div>
    );
}

export default GiveFeedback;