"use client";

import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import {
  HERO_AUTOROTATE_SPEED,
  HERO_POINTER_TILT,
  HERO_SCROLL_ROTATION,
} from "@/lib/three-config";

type PlaceholderPieceProps = {
  pointer: React.RefObject<{ x: number; y: number }>;
  scrollProgress: React.RefObject<number>;
};

/**
 * Peça abstrata de vitrine — NÃO é uma armação. Representa apenas o espaço
 * físico, a luz e a movimentação que o modelo 3D real ocupará amanhã.
 * Um anel/lente estilizado, com material de vidro fosco, girando devagar
 * sob a iluminação do `LightingRig`.
 */
export function PlaceholderPiece({ pointer, scrollProgress }: PlaceholderPieceProps) {
  const group = useRef<THREE.Group>(null);
  const elapsed = useRef(0);

  useFrame((_, delta) => {
    elapsed.current += delta;
    const node = group.current;
    if (!node) return;

    const autoRotation = elapsed.current * HERO_AUTOROTATE_SPEED;
    const scrollSpin = (scrollProgress.current ?? 0) * HERO_SCROLL_ROTATION;
    const targetY = autoRotation + scrollSpin + pointer.current.x * HERO_POINTER_TILT;
    const targetX = pointer.current.y * HERO_POINTER_TILT * 0.5;

    node.rotation.y = THREE.MathUtils.lerp(node.rotation.y, targetY, 1 - Math.pow(0.001, delta));
    node.rotation.x = THREE.MathUtils.lerp(node.rotation.x, targetX, 1 - Math.pow(0.001, delta));
  });

  return (
    <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.5}>
      <group ref={group}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.05, 0.05, 48, 128]} />
          <meshPhysicalMaterial
            color="#efe3cf"
            metalness={0.35}
            roughness={0.15}
            transmission={0.55}
            thickness={0.6}
            ior={1.4}
            clearcoat={1}
            envMapIntensity={1.1}
          />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.05, 0.012, 24, 128]} />
          <meshStandardMaterial color="#a9835b" metalness={0.9} roughness={0.25} />
        </mesh>
      </group>
    </Float>
  );
}
