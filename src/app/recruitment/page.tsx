'use client';

import DivisionCard from '@/components/DivisionCard';
import { ElementsButton } from '@/components/ElementsButton';
import EnhancedAccordionItem from '@/components/EnhancedAccordionItem';
import Navbar from '@/components/Navbar';
import { Accordion } from '@radix-ui/react-accordion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DIVISIONS = [
    
    {
        name: 'VCL',
        description:
            'Manages technical setup, vendor coordination, inventory, and trasportation based on event needs and timelines.',
    },
    {
        name: 'PnF',
        description:
            'Oversees sponsor relations and financial management for the event and ensures effective partnerships, accurate budgeting, and smooth financial operations.',
    },
    {
        name: 'MnD',
        description:
            'Handles content creation, event documentation, and website management to ensure strong digital presence and smooth media operations.',
    },
    {
        name: 'EComm',
        description:
            ' Responsible for coordinating event setups and ensure smooth execution by organizing materials, presentations, and providing support to speakers.',
    },
    {
        name: 'AIS',
        description:
            'Handles audience engagement, feedback, and data analysis, while also supporting internal communication, training, and staff satisfaction.',
    },
];

// const FAQ = [
//     {
//         question: 'Apa itu TEDx Telkom University?',
//         answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
//     },
//     {
//         question: 'Kapan Acara Ini Dilaksanakan?',
//         answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
//     },
//     {
//         question: 'Siapa Saja yang Bisa Mengikuti Acara Ini?',
//         answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
//     },
//     {
//         question: 'Bagaimana Cara Mendaftar?',
//         answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
//     },
//     {
//         question: 'Apa Manfaat Mengikuti Acara Ini?',
//         answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
//     },
// ];

export default function Recuitment() {
    const [expanded, setExpanded] = useState<string | undefined>(undefined);
    const cardWrapperRef = useRef<HTMLDivElement>(null);

    function scrollLeft() {
        if (cardWrapperRef.current) {
            cardWrapperRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    }

    function scrollRight() {
        if (cardWrapperRef.current) {
            cardWrapperRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    }

    return (
        <main className='min-h-screen relative overflow-x-hidden'>
            <nav className='fixed w-full z-50'>
                <Navbar />
            </nav>

            {/* hero */}
            <div className='relative flex flex-col justify-center items-center gap-24 w-full h-screen [background-image:url("../../public/recruitment-bg.png")] bg-cover'>
                <motion.div
                    // initial={{ rotate: 10 }}
                    animate={{
                        y: ['0%', '-20%', '0%'],
                        rotate: ['10deg', '0deg', '10deg'],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: 'easeInOut',
                    }}
                    className='absolute -bottom-10 left-[-25px] z-20'
                >
                    <Image
                        alt='daisy'
                        src={'/recruitment-flower/daisy.svg'}
                        width={191}
                        height={197}
                    />
                </motion.div>
                <Image
                    alt='flower collection'
                    src={'/recruitment-flower/flower-collection.png'}
                    width={116}
                    height={73}
                    className='absolute right-[44%] top-[calc(25%+40px)] m-auto'
                />
                {/* <Image
                    alt='flower small'
                    src={'/recruitment-flower/flower-small.svg'}
                    width={37}
                    height={29}
                    className='absolute top-1/4 left-[10%]'
                /> */}
                <motion.div
                    animate={{ scale: [0.5, 1, 0.9, 1, 0.9, 1, 0.5] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className='absolute top-[-10px] right-[-25px]'
                >
                    <Image
                        alt='marigold'
                        src={'/recruitment-flower/marigold.png'}
                        width={188}
                        height={148}
                        className='rotate-[-120deg]'
                    />
                </motion.div>
                <div className='flex flex-col justify-center items-center gap-2 z-10'>
                    <h1 className='text-5xl font-black text-center'>
                        Yes, you are the next generation
                    </h1>
                    <p className='font-[raleway] text-center text-2xl max-w-[800px]'>
                        Join us to be part of the biggest student organization in Indonesia.
                        <br />
                        We are looking for the best talents to join our team.
                    </p>
                </div>
                <div className='flex gap-8'>
                    <ElementsButton>Join us</ElementsButton>
                    <ElementsButton variant={'gold'}>More info</ElementsButton>
                </div>
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
                <h2 className='text-5xl font-black text-center'>
                    Oprec Timeline
                </h2>
            </div>

            {/* Division */}
            <div className='flex flex-col gap-10 mb-44'>
                <div>
                    <h2 className='text-5xl font-black text-center'>
                        Our Division
                    </h2>
                    <p className='text-center text-xl max-w-[800px] mx-auto'>
                        We are looking for the best talents to join our team. We have 5 divisions
                        that you can choose from.</p>
                </div>
                <div
                    ref={cardWrapperRef}
                    className='flex gap-6 overflow-x-scroll no-scrollbar mt-10 snap-x'
                >
                    {DIVISIONS.map((div, index) => (
                        <DivisionCard
                            key={index}
                            title={div.name}
                            description={div.description}
                            className='snap-center'
                        />
                    ))}
                </div>
                <div
                    className='flex justify-end gap-4 px-8'
                >
                    <ChevronLeft onClick={scrollLeft} />
                    <ChevronRight onClick={scrollRight} />
                </div>
            </div>



            {/* FAQ */}
            {/* <div className='flex flex-col gap-12 px-16 pb-20'>
                <h2 className='text-5xl font-black text-center'>
                    Frequently
                    <br />
                    <span className='italic text-xl font-bold'>Asked</span>{' '}
                    Question
                </h2>
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
            </div> */}
        </main>
    );
}
