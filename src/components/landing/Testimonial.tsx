import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="py-32 px-6 section-divider">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground tracking-tight leading-tight mb-6">
            Your consulting team — <span className="italic text-gradient-sage">compressed into one AI.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground font-sans">
            Audit. Strategy. Execution. No meetings required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;