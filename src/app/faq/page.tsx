import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is STGMA's mission?",
    answer: "Our mission is to rewrite the stigma around mental health through fashion, culture, and connection. We believe clothing can be a quiet statement and a powerful catalyst for conversation.",
  },
  {
    question: "How does my purchase make an impact?",
    answer: "A portion of every purchase supports our mission and helps fund mental health initiatives and resources, providing tangible support to those in need.",
  },
  {
    question: "What are your shipping and return policies?",
    answer: "We offer standard shipping on all orders. You can find detailed information about shipping times and costs at checkout. For returns, please visit our returns portal within 30 days of purchase.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach out to us via the contact methods listed on our 'About' page. We aim to respond to all inquiries within 24-48 hours.",
  },
];


export default function FaqPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary md:text-6xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-foreground/80">
          Have questions? We're here to help.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-bold text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
