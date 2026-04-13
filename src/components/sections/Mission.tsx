import Image from "next/image";
import Link from "next/link";

export function Mission() {
  return (
    <section className="bg-black py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
        <h2 className="max-w-5xl font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          <span className="text-zinc-500">Kechy, pazarı harekete geçiren fikirler üretir</span>—pozisyonunuzu
          güçlendirir, marka gelirinizi artırır ve yenilikçi stratejilerle şirket değerinizi yükseltir.
        </h2>

        <div className="mt-16 grid gap-10 lg:grid-cols-[460px_1fr] lg:items-stretch">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 lg:aspect-auto lg:min-h-[460px]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=920&q=80"
              alt="Modern stüdyoda iş birliği yapan ekip"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 460px"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                Tanıtım videosu
              </span>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1fr_1px_1fr]">
            <div className="hidden bg-zinc-900/50 lg:block" aria-hidden />
            <div className="hidden w-px bg-zinc-800 lg:block" aria-hidden />
            <div className="flex flex-col justify-center px-0 lg:pl-12">
              <p className="text-base leading-relaxed text-zinc-400">
                Yaratıcılığın inovasyonla buluştuğu Kechy&apos;ye hoş geldiniz. 2015&apos;te kurulduk; fikirleri etkili
                dijital deneyimlere dönüştürmeye adanmış bir dijital ajansız. Tasarımcı, geliştirici ve stratejist
                ekibimiz, sonuç üreten ve markanızı yükselten çözümleri birlikte teslim eder.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-[var(--color-lime)] px-8 text-sm font-semibold text-black"
              >
                Hakkımızda
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
