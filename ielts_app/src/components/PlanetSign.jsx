import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, DoubleSide } from "three";
import signReading from "../textures/sign_reading.png"; 
import signWriting from "../textures/sign_writing.png";
import signListening from "../textures/sign_listening.png";
import signSpeaking from "../textures/sign_speaking.png";

const texturesMap = {
  Reading: signReading,
  Writing: signWriting,
  Listening: signListening,
  Speaking: signSpeaking,
};

export default function PlanetSign({ text, planetSize = 5 }) {
  const groupRef = useRef();

  // выбираем текстуру по ключу
  const texturePath = texturesMap[text];
  const texture = texturePath ? useLoader(TextureLoader, texturePath) : null;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(t * 1.2) * 0.05;
      groupRef.current.rotation.x = Math.sin(t * 0.8) * 0.02;
      groupRef.current.position.y = planetSize + 1 + Math.sin(t * 1.5) * 0.05;
    }
  });

  if (!texture) return null;

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[planetSize, planetSize]} />
        <meshBasicMaterial
          map={texture}
          transparent
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
}
