import { motion } from "framer-motion";
import { Crosshair, Map, CalendarCheck } from "lucide-react";

const philosophies = [
  {
    icon: Crosshair,
    title: "The Brutal Truth.",
    description: "A diagnostic roast of your current messaging, positioning, and funnel gaps.",
  },
  {
    icon: Map,
    title: "The Tactical Roadmap.",
    description: "A prioritized list of high-impact fixes that actually move the needle.",
  },
  {
    icon: CalendarCheck,
    title: "The Execution Engine.",
    description: "A full 30-day content calendar with hooks, outlines, and CTA templates.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const ValueSnapshot = () => {
  return (
    <section className="pb-24 pt-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 tracking-tight text-foreground">
            What you'll receive
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Three pillars of strategic clarity, delivered instantly
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {philosophies.map((philosophy) => (
            <motion.div key={philosophy.title} variants={itemVariants} className="card-editorial p-8 text-center group">
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-sage-light flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <philosophy.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-medium text-foreground mb-3">{philosophy.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{philosophy.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueSnapshot;
