import type { ReactNode } from "react";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type WhatsappButtonProps = {
  label: ReactNode;
  message?: string;
  className?: string;
  onClick?: () => void;
};

/**
 * Botão de contato via WhatsApp usado em todo o site (header, hero, CTA
 * principal, cards de produto, botão flutuante). Centraliza a checagem de
 * `isWhatsappConfigured`: enquanto o número real não for definido em
 * `NEXT_PUBLIC_WHATSAPP_NUMBER`, o botão aparece desabilitado em vez de
 * apontar para um número inventado — evita publicar um CTA que não
 * converte de verdade.
 */
export function WhatsappButton({ label, message, className, onClick }: WhatsappButtonProps) {
  const href = whatsappLink(message);

  if (!href) {
    return (
      <span
        role="link"
        aria-disabled="true"
        title="WhatsApp ainda não configurado (defina NEXT_PUBLIC_WHATSAPP_NUMBER)"
        className={cn(className, "cursor-not-allowed opacity-40")}
      >
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {label}
    </a>
  );
}
