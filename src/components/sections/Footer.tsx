import Link from "next/link";

const cols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Ajans",
    links: [
      { label: "Hakkımızda", href: "/" },
      { label: "Kariyer", href: "/" },
      { label: "Basın", href: "/" },
      { label: "İletişim", href: "/contact" },
    ],
  },
  {
    title: "Hizmetler",
    links: [
      { label: "Marka", href: "/hizmetler#marka-stratejisi" },
      { label: "Ürün tasarımı", href: "/hizmetler#ui-ux-tasarim" },
      { label: "Geliştirme", href: "/hizmetler#web-gelistirme" },
      { label: "Pazarlama", href: "/hizmetler#dijital-pazarlama" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black pt-20 text-zinc-400">
      <div className="mx-auto max-w-[1440px] px-4 pb-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl font-bold text-white hover:text-zinc-200">
              KECHY
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              İstanbul · Dünya genelinde uzaktan
              <br />
              <a href="mailto:kechycreative@gmail.com" className="hover:text-white">
                kechycreative@gmail.com
              </a>
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex text-sm font-semibold text-[var(--color-lime)] hover:underline"
            >
              İletişim sayfası →
            </Link>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{c.title}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-zinc-900 pt-8 text-xs md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Kechy. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white">
              Kullanım şartları
            </Link>
            <span aria-hidden>|</span>
            <Link href="/" className="hover:text-white">
              Gizlilik politikası
            </Link>
          </div>
        </div>
      </div>
      <p
        className="pointer-events-none select-none pb-6 text-center font-display text-[12vw] font-extrabold leading-none text-zinc-900 md:text-[10vw]"
        aria-hidden
      >
        KECHY
      </p>
    </footer>
  );
}
