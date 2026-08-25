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
- **[React Three Fiber](https://r3f.docs.pmnd.rs/) + [drei](https://github.com/pmndrs/drei) + [Three.js](https://threejs.org/)** — palco 3D do Hero (placeholder hoje, modelo real da armação amanhã). Carregado sob demanda via `next/dynamic` — não entra no bundle inicial da página.
- **[lucide-react](https://lucide.dev/)** — ícones em outline.
- Fontes premium via `next/font/google`: **Fraunces** (serif, títulos) + **Manrope** (sans, corpo de texto).

## Estrutura do projeto

```
src/
  app/
    layout.tsx           # fontes, metadata (SEO/OpenGraph), shell da página
    page.tsx              # composição das seções
    globals.css            # tema (cores, tipografia, tokens Tailwind v4)
  components/
    header.tsx              # navegação sticky + menu mobile
    footer.tsx
    floating-whatsapp.tsx    # botão flutuante de WhatsApp
    whatsapp-button.tsx      # botão de WhatsApp reutilizado em todo o site
    product-card.tsx         # card de produto do catálogo de armações
    hero-stage.tsx           # orquestrador do palco 3D do Hero
    sections/                # Hero, Sobre, Armações, Lentes, Diferenciais, Depoimentos, CTA WhatsApp
    three/                   # cena 3D (ver "Palco 3D do Hero" abaixo)
    ui/reveal.tsx             # wrappers de animação de scroll (Framer Motion)
    icons/                    # ícones SVG próprios (marca, armações, redes sociais)
  hooks/
    use-pointer-parallax.ts   # tracking de mouse para o palco 3D
  lib/
    site.ts                   # conteúdo e contato centralizados (ver abaixo)
    products.ts                # catálogo de armações (ver abaixo)
    three-config.ts             # configuração do modelo 3D do Hero
    webgl.ts                     # detecção de suporte a WebGL
    utils.ts                      # helper `cn` (clsx + tailwind-merge)
public/
  models/                      # modelos .glb do Hero 3D (vazio por enquanto)
  products/                    # fotos das armações do catálogo (vazio por enquanto)
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

## Conteúdo real da Visiva

**Todo** o conteúdo institucional/contato vem de `src/lib/site.ts` — é o
único lugar a editar. Campos ainda sem informação real ficam com `null`/`[]`
e um comentário `// TODO(visiva):` explicando o formato esperado; a UI já
sabe esconder ou mostrar um texto neutro ("Em breve") enquanto isso.

Nenhum dado fictício (endereço, telefone, WhatsApp, Instagram, horário,
estatísticas, depoimentos) foi publicado — esses campos foram deixados
propositalmente vazios até você preencher com as informações reais.

| Informação | Onde preencher |
| --- | --- |
| Nome, tagline, descrição | `site.name`, `site.tagline`, `site.description` |
| Endereço, telefone, e-mail | `site.address`, `site.phoneDisplay`, `site.email` |
| WhatsApp (número do link) | `.env.local` → `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| Instagram / Facebook | `site.social` |
| Horário de funcionamento | `site.hours` |
| História / texto institucional | `site.aboutParagraphs` |
| Estatísticas (anos, clientes...) | `site.stats` |
| Marcas parceiras | `site.brands` |
| Diferenciais | `differentials` (mesmo arquivo) |
| Tecnologias de lente | `lensTechnologies` (mesmo arquivo) |
| Depoimentos | `testimonials` (mesmo arquivo) |

## Catálogo de armações

Cada armação é um item em `src/lib/products.ts` (array `products`, começa
vazio). O formato de referência está comentado no topo do arquivo. Para
adicionar uma peça:

1. Fotos em `public/products/<slug>/1.jpg`, `2.jpg`, ...
2. Um objeto `{ id, name, brand, price?, color?, description?, available?, images }` em `products`.

Preço e disponibilidade são opcionais — sem preço, o card mostra "Consulte o
preço" em vez de um valor inventado. Cada card já tem um botão de WhatsApp
que gera a mensagem `"Olá! Tenho interesse na armação [NOME]. Gostaria de
saber mais informações."` automaticamente. Enquanto `products` estiver
vazio, a seção "Armações" mostra um estado de "catálogo em preparação" em
vez de um grid quebrado.

## Palco 3D do Hero

O Hero tem uma camada 3D (React Three Fiber) preparada para receber o
modelo real de uma armação da Visiva — hoje ela mostra um placeholder
abstrato (um anel estilizado, nunca uma armação genérica) para validar
iluminação, câmera, parallax do mouse e resposta ao scroll.

**Para trocar pelo modelo real, quando ele estiver pronto:**

1. Coloque o arquivo `.glb` em `public/models/` (ex.: `visiva-hero-frame.glb`).
2. Abra `src/lib/three-config.ts` e defina `HERO_MODEL_URL` com esse caminho.
3. Ajuste `HERO_MODEL_TRANSFORM` (escala/posição/rotação) se necessário.

Nenhum outro arquivo precisa mudar — `ProductStage`
(`src/components/three/product-stage.tsx`) já decide automaticamente entre
o placeholder e o modelo real com base nesse único valor.

Outros detalhes técnicos:

- **Performance**: a cena só é carregada (`next/dynamic`, `ssr: false`)
  depois da primeira pintura da página (via `requestIdleCallback`), e só se
  o dispositivo suportar WebGL — o bundle do Three.js (~1MB) fica fora do
  carregamento inicial.
- **Acessibilidade**: com `prefers-reduced-motion: reduce`, a cena 3D nem é
  montada — é exibido um fallback estático (`hero-fallback.tsx`).
- **Fallback**: dispositivos sem WebGL recebem o mesmo fallback estático,
  automaticamente.
- **Interação**: `src/hooks/use-pointer-parallax.ts` rastreia o mouse (via
  ref, sem re-render) e `hero-stage.tsx` liga o progresso de scroll do Hero
  (Framer Motion `useScroll`) — ambos alimentam o loop de animação do R3F
  em `placeholder-piece.tsx` / `product-model.tsx`.

## Cores e tipografia

Tokens em `src/app/globals.css` (`--ink`, `--gold`, `--ivory`, etc.) e
fontes em `src/app/layout.tsx`.

## Deploy na Vercel

O projeto é 100% compatível com deploy zero-config:

1. Suba o repositório no GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. Configure as variáveis de ambiente `NEXT_PUBLIC_WHATSAPP_NUMBER` e
   `NEXT_PUBLIC_SITE_URL` no painel do projeto.
4. Deploy — a Vercel detecta o Next.js automaticamente.
