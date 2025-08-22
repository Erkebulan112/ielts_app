// App.jsx
import React, { useState } from "react";
import StarBackground from "./components/StarBackground.jsx";
import SectionContent from "./components/SectionContent.jsx";

export default function App() {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="relative min-h-screen text-white flex flex-col items-center p-6 overflow-hidden">
      <StarBackground onSelect={setSelectedSection} />
      <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">🚀 IELTS Prep</h1>
      <SectionContent section={selectedSection} />
    </div>
  );
}
