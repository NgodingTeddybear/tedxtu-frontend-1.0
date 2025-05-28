"use client"
import Link from 'next/link';
import { ElementsButton } from '../ElementsButton';
import Navbar from '../Navbar';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";


// Decorative elements to float around the section
const decorElements = [
    { src: "/hero/v1.png", top: "1%", left: "2%", size: "w-16 h-16" },
    { src: "/hero/v3.png", top: "1%", right: "1%", size: "w-20 h-20" },
    { src: "/hero/v6.png", bottom: "20%", left: "8%", size: "w-14 h-14" },
    { src: "/hero/v7.png", bottom: "20%", right: "5%", size: "w-16 h-16" },
];

// Animated decorative element component
interface FloatingElementProps {
    src: string;
    style: React.CSSProperties;
    size: string;
    delay?: number;
}

const FloatingElement = ({ src, style, size, delay = 0 }: FloatingElementProps) => {
    return (
        <motion.img
            src={src}
            alt="Decorative element"
            className={`absolute ${size} z-10 hidden md:block`}
            style={style}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0],
                rotate: [0, delay % 2 === 0 ? 10 : -10, 0]
            }}
            transition={{
                opacity: { duration: 0.5, delay: delay * 0.2 },
                scale: { duration: 0.5, delay: delay * 0.2 },
                y: { 
                    repeat: Infinity, 
                    duration: 5 + delay, 
                    ease: "easeInOut" 
                },
                rotate: {
                    repeat: Infinity,
                    duration: 7 + delay,
                    ease: "easeInOut"
                }
            }}
        />
    );
};

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    // Handle initial animation on mount and scroll effects
    useEffect(() => {
        setIsVisible(true);
        
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main id='hero' className='min-h-screen flex flex-col overflow-hidden'>
            <nav className='w-full z-10'>
                <Navbar />
            </nav>
            <div className='flex-1 flex items-center justify-center'>
                <div className='container relative'>
                    {/* Animated background */}
                    <div 
                        className={`
                            absolute -top-24 md:-top-10 inset-0 -z-9 h-[90%] w-[90%] mx-auto
                            transition-all duration-1000 ease-in-out
                            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                        `}
                        style={{
                            transform: `translateY(${scrollY * 0.05}px)`,
                        }}
                    >
                        <Image
                            src='/text-hero-background.png'
                            alt='text background vector'
                            fill
                            className='object-contain'
                        />
                    </div>

                    {/* Floating particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                            <div 
                                key={i}
                                className="absolute w-2 h-2 rounded-full bg-amber-200/30 animate-float"
                                style={{
                                    left: `${10 + Math.random() * 80}%`,
                                    top: `${10 + Math.random() * 80}%`,
                                    animationDelay: `${i * 0.5}s`,
                                    animationDuration: `${6 + Math.random() * 10}s`
                                }}
                            />
                        ))}
                    </div>

                    <div className='mx-auto text-center'>
                        {/* Animated heading */}
                        <h1 className={`
                            scroll-m-20 font-bold text-2xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-8xl relative 
                            font-[family-name:var(--font-cinzel-decorative)]
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}>
                            <span className='inline-flex items-center font-[family-name:var(--font-cinzel-decorative)]'>
                                Tailoring{' '}
                                <span className='flex items-center font-[family-name:var(--font-playfair-display)] lg:text-5xl italic font-normal'>
                                    <div className="relative mx-4 lg:mx-6 w-[20px] h-[20px] md:w-[40px] md:h-[60px] lg:w-[120px] lg:h-[120px]">
                                        <Image
                                            src='/flower-ilus.svg'
                                            alt='hero text icon'
                                            width={45}
                                            height={45}
                                            quality={100}
                                            className={`
                                                inline-block w-full h-full 
                                                animate-pulse-slow transition-transform duration-700
                                            `}
                                        />
                                    </div>
                                </span>{' '}
                                your
                            </span>
                            <span className='inline-flex items-center'>
                                Own{' '}
                                <span className='flex items-center font-[family-name:var(--font-playfair-display)] lg:text-5xl italic font-normal'>
                                    <div className="relative mx-4 lg:mx-6 w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[120px] lg:h-[120px]">
                                        <Image
                                            src='/flower-ilus.svg'
                                            alt='hero text icon'
                                            width={45}
                                            height={45}
                                            quality={100}
                                            className={`
                                                inline-block w-full h-full
                                                animate-pulse-slow transition-transform duration-700
                                                animation-delay-500
                                            `}
                                        />
                                    </div>
                                </span>{' '}
                                <span className="relative">
                                    Tapestry
                                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500 transform scale-x-0 origin-left transition-transform duration-1000 delay-1000" 
                                        />
                                </span>
                            </span>
                        </h1>

                          {/* Floating decorative elements */}
            {decorElements.map((elem, index) => (
                <FloatingElement
                    key={index}
                    src={elem.src}
                    style={{
                        top: elem.top || "auto",
                        left: elem.left || "auto",
                        right: elem.right || "auto",
                        bottom: elem.bottom || "auto"
                    }}
                    size={elem.size}
                    delay={index}
                />
            ))} 

             {/* Floating decorative elements */}
             {decorElements.map((elem, index) => (
                <FloatingElement
                    key={index}
                    src={elem.src}
                    style={{
                        top: elem.top || "auto",
                        left: elem.left || "auto",
                        right: elem.right || "auto",
                        bottom: elem.bottom || "auto"
                    }}
                    size={elem.size}
                    delay={index}
                />
            ))}

                        {/* Animated tagline */}
                        <p className={`
                            mt-30 text-xl font-[family-name:var(--font-raleway)] italic font-medium
                            transition-all duration-1000 delay-500 ease-out
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}>
                            Every thread has a story. What tapestry do you want to weave?
                        </p>

                        {/* Animated buttons */}
                        <div className={`
                            mt-8 flex justify-center gap-6
                            transition-all duration-1000 delay-700 ease-out
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}>
                            <ElementsButton 
                                variant='red' 
                                className="whitespace-nowrap min-w-[280px] hover:scale-105 transition-transform duration-300"
                            >
                                Get your ticket now
                            </ElementsButton>
                            <Link href="/merch">
                                <ElementsButton 
                                    variant='gold'
                                    className="hover:scale-105 transition-transform duration-300"
                                >
                                    Buy merch
                                </ElementsButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}