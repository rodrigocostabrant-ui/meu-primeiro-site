// =============================================================================
// Configuração central da Visiva — ÚNICO lugar onde os dados reais do negócio
// devem ser preenchidos. Nenhum componente deve ter texto institucional,
// contato, horário, preço ou depoimento "hardcoded" — tudo vem daqui.
//
// Campos marcados com `// TODO(visiva):` ainda não têm informação real e
// foram deixados propositalmente vazios (null / [] / "") para não publicar
// nenhum dado inventado. Os componentes já sabem lidar com esses campos
// vazios (escondem a informação ou mostram um texto neutro como "Em breve").
// =============================================================================

const RAW_WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

// Considera configurado apenas um número plausível (DDI + DDD + número).
// Evita que um valor vazio ou mal formatado gere um link quebrado no ar.
export const isWhatsappConfigured = RAW_WHATSAPP.length >= 12;

const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Visiva e gostaria de agendar um horário.";

/**
 * Monta o link do WhatsApp com uma mensagem específica. Retorna `null`
 * quando o número ainda não foi configurado — os componentes de UI devem
 * tratar esse caso (ver `src/components/whatsapp-button.tsx`), em vez de
 * apontar para um número falso.
 */
export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string | null {
  if (!isWhatsappConfigured) return null;
  return `https://wa.me/${RAW_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export type Stat = { label: string; value: string | null };
export type Differential = { title: string; description: string; icon: DifferentialIcon };
export type DifferentialIcon =
  | "exame"
  | "atendimento"
  | "ajuste"
  | "materiais"
  | "garantia"
  | "entrega";
export type LensTechnology = { name: string; description: string };
export type Testimonial = { quote: string; name: string; role?: string };

export const site = {
  name: "Visiva",
  tagline: "Ótica Premium",
  description:
    "Visiva — ótica premium especializada em armações de design, lentes de alta performance e atendimento óptico personalizado.",

  // TODO(visiva): defina o domínio real (próprio ou o gerado pela Vercel)
  // em NEXT_PUBLIC_SITE_URL antes de publicar. Usamos um domínio de exemplo
  // (RFC 2606) como placeholder para não sugerir uma URL real inexistente.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://visiva.example.com",

  // TODO(visiva): preencha com o telefone/WhatsApp real, formatado para
  // exibição (ex.: "+55 (11) 91234-5678"). O número usado nos links do
  // WhatsApp vem de NEXT_PUBLIC_WHATSAPP_NUMBER (.env.local) — são dois
  // campos porque um é o texto exibido e o outro é o número técnico do link.
  phoneDisplay: null as string | null,

  // TODO(visiva): e-mail real de contato da loja.
  email: null as string | null,

  // TODO(visiva): endereço completo real da loja.
  address: null as string | null,

  // TODO(visiva): horário de funcionamento real.
  // Exemplo de formato ao preencher:
  // hours: [{ days: "Segunda a Sexta", time: "09h às 19h" }, { days: "Sábado", time: "09h às 14h" }],
  hours: [] as { days: string; time: string }[],

  // TODO(visiva): link real do Instagram (e opcionalmente do Facebook).
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
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

  // TODO(visiva): texto institucional real — história, filosofia e
  // posicionamento da Visiva. O texto abaixo é um placeholder editorial
  // (sem números, datas ou fatos específicos inventados) apenas para manter
  // a seção "Sobre" com o peso visual correto até a versão definitiva.
  aboutParagraphs: [
    "A Visiva reúne curadoria de armações de design e lentes de alta performance em uma experiência óptica pensada nos mínimos detalhes.",
    "Substitua este texto pela história real da Visiva: como a ótica nasceu, o que motiva o trabalho da equipe e o que torna o atendimento diferente.",
  ],

  // TODO(visiva): números reais (anos de atuação, clientes atendidos,
  // marcas parceiras, índice de satisfação). Mantemos os rótulos e o
  // layout prontos; os valores ficam null até haver dado real para não
  // publicar uma estatística inventada.
  stats: [
    { label: "Anos de experiência", value: null },
    { label: "Clientes atendidos", value: null },
    { label: "Marcas parceiras", value: null },
    { label: "Satisfação", value: null },
  ] as Stat[],

  // TODO(visiva): marcas realmente trabalhadas pela Visiva (nomes exatos).
  // Enquanto vazio, a faixa de marcas na seção "Sobre" fica oculta.
  brands: [] as string[],

  // TODO(visiva): reservado para uma futura listagem de serviços prestados
  // (ex.: exame de vista, ajuste, manutenção) — hoje não há uma seção
  // dedicada na página; o campo existe para reaproveitar em SEO/JSON-LD ou
  // em uma seção de serviços futura, sem inventar a lista agora.
  services: [] as string[],
} as const;

// Diferenciais exibidos na seção "Diferenciais". Os rótulos descrevem
// categorias de serviço padrão de uma ótica (não são específicos da
// Visiva); comprometimentos numéricos (prazos, meses de garantia) foram
// deixados genéricos até serem confirmados.
// TODO(visiva): revise cada descrição e, se quiser, adicione números reais
// (ex.: prazo de entrega, meses de garantia).
export const differentials: Differential[] = [
  {
    title: "Exame de precisão digital",
    description:
      "Refração computadorizada e topografia para um diagnóstico exato do seu grau.",
    icon: "exame",
  },
  {
    title: "Atendimento personalizado",
    description:
      "Consultoria de estilo e ajuste facial com nossos especialistas ópticos.",
    icon: "atendimento",
  },
  {
    title: "Ajuste sob medida",
    description:
      "Regulagem milimétrica de haste, ponte e curvatura para o encaixe perfeito.",
    icon: "ajuste",
  },
  {
    title: "Curadoria de materiais nobres",
    description:
      "Acetatos italianos, titânio e metais preciosos selecionados a dedo.",
    icon: "materiais",
  },
  {
    title: "Garantia",
    description: "Garantia em armações e lentes, com manutenção gratuita.",
    icon: "garantia",
  },
  {
    title: "Entrega acompanhada",
    description: "Sua armação pronta com lentes montadas, com prazo combinado na loja.",
    icon: "entrega",
  },
];

// Tecnologias de lente oferecidas — descrições genéricas do que cada
// tecnologia faz (não são alegações específicas sobre a Visiva).
// TODO(visiva): ajuste a lista para refletir exatamente o que a Visiva
// oferece hoje (laboratórios parceiros, marcas de lente, etc.).
export const lensTechnologies: LensTechnology[] = [
  {
    name: "Antirreflexo Premium",
    description:
      "Multicamadas que eliminam reflexos, reduzem fadiga visual e prolongam a durabilidade da lente.",
  },
  {
    name: "Fotossensíveis",
    description:
      "Adaptação automática à luminosidade — proteção UV dentro e fora de ambientes.",
  },
  {
    name: "Filtro de Luz Azul",
    description:
      "Redução da luz emitida por telas, pensada para rotinas longas de trabalho digital.",
  },
  {
    name: "Hidrofóbicas",
    description:
      "Superfície que repele água, poeira e gordura — lentes limpas por muito mais tempo.",
  },
];

// TODO(visiva): depoimentos reais de clientes (com autorização deles para
// uso no site). Propositalmente vazio — nenhum nome/depoimento fictício.
// Formato ao preencher:
// { quote: "...", name: "Nome do cliente", role: "Cliente desde 20XX" }
export const testimonials: Testimonial[] = [];
