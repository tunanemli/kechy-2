"use client";

import { useState } from "react";

type ContactFormLabels = {
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  subject: string;
  opened: string;
  fallback: string;
};

const fieldClass =
  "w-full rounded-[6px] border border-line bg-background px-4 text-sm text-foreground placeholder:text-subtle transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

/**
 * Sends the message through the visitor's own email app: submitting opens a
 * pre-filled email to `email`. Nothing is sent from the site itself.
 */
export function ContactForm({ email, labels }: { email: string; labels: ContactFormLabels }) {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      String(data.get("message") ?? "").trim(),
      "",
      "—",
      `${labels.name}: ${String(data.get("name") ?? "").trim()}`,
      `${labels.email}: ${String(data.get("email") ?? "").trim()}`,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(labels.subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-foreground">
          {labels.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={`h-12 ${fieldClass}`}
          placeholder={labels.namePlaceholder}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-foreground">
          {labels.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={`h-12 ${fieldClass}`}
          placeholder={labels.emailPlaceholder}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-foreground">
          {labels.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={`resize-y py-3 ${fieldClass}`}
          placeholder={labels.messagePlaceholder}
        />
      </div>
      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-8 text-sm font-medium text-background transition-colors hover:bg-brand-bright active:scale-[0.98] sm:w-auto"
      >
        {labels.submit}
      </button>
      <div role="status" aria-live="polite">
        {opened ? (
          <p className="text-sm leading-relaxed text-muted">
            {labels.opened} {labels.fallback}{" "}
            <a href={`mailto:${email}`} className="text-foreground underline underline-offset-4 hover:text-brand">
              {email}
            </a>
          </p>
        ) : null}
      </div>
    </form>
  );
}
