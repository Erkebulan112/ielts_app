// MiniGame.jsx
import React, { useState } from "react";

const questions = [
  {
    q: "Choose the synonym of 'happy':",
    options: ["Sad", "Joyful", "Angry", "Tired"],
    answer: "Joyful",
  },
  {
    q: "What is the past tense of 'go'?",
    options: ["Goed", "Went", "Gone", "Going"],
    answer: "Went",
  },
  {
    q: "Fill in the blank: She ____ reading books.",
    options: ["like", "likes", "liked", "liking"],
    answer: "likes",
  },
];

export default function MiniGame({ onWin, onLose }) {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[step].answer) {
      setScore((prev) => prev + 1);
    }

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      // игра закончена
      const passed = score + (option === questions[step].answer ? 1 : 0);
      if (passed >= Math.ceil(questions.length / 2)) {
        onWin();
      } else {
        onLose();
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-purple-900 via-black to-black text-white flex flex-col items-center justify-center z-50 p-6">
      <h2 className="text-2xl md:text-4xl font-bold mb-6">
        {questions[step].q}
      </h2>
      <div className="flex flex-col gap-4">
        {questions[step].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt)}
            className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-500 transition"
          >
            {opt}
          </button>
        ))}
      </div>
      <p className="mt-6 text-lg">
        Question {step + 1} / {questions.length}
      </p>
    </div>
  );
}
