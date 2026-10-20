"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { NavLink } from "@/components/layout/NavLink";
import type { NavItem } from "@/components/layout/navigation";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Keep keyboard and screen-reader focus inside the header while the panel covers the page.
    const background = Array.from(document.querySelectorAll<HTMLElement>("body > main, body > footer"));
    background.forEach((element) => (element.inert = true));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close(true);
    };
    // The panel is mobile-only; close it if the viewport grows to desktop.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onBreakpoint = () => desktop.matches && close();

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((element) => (element.inert = false));
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-white/5"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" className="relative block h-3 w-5">
          <span
            className={`absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
          />
          <span
            className={`absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
          />
        </span>
      </button>

      {open ? (
        <div
          ref={panelRef}
          id="mobile-nav"
          className="fixed inset-x-0 top-18 bottom-0 z-40 flex flex-col overflow-y-auto border-t border-line bg-background px-5 pt-10 pb-8 sm:px-8"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {items.map((item, index) => (
                <li key={item.label} className="border-b border-line">
                  <NavLink
                    href={item.href}
                    onClick={() => close()}
                    className="flex items-baseline gap-4 py-5 font-display text-4xl font-semibold tracking-tight text-foreground transition-colors hover:text-brand aria-[current=page]:text-brand"
                  >
                    <span className="w-6 shrink-0 font-sans text-xs font-medium tracking-[0.2em] text-subtle">
                      0{index + 1}
                    </span>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col gap-8 pt-12">
            <LanguageSwitcher />
            <Button href={routes.contact} size="lg" arrow onClick={() => close()} className="w-full">
              Contact us
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
