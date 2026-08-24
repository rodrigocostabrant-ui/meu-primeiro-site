import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import {
  AviatorFrame,
  CatEyeFrame,
  RectFrame,
  RoundFrame,
} from "@/components/icons/frame-shapes";

const collections = [
  {
    name: "Acetato Italiano",
    description:
      "Peças torneadas à mão em acetato de Mazzucchelli, com acabamento fosco ou translúcido.",
    Icon: RoundFrame,
  },
  {
    name: "Titânio Ultraleve",
    description:
      "Estrutura em titânio beta, quase imperceptível no rosto — para uso o dia inteiro.",
    Icon: RectFrame,
  },
  {
    name: "Edição Limitada",
    description:
      "Colaborações exclusivas e séries numeradas, produzidas em pequenos lotes.",
    Icon: CatEyeFrame,
  },
  {
    name: "Sob Medida",
    description:
      "Ajuste de ponte, haste e curvatura desenhado para o seu formato de rosto.",
    Icon: AviatorFrame,
  },
];

export function Frames() {
  return (
    <section id="armacoes" className="bg-sand py-28 md:py-40">
      <div className="container-px">
        <Reveal className="max-w-xl">
          <span className="text-[13px] tracking-[0.24em] uppercase text-gold">
            Coleção
          </span>
          <h2 className="mt-6 font-display text-balance text-4xl leading-[1.08] sm:text-5xl">
            Armações que são uma{" "}
            <span className="italic text-gold">assinatura.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Um acervo internacional pensado para todos os estilos — do
            minimalismo escandinavo à ousadia italiana.
          </p>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2">
          {collections.map(({ name, description, Icon }) => (
            <StaggerItem key={name} className="group bg-sand p-10 transition-colors hover:bg-ivory sm:p-12">
              <Icon className="h-10 w-auto text-ink/70 transition-colors group-hover:text-gold" />
              <h3 className="mt-8 font-display text-2xl">{name}</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink/60">
                {description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
