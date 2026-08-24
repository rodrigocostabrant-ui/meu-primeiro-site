import {
  BadgeCheck,
  Gem,
  Ruler,
  ScanFace,
  Truck,
  Users,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";

const features = [
  {
    title: "Exame de precisão digital",
    description:
      "Refração computadorizada e topografia para um diagnóstico exato do seu grau.",
    Icon: ScanFace,
  },
  {
    title: "Atendimento personalizado",
    description:
      "Consultoria de estilo e ajuste facial com nossos especialistas ópticos.",
    Icon: Users,
  },
  {
    title: "Ajuste sob medida",
    description:
      "Regulagem milimétrica de haste, ponte e curvatura para o encaixe perfeito.",
    Icon: Ruler,
  },
  {
    title: "Curadoria de materiais nobres",
    description:
      "Acetatos italianos, titânio e metais preciosos selecionados a dedo.",
    Icon: Gem,
  },
  {
    title: "Garantia estendida",
    description:
      "12 meses de garantia em armações e lentes, com manutenção gratuita.",
    Icon: BadgeCheck,
  },
  {
    title: "Entrega expressa",
    description:
      "Sua armação pronta com lentes montadas em até 5 dias úteis.",
    Icon: Truck,
  },
];

export function Features() {
  return (
    <section id="diferenciais" className="bg-ivory py-28 md:py-40">
      <div className="container-px">
        <Reveal className="max-w-xl">
          <span className="text-[13px] tracking-[0.24em] uppercase text-gold">
            Diferenciais
          </span>
          <h2 className="mt-6 font-display text-balance text-4xl leading-[1.08] sm:text-5xl">
            Uma experiência óptica{" "}
            <span className="italic text-gold">completa.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, Icon }) => (
            <StaggerItem key={title}>
              <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-xl">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                {description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
