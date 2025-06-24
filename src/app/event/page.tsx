'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Link, Play, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Gallery from './Gallery';
import Speakers from './Speakers';
import { ElementsButton } from '@/components/ElementsButton';
import { MapSection, SpeakersSection } from '@/components/landing';

export function EventSection(): React.JSX.Element {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    // Define decorative elements for floating images
    const decorElements = [
        { src: '/hero/v1.png', top: '10%', left: '5%', size: 40 },
        { src: '/hero/v2.png', top: '1%', right: '15%', size: 50 },
        { src: '/hero/v3.png', bottom: '15%', left: '15%', size: 35 },
        { src: '/hero/v4.png', bottom: '10%', right: '20%', size: 45 },
        // Add more elements as needed
    ];
    
    React.useEffect(() => {
        // Set isVisible to true after mount (can be enhanced for scroll/viewport logic)
        setIsVisible(true);
    }, []);

    // FloatingElement component definition
    type FloatingElementProps = {
        src: string;
        style?: React.CSSProperties;
        size?: number;
        delay?: number;
    };

    const FloatingElement: React.FC<FloatingElementProps> = ({ src, style, size = 40, delay = 0 }) => (
        <div
            style={{
                position: 'absolute',
                width: size,
                height: size,
                pointerEvents: 'none',
                zIndex: 1,
                animation: `floatY 6s ease-in-out infinite`,
                animationDelay: `${delay * 0.5}s`,
                ...style,
            }}
        >
            <Image src={src} alt="" width={size} height={size} style={{ width: '100%', height: '100%' }} />
        </div>
    );

    // Video Modal Component
    const VideoModal = () => {
        if (!isVideoModalOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                <div className="relative w-full max-w-4xl mx-4">
                    {/* Close button */}
                    <button
                        onClick={() => setIsVideoModalOpen(false)}
                        className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-200 z-10"
                    >
                        <X size={32} />
                    </button>
                    
                    {/* Video container */}
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        {/* Try Google Drive embed first, fallback to regular video */}
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src="https://drive.google.com/file/d/1Kt8TMQKAM338JNtf6U5W1xFCOmavjXu5/preview"
                            allow="autoplay"
                            allowFullScreen
                            title="TEDxTelkomUniversity 2025 After Movie"
                        />
                        
                        {/* Fallback video element (hidden by default, can be used if iframe fails) */}
                        <video
                            className="absolute top-0 left-0 w-full h-full rounded-lg hidden"
                            controls
                            poster="/videos/after-movie-poster.jpg"
                        >
                            {/* Direct Google Drive download link (may not work reliably) */}
                            <source src="https://drive.google.com/uc?export=download&id=1Kt8TMQKAM338JNtf6U5W1xFCOmavjXu5" type="video/mp4" />
                            
                            {/* Local video fallback */}
                            <source src="/videos/after-movie.mp4" type="video/mp4" />
                            
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    
                    {/* Video title */}
                    <div className="text-center mt-4">
                        <h3 className="text-white text-xl font-semibold">TEDxTelkomUniversity 2025 - After Movie</h3>
                        <p className="text-gray-300 text-sm mt-2">Weaving Ourselves Through "Tailoring Your Own Tapestry"</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <main id='hero' className='bg-black min-h-screen flex flex-col overflow-hidden'>
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
                                transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * 0.05 : 0}px)`,
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
                                scroll-m-20 font-bold text-2xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-7xl relative 
                                font-[family-name:var(--font-cinzel-decorative)]
                                transition-all duration-1000 ease-out
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            `}>
                                <span className='inline-flex items-center font-[family-name:var(--font-cinzel-decorative)]'>
                                    Main {' '}
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
                                    Event
                                </span>
                                <span className='inline-flex items-center'>
                                    TEDxTelkomUniversity{' '}
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
                                        2025
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

                            {/* Animated tagline */}
                            <p className={`
                                mt-30 text-xl font-[family-name:var(--font-raleway)] italic font-medium
                                transition-all duration-1000 delay-500 ease-out
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            `}>
                               Weaving Ourselves Through "Tailoring Your Own Tapestry"
                            </p>

                            {/* Animated buttons */}
                            <div className={`
                                mt-8 flex justify-center gap-6
                                transition-all duration-1000 delay-700 ease-out
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            `}>
                                <ElementsButton 
                                    variant='red' 
                                    className="whitespace-nowrap min-w-[280px] hover:scale-105 transition-transform duration-300 flex items-center gap-2"
                                    onClick={() => setIsVideoModalOpen(true)}
                                >
                                    <Play size={20} />
                                    Watch After Movie
                                </ElementsButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10' />
            </main>

            {/* Video Modal */}
            <VideoModal />
            <MapSection/>
            <SpeakersSection/>
            <Speakers />
            <Gallery />
        </>
    );
}

export default EventSection;