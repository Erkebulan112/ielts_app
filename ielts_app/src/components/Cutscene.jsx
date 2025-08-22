// Cutscene.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Cutscene({ onFinish }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
      {/* Злое солнце */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [1, 1.5, 1.2], opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="w-40 h-40 rounded-full bg-yellow-500 shadow-[0_0_60px_20px_rgba(255,200,0,0.8)] flex items-center justify-center text-4xl font-bold"
      >
        😈☀️
      </motion.div>

      {/* Текст */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 text-2xl md:text-4xl text-center font-bold"
      >
        You dare challenge me?
        <br />Prove your English power!
      </motion.h1>

      {/* Кнопка старта */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={onFinish}
        className="mt-10 px-8 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition"
      >
        Start Game 🚀
      </motion.button>
    </div>
  );
}
