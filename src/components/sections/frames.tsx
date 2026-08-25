import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import {
  AviatorFrame,
  CatEyeFrame,
  RectFrame,
  RoundFrame,
} from "@/components/icons/frame-shapes";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { WhatsappButton } from "@/components/whatsapp-button";

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

        {/*
          Catálogo individual de produtos — alimentado por
          src/lib/products.ts. Enquanto nenhuma peça real for cadastrada,
          mostramos um estado vazio elegante em vez de um grid quebrado.
        */}
        <div className="mt-28 border-t border-line/70 pt-20">
          <Reveal className="max-w-xl">
            <span className="text-[13px] tracking-[0.24em] uppercase text-gold">
              Catálogo
            </span>
            <h3 className="mt-6 font-display text-balance text-3xl leading-[1.1] sm:text-4xl">
              Peças selecionadas, prontas para experimentar.
            </h3>
          </Reveal>

          {products.length > 0 ? (
            <StaggerGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <StaggerItem key={product.id}>
                  <ProductCard product={product} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          ) : (
            <Reveal delay={0.1} className="mt-14 rounded-[28px] border border-dashed border-line bg-ivory/60 px-8 py-16 text-center">
              <p className="mx-auto max-w-md text-[15px] leading-relaxed text-ink/55">
                Nosso catálogo completo está sendo fotografado e catalogado
                peça por peça. Em breve, cada armação estará disponível aqui
                com foto, preço e disponibilidade.
              </p>
              <WhatsappButton
                label="Conhecer o acervo pelo WhatsApp"
                message="Olá! Gostaria de conhecer as armações disponíveis na Visiva."
                className="mt-6 inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-[13px] tracking-[0.08em] uppercase transition-colors hover:bg-ink hover:text-ivory"
              />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
