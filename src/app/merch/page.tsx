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
    return (
        <main className='bg-[url(/merch-background.png)] bg-cover bg-no-repeat min-h-screen pb-10'>
            <Countdown />
            <nav className='w-full'>
                <Navbar />
            </nav>

            <div>
                <h2 className='text-center font-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl relative'>
                    Our MERCHANDISE
                </h2>

                <div className='flex flex-col flex-wrap md:flex-row items-end justify-center mt-[70px] gap-[52px] md:px-14'>
                    {merch.map((merch, index) => {
                        return (
                            <Card
                                className='w-[251px] border-none bg-transparent'
                                key={index}
                            >
                                <CardHeader className='p-0 rounded-2xl'>
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
                                            Get this merch
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
