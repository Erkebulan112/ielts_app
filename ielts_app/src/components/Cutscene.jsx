// Cutscene.jsx
import React, { useRef, useEffect } from "react";

export default function Cutscene({ onFinish }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      onFinish(); // авто-старт после окончания ролика
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src="/cutscene.mp4" // помести ролик в public/cutscene.mp4
        autoPlay
        muted={false} // можешь поставить true, если нужно без звука
        className="w-full h-full object-cover"
      />
    </div>
  );
}
