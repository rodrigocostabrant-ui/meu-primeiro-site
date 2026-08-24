"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { GlassesMark } from "@/components/icons/glasses-mark";
import { cn } from "@/lib/utils";
import { site, whatsappLink } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-line shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-px flex h-20 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <GlassesMark className="h-5 w-auto text-ink transition-colors group-hover:text-gold" />
          <span className="font-display text-xl tracking-[0.14em] uppercase">
            {site.name}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-[0.08em] uppercase text-ink/70 hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-ink px-6 py-2.5 text-[13px] tracking-[0.08em] uppercase transition-colors hover:bg-ink hover:text-ivory"
          >
            Agendar horário
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-ivory border-b border-line"
          >
            <nav className="container-px flex flex-col gap-1 py-6">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-lg font-display border-b border-line/70 last:border-none"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-[13px] tracking-[0.08em] uppercase text-ivory"
              >
                Agendar horário
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
