const blocks = [
  { big: "10", label: "Yıllık ajans deneyimi", accent: false },
  { big: "12", label: "Mühendislik ve üretim üyesi", accent: true },
  { big: "150", label: "Başarıyla tamamlanan proje", accent: true },
];

export function Stats() {
  return (
    <section className="border-y border-zinc-800 bg-black py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-px bg-zinc-800 px-4 md:grid-cols-3 md:px-6 lg:px-8">
        {blocks.map((b) => (
          <div
            key={b.label}
            className="relative flex min-h-[200px] flex-col justify-between bg-black p-8 md:p-10"
          >
            <div className="absolute right-4 top-4 h-4 w-4 rounded-sm border border-current opacity-40" aria-hidden />
            <p
              className={`font-display text-6xl font-extrabold leading-none md:text-7xl ${
                b.accent ? "flex items-start gap-1" : ""
              }`}
            >
              {b.big}
              {b.accent ? (
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-zinc-600 text-2xl font-bold text-[var(--color-lime)]">
                  +
                </span>
              ) : null}
            </p>
            <p className="max-w-[16rem] text-sm font-medium text-zinc-400">
              {b.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
