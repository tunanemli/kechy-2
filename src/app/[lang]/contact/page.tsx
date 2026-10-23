import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { getDictionary } from "@/i18n/dictionaries";
import { resolveLocale, type LangParams } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

const contactEmail = "kechycreative@gmail.com";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { contactPage } = getDictionary(locale);
  return pageMetadata(locale, routes.contact, {
    title: contactPage.metaTitle,
    description: contactPage.metaDescription,
  });
}

export default async function ContactPage({ params }: LangParams) {
  const locale = await resolveLocale(params);
  const { contactPage } = getDictionary(locale);

  return (
    <>
      <PageHero eyebrow={contactPage.eyebrow} title={contactPage.title} lead={contactPage.lead} />

      <section aria-labelledby="reach-title" className="py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 id="reach-title" className="font-display text-h3 font-semibold text-foreground">
              {contactPage.reachTitle}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{contactPage.reachBody}</p>
            <dl className="mt-10 border-t border-line">
              <div className="border-b border-line py-5">
                <dt className="text-xs font-medium tracking-[0.22em] text-subtle uppercase">{contactPage.addressLabel}</dt>
                <dd className="mt-2 text-foreground">{contactPage.address}</dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="text-xs font-medium tracking-[0.22em] text-subtle uppercase">{contactPage.emailLabel}</dt>
                <dd className="mt-2">
                  <a href={`mailto:${contactEmail}`} className="text-foreground transition-colors hover:text-brand">
                    {contactEmail}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[6px] border border-line bg-surface p-8 lg:col-span-6 lg:col-start-7 lg:p-10">
            <h2 className="font-display text-h3 font-semibold text-foreground">{contactPage.formTitle}</h2>
            <p className="mt-2 text-sm text-muted">{contactPage.formIntro}</p>
            <div className="mt-8">
              <ContactForm labels={contactPage.form} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
