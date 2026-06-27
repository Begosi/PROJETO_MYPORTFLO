import { motion } from "framer-motion";

export default function LiquidCard({ children, className = "", ...props }) {
  return (
    <motion.div
      className={`liquid-glass rounded-3xl p-6 ${className}`}
      {...props}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
