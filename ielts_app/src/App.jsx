import React, { useState } from "react";
import StarBackground from "./components/StarBackground.jsx";
import SectionContent from "./components/SectionContent.jsx";
import Cutscene from "./components/Cutscene.jsx";
import MiniGame from "./components/MiniGame.jsx";

export default function App() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [showCutscene, setShowCutscene] = useState(false);
  const [startGame, setStartGame] = useState(false);

  const handlePlanetSelect = (planet) => {
    if (planet === "Game") {
      setShowCutscene(true); // сначала катсцена
    } else {
      setSelectedSection(planet); // обычные планеты
    }
  };

  return (
    <div className="relative min-h-screen text-white flex flex-col items-center p-6 overflow-hidden">
      {/* Фон с планетами */}
      {!showCutscene && !startGame && (
        <StarBackground onSelect={handlePlanetSelect} />
      )}

      <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">
        🚀 IELTS Prep
      </h1>

      {/* Контент */}
      {selectedSection && !showCutscene && !startGame && (
        <SectionContent section={selectedSection} />
      )}

      {/* Катсцена */}
      {showCutscene && !startGame && (
        <Cutscene
          onFinish={() => {
            setShowCutscene(false);
            setStartGame(true);
          }}
        />
      )}

      {/* Игра */}
      {startGame && (
  <MiniGame
    onExit={() => {
      setStartGame(false);
      setSelectedSection(null); // сбросить выбор секции
    }}
  />
  )}

    </div>
  );
}
