import { Logo } from "@/components/layout/Logo";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/routing";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

/**
 * Hero brand composition: the creative side (the brand tile with the supplied
 * logo) layered with the technical side (a code window). Decorative only; the
 * headline carries the message.
 */
export function HeroVisual({ locale }: { locale: Locale }) {
  const { visual } = getDictionary(locale).hero;

  return (
    <div aria-hidden="true" className="relative mx-auto aspect-[5/6] w-full max-w-[520px] sm:aspect-[6/5] lg:aspect-[5/6]">
      {/* Creative: brand tile */}
      <div
        className="animate-rise absolute top-0 right-0 flex h-[68%] w-[82%] flex-col justify-between overflow-hidden rounded-[6px] bg-brand p-[6%]"
        style={delay(260)}
      >
        <div className="flex items-center justify-between text-[0.6875rem] font-medium tracking-[0.2em] text-background uppercase">
          <span>{visual.creative}</span>
          <span>01</span>
        </div>
        <Logo variant="white" width={260} alt="" className="max-w-[78%]" />
        {/* Post formats, as used in a campaign */}
        <div className="absolute top-[22%] right-[6%] flex gap-2">
          <span className="block aspect-[4/5] w-9 rounded-[3px] bg-background/15 sm:w-11" />
          <span className="block aspect-[4/5] w-9 rounded-[3px] bg-background/15 sm:w-11" />
          <span className="block aspect-[4/5] w-9 rounded-[3px] bg-background sm:w-11" />
        </div>
      </div>

      {/* Technology: code window */}
      <div
        className="animate-rise absolute bottom-0 left-0 w-[74%] overflow-hidden rounded-[6px] border border-line bg-surface shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)]"
        style={delay(440)}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-line" />
            <span className="size-2 rounded-full bg-line" />
            <span className="size-2 rounded-full bg-line" />
          </div>
          <span className="text-[0.6875rem] font-medium tracking-[0.2em] text-subtle uppercase">{visual.technology} 02</span>
        </div>
        <pre className="overflow-hidden px-4 py-5 font-mono text-[clamp(0.625rem,1.7vw,0.8125rem)] leading-[1.9] text-muted sm:px-5">
          <code>
            <span className="text-subtle">01 </span>
            <span className="text-mist">export const</span> brand = {"{"}
            {"\n"}
            <span className="text-subtle">02 </span>
            {"  "}idea: <span className="text-brand">&quot;{visual.idea}&quot;</span>,{"\n"}
            <span className="text-subtle">03 </span>
            {"  "}build: <span className="text-brand">&quot;{visual.build}&quot;</span>,{"\n"}
            <span className="text-subtle">04 </span>
            {"  "}goal: <span className="text-brand">&quot;{visual.goal}&quot;</span>,{"\n"}
            <span className="text-subtle">05 </span>
            {"}"};
          </code>
        </pre>
      </div>

      {/* The dot from the logo lands last, joining the two halves */}
      <span
        className="animate-dot-land absolute top-[56%] left-[8%] aspect-square w-[14%] rounded-full border-[6px] border-background bg-brand"
        style={delay(780)}
      />
    </div>
  );
}
