import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [isComplete, setIsComplete] = useState(false); // Track when typing finishes
  const fullText = "< Welcome />";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsComplete(true); // Trigger blast effect
          setTimeout(() => onComplete(), 600); // Delay onComplete until blast finishes
        }, 500); // Pause before blast
      }
    }, 80); // Fast typing

    return () => clearInterval(typeInterval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 to-black text-green-300 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={isComplete ? { opacity: 0, scale: 1.5 } : { opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeIn" }} // Blast effect: fade + scale up
    >
      {/* Background Circle */}
      <motion.div
        className="absolute w-72 h-72 bg-green-500/10 rounded-full"
        initial={{ scale: 0.8, opacity: 0.2 }}
        animate={
          isComplete
            ? { scale: 2, opacity: 0 } // Explode outward during blast
            : { scale: 1.1, opacity: 0 }
        }
        transition={
          isComplete
            ? { duration: 0.6, ease: "easeOut" }
            : { duration: 2, ease: "easeOut" }
        }
      />

      {/* Typing Text */}
      <div className="relative z-10 text-4xl md:text-5xl font-mono font-bold tracking-wide">
        {text}
        <span className="animate-blink ml-2">|</span>
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-1 mt-6 bg-gray-700 rounded-full relative overflow-hidden">
        <motion.div
          className="h-full bg-green-400 shadow-[0_0_10px_#34d399] animate-loading-bar"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Tagline */}
      <p className="mt-6 text-sm text-gray-400 font-mono">
        Built with Passion & Precision
      </p>
    </motion.div>
  );
};