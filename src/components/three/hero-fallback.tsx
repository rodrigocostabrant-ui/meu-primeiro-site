/**
 * Fallback estático do palco do Hero — usado quando o dispositivo não
 * suporta WebGL, quando `prefers-reduced-motion` está ativo, e como estado
 * de carregamento enquanto a cena 3D é importada. Composição puramente
 * abstrata (luz + anel), sem nenhuma forma de armação, para nunca sugerir
 * um produto que não existe.
 */
export function HeroFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        aria-hidden="true"
        className="h-[46%] w-[46%] min-h-[220px] min-w-[220px] max-h-[420px] max-w-[420px] rounded-full border border-gold/25"
        style={{
          background:
            "radial-gradient(circle at 38% 32%, rgba(207,174,130,0.28), transparent 60%)",
        }}
      />
    </div>
  );
}
