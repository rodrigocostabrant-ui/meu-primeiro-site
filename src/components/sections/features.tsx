import { BadgeCheck, Gem, Ruler, ScanFace, Truck, Users, type LucideIcon } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { differentials, type DifferentialIcon } from "@/lib/site";

const ICONS: Record<DifferentialIcon, LucideIcon> = {
  exame: ScanFace,
  atendimento: Users,
  ajuste: Ruler,
  materiais: Gem,
  garantia: BadgeCheck,
  entrega: Truck,
};

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
          {differentials.map(({ title, description, icon }) => {
            const Icon = ICONS[icon];
            return (
              <StaggerItem key={title}>
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                  {description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
