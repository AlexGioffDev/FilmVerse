import { motion } from "framer-motion";

export const SmallLoadingComponent = () => {
  return [0, 1, 2].map((index) => (
    <motion.div
      key={index}
      className="w-4 h-4 mx-1 rounded-full bg-accent"
      animate={{
        y: [0, -10, 0],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration: 0.9,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.2, // Ritardo per creare il sequenziamento
      }}
    />
  ));
};
