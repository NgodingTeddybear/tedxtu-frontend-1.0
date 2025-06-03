import Image from 'next/image';
import { Card, CardContent } from './ui/card';

type DivisionCardProp = {
    title: string;
    description: string;
};

export default function DivisionCard({ title, description }: DivisionCardProp) {
    return (
        <Card className='relative bg-[#591303] rounded-xl overflow-hidden w-full max-w-[232px] min-w-[232px] mx-auto'>
            <CardContent className='px-[16] py-[32px] relative h-[300px] bg-cover bg-right flex flex-col justify-between [background-image:url("/speakers/vector-1.png")]'>
                <p className='text-2xl font-black'>{title}</p>
                <p className='font-[raleway]'>{description}</p>
            </CardContent>
        </Card>
    );
}
