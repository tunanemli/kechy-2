import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { localizePath } from "@/i18n/routing";

const tr = getDictionary("tr").notFound;
const en = getDictionary("en").notFound;

/** 404 content. Not-found pages receive no params, so the message is bilingual. */
export function NotFoundContent() {
  return (
    <div className="mx-auto w-full max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <p className="text-xs font-medium tracking-[0.24em] text-brand">404</p>
      <h1 className="mt-6 font-display text-h1 font-semibold text-foreground">{tr.title}</h1>
      <p className="mt-6 max-w-xl text-lead text-muted">{tr.body}</p>
      <Link
        href={localizePath("tr", "/")}
        className="mt-10 inline-flex h-12 items-center rounded-full bg-brand px-6 text-sm font-medium text-background transition-colors hover:bg-brand-bright"
      >
        {tr.home}
      </Link>
      <p lang="en" className="mt-16 border-t border-line pt-8 text-sm text-muted">
        {en.title}. {en.body}{" "}
        <Link href={localizePath("en", "/")} className="text-foreground underline underline-offset-4 hover:text-brand">
          {en.home}
        </Link>
      </p>
    </div>
  );
}
