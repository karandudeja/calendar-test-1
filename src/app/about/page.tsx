"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full h-screen">
        <div className="w-full lg:w-1/3 lg:mx-auto py-40 font-[family-name:var(--font-geist-sans)]">
          <p className="font-bold text-rose-900 text-3xl">YoLo</p>
          <p className="mt-8 text-rose-950 dark:text-rose-800">You only live once.</p>
          <p className="mt-6 text-rose-950 dark:text-rose-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magni. 
            Sint eos porro laborum obcaecati, repellat aut officia, voluptatum, rem perferendis ab nemo. 
            Maxime tempore fugiat labore, reiciendis ab quos?</p>
          <p className="mt-6 text-rose-950 dark:text-rose-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magni. 
            Sint eos porro laborum obcaecati, repellat aut officia, voluptatum, rem perferendis ab nemo. 
            Maxime tempore fugiat labore, reiciendis ab quos?</p>
          <nav className="mt-12">
            <Link 
              href="/" 
              className="text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-400 hover:text-zinc-700 hover:underline hover:underline-offset-4 transition-colors"
            >
              ← Back to Home
            </Link>
          </nav>
        </div>
    </div>
    
  );
}
