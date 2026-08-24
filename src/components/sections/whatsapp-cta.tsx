import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { whatsappLink } from "@/lib/site";

export function WhatsappCta() {
  return (
    <section id="contato" className="bg-ink py-28 text-ivory md:py-36">
      <div className="container-px flex flex-col items-center text-center">
        <Reveal>
          <MessageCircle
            className="mx-auto h-9 w-9 text-gold-soft"
            strokeWidth={1.4}
          />
          <h2 className="mt-8 font-display text-balance text-4xl leading-[1.1] sm:text-5xl">
            Fale agora com nossos
            <br className="hidden sm:block" /> especialistas em óptica.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ivory/65">
            Agende seu exame de vista ou tire dúvidas sobre armações e lentes
            diretamente pelo WhatsApp.
          </p>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-ivory px-9 py-4 text-[13px] tracking-[0.08em] uppercase text-ink transition-transform hover:scale-[1.03]"
          >
            <MessageCircle size={18} />
            Chamar no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
