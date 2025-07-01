'use client';

import { useEffect, useRef } from 'react';
import { HeroSection, FaqSection, VisionSection, AboutSection, EventSection } from '@/components/landing';
import Countdown from '@/components/countdown';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './FooterSection';
import Navbar from '../Navbar';
import BackToTopButton from '../BackToTopButton';

export function ClientHomePage() {
    const countdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        const countdownElement = countdownRef.current;

        if (!countdownElement) return;

        gsap.set(countdownElement, {
            yPercent: -100,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            opacity: 0
        });

        ScrollTrigger.create({
            trigger: document.body,
            start: "100px top",
            end: "101px top",
            onEnter: () => {
                gsap.to(countdownElement, {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "elastic.out(0.5, 0.4)"
                });
            },
            onLeaveBack: () => {
                gsap.to(countdownElement, {
                    yPercent: -100,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#000000] bg-cover bg-top bg-no-repeat relative overflow-x-hidden">
            {/* <div
                ref={countdownRef}
                className="bg-[url(/countdown-background.png)] bg-no-repeat bg-cover flex items-center justify-center h-[77px] w-full fixed top-0 left-0 right-0 z-50"
            >
                <Countdown />
            </div> */}

            <div>
                <Navbar />
                <div
                    className='absolute -right-56 h-[30%] w-[30%] z-10'
                />

                <HeroSection />
                <VisionSection />
                <AboutSection />
                <FaqSection />
                <Footer />
                <BackToTopButton />
            </div>
        </div>
    );
}
