"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Ana sayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Portföy", href: "/#portfolio" },
  { label: "Blog", href: "/#blog" },
  { label: "İletişim", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-white md:text-2xl">
          KECHY
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Ana menü">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden h-11 items-center gap-2 rounded-full bg-[var(--color-lime)] px-6 text-sm font-semibold text-black transition-transform hover:scale-[1.02] lg:inline-flex"
        >
          Başlayın
          <ArrowRight className="h-4 w-4" />
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-zinc-800 bg-black lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobil menü">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-900"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--color-lime)] px-6 text-sm font-semibold text-black"
            onClick={() => setOpen(false)}
          >
            Başlayın
          </Link>
        </nav>
      </div>
    </header>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 14" fill="none" aria-hidden>
      <path d="M1 7h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
