"use client";

import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const featureList = [
  "Çoklu kullanıcı erişimi",
  "Müşteri başarı yöneticisi",
  "Pazarlama otomasyonu",
  "CRM platformu",
  "Öncelikli gönderim",
  "Gelecek güncellemeleri",
];

const plans = [
  {
    name: "Temel",
    price: "89",
    blurb: "Düzenli bakım ve sürdürme için ideal—dijital varlığınızı güncel tutun.",
    cta: "Daha fazla bilgi",
    featured: false,
  },
  {
    name: "Profesyonel",
    price: "199",
    blurb: "Büyüyen ekipler için tam kapsamlı özellikler ve yakın destek.",
    cta: "Başlayın",
    featured: true,
  },
  {
    name: "Kurumsal",
    price: "250",
    blurb: "Ölçek, güvenlik ve entegrasyon ihtiyaçları için esnek model.",
    cta: "Daha fazla bilgi",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-zinc-100 py-24 text-black md:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl lg:text-6xl">
            Size en iyi
          </h2>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-tight text-zinc-400 md:text-5xl lg:text-6xl">
            fiyatı sunuyoruz.
          </h2>
        </div>

        <div className="mt-16 hidden gap-6 lg:grid lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <Accordion type="single" collapsible className="rounded-2xl border border-zinc-200 bg-white px-2">
            {plans.map((plan) => (
              <AccordionItem key={plan.name} value={plan.name} className="border-zinc-200 px-2">
                <AccordionTrigger className="py-4 text-black hover:text-black [&>svg]:text-[var(--color-lime)]">
                  <span className="font-display text-lg font-bold">
                    {plan.name}{" "}
                    <span className="font-normal text-zinc-500">
                      · ${plan.price}
                      <span className="text-base">/ay</span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700">
                  <div className="space-y-4 pb-2">
                    <p className="text-sm text-zinc-600">{plan.blurb}</p>
                    <ul className="space-y-2">
                      {featureList.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-zinc-800">
                          <Check /> {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={cn(
                        "inline-flex h-11 w-full items-center justify-center rounded-full text-sm font-semibold",
                        plan.featured ? "bg-[var(--color-lime)] text-black" : "border border-zinc-300 text-black",
                      )}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: (typeof plans)[number] }) {
  const isDark = plan.featured;
  return (
    <div
      className={cn(
        "flex flex-col rounded-3xl border p-8 shadow-sm md:p-10",
        isDark ? "border-black bg-black text-white shadow-xl lg:-translate-y-4 lg:scale-[1.02]" : "border-zinc-200 bg-white",
      )}
    >
      <p className={cn("text-sm font-semibold uppercase tracking-wide", isDark ? "text-zinc-400" : "text-zinc-500")}>
        {plan.name === "Profesyonel" ? "Profesyonel" : plan.name}
      </p>
      <p className="mt-4 font-display text-6xl font-extrabold leading-none md:text-7xl">
        <span className={cn("align-top text-2xl md:text-3xl", isDark ? "text-zinc-500" : "text-zinc-400")}>$</span>
        {plan.price}
      </p>
      <p className={cn("mt-4 text-sm leading-relaxed", isDark ? "text-zinc-400" : "text-zinc-600")}>{plan.blurb}</p>
      <Link
        href="/contact"
        className={cn(
          "mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-transform hover:scale-[1.02]",
          isDark ? "bg-[var(--color-lime)] text-black" : "border-2 border-black text-black hover:bg-black hover:text-white",
        )}
      >
        {plan.cta}
        <span aria-hidden>→</span>
      </Link>
      <ul className="mt-10 space-y-3">
        {featureList.map((f) => (
          <li key={f} className={cn("flex items-center gap-3 text-sm", isDark ? "text-zinc-300" : "text-zinc-700")}>
            <Check dark={isDark} />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Check({ dark }: { dark?: boolean }) {
  return (
    <span
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold",
        dark ? "bg-white/10 text-[var(--color-lime)]" : "bg-zinc-100 text-black",
      )}
      aria-hidden
    >
      ✓
    </span>
  );
}
