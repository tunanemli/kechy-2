import Image from "next/image";

const people = [
  {
    name: "David K. Rozar",
    role: "Kurucu ve CEO",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&q=80",
  },
  {
    name: "Rebecca Kayla",
    role: "Kıdemli geliştirici",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=640&q=80",
  },
  {
    name: "Anthony Steven",
    role: "Kıdemli tasarımcı",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=640&q=80",
  },
];

export function Team() {
  return (
    <section className="bg-white py-24 text-black md:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
        <h2 className="max-w-3xl font-display text-3xl font-extrabold uppercase leading-tight md:text-4xl lg:text-5xl">
          Hızla büyüyen, uzaktan odaklı ekip
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {people.map((p) => (
            <div key={p.name}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-100">
                <Image src={p.src} alt={p.name} fill className="object-cover" sizes="(max-width:768px) 100vw 33vw" />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-sm font-bold shadow">
                  in
                </div>
              </div>
              <h3 className="mt-6 font-display text-lg font-bold">{p.name}</h3>
              <p className="text-sm text-zinc-600">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
