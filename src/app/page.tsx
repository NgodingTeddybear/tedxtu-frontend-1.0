import { FaqSection } from '@/components/landing/FaqSection';
import { HeroSection } from '@/components/landing/HeroSection';

export default function Home() {
    return (
        <div className="min-h-screen bg-[url('/background.png')] bg-cover bg-top bg-no-repeat">
            <HeroSection />
            <FaqSection />
        </div>
    );
}
