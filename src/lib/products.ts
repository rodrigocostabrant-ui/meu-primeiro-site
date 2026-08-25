// =============================================================================
// Catálogo de armações da Visiva
// =============================================================================
//
// Este arquivo é a fonte de dados do catálogo exibido na seção "Armações"
// (`src/components/sections/frames.tsx`, via `ProductCard`). Para adicionar
// uma peça real:
//
//   1. Coloque as fotos em `public/products/<slug-do-produto>/`, por
//      exemplo: public/products/aurora-titanio/1.jpg, 2.jpg, 3.jpg
//   2. Adicione um objeto ao array `products` abaixo seguindo o formato de
//      `EXAMPLE_PRODUCT` (deixado apenas como referência, não é exibido).
//   3. Preço, cor e disponibilidade são opcionais — quando omitidos, o card
//      mostra "Consulte o preço"/"Sob consulta" em vez de inventar um valor.
//
// O array começa vazio de propósito: nenhuma armação, marca, preço ou foto
// deve ser inventada. Enquanto vazio, a seção mostra um estado premium de
// "coleção em preparação" (ver `frames.tsx`).

export type Product = {
  /** Identificador único e estável — usado como key e no slug de imagens. */
  id: string;
  name: string;
  brand: string;
  /** Preço em reais (ex.: 890). Omita quando o preço ainda não for definido. */
  price?: number;
  color?: string;
  description?: string;
  /** Padrão: true. Defina false para "Sob encomenda" / indisponível. */
  available?: boolean;
  /** Caminhos em /public, ex.: ["/products/aurora-titanio/1.jpg"]. */
  images: string[];
};

// Referência de formato (não faz parte do catálogo publicado):
//
// const products: Product[] = [
//   {
//     id: "aurora-titanio",
//     name: "Aurora",
//     brand: "Nome da marca real",
//     price: 890,
//     color: "Titânio escovado",
//     description: "Descrição real da peça — material, formato, acabamento.",
//     available: true,
//     images: ["/products/aurora-titanio/1.jpg", "/products/aurora-titanio/2.jpg"],
//   },
// ];

// TODO(visiva): adicione as armações reais aqui.
export const products: Product[] = [];

export function whatsappProductMessage(product: Pick<Product, "name">) {
  return `Olá! Tenho interesse na armação ${product.name}. Gostaria de saber mais informações.`;
}

export function formatPrice(price?: number) {
  if (price == null) return null;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(price);
}
