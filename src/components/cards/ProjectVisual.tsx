import type { ProjectVisualVariant } from "@/data/projects";

/**
 * Illustrative visuals for conceptual projects, built from the brand's shapes
 * (dot, rounded stem, curve). Replace with real imagery via `project.image`.
 */
type ProjectVisualProps = {
  variant: ProjectVisualVariant;
  label: string;
  /** Headline inside the campaign key visual. */
  text?: string;
};

export function ProjectVisual({ variant, label, text }: ProjectVisualProps) {
  return (
    <div role="img" aria-label={label} className="absolute inset-0">
      {variant === "campaign" ? <CampaignVisual text={text} /> : null}
      {variant === "commerce" ? <CommerceVisual /> : null}
      {variant === "platform" ? <PlatformVisual /> : null}
    </div>
  );
}

function CampaignVisual({ text }: { text?: string }) {
  return (
    <div className="absolute inset-0 bg-brand">
      {/* Key visual */}
      <div className="absolute top-[12%] bottom-[12%] left-[7%] w-[40%] overflow-hidden rounded-[4px] bg-background">
        <div className="absolute -right-[22%] -bottom-[14%] aspect-square w-[95%] rounded-full bg-brand" />
        <div className="absolute top-[10%] left-[10%] font-display text-[clamp(1.4rem,3.6vw,3rem)] leading-[0.9] font-semibold tracking-tight text-foreground [word-spacing:100vw]">
          {text}
        </div>
        <div className="absolute bottom-[9%] left-[10%] h-1 w-[22%] rounded-full bg-foreground/80" />
      </div>
      {/* Post series */}
      <div className="absolute top-[12%] right-[7%] bottom-[12%] grid aspect-[3/4] max-w-[42%] grid-cols-2 grid-rows-2 gap-[5%]">
        <div className="min-h-0 rounded-[4px] bg-background/90 p-[12%]">
          <div className="aspect-square w-1/2 rounded-full bg-brand" />
        </div>
        <div className="min-h-0 rounded-[4px] bg-mist p-[12%]">
          <div className="h-[55%] w-[30%] rounded-[3px] bg-background" />
        </div>
        <div className="min-h-0 rounded-[4px] bg-mist p-[12%]">
          <div className="space-y-[10%] pt-[40%]">
            <div className="h-1.5 w-full rounded-full bg-background/80" />
            <div className="h-1.5 w-2/3 rounded-full bg-background/80" />
          </div>
        </div>
        <div className="flex min-h-0 items-center justify-center rounded-[4px] bg-background/90">
          {/* Play symbol: short-form video concept */}
          <div className="ml-[8%] size-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-brand" />
        </div>
      </div>
    </div>
  );
}

function CommerceVisual() {
  return (
    <div className="absolute inset-0 bg-elevated">
      <div className="absolute inset-x-[6%] top-[9%] flex items-center justify-between">
        <div className="h-2 w-[18%] rounded-full bg-foreground/70" />
        <div className="flex gap-2">
          <div className="h-2 w-8 rounded-full bg-foreground/20" />
          <div className="h-2 w-8 rounded-full bg-foreground/20" />
          <div className="size-2 rounded-full bg-brand" />
        </div>
      </div>
      {/* Product grid */}
      <div className="absolute top-[22%] bottom-[9%] left-[6%] grid w-[46%] grid-cols-2 gap-[5%]">
        {["rounded-full", "rounded-[4px]", "rounded-t-full", "rounded-full"].map((shape, index) => (
          <div key={index} className="flex flex-col rounded-[4px] bg-surface p-[10%]">
            <div className="flex flex-1 items-center justify-center">
              <div className={`aspect-square w-[52%] ${shape} ${index === 0 ? "bg-brand" : "bg-mist/80"}`} />
            </div>
            <div className="mt-[8%] h-1.5 w-3/4 rounded-full bg-foreground/30" />
            <div className="mt-[6%] h-1.5 w-1/3 rounded-full bg-foreground/15" />
          </div>
        ))}
      </div>
      {/* Product detail */}
      <div className="absolute top-[22%] right-[6%] bottom-[9%] flex w-[38%] flex-col rounded-[4px] border border-line bg-background p-[5%]">
        <div className="flex flex-1 items-center justify-center rounded-[3px] bg-surface">
          <div className="aspect-square w-[46%] rounded-full bg-brand" />
        </div>
        <div className="mt-[8%] h-2 w-2/3 rounded-full bg-foreground/70" />
        <div className="mt-[5%] h-1.5 w-1/3 rounded-full bg-foreground/25" />
        <div className="mt-[9%] h-[11%] min-h-5 w-full rounded-full bg-brand" />
      </div>
    </div>
  );
}

function PlatformVisual() {
  const bars = [38, 52, 44, 66, 58, 80, 72];
  return (
    <div className="absolute inset-0 bg-surface">
      <div className="absolute inset-[7%] flex overflow-hidden rounded-[4px] border border-line bg-background">
        {/* Sidebar */}
        <div className="flex w-[22%] flex-col gap-[7%] border-r border-line p-[5%]">
          <div className="size-3 rounded-full bg-brand" />
          {[80, 60, 70, 50].map((width, index) => (
            <div key={index} className="h-1.5 rounded-full bg-foreground/20" style={{ width: `${width}%` }} />
          ))}
        </div>
        <div className="flex flex-1 flex-col p-[5%]">
          <div className="flex items-center justify-between">
            <div className="h-2 w-[30%] rounded-full bg-foreground/60" />
            <div className="h-5 w-[18%] rounded-full border border-line" />
          </div>
          {/* Chart */}
          <div className="mt-[7%] flex flex-1 items-end gap-[4%] border-b border-line pb-px">
            {bars.map((height, index) => (
              <div
                key={index}
                className={`flex-1 rounded-t-[2px] ${index === bars.length - 2 ? "bg-brand" : "bg-mist/25"}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          {/* Connected tools */}
          <div className="mt-[7%] flex items-center gap-[4%]">
            {["rounded-full", "rounded-[3px]", "rounded-full"].map((shape, index) => (
              <div key={index} className="flex flex-1 items-center gap-[10%]">
                <div className={`size-4 shrink-0 ${shape} ${index === 1 ? "bg-brand" : "bg-mist/70"}`} />
                <div className="h-px flex-1 bg-line" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
