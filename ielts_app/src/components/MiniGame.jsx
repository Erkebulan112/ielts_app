// MiniGame.jsx
import React, { useState } from "react";

const questions = [
  {
    q: "Which of the following sentences is grammatically correct?",
    options: [
      "She don’t like going out at night.",
      "She doesn’t likes going out at night.",
      "She doesn’t like going out at night.",
      "She not like going out at night."
    ],
    answer: 2,
  },
  {
    q: "Choose the correct form: 'If I ___ more time, I would have finished the essay.'",
    options: ["have", "had", "would have", "was having"],
    answer: 1,
  },
  {
    q: "Identify the error: 'Each of the players have a unique style.'",
    options: ["Each", "players", "have", "unique"],
    answer: 2,
  },
];

export default function MiniGame({ onExit }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const checkAnswer = (index) => {
    if (index === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="flex flex-col items-center text-white">
      {!finished ? (
        <>
          <h2 className="text-2xl font-bold mb-4">{questions[current].q}</h2>
          <div className="space-y-3">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => checkAnswer(i)}
                className="px-6 py-2 bg-gray-700 hover:bg-gray-500 rounded-lg"
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-4">Game Over</h2>
          <p className="mb-6">Your score: {score} / {questions.length}</p>
          <button
            onClick={onExit}
            className="px-8 py-3 bg-red-500 hover:bg-red-400 rounded-lg font-bold"
          >
            🔙 Back to Planets
          </button>
        </>
      )}
    </div>
  );
}
