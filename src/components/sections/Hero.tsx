import Link from "next/link";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-black pt-[72px] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[var(--color-lime)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        <svg
          className="absolute left-0 top-32 hidden opacity-40 lg:block"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden
        >
          <path
            d="M20 200 Q100 80 200 200 T380 200"
            stroke="url(#g1)"
            strokeWidth="1.2"
          />
          <path
            d="M20 240 Q120 120 220 240 T380 240"
            stroke="url(#g1)"
            strokeWidth="0.8"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="400" y2="0">
              <stop stopColor="#c6ff00" stopOpacity="0" />
              <stop offset="0.5" stopColor="#c6ff00" stopOpacity="0.6" />
              <stop offset="1" stopColor="#c6ff00" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col px-4 pb-24 pt-16 md:px-6 lg:px-8 lg:pt-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-lime)]">
            KECHY
          </p>
          <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Kreatif
            <br />
            <span className="text-zinc-500">Ajans</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-zinc-400 md:text-lg">
            Bir araya getirdiğimiz fikirlerle ürünleri hayata geçiriyor, strateji, tasarım ve mühendislikle markaları
            büyütüyoruz—hız isteyen ama ödün vermeyen ekipler için.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/hizmetler"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-lime)] px-8 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              Hizmetleri gör
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-zinc-700 px-8 text-sm font-semibold text-white hover:border-zinc-500"
            >
              İşlerimiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
