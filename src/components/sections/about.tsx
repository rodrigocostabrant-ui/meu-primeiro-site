import { Reveal } from "@/components/ui/reveal";
import { GlassesMark } from "@/components/icons/glasses-mark";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="bg-ivory py-28 md:py-40">
      <div className="container-px grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-[13px] tracking-[0.24em] uppercase text-gold">
              Sobre a Visiva
            </span>
            <h2 className="mt-6 font-display text-balance text-4xl leading-[1.08] sm:text-5xl">
              Óptica, design e{" "}
              <span className="italic text-gold">precisão</span> em cada
              detalhe.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.1}>
            {site.aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-lg leading-relaxed text-ink/70 first:mt-0">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl text-ink sm:text-4xl">
                    {s.value ?? "—"}
                  </p>
                  <p className="mt-2 text-sm text-ink/55">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {site.brands.length > 0 && (
            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                {site.brands.map((brand) => (
                  <span
                    key={brand}
                    className="text-[13px] tracking-[0.1em] uppercase text-ink/45"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </div>

      <Reveal delay={0.15}>
        <div className="container-px mt-24">
          <GlassesMark className="mx-auto h-8 w-auto text-ink/15 sm:h-10" />
        </div>
      </Reveal>
    </section>
  );
}
