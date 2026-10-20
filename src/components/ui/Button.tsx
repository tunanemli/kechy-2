import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "text";
type ButtonSize = "md" | "lg";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-background hover:bg-brand-bright active:bg-brand",
  secondary: "border border-line text-foreground hover:border-foreground/60 hover:bg-white/[0.03] active:bg-white/[0.06]",
  text: "text-foreground underline-offset-[6px] decoration-brand hover:underline",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-[0.9375rem]",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full font-medium whitespace-nowrap transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98]",
        variant !== "text" && sizes[size],
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
      {arrow ? <ArrowIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" /> : null}
    </Link>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2.5 8h11m0 0L9 3.5M13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
