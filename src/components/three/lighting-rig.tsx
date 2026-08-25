import { Environment } from "@react-three/drei";

/**
 * Iluminação de "estúdio de campanha": uma luz-chave quente vinda de cima,
 * uma luz de preenchimento fria e suave, um rim-light dourado para separar
 * o produto do fundo, e um Environment sutil para reflexos realistas em
 * materiais metálicos/vítreos (lentes, hastes).
 */
export function LightingRig() {
  return (
    <>
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[3, 4, 5]}
        intensity={1.6}
        color="#fff6e8"
      />

      <directionalLight
        position={[-4, 1, 2]}
        intensity={0.5}
        color="#cfe0ff"
      />

      <spotLight
        position={[-2, -1.5, 3]}
        angle={0.5}
        penumbra={1}
        intensity={0.8}
        color="#cfae82"
      />

      <Environment preset="studio" environmentIntensity={0.6} />
    </>
  );
}
