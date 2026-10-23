import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Locale } from "@/i18n/routing";

/** Open Graph image size (the 1.91:1 format used by social platforms). */
export const ogSize = { width: 1200, height: 630 };

/**
 * Shared Open Graph image: logo, eyebrow and page title on the brand's dark
 * background, with the logo's dot as the accent. Space Grotesk is bundled as
 * WOFF in two subsets (latin + latin-ext) so Turkish characters render.
 */
type OgImageOptions = { locale: Locale; eyebrow: string; title: string; highlight?: string };

export async function ogImage({ locale, eyebrow, title, highlight }: OgImageOptions) {
  // Literal paths so build-time file tracing includes exactly these files.
  const [latin500, latin600, ext500, ext600, logo] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/space-grotesk-latin-500-normal.woff")),
    readFile(join(process.cwd(), "src/assets/fonts/space-grotesk-latin-600-normal.woff")),
    readFile(join(process.cwd(), "src/assets/fonts/space-grotesk-latin-ext-500-normal.woff")),
    readFile(join(process.cwd(), "src/assets/fonts/space-grotesk-latin-ext-600-normal.woff")),
    readFile(join(process.cwd(), "public/brand/kechy-logo-orange.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const length = title.length + (highlight?.length ?? 0);
  const fontSize = length > 44 ? 62 : length > 28 ? 72 : 84;
  // Words are laid out individually so a wrapped line never starts with a gap.
  const words = [
    ...title.split(" ").map((text) => ({ text, highlighted: false })),
    ...(highlight ? highlight.split(" ").map((text) => ({ text, highlighted: true })) : []),
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          padding: "64px 72px",
          background: "#080808",
          fontFamily: "Space Grotesk",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            bottom: -170,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "#eba400",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered by ImageResponse, not the browser */}
        <img src={logoSrc} width={230} height={85} alt="" />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: 4,
              color: "#a6a6a6",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 9999, background: "#eba400" }} />
            {/* Locale-aware uppercase: Turkish "i" becomes "İ". */}
            {eyebrow.toLocaleUpperCase(locale)}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: 24,
              fontSize,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: "#f5f5f5",
            }}
          >
            {words.map((word, index) => (
              <span
                key={index}
                style={{ marginRight: fontSize * 0.24, color: word.highlighted ? "#eba400" : "#f5f5f5" }}
              >
                {word.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Space Grotesk", data: latin500, weight: 500, style: "normal" },
        { name: "Space Grotesk", data: ext500, weight: 500, style: "normal" },
        { name: "Space Grotesk", data: latin600, weight: 600, style: "normal" },
        { name: "Space Grotesk", data: ext600, weight: 600, style: "normal" },
      ],
    },
  );
}
