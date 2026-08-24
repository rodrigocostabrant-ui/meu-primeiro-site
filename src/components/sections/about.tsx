import { Reveal } from "@/components/ui/reveal";
import { GlassesMark } from "@/components/icons/glasses-mark";

const stats = [
  { value: "15+", label: "Anos de experiência" },
  { value: "12k", label: "Clientes atendidos" },
  { value: "40+", label: "Marcas parceiras" },
  { value: "98%", label: "Satisfação" },
];

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
            <p className="text-lg leading-relaxed text-ink/70">
              A Visiva nasceu para reunir o que há de melhor entre a
              oftalmologia de precisão e o design autoral de armações. Cada
              peça da nossa coleção é selecionada a dedo — combinando
              materiais nobres, manufatura artesanal e um olhar contemporâneo
              sobre o que é enxergar bem.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Nosso atendimento é consultivo: entendemos seu rosto, sua
              rotina e sua visão antes de sugerir qualquer armação ou lente.
              O resultado é uma experiência óptica sob medida, do exame ao
              ajuste final.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl text-ink sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-ink/55">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
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
