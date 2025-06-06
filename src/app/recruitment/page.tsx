'use client';

import DivisionCard from '@/components/DivisionCard';
import { ElementsButton } from '@/components/ElementsButton';
import EnhancedAccordionItem from '@/components/EnhancedAccordionItem';
import Navbar from '@/components/Navbar';
import { Accordion } from '@radix-ui/react-accordion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DIVISIONS = [
    {
        name: 'PnO',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta, sem ut suscipit finibus.',
    },
    {
        name: 'VCL',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta, sem ut suscipit finibus.',
    },
    {
        name: 'PnF',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta, sem ut suscipit finibus.',
    },
    {
        name: 'MnD',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta, sem ut suscipit finibus.',
    },
    {
        name: 'EnS',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta, sem ut suscipit finibus.',
    },
    {
        name: 'EComm',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta, sem ut suscipit finibus.',
    },
    {
        name: 'AIS',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta, sem ut suscipit finibus.',
    },
];

const FAQ = [
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

export default function Recuitment() {
    const [expanded, setExpanded] = useState<string | undefined>(undefined);
    const [_, setScrollY] = useState(0);

    const divisionCardWrapperRef = useRef<HTMLDivElement>(null);
    const divisionContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function scrollToDivision() {
        if (divisionContainerRef.current) {
            divisionContainerRef.current.scrollIntoView();
        }
    }

    function scrollLeft() {
        if (divisionCardWrapperRef.current) {
            divisionCardWrapperRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    }

    function scrollRight() {
        if (divisionCardWrapperRef.current) {
            divisionCardWrapperRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    }

    const divisionCardWrapperVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, type: 'spring' },
        },
    };

    const divisonCardVariant = {
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <main className='min-h-screen relative overflow-x-hidden'>
            <nav className='fixed w-full z-50'>
                <Navbar />
            </nav>

            {/* hero */}
            <div className='relative flex flex-col justify-center items-center gap-12 w-full h-screen [background-image:url("../../public/recruitment-bg.png")] bg-cover bg-center'>
                <motion.div
                    animate={{
                        y: ['0%', '-20%', '0%'],
                        rotate: ['10deg', '0deg', '10deg'],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: 'easeInOut',
                    }}
                    className='absolute bottom-0 sm:-bottom-10 left-[-25px] z-20'
                >
                    <Image
                        alt='daisy'
                        src={'/recruitment-flower/daisy.svg'}
                        width={191}
                        height={197}
                        className='w-[98px] h-[95px] sm:w-[197px] sm:h-[191px]'
                    />
                </motion.div>
                <Image
                    alt='flower collection'
                    src={'/recruitment-flower/flower-collection.png'}
                    width={116}
                    height={73}
                    className='absolute right-[44%] top-[calc(25%+40px)] m-auto w-[58px] h-[36px] sm:w-[116px] sm:h-[73px]'
                />
                <Image
                    alt='flower small'
                    src={'/recruitment-flower/flower-small.svg'}
                    width={37}
                    height={29}
                    className='absolute top-1/4 left-[10%] w-[18px] h-[13px] sm:w-[37px] sm:h-[29px]'
                />
                <motion.div
                    animate={{ scale: [0.5, 1, 0.9, 1, 0.9, 1, 0.5] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className='absolute top-[-10px] right-[-25px]'
                >
                    <Image
                        alt='marigold'
                        src={'/recruitment-flower/marigold.png'}
                        width={188}
                        height={148}
                        className='rotate-[-120deg] w-[94px] h-[74px] sm:w-[188px] sm:h-[148px]'
                    />
                </motion.div>
                <div className='flex flex-col justify-center items-center gap-1 z-10 px-10'>
                    <motion.h1
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center'
                    >
                        Yes, you are the
                        <br />
                        next generation
                    </motion.h1>
                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='font-[raleway] text-center text-sm sm:text-xl max-w-[800px] italic'
                    >
                        The path to greatness requires the biggest leap of
                        faith. Are you ready?
                    </motion.p>
                </div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto px-8 sm:px-0'
                >
                    <ElementsButton className='hover:scale-105 transition-transform duration-300 w-full sm:w-auto'>
                        Join us
                    </ElementsButton>
                    <ElementsButton
                        onClick={scrollToDivision}
                        variant={'gold'}
                        className='hover:scale-105 transition-transform duration-300 w-full sm:w-auto'
                    >
                        More info
                    </ElementsButton>
                </motion.div>
            </div>

            {/* Timeline */}
            <div className='relative h-screen mt-24'>
                <Image
                    alt='sewing machine'
                    src={'/sewing-machine.png'}
                    width={923}
                    height={705}
                    className='absolute inset-0 m-auto'
                />
                <motion.h2
                    className='text-2xl sm:text-4xl md:text-5xl font-bold text-center'
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <span className='relative'>
                        Oprec
                        <motion.div
                            className='bg-red-500 w-full h-1 absolute left-0 -bottom-2'
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ delay: 1 }}
                            viewport={{ once: true }}
                        />
                    </span>{' '}
                    Timeline
                </motion.h2>
            </div>

            {/* Division */}
            <div
                ref={divisionContainerRef}
                className='relative flex flex-col gap-10 mb-44 pt-20'
            >
                <div className='absolute inset-0 pointer-events-none'>
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className='absolute w-2 h-2 rounded-full bg-amber-200/30 animate-float'
                            style={{
                                left: `${10 + Math.random() * 80}%`,
                                top: `${10 + Math.random() * 80}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${6 + Math.random() * 10}s`,
                            }}
                        />
                    ))}
                </div>
                <div>
                    <motion.h2
                        className='text-2xl sm:text-4xl md:text-5xl font-bold text-center'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        Our Division
                    </motion.h2>
                    <motion.p
                        className='font-[raleway] text-center text-sm sm:text-xl italic'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.25 }}
                        viewport={{ once: true }}
                    >
                        The backbones of TEDxTelkomUniversity
                    </motion.p>
                </div>
                <motion.div
                    ref={divisionCardWrapperRef}
                    className='flex gap-6 overflow-x-scroll no-scrollbar py-10 px-6 snap-x'
                    variants={divisionCardWrapperVariant}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                >
                    {DIVISIONS.map((div, index) => (
                        <motion.div
                            key={index}
                            variants={divisonCardVariant}
                            whileHover={{ scale: 1.15 }}
                        >
                            <DivisionCard
                                key={index}
                                title={div.name}
                                description={div.description}
                            />
                        </motion.div>
                    ))}
                </motion.div>
                <div className='flex justify-end gap-4 px-8'>
                    <ChevronLeft onClick={scrollLeft} />
                    <ChevronRight onClick={scrollRight} />
                </div>
            </div>

            {/* FAQ */}
            <div className='flex flex-col gap-12 px-16 pb-20'>
                <motion.h2
                    className='text-2xl sm:text-4xl md:text-5xl font-bold text-center'
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    Frequently
                    <br />
                    <span className='italic text-sm font-bold'>Asked</span>{' '}
                    Question
                </motion.h2>
                <Accordion
                    type='single'
                    collapsible
                    value={expanded}
                    onValueChange={setExpanded}
                >
                    {FAQ.map((faq, index) => (
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
        </main>
    );
}
