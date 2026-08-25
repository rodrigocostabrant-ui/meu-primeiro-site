"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";

export function FloatingWhatsapp() {
  const [visible, setVisible] = useState(false);
  const href = whatsappLink();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Enquanto o WhatsApp não estiver configurado, não exibimos um botão que
  // não levaria a lugar nenhum — ver src/lib/site.ts (NEXT_PUBLIC_WHATSAPP_NUMBER).
  if (!href) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-ivory shadow-lg shadow-black/15 transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
        >
          <MessageCircle size={24} strokeWidth={1.6} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
