import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "İletişim — Kechy",
  description:
    "Kechy ile projenizi konuşun. İstanbul ve uzaktan dünya genelinde hizmet. E-posta veya form üzerinden ulaşın.",
};

export default function ContactPage() {
  return (
    <>
      <div>
        <section className="border-b border-zinc-800 bg-black px-4 py-16 text-white md:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-brand)]">KECHY</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl">
              İletişim
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Yeni bir proje, iş birliği veya teklif için yazın. Ekibimiz mesajınızı okuyup size en uygun kanaldan dönecek.
            </p>
          </div>
        </section>

        <section className="bg-zinc-100 px-4 py-16 md:px-6 md:py-24 lg:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-20">
            <div className="text-black">
              <h2 className="font-display text-2xl font-bold md:text-3xl">Bize ulaşın</h2>
              <p className="mt-4 max-w-md text-zinc-600">
                Ofis ve uzaktan çalışma modeliyle esnek iletişim kuruyoruz. Öncelikli kanal e-postadır.
              </p>
              <ul className="mt-10 space-y-6 text-sm md:text-base">
                <li>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Adres</p>
                  <p className="mt-1 font-medium">İstanbul · Dünya genelinde uzaktan</p>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">E-posta</p>
                  <a href="mailto:hello@kechy.studio" className="mt-1 inline-block font-medium hover:text-zinc-600">
                    hello@kechy.studio
                  </a>
                </li>
              </ul>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/hizmetler"
                  className="inline-flex h-11 items-center rounded-full border-2 border-black px-6 text-sm font-semibold hover:bg-black hover:text-white"
                >
                  Hizmetler
                </Link>
                <Link href="/" className="inline-flex h-11 items-center text-sm font-semibold text-zinc-600 hover:text-black">
                  ← Ana sayfa
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm md:p-10">
              <h2 className="font-display text-xl font-bold text-black md:text-2xl">Mesaj gönderin</h2>
              <p className="mt-2 text-sm text-zinc-600">Alanları doldurun; demo veya teklif talebinizi iletin.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
