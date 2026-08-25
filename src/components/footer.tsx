import { Mail, MapPin, Phone } from "lucide-react";
import { GlassesMark } from "@/components/icons/glasses-mark";
import { FacebookIcon, InstagramIcon } from "@/components/icons/social";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const hasSocial = site.social.instagram || site.social.facebook;
  const hasContact = site.address || site.phoneDisplay || site.email;

  return (
    <footer className="bg-ivory pt-24">
      <div className="container-px grid gap-14 border-t border-line pt-16 pb-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <a href="#hero" className="flex items-center gap-2.5">
            <GlassesMark className="h-5 w-auto text-ink" />
            <span className="font-display text-xl tracking-[0.14em] uppercase">
              {site.name}
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/55">
            {site.description}
          </p>
          {hasSocial && (
            <div className="mt-6 flex items-center gap-4">
              {site.social.instagram && (
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/60 transition-colors hover:border-ink hover:text-ink"
                >
                  <InstagramIcon size={16} />
                </a>
              )}
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/60 transition-colors hover:border-ink hover:text-ink"
                >
                  <FacebookIcon size={16} />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="lg:col-span-2 lg:col-start-6">
          <p className="text-[13px] tracking-[0.12em] uppercase text-ink/40">
            Navegação
          </p>
          <ul className="mt-5 space-y-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-ink/65 transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[13px] tracking-[0.12em] uppercase text-ink/40">
            Contato
          </p>
          {hasContact ? (
            <ul className="mt-5 space-y-3 text-sm text-ink/65">
              {site.address && (
                <li className="flex items-start gap-2.5">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-ink/40" />
                  {site.address}
                </li>
              )}
              {site.phoneDisplay && (
                <li className="flex items-center gap-2.5">
                  <Phone size={16} className="shrink-0 text-ink/40" />
                  {site.phoneDisplay}
                </li>
              )}
              {site.email && (
                <li className="flex items-center gap-2.5">
                  <Mail size={16} className="shrink-0 text-ink/40" />
                  {site.email}
                </li>
              )}
            </ul>
          ) : (
            <p className="mt-5 text-sm text-ink/45">Em breve</p>
          )}
        </div>

        <div className="lg:col-span-2">
          <p className="text-[13px] tracking-[0.12em] uppercase text-ink/40">
            Horário
          </p>
          {site.hours.length > 0 ? (
            <ul className="mt-5 space-y-3 text-sm text-ink/65">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <span className="block text-ink/80">{h.days}</span>
                  {h.time}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-sm text-ink/45">Em breve</p>
          )}
        </div>
      </div>

      <div className="border-t border-line py-6">
        <div className="container-px flex flex-col items-center justify-between gap-3 text-xs text-ink/45 sm:flex-row">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p>Desenvolvido com Claude Code.</p>
        </div>
      </div>
    </footer>
  );
}
