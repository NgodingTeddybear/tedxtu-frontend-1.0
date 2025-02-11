import { ElementsButton } from "@/components/ElementsButton";
import { FaqSection } from "@/components/faq-section";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/background.png')] bg-cover bg-top bg-no-repeat">
      <Navbar />
      <main className="h-[calc(100vh-20rem)] flex items-center justify-center">
        <div className="container relative">
          <div className="absolute -top-10 inset-0 -z-9 h-[90%] w-[90%] mx-auto">
            <Image
              src="/text-hero-background.png"
              alt="text background vector"
              fill
              className="object-contain "
            />
          </div>
          <div className=" mx-auto text-center">
            <h1 className="scroll-m-20 text-4xl font-bold lg:text-8xl">
              <span>
                Picture{" "}
                <span className="font-[family-name:var(--font-playfair-display)] lg:text-5xl italic font-normal">
                  of
                </span>{" "}
                your
              </span>
              <span className="block">Best Achievements</span>
            </h1>

            <p className="mt-20 text-xl font-[family-name:var(--font-geist-sans)]">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-8 flex justify-center gap-6">
              <ElementsButton variant="red" size="lg">
                Discover
              </ElementsButton>
              <ElementsButton variant="gold" size="lg">
                Detail
              </ElementsButton>
            </div>
          </div>
        </div>
      </main>
      <FaqSection/>
    </div>
  );
}
