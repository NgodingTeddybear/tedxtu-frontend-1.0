import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const faqPanelVariants = {
  red: "bg-[rgba(178,34,34,0.75)] bg-cover text-white border-4 border-transparent bg-clip-padding [border-image:linear-gradient(to_right,#2E2E2E,#8E8E8E)_1]",
  gold: "bg-[linear-gradient(to_left,rgba(144,107,37,0.55),rgba(228,184,104,0.55))] bg-cover text-black border-4 border-transparent bg-clip-padding [border-image:linear-gradient(to_right,#951900,#CE2406)_1]",
} 

const faqData = [
  {
    question: "APA ITU TEDX TELKOM UNIVERSITY?",
    answer:
      "Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet. Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet.",
  },
  {
    question: "KAPAN ACARA INI DILAKSANAKAN?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam.",
  },
  {
    question: "SIAPA SAJA YANG BISA MENGIKUTI ACARA INI?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam.",
  },
  {
    question: "BAGAIMANA CARA MENDAFTAR?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam.",
  },
  {
    question: "APA MANFAAT MENGIKUTI ACARA INI?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam.",
  },
]

export function FaqSection() {
  return (
    <section className="py-20 bg-[]">
      <div className="container px-4">
        <h2 className="text-center mb-12">
          <span className="text-white text-5xl font-bold block">FREQUENTLY</span>
          <span className="text-white text-4xl block mt-2">Asked QUESTION</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={cn(
                  "rounded-lg overflow-hidden transition-all hover:brightness-110",
                  index % 2 === 0 ? faqPanelVariants.gold : faqPanelVariants.red,
                )}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg font-black">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="font-medium">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

