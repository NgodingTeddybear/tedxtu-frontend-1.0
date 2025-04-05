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
        <main>
            <nav className='w-full'>
                <Navbar />
            </nav>

            <div>
                <h2 className='text-center font-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl relative'>
                    Our MERCHANDISE
                </h2>

                <div className='flex justify-center mt-[70px]'>
                    {merch.map((merch, index) => {
                        return (
                            <Card className='w-[251px] border-none' key={index}>
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
                                        <p className='font-bold text-[14px]'>
                                            {merch.price}
                                        </p>
                                    </div>
                                    <Button className='text-[#CE1818] font-black text-sm rounded-[32px] border-2 py-[14px] border-gray-600'>
                                        Get this merch
                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
