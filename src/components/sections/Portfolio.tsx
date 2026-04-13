"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["Tümü", "Uygulama tasarımı", "Markalaşma", "Pazarlama", "Geliştirme"] as const;
type Category = (typeof categories)[number];

const projects: {
  title: string;
  tag: string;
  category: Exclude<Category, "Tümü">;
  src: string;
  alt: string;
}[] = [
  {
    title: "Özel ödeme geçidi",
    tag: "Uygulama tasarımı",
    category: "Uygulama tasarımı",
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80",
    alt: "Mobil ödeme uygulaması arayüzü",
  },
  {
    title: "Marka izleme ve analiz",
    tag: "Markalaşma",
    category: "Markalaşma",
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
    alt: "Marka kimliği ve tasarım çalışması",
  },
  {
    title: "Dijital strateji danışmanlığı",
    tag: "Pazarlama",
    category: "Pazarlama",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    alt: "Analitik paneli ve pazarlama stratejisi",
  },
  {
    title: "Web sitesi bakım ve destek",
    tag: "Geliştirme",
    category: "Geliştirme",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
    alt: "Geliştirici çalışma alanı ve kod ekranı",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-zinc-100 py-24 text-black md:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-display text-7xl font-extrabold leading-none tracking-tight md:text-8xl lg:text-9xl">
              300<span className="text-[var(--color-lime)]">+</span>
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight md:text-4xl">
              Yakın zamanda tamamlanan projeler
            </h2>
          </div>
          <a
            href="/contact"
            className="inline-flex h-12 w-fit items-center gap-2 rounded-full border-2 border-black px-8 text-sm font-semibold hover:bg-black hover:text-white"
          >
            Daha fazla proje
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="Tümü" className="w-full">
            <TabsList className="mb-10 w-full max-w-full flex-wrap justify-start rounded-2xl border-zinc-300 bg-white/80 p-1.5 lg:w-auto">
              {categories.map((c) => (
                <TabsTrigger key={c} value={c} className="rounded-xl px-4 py-2 text-xs md:text-sm">
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((c) => (
              <PortfolioGrid key={c} category={c} />
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function PortfolioGrid({ category }: { category: Category }) {
  const list =
    category === "Tümü" ? projects : projects.filter((p) => p.category === category);

  return (
    <TabsContent value={category} className="outline-none">
      {list.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-zinc-300 bg-white/60 py-16 text-center text-zinc-500">
          Bu kategoride henüz proje yok.
        </p>
      ) : (
        <div className="grid gap-10 md:grid-cols-2">
          {list.map((p, i) => (
            <article
              key={p.title}
              className={`group ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <a href="/contact" className="block overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold leading-snug md:text-2xl">{p.title}</h3>
                  <span className="mt-4 inline-block rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium uppercase tracking-wide text-zinc-600">
                    {p.tag}
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      )}
    </TabsContent>
  );
}
