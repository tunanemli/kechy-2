import { cn } from "@/lib/utils";

/**
 * Language indicator. Only English exists today, so TR is shown as
 * upcoming rather than as a working link.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  return (
    <div role="group" aria-label="Language" className={cn("flex items-center gap-1.5 text-xs font-medium tracking-[0.14em]", className)}>
      <span aria-current="true" className="text-foreground">
        EN
      </span>
      <span aria-hidden="true" className="text-line">
        /
      </span>
      <span className="cursor-not-allowed text-subtle" title="Türkçe sürüm yakında — Turkish version coming soon">
        TR<span className="sr-only"> (Turkish version coming soon)</span>
      </span>
    </div>
  );
}
