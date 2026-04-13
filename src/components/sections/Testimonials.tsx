"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    quote:
      "Kechy ile çalışmak işimiz için dönüm noktası oldu. Yenilikçi stratejiler ve yaratıcı çözümler sayesinde yeni kitlelere ulaştık ve markamızı büyüttük. Ekibin özverisi ve uzmanlığı eşsiz.",
    name: "Emily Johnson",
    role: "Lifestyle Hub kurucusu",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    alt: "Emily Johnson portresi",
  },
  {
    quote:
      "Tasarım sistemini ve pazarlama sitesini haftalar içinde teslim ettiler. İletişim net, işçilik yüksekti ve dönüşüm metriklerimiz hemen iyileşti.",
    name: "Marcus Chen",
    role: "Ürün direktörü, Northwind",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    alt: "Marcus Chen portresi",
  },
  {
    quote:
      "Marka anlatısından arayüz inceliğine kadar Kechy gömülü bir ekip gibi hissettirdi. Sonunda ürünümüzün iddiasıyla örtüşen bir sitemiz var.",
    name: "Sofia Alvarez",
    role: "Pazarlama direktörü, Lumen Grid",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    alt: "Sofia Alvarez portresi",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const s = slides[i];
  const prev = () => setI((x) => (x === 0 ? slides.length - 1 : x - 1));
  const next = () => setI((x) => (x === slides.length - 1 ? 0 : x + 1));

  return (
    <section className="relative overflow-hidden bg-zinc-100 py-24 text-black md:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-extrabold uppercase leading-tight md:text-4xl lg:text-5xl">
          Memnun müşterilerimiz
          <br />
          ne diyor?
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-center">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm lg:max-w-none">
            <Image
              key={s.image}
              src={s.image}
              alt={s.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>

          <div className="relative">
            <div className="mb-6 flex gap-1 text-[var(--color-lime)]" aria-label="5 üzerinden 5 yıldız">
              {Array.from({ length: 5 }).map((_, k) => (
                <span key={k} className="text-xl">
                  ★
                </span>
              ))}
            </div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">Muhteşem iş.</h3>
            <blockquote className="mt-6 text-lg leading-relaxed text-zinc-700 md:text-xl">&ldquo;{s.quote}&rdquo;</blockquote>
            <p className="mt-8 font-semibold">{s.name}</p>
            <p className="text-sm text-zinc-500">{s.role}</p>

            <div className="mt-10 flex gap-3">
              <button
                type="button"
                onClick={prev}
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black transition-colors hover:bg-black hover:text-white"
                aria-label="Önceki yorum"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black transition-colors hover:bg-black hover:text-white"
                aria-label="Sonraki yorum"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 -right-24 hidden h-72 w-72 rounded-full border-8 border-[var(--color-lime)]/30 lg:block" aria-hidden />
    </section>
  );
}
