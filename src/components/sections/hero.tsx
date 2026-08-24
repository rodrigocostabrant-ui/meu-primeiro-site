"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ivory pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-gold-soft/30 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-gold/20"
      />

      <div className="container-px relative pb-24 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-6 text-[13px] tracking-[0.24em] uppercase text-gold"
        >
          Ótica Premium — desde a primeira lente
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
          className="font-display text-balance text-[13vw] leading-[0.98] tracking-tight sm:text-[9vw] lg:text-[6.4vw]"
        >
          Enxergue o mundo
          <br />
          com <span className="italic text-gold">mais elegância.</span>
        </motion.h1>

        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: easeOut }}
            className="max-w-md text-lg leading-relaxed text-ink/70"
          >
            Curadoria de armações internacionais, lentes de altíssima
            performance e um atendimento óptico feito sob medida para você.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-[13px] tracking-[0.08em] uppercase text-ivory transition-transform hover:scale-[1.03]"
            >
              Agendar atendimento
            </a>
            <a
              href="#armacoes"
              className="inline-flex items-center justify-center rounded-full border border-ink/30 px-8 py-4 text-[13px] tracking-[0.08em] uppercase transition-colors hover:border-ink"
            >
              Ver coleção
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-ink/50 md:flex"
      >
        Explorar
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
