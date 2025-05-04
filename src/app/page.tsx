import { HeroSection, FaqSection, VisionSection, SpeakersSection, MapSection} from '@/components/landing';


export default function Home() {
    return (
        <div className="min-h-screen bg-[url('/bg-main.png')] bg-cover bg-top bg-no-repeat relative overflow-hidden">
            <div
                className='absolute -right-56 h-[30%] w-[30%] z-10'
                // style={{
                //     backgroundImage: "url('/hero-gold-1.svg')",
                //     backgroundPosition: 'right center',
                //     backgroundRepeat: 'no-repeat',
                //     backgroundSize: 'contain',
                //     top: '55vh',
                // }}
            />

            <HeroSection />
            <VisionSection />
            <FaqSection />
            <MapSection/>
            <SpeakersSection />
            
            
            
        </div>
    );
}
