# Visiva — Landing Page

Landing page premium para a **Visiva**, uma ótica especializada em armações de
design e lentes de alta performance. Este é meu primeiro projeto criado com o
[Claude Code](https://claude.com/claude-code), o assistente de programação da
Anthropic.

## Stack técnica

- **[Next.js 16](https://nextjs.org/)** (App Router, React Server Components) — build otimizado, SEO nativo e deploy zero-config na Vercel.
- **TypeScript** — tipagem estática em todo o projeto.
- **Tailwind CSS v4** — estilização utilitária, tema definido via `@theme` em `src/app/globals.css`.
- **[Framer Motion](https://motion.dev/)** — animações de entrada e de scroll (`whileInView`), com suporte a `prefers-reduced-motion`.
- **[lucide-react](https://lucide.dev/)** — ícones em outline.
- Fontes premium via `next/font/google`: **Fraunces** (serif, títulos) + **Manrope** (sans, corpo de texto).

Sem dependência de fotos externas: a identidade visual usa tipografia,
espaço em branco e ilustrações em SVG (armações em line-art) — fácil de
trocar por fotografia real de produto quando disponível (veja
[Personalização](#personalização)).

## Estrutura do projeto

```
src/
  app/
    layout.tsx        # fontes, metadata (SEO/OpenGraph), shell da página
    page.tsx           # composição das seções
    globals.css         # tema (cores, tipografia, tokens Tailwind v4)
  components/
    header.tsx           # navegação sticky + menu mobile
    footer.tsx
    floating-whatsapp.tsx # botão flutuante de WhatsApp
    sections/            # Hero, Sobre, Armações, Lentes, Diferenciais, Depoimentos, CTA WhatsApp
    ui/reveal.tsx         # wrappers de animação de scroll (Framer Motion)
    icons/                # ícones SVG próprios (marca, armações, redes sociais)
  lib/
    site.ts               # configurações centrais (WhatsApp, contato, navegação)
    utils.ts               # helper `cn` (clsx + tailwind-merge)
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Outros scripts:

```bash
npm run build   # build de produção
npm run start   # servir o build de produção
npm run lint     # ESLint
```

## Personalização

1. **WhatsApp e contato** — copie `.env.example` para `.env.local` e ajuste
   `NEXT_PUBLIC_WHATSAPP_NUMBER`. Endereço, e-mail, horário e redes sociais
   ficam em `src/lib/site.ts`.
2. **Conteúdo das seções** — cada seção em `src/components/sections/*` tem
   seus textos/arrays de dados no topo do arquivo, fáceis de editar.
3. **Cores e tipografia** — tokens em `src/app/globals.css` (`--ink`,
   `--gold`, `--ivory`, etc.) e fontes em `src/app/layout.tsx`.
4. **Fotografia real** — para substituir os ícones SVG por fotos de
   produto, adicione as imagens em `public/` e use `next/image` nos
   componentes de `sections/frames.tsx` e `sections/lenses.tsx`.

## Deploy na Vercel

O projeto é 100% compatível com deploy zero-config:

1. Suba o repositório no GitHub (já feito).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. Configure as variáveis de ambiente `NEXT_PUBLIC_WHATSAPP_NUMBER` e
   `NEXT_PUBLIC_SITE_URL` no painel do projeto.
4. Deploy — a Vercel detecta o Next.js automaticamente.
