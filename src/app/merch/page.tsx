'use client';

import { useEffect, useRef } from 'react';
import Countdown from '@/components/countdown';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const merch = [
    {
        name: 'T-Shirt',
        price: 'Rp75.000',
        img: '/merch/tshirt.png'
    },
    {
        name: 'Baseball Cap',
        price: 'Rp62.000',
        img: '/merch/baseballCap.png'
    },
    {
        name: 'Acrylic Keychain',
        price: 'Rp15.000',
        img: '/merch/keychain.png'
    },
    {
        name: 'Sticker Sheet',
        price: 'Rp9.000',
        img: '/merch/stickerPack.png'
    },
    {
        name: 'Hand Fan',
        price: 'Rp8.000',
        img: '/merch/handfan.png'
    },
    {
        name: 'Fabric Kit',
        price: 'Rp22.000',
        img: '/merch/fabricKit.png'
    },
    {
        name: 'Bobbin\'s Kit',
        price: 'Rp78.000',
        img: '/merch/bobbinsKit.png'
    },
    {
        name: 'Stitches Kit',
        price: 'Rp82.000',
        img: '/merch/stitchesKit.png'
    },
    {
        name: 'Tapestry Kit',
        price: 'Rp144.000',
        img: '/merch/tapestryKit.png'
    },
];

export default function Merch() {
    const countdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const countdownElement = countdownRef.current;
        if (!countdownElement) return;

        const handleScroll = () => {
            const scrollThreshold = 100;

            if (window.scrollY > scrollThreshold) {
                countdownElement.style.position = 'fixed';
                countdownElement.style.top = '0';
                countdownElement.style.left = '0';
                countdownElement.style.right = '0';
                countdownElement.style.zIndex = '50';
                countdownElement.style.opacity = '1';
            } else {
                countdownElement.style.position = 'relative';
                countdownElement.style.opacity = '1';
            }
        };

        // Set initial state (hidden)
        countdownElement.style.position = 'relative';

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className='bg-[url(/merch-background.png)] bg-cover min-h-screen pb-10'>
            <div
                ref={countdownRef}
                className='bg-[url(/countdown-background.png)] bg-no-repeat bg-cover flex items-center justify-center h-[77px] w-full transition-all duration-300'
            >
                <Countdown />
            </div>

            <nav className='w-full'>
                <Navbar />
            </nav>

            <div>
                <h2 className='text-center font-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl relative'>
                    Our MERCHANDISE
                </h2>

                <div className='flex flex-col flex-wrap md:flex-row items-center md:items-stretch justify-center mt-[70px] gap-[52px] md:px-14'>
                    {merch.map((merch, index) => {
                        return (
                            <Card
                                className='w-[251px] border-none bg-transparent flex flex-col justify-between'
                                key={index}
                            >
                                <CardHeader className='p-0 rounded-2xl bg-white'>
                                    <Image
                                        src={merch.img}
                                        alt={merch.name}
                                        width={251}
                                        height={232}
                                        className='object-contain rounded-[24px] h-[232px]'
                                    />
                                </CardHeader>
                                <CardContent className='p-0 mt-[30px]'>
                                    <div className='mb-5'>
                                        <p className='font-bold text-2xl'>
                                            {merch.name}
                                        </p>
                                        <p className='font-bold text-[14px] text-[#D3D1D1]'>
                                            {merch.price}
                                        </p>
                                    </div>
                                    <div className='inline-flex justify-center bg-gradient-to-r from-[#2E2E2E] to-[#8E8E8E] rounded-[32px] p-1 shadow-lg'>
                                        <Button className='bg-[url(/buttons/white-theme.png)] w-[205px] h-[47px] bg-center bg-no-repeat text-[#CE1818] font-black text-sm rounded-[32px] py-[14px]'>
                                            <a href="https://www.instagram.com/p/DITpgTwzoO-/?img_index=1" target='_blank'>Get this merch</a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
