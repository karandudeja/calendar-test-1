"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function BuyCoffee(){

    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const imageSrc = mounted && resolvedTheme === 'dark' 
        ? '/coffee-black.svg'  // Dark mode: black icon on light background
        : '/coffee-white.svg';

    return (
        <div className="lg:w-1/2">
            <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-black dark:bg-zinc-300 flex items-center justify-center">
                    <Image
                    src={imageSrc}
                    alt="Feedback Illustration"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain p-1.75"
                    />
                </div>
                <p className="ml-3 text-2xl font-semibold cursor-default">Support with Love</p>
            </div>
            <p className="mt-8 dark:text-zinc-300 cursor-default">Small contributions, big impact!</p>
            <p className="dark:text-zinc-300 cursor-default">Your support means a lot.</p>
            <div className="mt-8">
                <Button>Buy me a Coffee</Button>
            </div>   
        </div>
    );
}

export default BuyCoffee;