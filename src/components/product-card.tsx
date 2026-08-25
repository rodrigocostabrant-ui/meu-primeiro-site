import Image from "next/image";
import { formatPrice, whatsappProductMessage, type Product } from "@/lib/products";
import { WhatsappButton } from "@/components/whatsapp-button";
import { GlassesMark } from "@/components/icons/glasses-mark";

export function ProductCard({ product }: { product: Product }) {
  const price = formatPrice(product.price);
  const available = product.available ?? true;
  const cover = product.images[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-[22px] border border-line bg-ivory transition-colors hover:border-gold/40">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
        {cover ? (
          <Image
            src={cover}
            alt={`${product.name} — ${product.brand}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <GlassesMark className="h-8 w-auto text-ink/15" />
          </div>
        )}

        {!available && (
          <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-[11px] tracking-[0.08em] uppercase text-ivory">
            Sob encomenda
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] tracking-[0.16em] uppercase text-gold">{product.brand}</p>
        <h3 className="mt-1.5 font-display text-xl">{product.name}</h3>

        {product.color && <p className="mt-1 text-sm text-ink/50">{product.color}</p>}

        {product.description && (
          <p className="mt-3 text-sm leading-relaxed text-ink/60">{product.description}</p>
        )}

        <div className="mt-5 flex flex-1 items-end justify-between gap-4 border-t border-line pt-4">
          <span className="font-display text-lg">{price ?? "Consulte o preço"}</span>

          <WhatsappButton
            label="WhatsApp"
            message={whatsappProductMessage(product)}
            className="inline-flex shrink-0 items-center rounded-full border border-ink px-4 py-2 text-[12px] tracking-[0.06em] uppercase transition-colors hover:bg-ink hover:text-ivory"
          />
        </div>
      </div>
    </article>
  );
}
