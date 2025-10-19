import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "How do I sign up for your electricity services?",
    answer: "Whether you're wondering about our pricing plans, process installation, or sustainability initiatives.",
  },
  {
    question: "What types of electricity plans do you offer?",
    answer: "Whether you're wondering about our pricing plans, process installation, or sustainability initiatives.",
  },
  {
    question: "What are your billing and payment options?",
    answer: "Whether you're wondering about our pricing plans, process installation, or sustainability initiatives.",
  },
  {
    question: "How can I track my energy usage with your services?",
    answer: "Whether you're wondering about our pricing plans, process installation, or sustainability initiatives.",
  },
]

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h5 className="text-primary text-lg font-semibold mb-4">FAQ'S</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Frequently Best Asked Question?</h2>
            <p className="text-muted-foreground mb-8">
              That's why we've compiled a list of frequently asked questions to help make the process as smooth as
              possible for you.
            </p>
            <Button asChild size="lg">
              <Link href="/faq">
                Have Any Questions <span className="ml-2">→</span>
              </Link>
            </Button>
          </div>

          <div>
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
