'use client'
import React, { useEffect, useRef } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { motion, useAnimation, useInView } from "framer-motion";

// Decorative elements to float around the section
const decorElements = [
    { src: "/faq/vector-1.png", top: "5%", left: "2%", size: "w-16 h-16" },
    { src: "/faq/vector-2.png", top: "15%", right: "5%", size: "w-20 h-20" },
    { src: "/faq/vector-1.png", bottom: "20%", left: "8%", size: "w-14 h-14" },
    { src: "/faq/vector-2.png", bottom: "20%", right: "5%", size: "w-16 h-16" },
];

const faqData = [
    {
        question: 'Apa itu TEDx Telkom University?',
        answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
    },
    {
        question: 'Kapan Acara Ini Dilaksanakan?',
        answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
    },
    {
        question: 'Siapa Saja yang Bisa Mengikuti Acara Ini?',
        answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
    },
    {
        question: 'Bagaimana Cara Mendaftar?',
        answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
    },
    {
        question: 'Apa Manfaat Mengikuti Acara Ini?',
        answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
    },
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

// Animated section heading
const AnimatedHeading = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);
    
    return (
        <motion.h2 
            ref={ref}
            className="text-center mb-12 relative"
            initial="hidden"
            animate={controls}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.2
                    }
                }
            }}
        >
            <motion.span 
                className="text-white text-4xl md:text-5xl font-bold block"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.5 }
                    }
                }}
            >
                Frequently
            </motion.span>
            <motion.span 
                className="text-white text-4xl md:text-5xl font-bold block"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.5, delay: 0.2 }
                    }
                }}
            >
                <span className="font-[family-name:var(--font-playfair-display)] italic font-normal">
                    Asked
                </span>{' '}
                Question
            </motion.span>
            
            {/* Animated underline */}
            <motion.div
                className="h-1 w-24 bg-gradient-to-r from-[#951900] to-[#CE2406] mx-auto mt-4"
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ delay: 0.8, duration: 0.8 }}
            />
        </motion.h2>
    );
};

// Enhanced FAQ Item component
// Define the FAQ type
interface Faq {
    question: string;
    answer: string;
}

const EnhancedAccordionItem = ({ faq, index, isExpanded, setExpanded }: { faq: Faq; index: number; isExpanded: string | null; setExpanded: React.Dispatch<React.SetStateAction<string | null>> }) => {
    const isEven = index % 2 === 0;
    const gradient = isEven
        ? 'bg-gradient-to-r from-[#951900] to-[#CE2406]'
        : 'bg-gradient-to-r from-[#2E2E2E] to-[#8E8E8E]';
    const bgImage = isEven
        ? '/faq/gold.png'
        : '/faq/red.png';
    const textColor = isEven ? 'text-black' : 'text-white';
    
    const itemRef = useRef(null);
    const isInView = useInView(itemRef, { once: true, amount: 0.3 });
    const controls = useAnimation();
    
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);
    
    return (
        <motion.div
            ref={itemRef}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: "easeOut"
                    }
                }
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <AccordionItem
                value={`item-${index}`}
                className="relative rounded-[30px] sm:rounded-[40px] md:rounded-[48px] lg:rounded-[60px] overflow-hidden mb-6"
            >
                <motion.div
                    className={`p-[3px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] lg:rounded-[60px] ${gradient}`}
                    whileHover={{ 
                        boxShadow: isEven 
                            ? "0 0 15px rgba(255, 193, 7, 0.5)" 
                            : "0 0 15px rgba(220, 53, 69, 0.5)" 
                    }}
                >
                    <motion.div
                        className={`rounded-[30px] sm:rounded-[40px] md:rounded-[48px] lg:rounded-[60px] px-6 py-2 lg:px-16 lg:py-6 transition-all duration-200 shadow-[0_4px_13.1px_rgba(0,0,0,0.6)] ${textColor}`}
                        style={{
                            backgroundImage: `url(${bgImage})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                        animate={{
                            boxShadow: isExpanded === `item-${index}` 
                                ? "0 10px 25px rgba(0, 0, 0, 0.8)" 
                                : "0 4px 13.1px rgba(0, 0, 0, 0.6)"
                        }}
                    >
                        <AccordionTrigger
                            className="px-6 py-4 hover:no-underline group"
                            isDark={!isEven}
                        >
                            <span className={`text-sm md:text-2xl font-black block ${textColor} transition-all duration-300 group-hover:translate-x-2`}>
                                {faq.question}
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className={`px-6 pb-4 ${textColor}`}>
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ 
                                    opacity: isExpanded === `item-${index}` ? 1 : 0,
                                    y: isExpanded === `item-${index}` ? 0 : -10
                                }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                {faq.answer}
                            </motion.div>
                        </AccordionContent>
                    </motion.div>
                </motion.div>
            </AccordionItem>
        </motion.div>
    );
};

export function FaqSection() {
    const containerRef = useRef(null);
    const [expanded, setExpanded] = React.useState<string | undefined>(undefined);
    
    return (
        <motion.section 
            className="min-h-screen flex justify-center items-center px-4 md:px-6 lg:px-8 py-24 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            ref={containerRef}
        >
            {/* Background particles */}
            <div className="absolute inset-0 z-0">
                <motion.div 
                    className="absolute top-0 left-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-white opacity-20"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 10 + 5}px`,
                                height: `${Math.random() * 10 + 5}px`,
                            }}
                            animate={{
                                y: [0, Math.random() * -100 - 50],
                                opacity: [0.2, 0]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 15,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 5
                            }}
                        />
                    ))}
                </motion.div>
            </div>

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

            <div className="container relative z-20">
                {/* Animated heading */}
                <AnimatedHeading />
                
                <div className="w-full mx-auto">
                    <Accordion 
                        type="single" 
                        collapsible
                        value={expanded}
                        onValueChange={setExpanded}
                    >
                        {faqData.map((faq, index) => (
                            <EnhancedAccordionItem 
                                key={index}
                                faq={faq}
                                index={index}
                                isExpanded={expanded}
                                setExpanded={setExpanded}
                            />
                        ))}
                    </Accordion>
                </div>
            </div>
        </motion.section>
    );
}