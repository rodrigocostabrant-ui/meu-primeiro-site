"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { usePointerParallax } from "@/hooks/use-pointer-parallax";
import { supportsWebGL } from "@/lib/webgl";
import { HeroFallback } from "@/components/three/hero-fallback";
import { cn } from "@/lib/utils";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

function scheduleIdle(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const ric = (window as typeof window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  }).requestIdleCallback;

  if (ric) {
    const id = ric(callback, { timeout: 600 });
    return () => (window as typeof window & { cancelIdleCallback?: (id: number) => void })
      .cancelIdleCallback?.(id);
  }

  const timeout = window.setTimeout(callback, 200);
  return () => window.clearTimeout(timeout);
}

type HeroStageProps = {
  className?: string;
};

/**
 * Palco visual 3D do Hero — hoje exibe um placeholder abstrato preparado
 * para receber o modelo 3D real da armação (ver `src/lib/three-config.ts`).
 *
 * Responsabilidades desta camada:
 *  - Detectar suporte a WebGL e `prefers-reduced-motion`, com fallback
 *    estático elegante quando qualquer um dos dois não permitir a cena 3D.
 *  - Adiar o carregamento do Three.js (code-split via `next/dynamic`) para
 *    depois da primeira pintura, para não competir com o texto do Hero.
 *  - Capturar o movimento do mouse e o progresso de scroll em refs (sem
 *    re-render) e repassar para dentro do loop de animação do R3F.
 */
export function HeroStage({ className }: HeroStageProps) {
  const prefersReducedMotion = useReducedMotion();
  // Inicializador preguiçoso: roda apenas no primeiro render (retorna false
  // no servidor, onde `window` não existe). `shouldMount` só é ligado por um
  // efeito posterior (via requestIdleCallback), então mesmo que este valor
  // já venha `true` na hidratação, nada muda de imediato — sem mismatch.
  const [webglReady] = useState(() => supportsWebGL());
  const [shouldMount, setShouldMount] = useState(false);

  const { targetRef, pointer } = usePointerParallax<HTMLDivElement>();
  const scrollProgress = useRef(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    scrollProgress.current = value;
  });

  useEffect(() => {
    if (!webglReady || prefersReducedMotion) return;
    return scheduleIdle(() => setShouldMount(true));
  }, [webglReady, prefersReducedMotion]);

  const showScene = webglReady && !prefersReducedMotion && shouldMount;

  return (
    <div ref={targetRef} className={cn("relative h-full w-full", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full"
      >
        {showScene ? (
          <HeroScene pointer={pointer} scrollProgress={scrollProgress} />
        ) : (
          <HeroFallback />
        )}
      </motion.div>
    </div>
  );
}
