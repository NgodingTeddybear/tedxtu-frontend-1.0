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
        <section className="min-h-screen flex justify-center items-center px-4 md:px-6 lg:px-8">
            <div className="container">
                <h2 className="text-center mb-12">
                    <span className="text-white text-4xl md:text-5xl font-bold block">
                        Frequently
                    </span>
                    <span className="text-white text-4xl md:text-5xl font-bold block">
                        <span className="font-[family-name:var(--font-playfair-display)] italic font-normal">
                            Asked
                        </span>{' '}
                        Question
                    </span>
                </h2>
                <div className="w-full mx-auto">
                    <Accordion type="single" collapsible>
                        {faqData.map((faq, index) => {
                            const isEven = index % 2 === 0;
                            const gradient = isEven
                                ? 'bg-gradient-to-r from-[#951900] to-[#CE2406]'
                                : 'bg-gradient-to-r from-[#2E2E2E] to-[#8E8E8E]';
                            const bgImage = isEven
                                ? '/faq/gold.png'
                                : '/faq/red.png';
                            const textColor = isEven ? 'text-black' : 'text-white';

                            return (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="relative rounded-[30px] sm:rounded-[40px] md:rounded-[48px] lg:rounded-[60px] overflow-hidden mb-6"
                                >
                                    <div
                                        className={`p-[3px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] lg:rounded-[60px] ${gradient}`}
                                    >
                                        <div
                                            className={`rounded-[30px] sm:rounded-[40px] md:rounded-[48px] lg:rounded-[60px] px-6 py-2 lg:px-16 lg:py-6 transition-all duration-200 hover:brightness-110 shadow-[0_4px_13.1px_rgba(0,0,0,0.6)] ${textColor}`}
                                            style={{
                                                backgroundImage: `url(${bgImage})`,
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        >
                                            <AccordionTrigger
                                                className="px-6 py-4 hover:no-underline"
                                                isDark={!isEven}
                                            >
                                                <span className={`text-sm md:text-2xl font-black block ${textColor}`}>
                                                    {faq.question}
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className={`px-6 pb-4 ${textColor}`}>
                                                {faq.answer}
                                            </AccordionContent>
                                        </div>
                                    </div>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}