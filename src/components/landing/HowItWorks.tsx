import { motion } from "framer-motion";
import { Link2, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Ingest",
    description: "Paste your URL and social handles.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Distill",
    description: "Our engine evaluates your brand against 500+ growth frameworks.",
  },
  {
    icon: Download,
    number: "03",
    title: "Deploy",
    description: "Receive an interactive dashboard and an exportable PDF strategy report.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 tracking-tight text-foreground">
            The Methodology
          </h2>
          <p className="text-muted-foreground font-sans">
            From URL to action plan in under a minute
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-8">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px border-t border-dashed border-primary/30" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.15 
              }}
              className="relative flex-1 text-center"
            >
              {/* Icon Container */}
              <div className="relative w-24 h-24 mx-auto mb-8 rounded-3xl bg-card border border-border flex items-center justify-center shadow-sm">
                <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                
                {/* Step Number */}
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-xs font-semibold text-primary-foreground flex items-center justify-center font-sans">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-serif font-medium mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground font-sans max-w-[260px] mx-auto leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;