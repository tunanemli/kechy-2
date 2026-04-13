const blocks = [
  { big: "29", label: "Yıllık ajans deneyimi", accent: false },
  { big: "40+", label: "Mühendislik ve üretim üyesi", accent: true },
  { big: "2K", label: "Başarıyla tamamlanan proje", accent: true },
  { big: "25", label: "Ödüllü ajans başarısı", accent: false, highlight: true },
];

export function Stats() {
  return (
    <section className="border-y border-zinc-800 bg-black py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-px bg-zinc-800 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-4 lg:px-8">
        {blocks.map((b) => (
          <div
            key={b.label}
            className={`relative flex min-h-[200px] flex-col justify-between p-8 md:p-10 ${
              b.highlight ? "bg-[var(--color-lime)] text-black" : "bg-black"
            }`}
          >
            <div className="absolute right-4 top-4 h-4 w-4 rounded-sm border border-current opacity-40" aria-hidden />
            <p
              className={`font-display text-6xl font-extrabold leading-none md:text-7xl ${
                b.accent && !b.highlight ? "flex items-start gap-1" : ""
              }`}
            >
              {b.big}
              {b.accent && !b.highlight ? (
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-zinc-600 text-2xl font-bold text-[var(--color-lime)]">
                  +
                </span>
              ) : null}
            </p>
            <p className={`max-w-[16rem] text-sm font-medium ${b.highlight ? "text-black/80" : "text-zinc-400"}`}>
              {b.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
