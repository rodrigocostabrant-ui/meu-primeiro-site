// =============================================================================
// Configuração do "palco 3D" do Hero — Visiva
// =============================================================================
//
// Este arquivo é o ÚNICO lugar que precisa ser editado amanhã para trocar o
// placeholder abstrato pelo modelo 3D real da armação fotografada.
//
// PASSO A PASSO PARA AMANHÃ:
//   1. Gere o modelo 3D da armação (fotogrametria a partir das fotos, ou um
//      modelo feito sob medida) e exporte em formato .glb (glTF binário,
//      idealmente comprimido com Draco/Meshopt para carregar rápido).
//   2. Coloque o arquivo em `public/models/`, por exemplo:
//        public/models/visiva-hero-frame.glb
//   3. Defina HERO_MODEL_URL abaixo apontando para esse caminho.
//   4. Ajuste HERO_MODEL_TRANSFORM se necessário (escala/posição/rotação
//      inicial variam de acordo com como o modelo foi exportado).
//   5. Pronto — `ProductStage` (src/components/three/product-stage.tsx)
//      detecta automaticamente que HERO_MODEL_URL está preenchido e passa a
//      renderizar `ProductModel` (o loader .glb) no lugar do placeholder.
//
// Enquanto HERO_MODEL_URL for `null`, o Hero exibe um placeholder abstrato
// (um anel/lente estilizado) — nunca uma armação genérica — apenas para
// validar iluminação, câmera, parallax e performance.

export const HERO_MODEL_URL: string | null = null;

// Transformação aplicada ao modelo real ao ser carregado. Modelos exportados
// de fontes diferentes (Blender, fotogrametria, etc.) quase sempre precisam
// de ajuste fino de escala/posição — mexa aqui, não no componente.
export const HERO_MODEL_TRANSFORM = {
  scale: 1,
  position: [0, 0, 0] as [number, number, number],
  rotation: [0, 0, 0] as [number, number, number],
};

// Distância/posição da câmera no palco cinematográfico.
export const HERO_CAMERA = {
  position: [0, 0, 5.4] as [number, number, number],
  fov: 32,
};

// Velocidade da rotação automática (radianos por segundo). Sutil e lenta,
// como uma peça de joalheria girando em uma vitrine — não uma demo técnica.
export const HERO_AUTOROTATE_SPEED = 0.12;

// Amplitude máxima (radianos) do tilt causado pelo movimento do mouse.
export const HERO_POINTER_TILT = 0.18;

// Amplitude do giro adicional causado pelo scroll ao longo da altura do Hero.
export const HERO_SCROLL_ROTATION = 0.6;
