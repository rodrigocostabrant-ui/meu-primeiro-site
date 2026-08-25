import { Droplets, ScanEye, Sparkles, SunMedium, type LucideIcon } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { lensTechnologies } from "@/lib/site";

const ICONS: LucideIcon[] = [Sparkles, SunMedium, ScanEye, Droplets];

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
              Trabalhamos para entregar nitidez, conforto e proteção em cada
              lente prescrita.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="lg:col-span-6 lg:col-start-7 grid gap-10 sm:grid-cols-2">
          {lensTechnologies.map(({ name, description }, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <StaggerItem key={name} className="border-t border-ivory/15 pt-6">
                <Icon className="h-6 w-6 text-gold-soft" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl">{name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ivory/60">
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
