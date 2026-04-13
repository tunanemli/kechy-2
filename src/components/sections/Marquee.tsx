const items = [
  "UI/UX tasarım",
  "Hemen başla",
  "Tasarım",
  "Geliştirme",
  "Pazarlama",
  "Marka stratejisi",
  "Web tasarım",
  "Dijital pazarlama",
];

export function Marquee() {
  return (
    <div className="border-y border-black bg-[var(--color-lime)] py-3 text-black">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex shrink-0 items-center gap-10 whitespace-nowrap px-4"
              aria-hidden={dup === 1}
            >
              {items.map((label) => (
                <span key={`${dup}-${label}`} className="flex items-center gap-10 text-sm font-semibold uppercase tracking-wide">
                  <span>{label}</span>
                  <span className="text-black/40" aria-hidden>
                    ◆
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
