import { ElementsCard } from '../ElementsCard';

export function VisionSection() {
    return (
        <section
            id='about'
            className='flex flex-col justify-center items-center px-4 md:px-6 lg:px-8'
        >
            <div className='container flex flex-col items-center'>
                <h2 className='inline-flex items-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl relative'>
                    Vision
                    <span className='flex items-center font-[family-name:var(--font-playfair-display)] lg:text-3xl italic font-normal mx-4 lg:mx-4 inline-block'>
                        And
                    </span>
                    Mission
                </h2>
                <div className='flex flex-col space-y-5 w-full mt-14'>
                    <ElementsCard
                        variant='red'
                        title='Vision'
                        content='With a 5-year vision, we aim to create a platform for impactful discussions, inspire innovative solutions, and enhance the quality of potential students through the making of the right environment ourselves.'
                    />

                    <ElementsCard
                        variant='black'
                        title='Mission'
                        content="To build a sustainable legacy by leveraging Telkom's potential resources, fostering collaboration across disciplines, and addressing relevant local issues to shape an ideal society."
                    />
                </div>
            </div>
        </section>
    );
}
