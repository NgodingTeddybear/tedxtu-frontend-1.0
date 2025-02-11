import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
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
    <section className="py-20 bg">
      <div className="container px-4">
        <h2 className="text-center mb-12">
          <span className="text-white text-5xl font-bold block">FREQUENTLY</span>
          <span className="text-white text-4xl block mt-2">Asked QUESTION</span> 
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`mb-4 rounded-lg overflow-hidden ${index % 2 === 0 ? "bg-[#D4AF37]" : "bg-[#B22222]"}`}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className={`text-lg font-bold block ${index % 2 === 0 ? "text-black" : "text-white"}`}>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className={`px-6 pb-4 ${index % 2 === 0 ? "text-black" : "text-white"}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

