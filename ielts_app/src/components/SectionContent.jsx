// SectionContent.jsx
import React from "react";

const sectionContent = {
  Reading: {
    title: "Reading - Cosmic Comprehension",
    description: "Navigate through stellar passages and answer questions to test your reading skills",
    tasks: [
      { id: 1, text: "Read a passage about black holes and answer 5 multiple-choice questions" },
      { id: 2, text: "Match headings to paragraphs in an article about Mars" },
      { id: 3, text: "Complete a summary of a text about interstellar travel" },
    ],
  },
  Listening: {
    title: "Listening - Galactic Frequencies",
    description: "Tune into cosmic transmissions and test your listening skills",
    tasks: [
      { id: 1, text: "Listen to a conversation between astronauts and fill in blanks" },
      { id: 2, text: "Identify the correct order of events in a podcast about space" },
      { id: 3, text: "Answer questions based on a lecture about alien ecosystems" },
    ],
  },
  Writing: {
    title: "Writing - Interstellar Reports",
    description: "Craft essays and reports documenting discoveries from across the universe",
    tasks: [
      { id: 1, text: "Write a 250-word essay on space travel impact" },
      { id: 2, text: "Describe a graph showing space tourism growth" },
      { id: 3, text: "Write a letter proposing a new mission to Jupiter" },
    ],
  },
  Speaking: {
    title: "Speaking - Cosmic Conversations",
    description: "Engage in dialogues as if communicating with extraterrestrial beings",
    tasks: [
      { id: 1, text: "Record a 2-minute speech about why you want to explore Mars" },
      { id: 2, text: "Answer questions about your favorite planet" },
      { id: 3, text: "Describe a scenario of meeting an alien species" },
    ],
  },
};

export default function SectionContent({ section }) {
  if (!section || !sectionContent[section]) {
    return <p className="text-gray-400 mt-4">Select a planet to begin your cosmic journey!</p>;
  }

  const { title, description, tasks } = sectionContent[section];

  return (
    <div className="relative z-10 text-center max-w-2xl mx-auto p-6 bg-black/50 rounded-lg backdrop-blur-md border border-white/20">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white animate-pulse">{title}</h2>
      <p className="text-sm md:text-base text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 md:space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-white">{task.text}</span>
          </li>
        ))}
      </ul>
      <button
        className="mt-6 px-6 py-2 bg-white/20 rounded-full hover:bg-white/40 transition-all duration-300"
        onClick={() => alert(`Starting ${section} tasks!`)}
      >
        Launch {section} Mission
      </button>
    </div>
  );
}
