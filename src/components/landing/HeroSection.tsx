import Countdown from '../countdown';
import { ElementsButton } from '../ElementsButton';
import Navbar from '../Navbar';
import Image from 'next/image';

export function HeroSection() {
    return (
        <main id='hero' className='min-h-screen flex flex-col'>
            <Countdown />
            <nav className='w-full'>
                <Navbar />
            </nav>
            <div className='flex-1 flex items-center justify-center'>
                <div className='container relative'>
                    <div className='absolute -top-24 md:-top-10 inset-0 -z-9 h-[90%] w-[90%] mx-auto'>
                        <Image
                            src='/text-hero-background.png'
                            alt='text background vector'
                            fill
                            className='object-contain'
                        />
                    </div>
                    <div className='mx-auto text-center'>
                        <h1 className='scroll-m-20 font-bold text-2xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-8xl relative'>
                            <span className='inline-flex items-center'>
                                Tailoring{' '}
                                <span className='flex items-center font-[family-name:var(--font-playfair-display)] lg:text-5xl italic font-normal'>
                                    <Image
                                        src='/flower-ilus.svg'
                                        alt='hero text icon'
                                        width={45}
                                        height={45}
                                        quality={100}
                                        className='mx-4 lg:mx-6 inline-block w-[20px] h-[20px] md:w-[40px] md:h-[60px] lg:w-[120px] lg:h-[120px]'
                                    />
                                </span>{' '}
                                your
                            </span>
                            <span className='inline-flex items-center'>
                                Own{' '}
                                <span className='flex items-center font-[family-name:var(--font-playfair-display)] lg:text-5xl italic font-normal'>
                                    <Image
                                        src='/flower-ilus.svg'
                                        alt='hero text icon'
                                        width={45}
                                        height={45}
                                        quality={100}
                                        className='mx-4 lg:mx-6 inline-block w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[120px] lg:h-[120px]'
                                    />
                                </span>{' '}
                                Tapestry
                            </span>
                        </h1>

                        <p className='mt-30 text-xl font-[family-name:var(--font-raleway)] italic font-bold'>
                            Every thread has a story. What tapestry do you want to weave?
                        </p>

                        <div className='mt-8 flex justify-center gap-6'>
                            <ElementsButton variant='red' className="whitespace-nowrap min-w-[280px]">
                                Get your ticket now
                            </ElementsButton>
                            <ElementsButton variant='gold'>
                                Buy merch
                            </ElementsButton>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
