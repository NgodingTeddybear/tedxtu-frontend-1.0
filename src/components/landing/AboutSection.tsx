'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { MinusCircle, PlusCircle } from 'lucide-react';
import { useState } from 'react';

const departments = [
    {
        id: 2,
        name: 'PnO',
        description:
            'Partnership and Operations TEDx is responsible for managing partnerships, coordinating event logistics, handling budgets, and ensuring a seamless experience for partners and participants.',
    },
    {
        id: 3,
        name: 'Event',
        description:
            'Partnership and Operations TEDx is responsible for managing partnerships, coordinating event logistics, handling budgets, and ensuring a seamless experience for partners and participants.',
    },
    {
        id: 4,
        name: 'VcL',
        description:
            'Partnership and Operations TEDx is responsible for managing partnerships, coordinating event logistics, handling budgets, and ensuring a seamless experience for partners and participants.',
    },
    {
        id: 5,
        name: 'EnS',
        description:
            'Partnership and Operations TEDx is responsible for managing partnerships, coordinating event logistics, handling budgets, and ensuring a seamless experience for partners and participants.',
    },
    {
        id: 6,
        name: 'PnF',
        description:
            'Partnership and Operations TEDx is responsible for managing partnerships, coordinating event logistics, handling budgets, and ensuring a seamless experience for partners and participants.',
    },
    {
        id: 7,
        name: 'EComm',
        description:
            'Partnership and Operations TEDx is responsible for managing partnerships, coordinating event logistics, handling budgets, and ensuring a seamless experience for partners and participants.',
    },
    {
        id: 8,
        name: 'MnD',
        description:
            'Partnership and Operations TEDx is responsible for managing partnerships, coordinating event logistics, handling budgets, and ensuring a seamless experience for partners and participants.',
    },
    {
        id: 9,
        name: 'AiS',
        description:
            'Partnership and Operations TEDx is responsible for managing partnerships, coordinating event logistics, handling budgets, and ensuring a seamless experience for partners and participants.',
    },
];

export function AboutSection() {
    const [openItem, setOpenItem] = useState<string | null>(null);

    return (
        <section
            id='about'
            className='min-h-screen flex flex-col justify-center items-center px-4 md:px-6 lg:px-8 mb-24'
        >
            <div className='container flex flex-col items-center'>
                <div className='relative'>
                    <h2 className='inline-flex items-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl relative'>
                        About Us
                    </h2>
                    <p className='absolute font-[family-name:var(--font-raleway)] bg-white px-3 text-red-800 font-bold text-2xl -rotate-3 -right-14'>
                        Peopleweared
                    </p>
                </div>
                <div className='flex space-y-5 w-full mt-14'>
                    <Accordion
                        type='single'
                        collapsible
                        className='w-full'
                        onValueChange={(value) => setOpenItem(value)}
                    >
                        <AccordionItem
                            value='Licensee'
                            className={`
                              px-8
                              py-3
                              lg:px-12
                              lg:py-7
                              mb-4 
                              rounded-lg 
                              overflow-hidden 
                              transition-all 
                              duration-200 
                              hover:brightness-110
                              border-4 
                              border-transparent
                              [border-image:linear-gradient(to_right,#951900,#CE2406)_1]
                              data-[state=open]:[border-image:linear-gradient(to_right,#2E2E2E,#8E8E8E)_1]
                              shadow-[0_4px_13.1px_rgba(0,0,0,0.6)]
                              bg-cover
                              bg-left-bottom
                              bg-[url('/accordion/black-theme.png')]
                              data-[state=open]:bg-[url('/accordion/red-theme.png')]
                          `}
                        >
                            <AccordionTrigger className='p-0 hover:no-underline text-lg md:text-3xl lg:text-4xl font-bold'>
                                licensee{' '}
                            </AccordionTrigger>
                            <AccordionContent className='pt-6'>
                                Licensee is responsible for obtaining and
                                maintaining the TEDx licensee, leading event
                                planning, managing the team, curating speakers,
                                ensuring content quality, and fostering a
                                lasting community. All while complying with TED
                                guidelines to deliver an impactful experience.
                            </AccordionContent>
                        </AccordionItem>
                        <span className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {departments.map((d) => {
                                return (
                                    <AccordionItem
                                        key={d.name}
                                        value={d.name}
                                        className={`
                              rounded-lg 
                              px-8
                              py-3
                              lg:px-12
                              lg:py-7
                              overflow-hidden 
                              transition-all 
                              duration-200 
                              hover:brightness-110
                              border-4 
                              border-transparent
                              [border-image:linear-gradient(to_right,#951900,#CE2406)_1]
                              data-[state=open]:[border-image:linear-gradient(to_right,#2E2E2E,#8E8E8E)_1]
                              
                              bg-cover
                              bg-left-bottom
                              bg-[url('/accordion/black-theme.png')]
                              data-[state=open]:bg-[url('/accordion/red-theme.png')]
                          `}
                                    >
                                        <AccordionTrigger className='hover:no-underline p-0 text-lg md:text-3xl lg:text-4xl font-bold'>
                                            {d.name}{' '}
                                        </AccordionTrigger>
                                        <AccordionContent className='py-6'>
                                            {d.description}
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            })}
                        </span>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
