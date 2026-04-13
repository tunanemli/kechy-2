"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  }

  return (
    <section className="border-t border-zinc-800 bg-zinc-950 py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-lg">
            <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">Hiçbir şeyi kaçırmayın!</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Dijital varlığınızı güçlendirmek için ipuçlarımızı almak üzere ücretsiz bültenimize abone olun.
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-stretch"
            noValidate
          >
            <label className="sr-only" htmlFor="newsletter-email">
              E-posta adresi
            </label>
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="ornek@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 flex-1 rounded-xl border border-zinc-700 bg-black px-4 text-sm text-white placeholder:text-zinc-500 focus:border-[var(--color-lime)] focus:outline-none focus:ring-2 focus:ring-[var(--color-lime)]/40"
            />
            <button
              type="submit"
              className="h-14 shrink-0 rounded-xl bg-[var(--color-lime)] px-8 text-sm font-semibold text-black transition-transform hover:scale-[1.02] sm:w-auto"
            >
              {sent ? "Kayıt alındı" : "Abone ol"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
