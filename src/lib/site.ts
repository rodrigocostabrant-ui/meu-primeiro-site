// Configurações centrais do site — ajuste aqui sem precisar mexer nos componentes.

const RAW_WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999";
const WHATSAPP_DIGITS = RAW_WHATSAPP.replace(/\D/g, "");

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Visiva e gostaria de agendar um horário.";

export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: "Visiva",
  tagline: "Ótica Premium",
  description:
    "Visiva — ótica premium especializada em armações de design, lentes de alta performance e atendimento óptico personalizado.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://visiva.com.br",
  phoneDisplay: "+55 (11) 99999-9999",
  email: "contato@visiva.com.br",
  address: "Rua Augusta, 2100 — Jardins, São Paulo/SP",
  hours: [
    { days: "Segunda a Sexta", time: "09h às 19h" },
    { days: "Sábado", time: "09h às 14h" },
  ],
  social: {
    instagram: "https://instagram.com/visiva",
    facebook: "https://facebook.com/visiva",
  },
  nav: [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#sobre" },
    { label: "Armações", href: "#armacoes" },
    { label: "Lentes", href: "#lentes" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],
} as const;
