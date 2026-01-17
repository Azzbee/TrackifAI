import { motion } from "framer-motion";

interface BrandRoastProps {
  roast: string;
}

export function BrandRoast({ roast }: BrandRoastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative py-10 px-8"
    >
      {/* Decorative background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl"
      />

      {/* Content container */}
      <div className="relative flex flex-col items-center text-center">
        {/* Opening quote mark */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute -top-2 -left-2 text-7xl font-serif text-primary select-none"
          aria-hidden="true"
        >
          &ldquo;
        </motion.span>

        {/* The roast text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-lg md:text-xl lg:text-2xl font-medium italic text-foreground/90 leading-relaxed max-w-3xl font-serif"
        >
          {roast}
        </motion.p>

        {/* Closing quote mark */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute -bottom-4 -right-2 text-7xl font-serif text-primary select-none"
          aria-hidden="true"
        >
          &rdquo;
        </motion.span>

        {/* Decorative underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
          className="mt-8 h-0.5 w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default BrandRoast;
