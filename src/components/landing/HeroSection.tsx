"use client"
import Link from 'next/link';
import { ElementsButton } from '../ElementsButton';
import Navbar from '../Navbar';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";

// Types
interface DecorElement {
    src: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    size: {
        base: string;
        md: string;
        lg: string;
    };
}

interface FloatingElementProps {
    src: string;
    style: React.CSSProperties;
    size: {
        base: string;
        md: string;
        lg: string;
    };
    delay?: number;
}

// Decorative elements with responsive sizes
const decorElements: DecorElement[] = [
    {
        src: "/hero/v1.png",
        top: "5%",
        left: "2%",
        size: {
            base: "w-8 h-8",
            md: "w-12 h-12",
            lg: "w-16 h-16"
        }
    },
    {
        src: "/hero/v3.png",
        top: "5%",
        right: "2%",
        size: {
            base: "w-10 h-10",
            md: "w-16 h-16",
            lg: "w-20 h-20"
        }
    },
    {
        src: "/hero/v6.png",
        bottom: "25%",
        left: "3%",
        size: {
            base: "w-8 h-8",
            md: "w-10 h-10",
            lg: "w-14 h-14"
        }
    },
    {
        src: "/hero/v7.png",
        bottom: "25%",
        right: "3%",
        size: {
            base: "w-8 h-8",
            md: "w-12 h-12",
            lg: "w-16 h-16"
        }
    },
];

// Animated decorative element component
const FloatingElement: React.FC<FloatingElementProps> = ({ src, style, size, delay = 0 }) => {
    const [windowWidth, setWindowWidth] = useState<number>(768);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Set initial width
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determine which size class to use based on window width
    const getSizeClass = (): string => {
        if (windowWidth >= 1024) return size.lg;
        if (windowWidth >= 768) return size.md;
        return size.base;
    };

    return (
        <motion.img
            src={src}
            alt="Decorative element"
            className={`absolute ${getSizeClass()} z-10 hidden sm:block`}
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
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [scrollY, setScrollY] = useState<number>(0);

    // Handle initial animation on mount and scroll effects
    useEffect(() => {
        setIsVisible(true);
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main id='hero' className='min-h-screen flex flex-col overflow-hidden pt-20'>
            <div className='flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
                <div className='container relative max-w-7xl'>
                    {/* Animated background */}
                    <div
                        className={`
                            absolute inset-0 -z-9 h-[70%] w-[70%] sm:h-[80%] sm:w-[80%] md:h-[85%] md:w-[85%] lg:h-[90%] lg:w-[90%] mx-auto
                            transition-all duration-1000 ease-in-out
                            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                        `}
                        style={{
                            transform: `translateY(${scrollY * 0.05}px)`,
                            top: '-5%',
                        }}
                    >
                        <Image
                            src='/text-hero-background.png'
                            alt='text background vector'
                            fill
                            className='object-contain'
                            priority
                        />
                    </div>

                    {/* Floating particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-amber-200/30 animate-float"
                                style={{
                                    left: `${10 + Math.random() * 80}%`,
                                    top: `${10 + Math.random() * 80}%`,
                                    animationDelay: `${i * 0.5}s`,
                                    animationDuration: `${6 + Math.random() * 10}s`
                                }}
                            />
                        ))}
                    </div>

                    <div className='mx-auto text-center relative z-10'>
                        {/* Animated heading */}
                        <h1 className={`
                            scroll-m-20 font-bold text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl relative 
                            font-[family-name:var(--font-cinzel-decorative)]
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}>
                            <span className='inline-flex items-center font-[family-name:var(--font-cinzel-decorative)] flex-wrap justify-center'>
                                <span className='whitespace-nowrap'>Tailoring</span>
                                <span className='flex items-center font-[family-name:var(--font-playfair-display)] text-sm sm:text-base md:text-2xl lg:text-4xl xl:text-5xl italic font-normal'>
                                    <div className="relative mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-6 w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] md:w-[40px] md:h-[40px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px] 2xl:w-[120px] 2xl:h-[120px]">
                                        <Image
                                            src='/flower-ilus.svg'
                                            alt='hero text icon'
                                            width={120}
                                            height={120}
                                            quality={100}
                                            className={`
                                                inline-block w-full h-full 
                                                animate-pulse-slow transition-transform duration-700
                                            `}
                                        />
                                    </div>
                                </span>
                                <span className='whitespace-nowrap'>your</span>
                            </span>
                            <br className="sm:hidden" />
                            <span className='inline-flex items-center flex-wrap justify-center mt-2 sm:mt-0'>
                                <span className='whitespace-nowrap'>Own</span>
                                <span className='flex items-center font-[family-name:var(--font-playfair-display)] text-sm sm:text-base md:text-2xl lg:text-4xl xl:text-5xl italic font-normal'>
                                    <div className="relative mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-6 w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] md:w-[40px] md:h-[40px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px] 2xl:w-[120px] 2xl:h-[120px]">
                                        <Image
                                            src='/flower-ilus.svg'
                                            alt='hero text icon'
                                            width={120}
                                            height={120}
                                            quality={100}
                                            className={`
                                                inline-block w-full h-full
                                                animate-pulse-slow transition-transform duration-700
                                                animation-delay-500
                                            `}
                                        />
                                    </div>
                                </span>
                                <span className="relative whitespace-nowrap">
                                    Tapestry
                                    <span
                                        className={`
                                            absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-amber-500 
                                            origin-left transition-transform duration-1000 delay-1000
                                            ${isVisible ? 'scale-x-100' : 'scale-x-0'}
                                        `}
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

                        {/* Animated tagline */}
                        <p className={`
                            mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                            font-[family-name:var(--font-raleway)] italic font-medium
                            transition-all duration-1000 delay-500 ease-out px-4 sm:px-8 md:px-16 lg:px-0
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}>
                            Every thread has a story. What tapestry do you want to weave?
                        </p>

                        {/* Animated buttons */}
                        <div className={`
                            mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 sm:px-0
                            transition-all duration-1000 delay-700 ease-out
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}>
                            <Link href="https://www.instagram.com/tedxtelkomuniversity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                <ElementsButton
                                    variant='red'
                                    className="w-full sm:w-auto whitespace-nowrap min-w-full sm:min-w-[250px] md:min-w-[280px] hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
                                >
                                    Follow us on Instagram
                                </ElementsButton>
                            </Link>
                            <Link href="/recruitment">
                                <ElementsButton
                                    variant='gold'
                                    className="w-full sm:w-auto hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
                                >
                                    Join our team
                                </ElementsButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
