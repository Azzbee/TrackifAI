import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="card-editorial p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 tracking-tight text-foreground leading-tight">
            Stop guessing.{" "}
            <span className="italic text-gradient-sage">Start executing.</span>
          </h2>
          
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-lg font-sans">
            Your competitors are already optimizing. Don't let clarity be the thing that holds you back.
          </p>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl btn-sage text-base font-medium"
          >
            Generate Your Strategy Report
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <p className="mt-6 text-sm text-muted-foreground font-sans">
            Free to start. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;