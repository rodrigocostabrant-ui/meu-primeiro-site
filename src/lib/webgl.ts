// Detecção defensiva de suporte a WebGL, usada para decidir entre a
// experiência 3D do Hero e o fallback estático (2D/CSS).
export function supportsWebGL(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return Boolean(gl);
  } catch {
    return false;
  }
}
