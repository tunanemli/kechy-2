const logos = ["Acme", "Vertex", "Pulse", "Lumen", "North", "Atlas"];

export function Partners() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-12">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
          <div className="hidden h-px w-32 bg-zinc-300 md:block" />
          <p className="text-center text-sm font-medium uppercase tracking-wide text-zinc-500">
            Dünyanın önde gelen markalarıyla çalıştık
          </p>
          <div className="hidden h-px w-32 bg-zinc-300 md:block" />
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale">
          {logos.map((name) => (
            <span key={name} className="font-display text-lg font-bold text-zinc-800">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
