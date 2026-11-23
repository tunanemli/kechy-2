import { useId } from "react";
import type { ProjectVisualVariant } from "@/data/projects";

/**
 * Illustrated concept visuals: each project has its own fictional brand,
 * palette and mockups. Drawn as SVG on a 1600×1000 artboard with
 * `xMidYMid slice`, so the art covers any card ratio; key content stays inside
 * the area both 4:3 and 21:9 crops keep (x 140–1460, y 160–840).
 * Replace with real imagery via `project.image`.
 */
type ProjectVisualProps = {
  variant: ProjectVisualVariant;
  label: string;
  copy: Record<string, string>;
};

export function ProjectVisual({ variant, label, copy }: ProjectVisualProps) {
  return (
    <div role="img" aria-label={label} className="absolute inset-0">
      {variant === "campaign" ? <CampaignVisual copy={copy} /> : null}
      {variant === "commerce" ? <CommerceVisual copy={copy} /> : null}
      {variant === "platform" ? <PlatformVisual copy={copy} /> : null}
    </div>
  );
}

const display = { fontFamily: "var(--font-heading)" } as const;
const body = { fontFamily: "var(--font-body)" } as const;

function Artboard({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 size-full"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/** Shared filters: film grain and a soft drop shadow. */
function Effects({ id, shadow }: { id: string; shadow: string }) {
  return (
    <>
      <filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncA type="table" tableValues="0 0.09" />
        </feComponentTransfer>
      </filter>
      <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="34" stdDeviation="34" floodColor={shadow} floodOpacity="0.45" />
      </filter>
    </>
  );
}

/** A phone frame whose screen content is clipped to the display. */
function Phone({
  id,
  x,
  y,
  w,
  h,
  rotate,
  screen,
  children,
}: {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  rotate: number;
  screen: string;
  children: React.ReactNode;
}) {
  const inset = 11;
  return (
    <g transform={`rotate(${rotate} ${x + w / 2} ${y + h / 2})`} filter={`url(#${id}-shadow)`}>
      <clipPath id={`${id}-screen`}>
        <rect x={x + inset} y={y + inset} width={w - inset * 2} height={h - inset * 2} rx={38} />
      </clipPath>
      <rect x={x} y={y} width={w} height={h} rx={48} fill="#121212" />
      <g clipPath={`url(#${id}-screen)`}>
        <rect x={x + inset} y={y + inset} width={w - inset * 2} height={h - inset * 2} fill={screen} />
        {children}
      </g>
      <rect x={x + w / 2 - 44} y={y + 22} width={88} height={22} rx={11} fill="#121212" />
    </g>
  );
}

/* ---------------------------------------------------------------- MORA */

function CampaignVisual({ copy }: { copy: Record<string, string> }) {
  const id = useId().replace(/:/g, "");
  const cream = "#F2E7D7";
  const ink = "#1C1512";
  const rust = "#B9532A";
  const deep = "#7E3216";
  const sage = "#9CA88A";
  // A 3×3 social grid: background colour and motif per tile.
  const tiles: [string, "sun" | "arch" | "text" | "none"][] = [
    [cream, "sun"],
    [ink, "none"],
    [rust, "arch"],
    [deep, "text"],
    [cream, "arch"],
    [sage, "sun"],
    [rust, "none"],
    [ink, "sun"],
    [cream, "text"],
  ];

  return (
    <Artboard>
      <defs>
        <radialGradient id={`${id}-bg`} cx="30%" cy="35%" r="85%">
          <stop offset="0" stopColor="#D06A3C" />
          <stop offset="0.55" stopColor={rust} />
          <stop offset="1" stopColor={deep} />
        </radialGradient>
        <linearGradient id={`${id}-story`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E9D9C2" />
          <stop offset="1" stopColor="#D9B996" />
        </linearGradient>
        <Effects id={id} shadow="#2A0E04" />
      </defs>

      <rect width="1600" height="1000" fill={`url(#${id}-bg)`} />
      {/* Oversized outlined wordmark behind everything */}
      <text
        x="800"
        y="985"
        textAnchor="middle"
        fontSize="600"
        fontWeight="700"
        fill="none"
        stroke={cream}
        strokeOpacity="0.16"
        strokeWidth="3"
        letterSpacing="-24"
        style={display}
      >
        {copy.brand}
      </text>

      {/* Key visual poster */}
      <g transform="rotate(-6 455 505)" filter={`url(#${id}-shadow)`}>
        <rect x="250" y="205" width="410" height="600" rx="16" fill={cream} />
        <text x="282" y="255" fontSize="17" fontWeight="600" letterSpacing="5" fill={ink} style={body}>
          {copy.brand} — {copy.season.toLocaleUpperCase()}
        </text>
        <circle cx="455" cy="455" r="150" fill={rust} />
        <path d="M385 650 V535 a70 70 0 0 1 140 0 V650 Z" fill={ink} />
        <rect x="282" y="650" width="346" height="3" fill={ink} />
        <text x="282" y="728" fontSize="62" fontWeight="600" letterSpacing="-2.5" fill={ink} style={display}>
          {copy.headline}
        </text>
        <text x="282" y="772" fontSize="16" fill={ink} fillOpacity="0.6" style={body}>
          01 / 03
        </text>
      </g>

      {/* Story */}
      <Phone id={`${id}-p1`} x={790} y={165} w={290} h={610} rotate={5} screen={`url(#${id}-story)`}>
        {[0, 1, 2].map((index) => (
          <rect
            key={index}
            x={815 + index * 82}
            y={200}
            width={74}
            height={4}
            rx={2}
            fill={ink}
            fillOpacity={index === 0 ? 0.85 : 0.25}
          />
        ))}
        <circle cx="935" cy="420" r="118" fill={rust} />
        <path d="M880 560 V470 a55 55 0 0 1 110 0 V560 Z" fill={ink} />
        <text x="820" y="640" fontSize="46" fontWeight="600" letterSpacing="-1.5" fill={ink} style={display}>
          {copy.headline}
        </text>
        <rect x="820" y="676" width="230" height="52" rx="26" fill={ink} />
        <text x="935" y="709" textAnchor="middle" fontSize="18" fontWeight="600" fill={cream} style={body}>
          {copy.cta}
        </text>
      </Phone>

      {/* Feed grid */}
      <Phone id={`${id}-p2`} x={1115} y={225} w={290} h={610} rotate={-4} screen="#FBF7F1">
        <circle cx="1160" cy="292" r="20" fill={rust} />
        <text x="1192" y="298" fontSize="18" fontWeight="600" fill={ink} style={body}>
          {copy.brand}
        </text>
        {tiles.map(([fill, motif], index) => {
          const tx = 1128 + (index % 3) * 89;
          const ty = 335 + Math.floor(index / 3) * 89;
          return (
            <g key={index}>
              <rect x={tx} y={ty} width={86} height={86} fill={fill} />
              {motif === "sun" ? <circle cx={tx + 43} cy={ty + 43} r={22} fill={fill === rust ? cream : rust} /> : null}
              {motif === "arch" ? (
                <path d={`M${tx + 28} ${ty + 70} V${ty + 44} a15 15 0 0 1 30 0 V${ty + 70} Z`} fill={fill === ink ? cream : ink} />
              ) : null}
              {motif === "text" ? (
                <text x={tx + 12} y={ty + 52} fontSize="18" fontWeight="700" fill={fill === cream ? ink : cream} style={display}>
                  SS26
                </text>
              ) : null}
            </g>
          );
        })}
        <rect x="1140" y="625" width="200" height="10" rx="5" fill={ink} fillOpacity="0.75" />
        <rect x="1140" y="648" width="150" height="10" rx="5" fill={ink} fillOpacity="0.3" />
      </Phone>

      {/* Short-form video chip */}
      <g filter={`url(#${id}-shadow)`}>
        <rect x="610" y="745" width="230" height="60" rx="30" fill={ink} />
        <circle cx="645" cy="775" r="17" fill={rust} />
        <path d="M640 766 L653 775 L640 784 Z" fill={cream} />
        <text x="674" y="782" fontSize="20" fontWeight="600" fill={cream} style={body}>
          {copy.chip}
        </text>
      </g>

      <rect width="1600" height="1000" filter={`url(#${id}-grain)`} />
    </Artboard>
  );
}

/* ---------------------------------------------------------------- LUME */

function Bottle({ x, y, scale = 1, fill }: { x: number; y: number; scale?: number; fill: string }) {
  const w = 54 * scale;
  const h = 96 * scale;
  return (
    <g>
      <rect x={x - (w * 0.5) / 2} y={y - h / 2 - 26 * scale} width={w * 0.5} height={30 * scale} rx={5 * scale} fill="#2A2D27" />
      <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={16 * scale} fill={fill} />
      <rect x={x - w / 2 + 9 * scale} y={y - h / 2 + 16 * scale} width={8 * scale} height={h - 40 * scale} rx={4 * scale} fill="#FFFFFF" fillOpacity="0.35" />
      <rect x={x - w * 0.3} y={y + 4 * scale} width={w * 0.6} height={14 * scale} rx={3 * scale} fill="#FFFFFF" fillOpacity="0.7" />
    </g>
  );
}

function CommerceVisual({ copy }: { copy: Record<string, string> }) {
  const id = useId().replace(/:/g, "");
  const ink = "#1F241F";
  const sage = "#6F8264";
  const paper = "#F6F3EC";
  const products = ["#C98463", "#7E9471", "#E3D5BE", "#3E423B"];

  return (
    <Artboard>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E8ECE1" />
          <stop offset="1" stopColor="#B5C2AA" />
        </linearGradient>
        <filter id={`${id}-blur`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="60" />
        </filter>
        <Effects id={id} shadow="#2B3526" />
      </defs>

      <rect width="1600" height="1000" fill={`url(#${id}-bg)`} />
      <circle cx="1180" cy="330" r="330" fill="#FAF8F2" fillOpacity="0.75" filter={`url(#${id}-blur)`} />
      <circle cx="330" cy="820" r="260" fill={sage} fillOpacity="0.35" filter={`url(#${id}-blur)`} />

      {/* Wordmark */}
      <text x="190" y="330" fontSize="150" fontWeight="700" letterSpacing="-7" fill={ink} style={display}>
        {copy.brand}
      </text>
      <text x="196" y="380" fontSize="22" fontWeight="500" letterSpacing="4" fill={ink} fillOpacity="0.6" style={body}>
        {copy.nav.toLocaleUpperCase()}
      </text>
      <rect x="196" y="420" width="64" height="4" rx="2" fill={ink} />

      {/* Product list */}
      <Phone id={`${id}-p1`} x={600} y={175} w={320} h={650} rotate={-4} screen={paper}>
        <text x="634" y="262" fontSize="22" fontWeight="700" letterSpacing="-0.5" fill={ink} style={display}>
          {copy.brand}
        </text>
        <text x="634" y="300" fontSize="15" fontWeight="500" fill={ink} fillOpacity="0.55" style={body}>
          {copy.nav}
        </text>
        {products.map((fill, index) => {
          const cx = 630 + (index % 2) * 132;
          const cy = 325 + Math.floor(index / 2) * 225;
          return (
            <g key={index}>
              <rect x={cx} y={cy} width={122} height={150} rx={18} fill="#EAE4D8" />
              <Bottle x={cx + 61} y={cy + 86} scale={0.85} fill={fill} />
              <rect x={cx + 4} y={cy + 166} width={86} height={9} rx={4.5} fill={ink} fillOpacity="0.7" />
              <text x={cx + 4} y={cy + 200} fontSize="15" fontWeight="600" fill={ink} style={body}>
                {copy.price}
              </text>
            </g>
          );
        })}
      </Phone>

      {/* Product page */}
      <Phone id={`${id}-p2`} x={975} y={140} w={340} h={700} rotate={4} screen={paper}>
        <circle cx="1145" cy="370" r="125" fill="#E6DDCC" />
        <Bottle x={1145} y={385} scale={1.75} fill={products[0]} />
        <text x="1010" y="570" fontSize="28" fontWeight="600" letterSpacing="-0.8" fill={ink} style={display}>
          {copy.product}
        </text>
        <text x="1010" y="610" fontSize="22" fontWeight="600" fill={sage} style={body}>
          {copy.price}
        </text>
        {[0, 1, 2].map((index) => (
          <circle key={index} cx={1018 + index * 30} cy={650} r={10} fill={products[index]} stroke={index === 0 ? ink : "none"} strokeWidth="2.5" />
        ))}
        <rect x="1004" y="700" width="282" height="60" rx="30" fill={ink} />
        <text x="1145" y="737" textAnchor="middle" fontSize="19" fontWeight="600" fill={paper} style={body}>
          {copy.cta}
        </text>
      </Phone>

      {/* Checkout chips */}
      <g filter={`url(#${id}-shadow)`}>
        <rect x="815" y="750" width="250" height="62" rx="31" fill="#FFFFFF" />
        <circle cx="850" cy="781" r="17" fill={sage} />
        <path d="M842 781 L848 787 L859 775" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="878" y="788" fontSize="19" fontWeight="600" fill={ink} style={body}>
          {copy.chip}
        </text>
      </g>
      <g filter={`url(#${id}-shadow)`}>
        <rect x="1180" y="190" width="205" height="54" rx="27" fill={ink} />
        <text x="1282" y="224" textAnchor="middle" fontSize="17" fontWeight="600" fill={paper} style={body}>
          {copy.chip2}
        </text>
      </g>

      <rect width="1600" height="1000" filter={`url(#${id}-grain)`} />
    </Artboard>
  );
}

/* ---------------------------------------------------------------- Atlas */

function PlatformVisual({ copy }: { copy: Record<string, string> }) {
  const id = useId().replace(/:/g, "");
  const navy = "#0D1530";
  const cobalt = "#4A6CFF";
  const ink = "#141A33";
  const panel = "#F5F7FC";
  const schedule = [
    { time: "09:30", color: cobalt, width: 210 },
    { time: "11:00", color: "#22B8A6", width: 170 },
    { time: "13:30", color: "#F2A93B", width: 230 },
    { time: "16:00", color: cobalt, width: 150 },
  ];
  const bars = [46, 62, 54, 78, 70, 92, 84];

  return (
    <Artboard>
      <defs>
        <pattern id={`${id}-grid`} width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0 H0 V48" fill="none" stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="1" />
        </pattern>
        <radialGradient id={`${id}-glow`} cx="50%" cy="48%" r="55%">
          <stop offset="0" stopColor={cobalt} stopOpacity="0.55" />
          <stop offset="1" stopColor={cobalt} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-area`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={cobalt} stopOpacity="0.28" />
          <stop offset="1" stopColor={cobalt} stopOpacity="0" />
        </linearGradient>
        <clipPath id={`${id}-window`}>
          <rect x="250" y="175" width="1100" height="650" rx="22" />
        </clipPath>
        <Effects id={id} shadow="#02040C" />
      </defs>

      <rect width="1600" height="1000" fill={navy} />
      <rect width="1600" height="1000" fill={`url(#${id}-grid)`} />
      <rect width="1600" height="1000" fill={`url(#${id}-glow)`} />

      {/* Integration links behind the window */}
      <path d="M1425 264 C1462 264 1462 666 1425 666" fill="none" stroke={cobalt} strokeWidth="2.5" strokeDasharray="7 8" />
      <path d="M175 770 C150 770 150 600 250 600" fill="none" stroke={cobalt} strokeWidth="2.5" strokeDasharray="7 8" />

      {/* App window */}
      <g filter={`url(#${id}-shadow)`}>
        <rect x="250" y="175" width="1100" height="650" rx="22" fill={panel} />
      </g>
      <g clipPath={`url(#${id}-window)`}>
        <rect x="250" y="175" width="1100" height="46" fill="#E9EDF7" />
        {["#FF6159", "#FFBD2E", "#28C840"].map((fill, index) => (
          <circle key={fill} cx={278 + index * 22} cy={198} r={6.5} fill={fill} />
        ))}

        {/* Sidebar */}
        <rect x="250" y="221" width="210" height="604" fill="#EEF1F9" />
        <rect x="276" y="246" width="34" height="34" rx="10" fill={cobalt} />
        <path d="M285 272 L293 254 L301 272" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinejoin="round" />
        <text x="322" y="271" fontSize="22" fontWeight="700" letterSpacing="-0.5" fill={ink} style={display}>
          {copy.brand}
        </text>
        <rect x="270" y="310" width="170" height="44" rx="12" fill={cobalt} />
        <text x="292" y="338" fontSize="16" fontWeight="600" fill="#FFFFFF" style={body}>
          {copy.today}
        </text>
        {[0, 1, 2, 3].map((index) => (
          <g key={index}>
            <rect x="292" y={384 + index * 50} width="16" height="16" rx="5" fill={ink} fillOpacity="0.18" />
            <rect x="320" y={388 + index * 50} width={[90, 70, 100, 60][index]} height="9" rx="4.5" fill={ink} fillOpacity="0.22" />
          </g>
        ))}

        {/* Header */}
        <text x="495" y="285" fontSize="34" fontWeight="600" letterSpacing="-1" fill={ink} style={display}>
          {copy.today}
        </text>
        <rect x="1140" y="254" width="180" height="40" rx="20" fill="#FFFFFF" stroke="#DCE2F0" />
        <circle cx="1166" cy="274" r="9" fill={cobalt} fillOpacity="0.25" />
        <rect x="1184" y="270" width="110" height="8" rx="4" fill={ink} fillOpacity="0.2" />

        {/* KPI cards */}
        {[
          [copy.kpi1, "12"],
          [copy.kpi2, "3"],
          [copy.kpi3, "2"],
        ].map(([label, value], index) => (
          <g key={index}>
            <rect x={495 + index * 278} y="318" width="262" height="104" rx="16" fill="#FFFFFF" stroke="#E3E8F3" />
            <text x={517 + index * 278} y="355" fontSize="15" fontWeight="500" fill={ink} fillOpacity="0.55" style={body}>
              {label}
            </text>
            <text x={517 + index * 278} y="402" fontSize="36" fontWeight="600" letterSpacing="-1" fill={ink} style={display}>
              {value}
            </text>
            <circle cx={727 + index * 278} cy="388" r="14" fill={index === 0 ? cobalt : "#E7ECFA"} />
          </g>
        ))}

        {/* Schedule */}
        <rect x="495" y="444" width="400" height="356" rx="16" fill="#FFFFFF" stroke="#E3E8F3" />
        <text x="519" y="482" fontSize="17" fontWeight="600" fill={ink} style={body}>
          {copy.schedule}
        </text>
        {schedule.map((slot, index) => (
          <g key={slot.time}>
            <text x="519" y={530 + index * 66} fontSize="14" fontWeight="500" fill={ink} fillOpacity="0.5" style={body}>
              {slot.time}
            </text>
            <rect x="584" y={510 + index * 66} width={slot.width} height="34" rx="10" fill={slot.color} fillOpacity="0.16" />
            <rect x="584" y={510 + index * 66} width="5" height="34" rx="2.5" fill={slot.color} />
            <rect x="600" y={523 + index * 66} width={slot.width - 60} height="8" rx="4" fill={ink} fillOpacity="0.35" />
          </g>
        ))}

        {/* Weekly chart */}
        <rect x="915" y="444" width="405" height="356" rx="16" fill="#FFFFFF" stroke="#E3E8F3" />
        <text x="939" y="482" fontSize="17" fontWeight="600" fill={ink} style={body}>
          {copy.chart}
        </text>
        <path
          d="M945 690 C990 660 1010 640 1050 650 S1110 600 1150 610 S1220 560 1290 545 V770 H945 Z"
          fill={`url(#${id}-area)`}
        />
        <path
          d="M945 690 C990 660 1010 640 1050 650 S1110 600 1150 610 S1220 560 1290 545"
          fill="none"
          stroke={cobalt}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="1290" cy="545" r="8" fill="#FFFFFF" stroke={cobalt} strokeWidth="4" />
        {bars.map((height, index) => (
          <rect
            key={index}
            x={950 + index * 48}
            y={775 - height * 0.32}
            width="26"
            height={height * 0.32}
            rx="5"
            fill={index === bars.length - 2 ? cobalt : "#DDE4F7"}
          />
        ))}
      </g>

      {/* Connected tools */}
      {[
        { x: 1265, y: 230, label: copy.int1, shape: "cal" },
        { x: 1265, y: 632, label: copy.int2, shape: "doc" },
        { x: 175, y: 736, label: copy.int3, shape: "user" },
      ].map((chip) => (
        <g key={chip.label} filter={`url(#${id}-shadow)`}>
          <rect x={chip.x} y={chip.y} width="160" height="68" rx="20" fill="#FFFFFF" />
          <rect x={chip.x + 14} y={chip.y + 14} width="40" height="40" rx="12" fill={cobalt} fillOpacity="0.14" />
          {chip.shape === "cal" ? (
            <rect x={chip.x + 24} y={chip.y + 25} width="20" height="18" rx="4" fill="none" stroke={cobalt} strokeWidth="3" />
          ) : null}
          {chip.shape === "doc" ? (
            <path d={`M${chip.x + 27} ${chip.y + 23} h11 l6 6 v16 h-17 Z`} fill="none" stroke={cobalt} strokeWidth="3" strokeLinejoin="round" />
          ) : null}
          {chip.shape === "user" ? (
            <g fill="none" stroke={cobalt} strokeWidth="3">
              <circle cx={chip.x + 34} cy={chip.y + 30} r="6" />
              <path d={`M${chip.x + 23} ${chip.y + 46} a11 9 0 0 1 22 0`} />
            </g>
          ) : null}
          <text x={chip.x + 66} y={chip.y + 41} fontSize="17" fontWeight="600" fill={ink} style={body}>
            {chip.label}
          </text>
        </g>
      ))}

      <rect width="1600" height="1000" filter={`url(#${id}-grain)`} />
    </Artboard>
  );
}
