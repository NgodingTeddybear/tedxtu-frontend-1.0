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

            <div
                className='absolute xl:top-0 lg:-top-32 -left-48 lg:h-[28%] lg:w-[28%] xl:h-[25%] xl:w-[25%] z-30'
                style={{
                    backgroundImage: "url('/hero-gold-1.svg')",
                    backgroundPosition: 'left center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                }}
            />
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
                                Picture{' '}
                                <span className='flex items-center font-[family-name:var(--font-playfair-display)] lg:text-5xl italic font-normal'>
                                    <Image
                                        src='/hero-text.svg'
                                        alt='hero text icon'
                                        width={45}
                                        height={45}
                                        quality={100}
                                        className='mx-4 lg:mx-6 inline-block w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px]'
                                    />
                                </span>{' '}
                                your
                            </span>
                            <span className='block'>Best Achievements</span>
                        </h1>

                        <p className='mt-10 text-xl font-[family-name:var(--font-raleway)]'>
                            Lorem Ipsum dolor amet Lorem Ipsum dolor amet
                        </p>

                        <div className='mt-8 flex justify-center gap-6'>
                            <ElementsButton variant='red'>
                                Discover
                            </ElementsButton>
                            <ElementsButton variant='gold'>
                                Detail
                            </ElementsButton>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
