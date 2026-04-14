import { Beliefs } from "@/components/sections/Beliefs";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Mission } from "@/components/sections/Mission";
import { Newsletter } from "@/components/sections/Newsletter";
import { Partners } from "@/components/sections/Partners";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <Mission />
        <Stats />
        <Beliefs />
        <Testimonials />
        <Faq />
        <BlogTeaser />
        <Partners />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
