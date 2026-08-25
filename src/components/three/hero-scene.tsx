"use client";

import { Canvas } from "@react-three/fiber";
import { HERO_CAMERA } from "@/lib/three-config";
import { LightingRig } from "@/components/three/lighting-rig";
import { ProductStage } from "@/components/three/product-stage";

type HeroSceneProps = {
  pointer: React.RefObject<{ x: number; y: number }>;
  scrollProgress: React.RefObject<number>;
};

/**
 * Ponto de entrada da cena Three.js — sempre carregado via `next/dynamic`
 * com `ssr: false` (ver `src/components/hero-stage.tsx`), nunca importado
 * diretamente em um componente de servidor.
 */
export default function HeroScene({ pointer, scrollProgress }: HeroSceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: HERO_CAMERA.position, fov: HERO_CAMERA.fov }}
      performance={{ min: 0.4 }}
      className="!touch-auto"
    >
      <LightingRig />
      <ProductStage pointer={pointer} scrollProgress={scrollProgress} />
    </Canvas>
  );
}
