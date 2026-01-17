import { motion } from "framer-motion";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does the audit take?",
      answer: "Our engine distills your entire digital presence into a 30-day roadmap in under 45 seconds. We analyze your website, messaging, and positioning to deliver actionable insights instantly."
    },
    {
      question: "How does the audit work?",
      answer: "Simply enter your website URL and our AI scans your entire digital presence — from homepage copy to meta descriptions. We evaluate messaging clarity, ICP alignment, and competitive positioning to generate a comprehensive strategy report."
    },
    {
      question: "How accurate is the analysis?",
      answer: "Our analysis is powered by advanced language models trained on thousands of successful B2B and D2C brands. While no AI is perfect, our recommendations are grounded in proven marketing frameworks and real conversion data from high-growth startups."
    },
    {
      question: "Is my data private and secure?",
      answer: "Absolutely. We use enterprise-grade encryption for all data in transit and at rest. Your website content is analyzed in real-time and never stored permanently. We are fully GDPR compliant and never sell or share your data with third parties."
    },
    {
      question: "Can I customize the strategy to my specific needs?",
      answer: "Yes. After the initial audit, you can provide additional context about your target audience, business goals, and competitive landscape. Our AI adapts its recommendations to match your unique situation and priorities."
    },
    {
      question: "What kind of outputs will I receive?",
      answer: "You'll receive a complete marketing playbook including: messaging clarity scores, ICP alignment analysis, copy rewrites for key pages, a prioritized list of quick fixes, and a detailed 30-day execution calendar with specific tasks and milestones."
    },
    {
      question: "Do I need any technical knowledge to use trackifAI?",
      answer: "Not at all. Our platform is designed for founders and marketers, not developers. Every recommendation comes with plain-English explanations and step-by-step implementation guides you can follow or hand off to your team."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We stand behind our analysis. If you don't find actionable value in your audit report, reach out within 7 days and we'll work with you to address any concerns or provide a full refund."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-48 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground font-sans">
              Everything you need to know about trackifAI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="card-editorial px-6 py-2 border-none"
                >
                  <AccordionTrigger className="text-left font-serif text-lg font-medium text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-sans leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground font-sans mb-4">
              Still have questions?
            </p>
            <a 
              href="mailto:hello@trackifai.com"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Get in touch →
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
