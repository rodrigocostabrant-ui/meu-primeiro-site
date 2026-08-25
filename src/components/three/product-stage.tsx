"use client";

import { ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import { HERO_MODEL_URL } from "@/lib/three-config";
import { PlaceholderPiece } from "@/components/three/placeholder-piece";
import { ProductModel } from "@/components/three/product-model";

type ProductStageProps = {
  pointer: React.RefObject<{ x: number; y: number }>;
  scrollProgress: React.RefObject<number>;
};

/**
 * Decide o que colocar no centro do palco: o modelo 3D real (quando
 * `HERO_MODEL_URL` estiver configurado) ou o placeholder abstrato. Esta é a
 * ÚNICA ramificação de código entre os dois estados — nada mais no projeto
 * precisa mudar amanhã além de `three-config.ts`.
 */
export function ProductStage({ pointer, scrollProgress }: ProductStageProps) {
  return (
    <>
      <Suspense fallback={<PlaceholderPiece pointer={pointer} scrollProgress={scrollProgress} />}>
        {HERO_MODEL_URL ? (
          <ProductModel url={HERO_MODEL_URL} pointer={pointer} scrollProgress={scrollProgress} />
        ) : (
          <PlaceholderPiece pointer={pointer} scrollProgress={scrollProgress} />
        )}
      </Suspense>

      <ContactShadows
        position={[0, -1.15, 0]}
        opacity={0.45}
        scale={6}
        blur={2.6}
        far={2}
        resolution={512}
        color="#121113"
      />
    </>
  );
}
