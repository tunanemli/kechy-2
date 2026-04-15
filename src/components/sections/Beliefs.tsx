import Image from "next/image";
import Link from "next/link";

export function Beliefs() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 md:py-32">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
          alt=""
          fill
          className="object-cover opacity-30 grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="ml-auto max-w-md rounded-3xl bg-[var(--color-lime)] p-10 text-black shadow-2xl md:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black/10 text-2xl font-bold">K.</div>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide opacity-80">
            Ödüllü Kreatif Ajans
          </p>
          <h2 className="mt-6 font-display text-2xl font-extrabold leading-tight md:text-3xl">
            Kaliteye inanıyoruz, niceliğe değil
          </h2>
          <ul className="mt-8 space-y-3 text-sm font-semibold">
            <li>+ Uzmanlaşmış yetkinlikler</li>
            <li>+ Müşteri odaklı yaklaşım</li>
            <li>+ Stratejiden üretime tek ekip</li>
          </ul>
          <Link
            href="/contact"
            className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-black px-8 text-sm font-semibold text-white"
          >
            Hemen başlayın
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
