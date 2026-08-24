import { Droplets, ScanEye, Sparkles, SunMedium } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";

const lenses = [
  {
    name: "Antirreflexo Premium",
    description:
      "Multicamadas que eliminam reflexos, reduzem fadiga visual e prolongam a durabilidade da lente.",
    Icon: Sparkles,
  },
  {
    name: "Fotossensíveis",
    description:
      "Adaptação automática à luminosidade — proteção UV total dentro e fora de ambientes.",
    Icon: SunMedium,
  },
  {
    name: "Filtro de Luz Azul",
    description:
      "Redução da luz emitida por telas, pensada para rotinas longas de trabalho digital.",
    Icon: ScanEye,
  },
  {
    name: "Hidrofóbicas",
    description:
      "Superfície que repele água, poeira e gordura — lentes limpas por muito mais tempo.",
    Icon: Droplets,
  },
];

export function Lenses() {
  return (
    <section id="lentes" className="bg-ink py-28 text-ivory md:py-40">
      <div className="container-px grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-[13px] tracking-[0.24em] uppercase text-gold-soft">
              Tecnologia óptica
            </span>
            <h2 className="mt-6 font-display text-balance text-4xl leading-[1.08] sm:text-5xl">
              Lentes de{" "}
              <span className="italic text-gold-soft">alta performance.</span>
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-ivory/65">
              Trabalhamos com os laboratórios ópticos mais avançados do
              mercado para entregar nitidez, conforto e proteção em cada
              lente prescrita.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="lg:col-span-6 lg:col-start-7 grid gap-10 sm:grid-cols-2">
          {lenses.map(({ name, description, Icon }) => (
            <StaggerItem key={name} className="border-t border-ivory/15 pt-6">
              <Icon className="h-6 w-6 text-gold-soft" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-xl">{name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ivory/60">
                {description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
