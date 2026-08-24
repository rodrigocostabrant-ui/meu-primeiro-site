import { Star } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";

const testimonials = [
  {
    quote:
      "Nunca tinha vivido uma experiência óptica tão cuidadosa. Da escolha da armação ao ajuste final, tudo foi pensado para mim.",
    name: "Marina Alves",
    role: "Cliente desde 2021",
  },
  {
    quote:
      "As lentes fotossensíveis mudaram minha rotina — trabalho o dia todo em frente à tela e não sinto mais cansaço visual.",
    name: "Rafael Nogueira",
    role: "Cliente desde 2019",
  },
  {
    quote:
      "Atendimento impecável e um acervo de armações que eu não encontro em nenhuma outra ótica da cidade.",
    name: "Camila Duarte",
    role: "Cliente desde 2023",
  },
];

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
                <p className="mt-0.5 text-sm text-ink/50">{t.role}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
