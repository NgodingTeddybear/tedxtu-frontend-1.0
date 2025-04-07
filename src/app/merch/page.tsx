import { ElementsButton } from '@/components/ElementsButton';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const merch = [
    {
        name: 'TEDx T-Shirt',
        price: 'Rp50.0000',
    },
    {
        name: 'TEDx T-Shirt',
        price: 'Rp50.0000',
    },
    {
        name: 'TEDx T-Shirt',
        price: 'Rp50.0000',
    },
];

export default function Merch() {
    return (
        <main className='bg-[url(/merch-background.png)] bg-cover bg-no-repeat h-screen'>
            <nav className='w-full'>
                <Navbar />
            </nav>

            <div>
                <h2 className='text-center font-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl relative'>
                    Our MERCHANDISE
                </h2>

                <div className='flex justify-center mt-[70px] gap-[52px]'>
                    {merch.map((merch, index) => {
                        return (
                            <Card
                                className='w-[251px] border-none bg-transparent'
                                key={index}
                            >
                                <CardHeader>
                                    <Image
                                        src={'/dummy-merch.jpg'}
                                        alt='merch'
                                        width={251}
                                        height={232}
                                        className='object-cover rounded-[24px]'
                                    />
                                </CardHeader>
                                <CardContent>
                                    <div className='mb-5'>
                                        <p className='font-bold text-2xl'>
                                            {merch.name}
                                        </p>
                                        <p className='font-bold text-[14px] text-[#D3D1D1]'>
                                            {merch.price}
                                        </p>
                                    </div>
                                    <div className='absolute bg-gradient-to-r from-[#2E2E2E] to-[#8E8E8E] rounded-[32px] p-1'>
                                        <Button className='bg-[url(/buttons/white-theme.png)] bg-center bg-no-repeat w-[205px] h-[47px] text-[#CE1818] font-black text-sm rounded-[32px] py-[14px] shadow-lg'>
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
