import { ElementsButton } from '../ElementsButton';
import Navbar from '../Navbar';
import Image from 'next/image';

export function HeroSection() {
    return (
        <main className='min-h-screen flex flex-col'>
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
                        <h1 className='scroll-m-20 font-bold text-4xl md:text-6xl lg:text-8xl relative'>
                            <span className='block'>Tailoring your</span>
                            <div className='relative inline-block'>
                                <span
                                    className={`
                                        font-[family-name:var(--font-playfair-display)] 
                                        italic 
                                        font-medium 
                                        absolute 
                                        top-1/2 
                                        -translate-y-1/2
                                        text-2xl
                                        sm:text-3xl
                                        md:text-4xl
                                        lg:text-5xl
                                        -left-4
                                        sm:left-8
                                        md:-left-4
                                        lg:-left-4
                                        xl:-left-4
                                        -translate-x-full
                                        whitespace-nowrap
                                    `}
                                >
                                    Own
                                </span>
                                <span className='block'>Tapestry</span>
                            </div>
                        </h1>

                        <p className='mt-20 text-xl font-[family-name:var(--font-geist-sans)]'>
                            lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>

                        <div className='mt-8 flex justify-center gap-6'>
                            <ElementsButton variant='red' size='lg'>
                                Discover
                            </ElementsButton>
                            <ElementsButton variant='gold' size='lg'>
                                Detail
                            </ElementsButton>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
