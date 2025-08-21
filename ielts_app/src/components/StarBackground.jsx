import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export default function StarBackground() {
  return (
    <Canvas
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
      camera={{ position: [0, 0, 10], fov: 60 }}
    >
      {/* Тёмный фон */}
      <color attach="background" args={["#000000"]} />

      {/* Звёзды */}
      <Stars radius={200} depth={100} count={10000} factor={4} fade speed={1} />

      {/* Планеты */}
      <mesh position={[-3, 0, -5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#6c5ce7" />
      </mesh>

      <mesh position={[2, 1, -6]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="#fd79a8" />
      </mesh>

      <mesh position={[0, -2, -7]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="#00b894" />
      </mesh>

      {/* Освещение */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Управление камерой */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
