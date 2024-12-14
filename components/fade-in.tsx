import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
};

export const FadeIn = ({ children, className }: FadeInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
