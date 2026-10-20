import Image from "next/image";
import { cn } from "@/lib/utils";

/** Intrinsic size of the supplied logo files (aspect ratio 1200 × 446). */
const LOGO_WIDTH = 1200;
const LOGO_HEIGHT = 446;

const sources = {
  orange: "/brand/kechy-logo-orange.webp",
  white: "/brand/kechy-logo-white.webp",
} as const;

type LogoProps = {
  variant?: keyof typeof sources;
  /** Rendered width in px; height follows the logo's aspect ratio. */
  width: number;
  className?: string;
  preload?: boolean;
  alt?: string;
};

export function Logo({ variant = "orange", width, className, preload, alt = "Kechy Creative" }: LogoProps) {
  return (
    <Image
      src={sources[variant]}
      alt={alt}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      sizes={`${width}px`}
      preload={preload}
      className={cn("h-auto select-none", className)}
      style={{ width }}
      draggable={false}
    />
  );
}
