import Link from "next/link";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="bg-white py-24 text-black md:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-12">
          <div>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl">
              Dijital
              <br />
              çözüm sunuyoruz.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-zinc-600">
              Anlamlı bir dijital proje için uzman arıyorsanız buradan kolayca bize ulaşabilirsiniz.
            </p>
            <Link
              href="/hizmetler"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-lime)] px-8 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              Hizmetleri keşfet
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid gap-0 sm:grid-cols-2">
            {services.map((s, idx) => (
              <div
                key={s.id}
                className={`group flex gap-4 border-zinc-200 py-10 sm:px-6 ${
                  idx % 2 === 0 ? "sm:border-r" : ""
                } border-b sm:border-b-0 ${idx < 4 ? "sm:border-b" : ""}`}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 text-2xl text-black transition-colors group-hover:bg-[var(--color-lime)]">
                  <span aria-hidden>{s.icon}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{s.body}</p>
                  <Link
                    href={`/hizmetler#${s.id}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-zinc-600"
                  >
                    Detayları gör
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 text-xs transition-colors group-hover:border-black">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
