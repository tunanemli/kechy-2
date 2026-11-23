import { formatServiceAreas } from "@/data/service-areas";
import { getDictionary } from "@/i18n/dictionaries";
import type { CaseStudySlug, Locale } from "@/i18n/routing";
import { liveHref, routes, type RoutePath } from "@/lib/routes";

type PillarContent = {
  title: string;
  summary: string;
  capabilities: string[];
  /** Content for the service's own page. */
  page: {
    metaTitle: string;
    metaDescription: string;
    headline: string;
    lead: string;
    offerings: { title: string; body: string }[];
    connection: string;
    goodFit: string[];
    /** Frequently asked questions, shown on the page and as FAQ structured data. */
    faq: { question: string; answer: string }[];
  };
};

type PillarDefinition = {
  id: string;
  index: string;
  glyph: "circle" | "block" | "arc";
  route: RoutePath;
  relatedProjectSlug: CaseStudySlug;
  content: Record<Locale, PillarContent>;
};

export type ServicePillar = Omit<PillarDefinition, "content"> & PillarContent & { href: string };

const pillars: PillarDefinition[] = [
  {
    id: "creative-social",
    index: "01",
    glyph: "circle",
    route: routes.socialMediaMarketing,
    relatedProjectSlug: "brand-campaign-concept",
    content: {
      en: {
        title: "Creative & Social",
        summary: "Content and campaigns that give your brand a recognizable voice on the platforms your audience uses.",
        capabilities: ["Social media strategy", "Content planning", "Creative campaigns", "Short-form video concepts"],
        page: {
          metaTitle: "Social Media Management & Content",
          metaDescription:
            "Social media strategy, content planning, creative campaigns and Reels/TikTok video concepts that give your brand a clear, consistent voice.",
          headline: "Content people stop scrolling for.",
          lead: "We plan, create and run social media content and campaigns that give your brand a clear, consistent voice, and connect it to the rest of your digital presence.",
          offerings: [
            {
              title: "Social media strategy",
              body: "Choosing the right platforms and defining your audience, tone of voice and content pillars around your goals.",
            },
            {
              title: "Content planning",
              body: "Monthly content calendars that balance brand building, product communication and timely topics.",
            },
            {
              title: "Creative campaigns",
              body: "Campaign ideas developed into key visuals and formats for each channel, from launch to wrap-up.",
            },
            {
              title: "Short-form video concepts",
              body: "Concepts, scripts and storyboards for Reels, TikTok and Shorts, built around the first few seconds.",
            },
          ],
          connection:
            "Development is part of the same team, so campaigns can point to landing pages built for them, with tracking in place from the first post.",
          goodFit: [
            "You post regularly, but without a clear direction",
            "You're launching a product, service or brand",
            "You need a consistent visual language across channels",
            "You want your content and website to tell the same story",
          ],
          faq: [
            {
              question: "Which platforms do you work on?",
              answer: "We focus on the platforms where your audience actually spends time. For most brands that means a few of Instagram, TikTok, LinkedIn and YouTube. Rather than being everywhere, we pick the ones that work for you.",
            },
            {
              question: "Do you create the content yourselves?",
              answer: "Strategy, content plans, copy and visual design come from us. For video, we prepare concepts, scripts and storyboards; when filming is needed, we plan it with you or the team you work with.",
            },
            {
              question: "How soon will I see results?",
              answer: "Lasting results on social media come from regular, consistent posting over a few months. At the end of the first month we review what is working and adjust the plan accordingly.",
            },
            {
              question: "Do you also manage paid ads?",
              answer: "Yes. Paid advertising is part of our Growth & Performance service. Planning content and ads together usually gives better results than handling them separately.",
            },
          ],
        },
      },
      tr: {
        title: "Kreatif & Sosyal Medya",
        summary: "Markanıza, kitlenizin vakit geçirdiği platformlarda tanınan bir ses kazandıran içerikler ve kampanyalar.",
        capabilities: ["Sosyal medya stratejisi", "İçerik planlama", "Yaratıcı kampanyalar", "Kısa video konseptleri"],
        page: {
          metaTitle: "Sosyal Medya Yönetimi ve İçerik Üretimi",
          metaDescription:
            "Sosyal medya stratejisi, içerik planlama, yaratıcı kampanyalar ve Reels/TikTok video konseptleri. Markanıza tutarlı ve tanınan bir ses kazandırıyoruz.",
          headline: "Kaydırmayı durduran içerikler.",
          lead: "Markanıza net ve tutarlı bir ses kazandıran sosyal medya içeriklerini ve kampanyalarını planlıyor, üretiyor ve yönetiyoruz. Hepsini dijital varlığınızın geri kalanıyla da uyumlu hale getiriyoruz.",
          offerings: [
            {
              title: "Sosyal medya stratejisi",
              body: "Hedeflerinize uygun platformları seçiyor; hedef kitlenizi, iletişim dilinizi ve ana içerik başlıklarınızı belirliyoruz.",
            },
            {
              title: "İçerik planlama",
              body: "Marka bilinirliği, ürün iletişimi ve gündem içeriklerini dengeleyen aylık içerik takvimleri hazırlıyoruz.",
            },
            {
              title: "Yaratıcı kampanyalar",
              body: "Kampanya fikirlerini, lansmandan kapanışa kadar her kanal için ana görsellere ve formatlara dönüştürüyoruz.",
            },
            {
              title: "Kısa video konseptleri",
              body: "Reels, TikTok ve Shorts için ilk birkaç saniyeye odaklanan konseptler, senaryolar ve storyboard'lar hazırlıyoruz.",
            },
          ],
          connection:
            "Yazılım geliştirme de aynı ekipte olduğu için kampanyalarınız kendileri için hazırlanmış açılış sayfalarına yönlenebilir; ölçümleme de ilk paylaşımdan itibaren hazır olur.",
          goodFit: [
            "Düzenli paylaşım yapıyor ama net bir yön izlemiyorsanız",
            "Yeni bir ürün, hizmet ya da marka lanse ediyorsanız",
            "Tüm kanallarda tutarlı bir görsel dile ihtiyacınız varsa",
            "İçeriklerinizin ve web sitenizin aynı hikâyeyi anlatmasını istiyorsanız",
          ],
          faq: [
            {
              question: "Hangi platformlarda çalışıyorsunuz?",
              answer: "Hedef kitlenizin gerçekten vakit geçirdiği platformlara odaklanıyoruz. Çoğu marka için bu Instagram, TikTok, LinkedIn ve YouTube'dan birkaçı oluyor. Her yerde olmak yerine sizin için işe yarayanları seçiyoruz.",
            },
            {
              question: "İçerikleri siz mi üretiyorsunuz?",
              answer: "Strateji, içerik planı, metinler ve görsel tasarımlar bizden. Video için konsept, senaryo ve storyboard hazırlıyoruz; çekim gerektiğinde bunu sizinle ya da birlikte çalıştığınız ekiple planlıyoruz.",
            },
            {
              question: "Ne zaman sonuç almaya başlarım?",
              answer: "Sosyal medyada kalıcı sonuçlar, birkaç ay boyunca düzenli ve tutarlı paylaşımla oluşur. İlk ayın sonunda neyin işe yaradığını değerlendiriyor, planı buna göre güncelliyoruz.",
            },
            {
              question: "Reklam yönetimini de yapıyor musunuz?",
              answer: "Evet. Ücretli reklamlar Büyüme & Performans hizmetimizin bir parçası. İçeriği ve reklamı birlikte planlamak, genellikle ayrı ayrı yürütmekten daha iyi sonuç verir.",
            },
          ],
        },
      },
    },
  },
  {
    id: "web-technology",
    index: "02",
    glyph: "block",
    route: routes.webDevelopment,
    relatedProjectSlug: "e-commerce-experience-concept",
    content: {
      en: {
        title: "Web & Technology",
        summary: "Fast, well-built websites and software that fit how your business actually works.",
        capabilities: [
          "Corporate websites",
          "Landing pages",
          "E-commerce development",
          "Custom software and integrations",
        ],
        page: {
          metaTitle: "Website, E-commerce & Software Development",
          metaDescription:
            "Corporate websites, landing pages, e-commerce stores and custom software. Fast, mobile-first and built with search visibility in mind.",
          headline: "Websites and software that work as hard as you do.",
          lead: "From corporate websites to custom integrations, we build fast, accessible and maintainable digital products with modern technology.",
          offerings: [
            {
              title: "Corporate websites",
              body: "Clear structure, strong presentation and content you can manage yourself, built for speed and search visibility.",
            },
            {
              title: "Landing pages",
              body: "Focused pages for campaigns and launches, designed around a single action and easy to measure.",
            },
            {
              title: "E-commerce development",
              body: "Online stores with straightforward product discovery and a checkout with as few steps as possible.",
            },
            {
              title: "Custom software and integrations",
              body: "Web applications, automations and connections between the tools your team already uses.",
            },
          ],
          connection:
            "Marketing is part of the same team, so what we build is ready for campaigns: analytics, conversion tracking and content workflows are planned in, not added later.",
          goodFit: [
            "Your website no longer reflects your business",
            "You need a landing page for a campaign or launch",
            "You want to start selling online, or sell better",
            "Manual work between your tools is slowing your team down",
          ],
          faq: [
            {
              question: "How long does a website take?",
              answer: "It depends on the scope. A corporate site with a handful of pages and a platform with custom integrations take very different amounts of time. After our first conversation we share a clear scope and timeline.",
            },
            {
              question: "Can I update the website myself afterwards?",
              answer: "Yes. Where it makes sense we set up a content management system so your team can edit content easily, and we show you how to use it.",
            },
            {
              question: "Are your websites mobile-friendly and search-ready?",
              answer: "Every site is designed for mobile first and delivered with fast loading, a clear page structure and the technical groundwork search engines need.",
            },
            {
              question: "Can you integrate with the tools we already use?",
              answer: "Yes. We can connect tools such as payment, CRM, accounting and email systems, and automate repetitive manual work between them.",
            },
          ],
        },
      },
      tr: {
        title: "Web & Teknoloji",
        summary: "İşletmenizin gerçek işleyişine uyan, hızlı ve sağlam web siteleri ve yazılımlar.",
        capabilities: [
          "Kurumsal web siteleri",
          "Açılış sayfaları",
          "E-ticaret geliştirme",
          "Özel yazılım ve entegrasyonlar",
        ],
        page: {
          metaTitle: "Web Sitesi, E-ticaret ve Yazılım Geliştirme",
          metaDescription:
            "Kurumsal web sitesi, açılış sayfası, e-ticaret sitesi ve özel yazılım geliştirme. Hızlı, mobil uyumlu ve arama motorlarına hazır dijital ürünler.",
          headline: "Sizin kadar çalışkan web siteleri ve yazılımlar.",
          lead: "Kurumsal web sitelerinden özel entegrasyonlara kadar, modern teknolojilerle hızlı, erişilebilir ve bakımı kolay dijital ürünler geliştiriyoruz.",
          offerings: [
            {
              title: "Kurumsal web siteleri",
              body: "Net bir yapı, güçlü bir sunum ve kendi başınıza yönetebileceğiniz içerik. Hepsi hız ve arama görünürlüğü düşünülerek geliştirilir.",
            },
            {
              title: "Açılış sayfaları",
              body: "Kampanyalar ve lansmanlar için tek bir eyleme odaklanan, sonuçları kolayca ölçülebilen sayfalar.",
            },
            {
              title: "E-ticaret geliştirme",
              body: "Ürünlerin kolayca bulunduğu ve ödemenin olabildiğince az adımda tamamlandığı online mağazalar.",
            },
            {
              title: "Özel yazılım ve entegrasyonlar",
              body: "Web uygulamaları, otomasyonlar ve ekibinizin zaten kullandığı araçlar arasındaki bağlantılar.",
            },
          ],
          connection:
            "Pazarlama da aynı ekipte olduğu için geliştirdiğimiz her şey kampanyalara hazırdır: analitik, dönüşüm takibi ve içerik süreçleri sonradan eklenmez, en baştan planlanır.",
          goodFit: [
            "Web siteniz artık işinizi yansıtmıyorsa",
            "Bir kampanya ya da lansman için açılış sayfasına ihtiyacınız varsa",
            "Online satışa başlamak ya da daha iyi satmak istiyorsanız",
            "Araçlarınız arasında elle yapılan işler ekibinizi yavaşlatıyorsa",
          ],
          faq: [
            {
              question: "Bir web sitesi ne kadar sürede hazır olur?",
              answer: "Kapsama göre değişir. Birkaç sayfalık bir kurumsal site ile özel entegrasyonlar içeren bir platform aynı sürede tamamlanmaz. İlk görüşmeden sonra net bir kapsam ve takvim paylaşıyoruz.",
            },
            {
              question: "Siteyi sonradan kendim güncelleyebilir miyim?",
              answer: "Evet. Gerektiğinde ekibinizin içerikleri kolayca düzenleyebileceği bir içerik yönetim sistemi kuruyor ve nasıl kullanılacağını gösteriyoruz.",
            },
            {
              question: "Siteler mobil uyumlu ve arama motorlarına hazır mı?",
              answer: "Her siteyi önce mobil ekran için tasarlıyor; hızlı açılan, net bir sayfa yapısına sahip ve arama motorlarının ihtiyaç duyduğu teknik altyapıyla teslim ediyoruz.",
            },
            {
              question: "Kullandığımız sistemlerle entegrasyon yapabilir misiniz?",
              answer: "Evet. Ödeme, CRM, muhasebe ve e-posta gibi araçları birbirine bağlayabilir, aralarında elle yapılan tekrar eden işleri otomatikleştirebiliriz.",
            },
          ],
        },
      },
    },
  },
  {
    id: "growth-performance",
    index: "03",
    glyph: "arc",
    route: routes.performanceMarketing,
    relatedProjectSlug: "digital-platform-concept",
    content: {
      en: {
        title: "Growth & Performance",
        summary: "Advertising and measurement set up properly, so every decision is based on real data.",
        capabilities: [
          "Digital advertising",
          "Conversion tracking",
          "Analytics and reporting",
          "Landing page optimization",
        ],
        page: {
          metaTitle: "Digital Advertising & Performance Marketing",
          metaDescription:
            "Digital advertising, conversion tracking, analytics reporting and landing page optimization for growth you can measure.",
          headline: "Growth you can measure.",
          lead: "We plan and run digital advertising, set up tracking properly and turn the data into clear decisions about what to do next.",
          offerings: [
            {
              title: "Digital advertising",
              body: "Planning and managing paid campaigns on the platforms where your audience spends time, aligned with your creative and budget.",
            },
            {
              title: "Conversion tracking",
              body: "Reliable measurement of the actions that matter, such as form submissions, purchases and sign-ups.",
            },
            {
              title: "Analytics and reporting",
              body: "Clear, regular reports that explain what happened, why it matters and what we'll change next.",
            },
            {
              title: "Landing page optimization",
              body: "Improving the pages your traffic lands on, based on data instead of assumptions.",
            },
          ],
          connection:
            "We build websites too, so tracking fixes and landing page changes don't wait on a third party. We implement and test improvements ourselves.",
          goodFit: [
            "You run ads but aren't sure what they deliver",
            "Your tracking is incomplete or unreliable",
            "Visitors arrive but don't take action",
            "You want reports your team actually reads",
          ],
          faq: [
            {
              question: "Which ad platforms do you work with?",
              answer: "We choose platforms based on where your audience is. For most projects that means Meta (Instagram and Facebook) and Google.",
            },
            {
              question: "Is there a minimum ad budget?",
              answer: "We don't set a fixed minimum. We agree on a budget together, based on your goals and the channels we want to test.",
            },
            {
              question: "How do you report results?",
              answer: "Our regular reports show spend, traffic and conversions such as form submissions and sales, and spell out what we will change in the next period.",
            },
            {
              question: "Why does conversion tracking matter?",
              answer: "Without knowing which ads actually bring customers, you cannot spend your budget well. Setting tracking up correctly from the start keeps money from being wasted.",
            },
          ],
        },
      },
      tr: {
        title: "Büyüme & Performans",
        summary: "Doğru kurulmuş reklam ve ölçümleme sayesinde her karar gerçek verilere dayanır.",
        capabilities: [
          "Dijital reklam yönetimi",
          "Dönüşüm takibi",
          "Analitik ve raporlama",
          "Açılış sayfası optimizasyonu",
        ],
        page: {
          metaTitle: "Dijital Reklam ve Performans Pazarlaması",
          metaDescription:
            "Dijital reklam yönetimi, dönüşüm takibi, analitik raporlama ve açılış sayfası optimizasyonu ile ölçülebilir büyüme.",
          headline: "Ölçülebilir büyüme.",
          lead: "Dijital reklamlarınızı planlayıp yönetiyor, ölçümlemeyi doğru kuruyor ve verileri bir sonraki adım için net kararlara dönüştürüyoruz.",
          offerings: [
            {
              title: "Dijital reklam yönetimi",
              body: "Kitlenizin vakit geçirdiği platformlarda, kreatif çalışmalarınız ve bütçenizle uyumlu reklam kampanyaları planlıyor ve yönetiyoruz.",
            },
            {
              title: "Dönüşüm takibi",
              body: "Form gönderimleri, satın almalar ve üyelikler gibi önemli eylemleri güvenilir şekilde ölçüyoruz.",
            },
            {
              title: "Analitik ve raporlama",
              body: "Ne olduğunu, neden önemli olduğunu ve bir sonraki adımda neyi değiştireceğimizi anlatan düzenli ve anlaşılır raporlar.",
            },
            {
              title: "Açılış sayfası optimizasyonu",
              body: "Ziyaretçilerin geldiği sayfaları varsayımlara göre değil, verilere dayanarak iyileştiriyoruz.",
            },
          ],
          connection:
            "Web sitelerini de biz geliştirdiğimiz için ölçümleme düzeltmeleri ve sayfa değişiklikleri başka bir ekibi beklemez. İyileştirmeleri kendimiz uygular ve test ederiz.",
          goodFit: [
            "Reklam veriyor ama size ne kazandırdığından emin değilseniz",
            "Ölçümlemeniz eksik ya da güvenilir değilse",
            "Ziyaretçiler geliyor ama harekete geçmiyorsa",
            "Ekibinizin gerçekten okuyacağı raporlar istiyorsanız",
          ],
          faq: [
            {
              question: "Hangi reklam platformlarında çalışıyorsunuz?",
              answer: "Platformları kitlenizin bulunduğu yere göre seçiyoruz. Çoğu projede bu Meta (Instagram ve Facebook) ile Google oluyor.",
            },
            {
              question: "Minimum bir reklam bütçesi gerekiyor mu?",
              answer: "Sabit bir alt sınır koymuyoruz. Bütçeyi hedeflerinize ve test etmek istediğimiz kanallara göre birlikte belirliyoruz.",
            },
            {
              question: "Sonuçları nasıl raporluyorsunuz?",
              answer: "Düzenli raporlarımızda harcamayı, gelen ziyaretçiyi ve form gönderimi, satış gibi dönüşümleri gösteriyor; bir sonraki dönemde neyi değiştireceğimizi açıkça yazıyoruz.",
            },
            {
              question: "Dönüşüm takibi neden önemli?",
              answer: "Hangi reklamın gerçekten müşteri getirdiğini bilmeden bütçeyi doğru kullanmak mümkün değil. Takibi en baştan doğru kurmak, harcamanın boşa gitmesini önler.",
            },
          ],
        },
      },
    },
  },
];

function localize(pillar: PillarDefinition, locale: Locale): ServicePillar {
  const { content, ...base } = pillar;
  const { serviceDetail } = getDictionary(locale);
  const page = content[locale].page;
  const areasFaq = { question: serviceDetail.areasQuestion, answer: serviceDetail.areasAnswer(formatServiceAreas(locale)) };
  return {
    ...base,
    ...content[locale],
    page: { ...page, faq: [...page.faq, areasFaq] },
    href: liveHref(locale, pillar.route),
  };
}

export function getServicePillars(locale: Locale): ServicePillar[] {
  return pillars.map((pillar) => localize(pillar, locale));
}

export function getServicePillar(locale: Locale, id: string): ServicePillar | undefined {
  const pillar = pillars.find((candidate) => candidate.id === id);
  return pillar ? localize(pillar, locale) : undefined;
}
