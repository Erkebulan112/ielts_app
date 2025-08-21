import { Card, CardContent } from "./components/ui/card.jsx";
import { motion } from "framer-motion";
import StarBackground from "./components/StarBackground.jsx";

const sections = [
  { title: "📖 Reading", desc: "Practice reading texts with questions" },
  { title: "🎧 Listening", desc: "Listen to audios and answer tasks" },
  { title: "✍️ Writing", desc: "Essay topics and writing tips" },
  { title: "🗣 Speaking", desc: "Speaking practice questions" },
];

export default function App() {
  return (
    <div className="relative min-h-screen text-white flex flex-col items-center p-6 overflow-hidden">
      {/* Фон со звёздами */}
      <StarBackground />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-10 text-center"
      >
        🚀 IELTS Prep Hub
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {sections.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-none rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <h2 className="text-2xl font-semibold">{s.title}</h2>
                <p className="text-sm text-gray-200 mt-2">{s.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
