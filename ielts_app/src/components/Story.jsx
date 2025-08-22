// Story.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const dialogues = [
  "👩‍🚀: Commander, we are in deep space.",
  "👩‍🚀: The Evil Sun blocks our path...",
  "👩‍🚀: If you want to survive, you must prove your English skills!",
  "👩‍🚀: Answer correctly and we can defeat it together!",
];

export default function Story({ onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= dialogues.length) {
      const timer = setTimeout(() => onFinish(), 1000);
      return () => clearTimeout(timer);
    }
  }, [index, onFinish]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center text-white z-50 p-6"
      style={{
        backgroundImage: "url('/textures/space_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center gap-6 max-w-4xl">
        {/* Астронавт */}
        <motion.img
          src="\src\textures\astronaut.png"
          alt="Astronaut"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-40 md:w-56 drop-shadow-lg"
        />

        {/* Текст диалога */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-3xl bg-black/60 p-6 rounded-2xl shadow-lg"
        >
          {dialogues[index]}
        </motion.div>
      </div>

      {index < dialogues.length && (
        <button
          onClick={() => setIndex(index + 1)}
          className="mt-10 px-6 py-3 bg-blue-500 rounded-full font-bold hover:bg-blue-400"
        >
          Next ➡️
        </button>
      )}
    </div>
  );
}
