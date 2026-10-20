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
  sent: string;
  thanks: string;
};

const fieldClass =
  "w-full rounded-[6px] border border-line bg-background px-4 text-sm text-foreground placeholder:text-subtle transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

// TODO: no submission mechanism is connected yet; messages are not sent anywhere.
export function ContactForm({ labels }: { labels: ContactFormLabels }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
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
        disabled={sent}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-8 text-sm font-medium text-background transition-colors hover:bg-brand-bright disabled:cursor-default disabled:opacity-80 sm:w-auto"
      >
        {sent ? labels.sent : labels.submit}
      </button>
      {sent ? <p className="text-sm text-muted">{labels.thanks}</p> : null}
    </form>
  );
}
