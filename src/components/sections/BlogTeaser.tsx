import Link from "next/link";

const posts = [
  {
    title: "Üretim ortamında ayakta kalan tasarım sistemleri",
    excerpt: "Token’lar, bileşenler ve ölçekte tutarlı arayüz için kullandığımız yönetişim kalıpları.",
    tag: "Tasarım",
  },
  {
    title: "Odaklı MVP anlatısıyla daha hızlı lansman",
    excerpt: "İlk sürüm öncesi konumlandırma, landing hikâyesi ve analitiği nasıl hizalıyoruz.",
    tag: "Strateji",
  },
  {
    title: "Pazarlama ekibinin seveceği performans bütçeleri",
    excerpt: "Kampanyaları hızlı tutarken yaratıcı iterasyonu yavaşlatmayan pratik kontroller.",
    tag: "Mühendislik",
  },
];

export function BlogTeaser() {
  return (
    <section id="blog" className="bg-black py-24 text-white md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-lime)]">Blog</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Stüdyodan notlar</h2>
          </div>
          <Link href="/contact" className="text-sm font-semibold text-zinc-400 hover:text-white">
            Tüm yazılar →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6 transition-colors hover:border-zinc-600">
              <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-lime)]">{p.tag}</span>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{p.excerpt}</p>
              <Link href="/contact" className="mt-6 text-sm font-semibold text-white hover:text-[var(--color-lime)]">
                Yazıyı oku
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
