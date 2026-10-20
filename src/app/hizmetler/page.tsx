import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Hizmetler — Kechy",
  description:
    "Marka stratejisi, UI/UX, web geliştirme, dijital pazarlama, video ve web tasarım. Kechy ile dijital ürününüzü birlikte büyütelim.",
};

export default function HizmetlerPage() {
  return (
    <>
      <div>
        <section className="border-b border-zinc-800 bg-black px-4 py-16 text-white md:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-brand)]">KECHY</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Hizmetler
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Stratejiden üretime kadar uçtan uca eşlik ediyoruz. Her hizmet, ölçülebilir sonuç ve sürdürülebilir
              büyüme için tasarlanır.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-brand)] px-8 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              Proje konuşalım
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        <section className="bg-white px-4 py-16 text-black md:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-[1440px] space-y-16 md:space-y-24">
            {services.map((s, index) => (
              <article
                key={s.id}
                id={s.id}
                className={`grid gap-10 border-zinc-200 pb-16 md:grid-cols-[auto_1fr] md:gap-14 md:pb-24 ${
                  index < services.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 text-3xl md:h-24 md:w-24 md:text-4xl">
                  <span aria-hidden>{s.icon}</span>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold md:text-3xl">{s.title}</h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">{s.body}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-zinc-800 md:text-base">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand)]" aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-zinc-600"
                  >
                    Bu hizmet için teklif al
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-zinc-100 px-4 py-16 md:px-6 md:py-20 lg:px-8">
          <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-black md:text-3xl">Hangi adımı birlikte atalım?</h2>
              <p className="mt-2 max-w-xl text-zinc-600">
                Kısa bir brif ile başlayıp size özel kapsam ve zaman çizelgesi paylaşalım.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-black px-8 text-sm font-semibold text-black hover:bg-black hover:text-white"
              >
                Ana sayfa
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                İletişime geç
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
