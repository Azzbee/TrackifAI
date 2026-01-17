import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
  const features = [
    "Unlimited website audits",
    "Full 30-day prioritized roadmap",
    "Daily content hooks & captions",
    "Exportable PDF Strategy Reports",
    "ICP alignment analysis",
    "Copy rewrites for key pages",
  ];

  const pricingFaqs = [
    {
      question: "Can I cancel anytime?",
      answer: "Yes, absolutely. You can pause or cancel your subscription at the end of your current billing cycle. No questions asked, no hidden fees."
    },
    {
      question: "How accurate is the AI audit?",
      answer: "Our engine uses 500+ growth frameworks distilled from top-tier consultancies to provide consultancy-grade insights. We continuously refine our models based on real conversion data from high-growth startups."
    },
    {
      question: "Can I audit multiple websites?",
      answer: "Yes, both plans support multiple brand audits. Whether you're managing several products or consulting for clients, you can run unlimited audits across different domains."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-48 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground tracking-tight mb-6">
              Investment in your <span className="italic text-gradient-sage">growth.</span>
            </h1>
            <p className="text-lg text-muted-foreground font-sans max-w-xl mx-auto">
              Choose the plan that fits your pace. Both include everything you need to transform your marketing.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 gap-8 mb-24"
          >
            {/* Monthly Plan */}
            <div className="bg-card rounded-3xl border border-border p-8 md:p-10 flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-serif font-medium text-foreground mb-2">
                  Monthly Strategy
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-serif font-medium text-foreground">$19.99</span>
                  <span className="text-muted-foreground font-sans">/ month</span>
                </div>
                <p className="text-sm text-muted-foreground font-sans">
                  Equivalent to $239.88 per year
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-muted-foreground font-sans text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/">
                <Button 
                  variant="outline" 
                  className="w-full py-6 rounded-2xl border-border hover:border-primary hover:text-primary transition-colors font-sans"
                >
                  Start monthly
                </Button>
              </Link>
            </div>

            {/* Yearly Plan */}
            <div className="bg-card rounded-3xl border border-border p-8 md:p-10 flex flex-col relative overflow-hidden">
              {/* Best Value Badge */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary font-sans">
                  Best Value
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-serif font-medium text-foreground mb-2">
                  Annual Growth
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-serif font-medium text-foreground">$192</span>
                  <span className="text-muted-foreground font-sans">/ year</span>
                </div>
                <p className="text-sm text-muted-foreground font-sans">
                  Save 20% vs monthly ($16/mo)
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-muted-foreground font-sans text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/">
                <Button className="w-full py-6 rounded-2xl btn-sage font-sans">
                  Start yearly
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Pricing FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground text-center mb-10">
              Common questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {pricingFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="card-editorial px-6 py-2 border-none"
                >
                  <AccordionTrigger className="text-left font-serif text-lg font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-sans leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mt-20"
          >
            <p className="text-muted-foreground font-sans mb-2">
              Not sure yet?
            </p>
            <Link 
              to="/"
              className="text-primary hover:text-primary/80 font-medium transition-colors font-sans"
            >
              Try a free audit first →
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
