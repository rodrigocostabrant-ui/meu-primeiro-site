"use client";

import { useEffect, useRef } from "react";

/**
 * Rastreia a posição do ponteiro (mouse) normalizada entre -1 e 1 dentro de
 * um elemento de referência, sem causar re-renders — pensado para alimentar
 * loops de animação do Three.js (`useFrame`) via ref mutável.
 */
export function usePointerParallax<T extends HTMLElement>() {
  const targetRef = useRef<T | null>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    let frame = 0;

    const handleMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
        pointer.current.x = Math.min(1, Math.max(-1, x));
        pointer.current.y = Math.min(1, Math.max(-1, y));
      });
    };

    const handleLeave = () => {
      pointer.current.x = 0;
      pointer.current.y = 0;
    };

    el.addEventListener("pointermove", handleMove, { passive: true });
    el.addEventListener("pointerleave", handleLeave, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return { targetRef, pointer };
}
