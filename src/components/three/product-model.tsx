"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import {
  HERO_AUTOROTATE_SPEED,
  HERO_MODEL_TRANSFORM,
  HERO_POINTER_TILT,
  HERO_SCROLL_ROTATION,
} from "@/lib/three-config";

type ProductModelProps = {
  url: string;
  pointer: React.RefObject<{ x: number; y: number }>;
  scrollProgress: React.RefObject<number>;
};

/**
 * Loader do modelo 3D real da armação Visiva (.glb). Só é montado quando
 * `HERO_MODEL_URL` está preenchido em `src/lib/three-config.ts` — até lá,
 * `ProductStage` renderiza `PlaceholderPiece` no lugar.
 *
 * A mesma lógica de rotação automática + parallax do mouse + resposta ao
 * scroll usada no placeholder é aplicada aqui, para que a troca de um pelo
 * outro seja perfeitamente contínua (nenhum outro arquivo precisa mudar).
 */
export function ProductModel({ url, pointer, scrollProgress }: ProductModelProps) {
  const { scene } = useGLTF(url);
  const group = useRef<THREE.Group>(null);
  const elapsed = useRef(0);

  useFrame((_, delta) => {
    elapsed.current += delta;
    const node = group.current;
    if (!node) return;

    const autoRotation = elapsed.current * HERO_AUTOROTATE_SPEED;
    const scrollSpin = (scrollProgress.current ?? 0) * HERO_SCROLL_ROTATION;
    const targetY =
      HERO_MODEL_TRANSFORM.rotation[1] +
      autoRotation +
      scrollSpin +
      pointer.current.x * HERO_POINTER_TILT;
    const targetX =
      HERO_MODEL_TRANSFORM.rotation[0] + pointer.current.y * HERO_POINTER_TILT * 0.5;

    node.rotation.y = THREE.MathUtils.lerp(node.rotation.y, targetY, 1 - Math.pow(0.001, delta));
    node.rotation.x = THREE.MathUtils.lerp(node.rotation.x, targetX, 1 - Math.pow(0.001, delta));
  });

  return (
    <group
      ref={group}
      scale={HERO_MODEL_TRANSFORM.scale}
      position={HERO_MODEL_TRANSFORM.position}
    >
      <primitive object={scene} />
    </group>
  );
}

// Pré-carrega o modelo assim que a URL for definida, evitando um "pop" na
// primeira renderização (chamada é inerte enquanto HERO_MODEL_URL for null,
// pois este módulo só é importado quando ProductStage decide usá-lo).
export function preloadProductModel(url: string) {
  useGLTF.preload(url);
}
