import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How do I book a consultation with a lawyer?",
    answer: "Simply click on 'Get Legal Help' or 'Book Now' on any service. Choose your preferred time slot, make the payment, and you'll receive a confirmation with video call details."
  },
  {
    question: "Are the lawyers on iVakil verified?",
    answer: "Yes, all lawyers on our platform are verified professionals with valid bar council registration. We thoroughly vet each lawyer's credentials, experience, and expertise before onboarding."
  },
  {
    question: "What types of legal services do you offer?",
    answer: "We offer video consultations, legal document drafting (contracts, agreements, notices), court representation, and compliance services including GST registration, company incorporation, and ROC filings."
  },
  {
    question: "How much does a consultation cost?",
    answer: "Our Basic consultation starts at ₹999 for 30 minutes. We also offer monthly plans starting from ₹2,999 with multiple consultations and document drafting. Custom enterprise plans are available for businesses."
  },
  {
    question: "Can I get legal representation in court through iVakil?",
    answer: "Yes, we provide full legal representation services. After an initial consultation, our lawyers can represent you in courts across India for various legal matters including civil, criminal, and corporate cases."
  },
  {
    question: "How long does it take to get a document drafted?",
    answer: "Most standard documents like rental agreements or notices are drafted within 24-48 hours. Complex documents may take 3-5 business days. Rush services are available for urgent requirements."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Absolutely. We follow strict client-lawyer confidentiality protocols. All consultations and documents are encrypted and stored securely. Your information is never shared with third parties."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets. All transactions are secure and encrypted."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about iVakil
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border-2 border-gray-100 rounded-xl px-6 hover:border-indigo-200 transition-colors"
            >
              <AccordionTrigger className="text-left text-gray-900 hover:text-indigo-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
