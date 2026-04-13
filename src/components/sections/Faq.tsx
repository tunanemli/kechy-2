"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Kechy yeni müşterileri nasıl karşılıyor?",
    a: "Keşif oturumuyla başlıyoruz; hedefleri ve kısıtları netleştiriyor, ardından net kilometre taşları, sorumlular ve başarı metrikleri içeren aşamalı bir yol haritası öneriyoruz.",
  },
  {
    q: "Startuplar ve kurumsal firmalarla çalışıyor musunuz?",
    a: "Evet. Startuplar için yalın ürün sprintlerinden büyük ölçekte tasarım sistemi ve yönetişim programlarına kadar iş birliği modellerini uyarlıyoruz.",
  },
  {
    q: "Hangi araçları ve teknolojileri kullanıyorsunuz?",
    a: "Sıklıkla Next.js ve modern bulut platformlarıyla teslim ediyoruz; tasarımda Figma kullanıyoruz. Analitik, CRM ve içerik akışlarınıza entegre oluyoruz.",
  },
  {
    q: "Projeleri nasıl fiyatlandırıyorsunuz?",
    a: "Kapsama göre sabit fazlar, aylık retainer veya hibrit modeller kullanıyoruz. Şeffaf teklifler ve değişiklik kontrolü ile teslimatı öngörülebilir tutuyoruz.",
  },
  {
    q: "Yayın sonrası destek veriyor musunuz?",
    a: "Optimizasyon, A/B testi, erişilebilirlik denetimi ve yinelemeli özellik geliştirme için retainer sunuyoruz; ürününüz gelişmeye devam etsin.",
  },
];

export function Faq() {
  return (
    <section className="border-t border-zinc-800 bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl">
            Sıkça sorulan sorular
          </h2>
          <p className="mt-4 text-zinc-400">
            Süreç, fiyatlandırma ve iş birliği hakkında yanıtlar—detay için bir maddeyi açın.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
