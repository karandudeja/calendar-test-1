"use client";
import React, { useEffect, useState, useRef } from 'react';
import SuggestedBook from "./SuggestedBook";

function SuggestedReading() {
    const [isVisible, setIsVisible] = useState(false);
    const [suggReadCount, setSuggReadCount] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    
    const arrBooks = [
        {
            title: "Make Time",
            imageURL: "https://m.media-amazon.com/images/I/817k-6iydAL._SY522_.jpg",
            url: "https://www.amazon.com/Make-Time-Focus-Matters-Every-ebook/dp/B078QSCM3V",
            author: "Jake Knapp and John Zeratsky",
            description: "How to Focus on What Matters Every Day"
        },
        // {
        //   title: "Tranquility by Tuesday",
        //   imageURL: "https://m.media-amazon.com/images/I/71ZLvI4fr3L._SY522_.jpg",
        //   url: "https://www.amazon.com/Tranquility-Tuesday-Ways-Chaos-Matters-ebook/dp/B09Q7SWZRV",
        //   author: "Laura Vanderkam",
        //   description: "9 Ways to Calm the Chaos and Make Time for What Matters"
        // },
        // {
        //   title: "Four Thousand Weeks",
        //   imageURL: "https://imgs.search.brave.com/PupskoHUuejOQQUwUfSClcKRk4TY0y9yG2aZ5bqC2yk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFSWnZlWFhvZUwu/anBn",
        //   url: "https://www.amazon.com/Four-Thousand-Weeks-Time-How/dp/1847924026",
        //   author: "Oliver Burkeman",
        //   description: "Time Management for Mortals"
        // },
        {
          title: "The One Thing",
          imageURL: "https://m.media-amazon.com/images/I/71yH0kYhRQL._SY522_.jpg",
          url: "https://www.amazon.com/One-Thing-Suprisingly-Extraordinary-Results/dp/1848549601",
          author: "Gary Keller and Jay Papasan",
          description: "The Surprisingly Simple Truth Behind Extraordinary Results"
        },
        // {
        //   title: "Essentialism",
        //   imageURL: "https://m.media-amazon.com/images/I/71x50egx2vL._SY522_.jpg",
        //   url: "https://www.amazon.com/Essentialism-Disciplined-Pursuit-Greg-McKeown/dp/0753555166",
        //   author: "Greg McKeown",
        //   description: "The Disciplined Pursuit of Less"
        // }
    ];

    useEffect(() => {
        const options = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.75 // when 75% of the section is visible
        };

        setSuggReadCount(arrBooks.length);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // if (entry.isIntersecting) {
                //     setIsVisible(true);
                // }
                setIsVisible(entry.isIntersecting);
            });
        }, options);
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    

    return (
        <div className="" ref={sectionRef}>
            <div className="w-full h-0.25 bg-zinc-800 dark:bg-zinc-400"></div>
            <p className="font-semibold mt-8 mb-1 cursor-default">Suggested Reading</p>
            <p className="font-normal text-sm text-zinc-400 dark:text-zinc-600 mb-8 cursor-default">{suggReadCount} books</p>
            <div className="flex gap-12 md:gap-14 lg:gap-16 overflow-x-auto">
                {arrBooks.map((book, index) => (
                    <SuggestedBook
                        key={index}
                        imageURL={book.imageURL}
                        title={book.title}
                        url={book.url}
                        author={book.author}
                        description={book.description}
                        isDesaturated={!isVisible}
                    />
                ))}
            </div>
        </div>
    );
}

export default SuggestedReading;