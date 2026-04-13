"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-zinc-700">
          Ad soyad
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm text-black placeholder:text-zinc-400 focus:border-[var(--color-lime)] focus:outline-none focus:ring-2 focus:ring-[var(--color-lime)]/40"
          placeholder="Adınız ve soyadınız"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-zinc-700">
          E-posta
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm text-black placeholder:text-zinc-400 focus:border-[var(--color-lime)] focus:outline-none focus:ring-2 focus:ring-[var(--color-lime)]/40"
          placeholder="ornek@gmail.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-zinc-700">
          Mesajınız
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="w-full resize-y rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-black placeholder:text-zinc-400 focus:border-[var(--color-lime)] focus:outline-none focus:ring-2 focus:ring-[var(--color-lime)]/40"
          placeholder="Projenizden kısaca bahsedin…"
        />
      </div>
      <button
        type="submit"
        disabled={sent}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--color-lime)] px-8 text-sm font-semibold text-black transition-transform hover:scale-[1.01] disabled:cursor-default disabled:opacity-80 sm:w-auto"
      >
        {sent ? "Mesajınız alındı" : "Gönder"}
      </button>
      {sent ? (
        <p className="text-sm text-zinc-600">Teşekkürler. En kısa sürede size dönüş yapacağız.</p>
      ) : null}
    </form>
  );
}
