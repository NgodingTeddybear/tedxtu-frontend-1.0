import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
    {
        question: 'Apa itu TEDx Telkom University?',
        answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
    },
    {
        question: 'Kapan Acara Ini Dilaksanakan?',
        answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
    },
    {
        question: 'Siapa Saja yang Bisa Mengikuti Acara Ini?',
        answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
    },
    {
        question: 'Bagaimana Cara Mendaftar?',
        answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
    },
    {
        question: 'Apa Manfaat Mengikuti Acara Ini?',
        answer: 'Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet   Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet     Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet Lorem Ipsum dolor amet    ',
    },
];

export function FaqSection() {
    return (
        <section className='min-h-screen flex justify-center items-center px-4 md:px-6 lg:px-8'>
            <div className='container'>
                <h2 className='text-center mb-12'>
                    <span className='text-white text-4xl md:text-5xl font-bold block'>
                        Frequently
                    </span>
                    <span className='text-white text-4xl md:text-5xl font-bold block'>
                        <span className='font-[family-name:var(--font-playfair-display)] italic font-normal'>
                            Asked
                        </span>{' '}
                        Question
                    </span>
                </h2>
                <div className='w-full mx-auto'>
                    <Accordion type='single' collapsible>
                        {faqData.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className={`
                                    mb-4 
                                    rounded-lg 
                                    px-3
                                    py-1
                                    lg:px-16
                                    lg:py-5
                                    overflow-hidden 
                                    transition-all 
                                    duration-200 
                                    hover:brightness-110
                                    border-4 
                                    border-transparent 
                                    bg-clip-padding
                                    shadow-[0_4px_13.1px_rgba(0,0,0,0.6)]
                                    ${
                                        index % 2 === 0
                                            ? "bg-[url('/faq/gold.png')] bg-cover bg-no-repeat text-black [border-image:linear-gradient(to_right,#951900,#CE2406)_1]"
                                            : "bg-[url('/faq/red.png')] bg-cover text-white [border-image:linear-gradient(to_right,#2E2E2E,#8E8E8E)_1]"
                                    }
                                `}
                            >
                                <AccordionTrigger
                                    className={`px-6 py-4 hover:no-underline`}
                                    isDark={index % 2 !== 0}
                                >
                                    <span
                                        className={`text-sm md:text-2xl font-black block ${
                                            index % 2 === 0
                                                ? 'text-black'
                                                : 'text-white'
                                        }`}
                                    >
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent
                                    className={`px-6 pb-4 ${
                                        index % 2 === 0
                                            ? 'text-black'
                                            : 'text-white'
                                    }`}
                                >
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
