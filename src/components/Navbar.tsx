'use client';

import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <header className='flex h-20 w-full shrink-0 items-center px-4 md:px-14 md:py-14'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant='outline' size='icon' className='lg:hidden'>
                        <MenuIcon className='h-6 w-6' />
                        <span className='sr-only'>Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side='left'>
                    <Link
                        href='#'
                        className='mr-6 hidden lg:flex'
                        prefetch={false}
                    >
                        <SheetTitle>
                            <Image
                                src='/logo.png'
                                alt='TEDxTelkom University logo'
                                width={172}
                                height={43}
                                quality={100}
                            />
                        </SheetTitle>
                        <span className='sr-only'>TEDxTelkom University</span>
                    </Link>
                    <div className='grid gap-2 py-6'>
                        <button
                            onClick={() => scrollToSection('hero')}
                            className='flex w-full items-center py-2 text-lg font-semibold'
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className='flex w-full items-center py-2 text-lg font-semibold'
                        >
                            About Us
                        </button>
                        <Link
                            href='#'
                            className='flex w-full items-center py-2 text-lg font-semibold'
                            prefetch={false}
                        >
                            Event
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
            <Link href='#' className='mr-6 hidden lg:flex' prefetch={false}>
                <Image
                    src='/logo.png'
                    alt='TEDxTelkom University logo'
                    width={172}
                    height={43}
                    quality={100}
                />
                <span className='sr-only'>TEDxTelkom University</span>
            </Link>
            <nav className='ml-auto hidden lg:flex gap-8'>
                <button
                    onClick={() => scrollToSection('hero')}
                    className='group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-xl font-bold transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:text-gray-50 dark:focus:text-gray-50'
                >
                    Home
                </button>
                <button
                    onClick={() => scrollToSection('about')}
                    className='group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-xl font-bold transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:text-gray-50 dark:focus:text-gray-50'
                >
                    About Us
                </button>
                <Link
                    href='#'
                    className='group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-xl font-bold transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:text-gray-50 dark:focus:text-gray-50'
                    prefetch={false}
                >
                    Event
                </Link>
            </nav>
        </header>
    );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <line x1='4' x2='20' y1='12' y2='12' />
            <line x1='4' x2='20' y1='6' y2='6' />
            <line x1='4' x2='20' y1='18' y2='18' />
        </svg>
    );
}
