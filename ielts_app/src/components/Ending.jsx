// Ending.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Ending({ score, total, onExit }) {
  const won = score >= Math.ceil(total / 2);

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50 p-6">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {won ? (
          <>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              🌟 Victory! 🌟
            </h1>
            <p className="text-lg md:text-2xl">
              You defeated the Evil Sun and saved the galaxy! 🚀
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">☀️ Defeat...</h1>
            <p className="text-lg md:text-2xl">
              The Sun consumed the galaxy... Try again!
            </p>
          </>
        )}
      </motion.div>

      <button
        onClick={onExit}
        className="mt-10 px-8 py-3 bg-red-500 text-black font-bold rounded-full hover:bg-red-400 transition"
      >
        Back to Menu
      </button>
    </div>
  );
}
