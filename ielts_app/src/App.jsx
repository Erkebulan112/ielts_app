// App.jsx
import React, { useState } from "react";
import StarBackground from "./components/StarBackground.jsx";
import SectionContent from "./components/SectionContent.jsx";
import Cutscene from "./components/Cutscene.jsx";
import Story from "./components/Story.jsx";
import MiniGame from "./components/MiniGame.jsx";
import Ending from "./components/Ending.jsx";

export default function App() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [showCutscene, setShowCutscene] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [ending, setEnding] = useState(null); // "win" или "lose"

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
      {!showCutscene && !showStory && !startGame && !ending && (
        <StarBackground onSelect={handlePlanetSelect} />
      )}

      <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">
        🚀 IELTS Prep
      </h1>

      {/* Контент */}
      {selectedSection && !showCutscene && !showStory && !startGame && !ending && (
        <SectionContent section={selectedSection} />
      )}

      {/* Катсцена (видео / злое солнце) */}
      {showCutscene && (
        <Cutscene
          onFinish={() => {
            setShowCutscene(false);
            setShowStory(true); // после катсцены -> персонаж
          }}
        />
      )}

      {/* История с персонажем */}
      {showStory && !startGame && (
        <Story
          onFinish={() => {
            setShowStory(false);
            setStartGame(true); // потом начинается игра
          }}
        />
      )}

      {/* Игра */}
      {startGame && !ending && (
        <MiniGame
          onWin={() => {
            setStartGame(false);
            setEnding("win");
          }}
          onLose={() => {
            setStartGame(false);
            setEnding("lose");
          }}
        />
      )}

      {/* Финал */}
      {ending && (
        <Ending
          result={ending}
          onExit={() => {
            setEnding(null);
            setSelectedSection(null);
          }}
        />
      )}
    </div>
  );
}
