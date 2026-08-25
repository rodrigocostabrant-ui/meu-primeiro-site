import { Star } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-sand py-28 md:py-40">
      <div className="container-px">
        <Reveal className="max-w-xl">
          <span className="text-[13px] tracking-[0.24em] uppercase text-gold">
            Depoimentos
          </span>
          <h2 className="mt-6 font-display text-balance text-4xl leading-[1.08] sm:text-5xl">
            A confiança de quem{" "}
            <span className="italic text-gold">já nos escolheu.</span>
          </h2>
        </Reveal>

        {testimonials.length > 0 ? (
          <StaggerGroup className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem
                key={t.name}
                className="flex flex-col rounded-[24px] border border-line bg-ivory p-10"
              >
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-6 flex-1 text-[15px] leading-relaxed text-ink/75">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 border-t border-line pt-5">
                  <p className="font-display text-lg">{t.name}</p>
                  {t.role && <p className="mt-0.5 text-sm text-ink/50">{t.role}</p>}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        ) : (
          <Reveal delay={0.1} className="mt-16 rounded-[28px] border border-dashed border-line bg-ivory/60 px-8 py-16 text-center">
            <p className="mx-auto max-w-md text-[15px] leading-relaxed text-ink/55">
              Em breve, depoimentos de clientes reais da Visiva por aqui.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
