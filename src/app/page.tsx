import type { Metadata } from "next";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Approach } from "@/components/home/Approach";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — We make brands grow` },
  description:
    "A creative and technology studio combining social media marketing and web development. Campaigns, websites and custom software for brands that want to grow.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <SelectedWork />
      <Approach />
      <AboutPreview />
      <FinalCta />
    </>
  );
}
