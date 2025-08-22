import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars, OrbitControls, Text } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";
import { a, useSprings } from "@react-spring/three";

import earthTexture from "../textures/earth.jpg";
import marsTexture from "../textures/mars.jpg";
import jupiterTexture from "../textures/jupiter.jpg";
import saturnTexture from "../textures/saturn.jpg";
import sunTexture from "../textures/sun.jpg";

import PlanetSign from "./PlanetSign.jsx";

function Planet({ textureUrl, size, rotationSpeed = 0.01, ...props }) {
  const texture = useLoader(TextureLoader, textureUrl);
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += rotationSpeed;
  });
  return (
    <mesh ref={meshRef} {...props} cursor="pointer">
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function StarBackground({ onSelect }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const planets = [
    { name: "Reading", texture: earthTexture, size: 5 },
    { name: "Listening", texture: marsTexture, size: 5 },
    { name: "Writing", texture: jupiterTexture, size: 5 },
    { name: "Speaking", texture: saturnTexture, size: 5 },
    { name: "Game", texture: sunTexture, size: 5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndex = (currentIndex - 1 + planets.length) % planets.length;
  const nextIndex = (currentIndex + 1) % planets.length;

 const [springs, api] = useSprings(3, (i) => ({
  position: [i === 0 ? -8 : i === 1 ? 0 : 8, 0, -10],
  scale: i === 1 
    ? [isMobile ? 0.7 : 1, isMobile ? 0.7 : 1, 1]   
    : [isMobile ? 0.35 : 0.5, isMobile ? 0.35 : 0.5, 1],
  config: { tension: 200, friction: 25 },
}));

  const goNext = () => {
    setCurrentIndex(nextIndex);
    api.start((i) => ({
  position: [i === 0 ? -8 : i === 1 ? 0 : 8, 0, -10],
  scale: i === 1
    ? [isMobile ? 0.7 : 1, isMobile ? 0.7 : 1, 1]
    : [isMobile ? 0.35 : 0.5, isMobile ? 0.35 : 0.5, 1],
  }));
  };

  const goPrev = () => {
    setCurrentIndex(prevIndex);
    api.start((i) => ({
      position: [i === 0 ? -8 : i === 1 ? 0 : 8, 0, -10],
      scale: [i === 1 ? 1 : 0.5, i === 1 ? 1 : 0.5, 1],
    }));
  };

  const touchStart = useRef(null);

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const deltaX = e.changedTouches[0].clientX - touchStart.current;
    if (deltaX > 50) goPrev();   // свайп вправо
    else if (deltaX < -50) goNext(); // свайп влево
    touchStart.current = null;
  };

  const indices = [prevIndex, currentIndex, nextIndex];

  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
        }}
        camera={{ position: [0, 0, isMobile ? 25 : 20], fov: 50 }}
        gl={{ antialias: true, outputEncoding: THREE.sRGBEncoding }}
      >
        <color attach="background" args={["#000000"]} />
        <Stars radius={200} depth={100} count={isMobile ? 8000 : 10000} factor={isMobile ? 4 : 4} fade speed={isMobile ? 1 : 1} />

        {springs.map((props, i) => {
          const planet = planets[indices[i]];
          return (
            <a.group key={i} position={props.position} scale={props.scale}>
              <Planet
                textureUrl={planet.texture}
                size={planet.size}
                onClick={() => {
                  if (i === 0) goPrev();
                  else if (i === 2) goNext();
                  else onSelect(planet.name);
                }}
              />
              <PlanetSign text={planet.name} planetSize={planet.size} />
            </a.group>
          );
        })}

        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <OrbitControls enableZoom={!isMobile} />
      </Canvas>


      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          touchAction: "manipulation", 
        }}
      >
        {!isMobile && (
  <div
    style={{
      position: "absolute",
      bottom: 50,
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: 20,
    }}
  >
    <button
      onClick={goPrev}
      className="px-6 py-4 text-lg md:text-xl bg-white/20 rounded-full hover:bg-white/40 transition"
    >
      Prev
    </button>
    <button
      onClick={() => onSelect(planets[currentIndex].name)}
      className="px-6 py-4 text-lg md:text-xl bg-white/20 rounded-full hover:bg-white/40 transition"
    >
      Select
    </button>
    <button
      onClick={goNext}
      className="px-6 py-4 text-lg md:text-xl bg-white/20 rounded-full hover:bg-white/40 transition"
    >
      Next
    </button>

          </div>
        )}
      </div>


    </>
  );
}
