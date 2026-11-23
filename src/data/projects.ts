import type { CaseStudySlug, Locale } from "@/i18n/routing";
import { caseStudyHref } from "@/lib/routes";

export type ProjectVisualVariant = "campaign" | "commerce" | "platform";

/** A licensed photo: alt text, crop focus point and photographer credit. */
type ProjectImage<Alt> = {
  src: string;
  alt: Alt;
  /** CSS object-position used when the photo is cropped to the card's ratio. */
  position?: string;
  credit: { name: string; profileUrl: string; photoUrl: string };
};

type ProjectContent = {
  title: string;
  category: string;
  summary: string;
  /** Accessible description of the visual. */
  visualLabel: string;
  /** Words shown inside the illustrated mockups (fictional concept brand, UI labels). */
  visualCopy: Record<string, string>;
  brief: string;
  approach: { title: string; body: string }[];
  deliverables: string[];
};

type ProjectDefinition = {
  /** Internal slug; public slugs per locale live in i18n/routing.ts. */
  slug: CaseStudySlug;
  /** Conceptual work is always labeled as such and never presented as client work. */
  kind: "concept" | "client";
  /** Real project imagery (in /public). Concepts without imagery use a CSS visual. */
  image?: ProjectImage<Record<Locale, string>>;
  visual: ProjectVisualVariant;
  /** Ids of the service pillars involved (see service-pillars.ts). */
  services: string[];
  content: Record<Locale, ProjectContent>;
};

export type Project = Omit<ProjectDefinition, "content" | "image"> &
  ProjectContent & { href: string; image?: ProjectImage<string> };

const projects: ProjectDefinition[] = [
  {
    slug: "brand-campaign-concept",
    image: {
      src: "/images/projects/brand-campaign-concept.webp",
      alt: { en: "A model in a beige jacket and sunglasses against a blue sky", tr: "Mavi gökyüzü önünde bej ceketli ve güneş gözlüklü bir model" },
      position: "center",
      credit: {
        name: "mojtaba mosayebzadeh",
        profileUrl: "https://unsplash.com/@mojiw?utm_source=kechy_creative&utm_medium=referral",
        photoUrl: "https://unsplash.com/photos/a-woman-with-white-hair-wearing-a-tan-jacket-and-sunglasses-nTLcbrCUVBQ?utm_source=kechy_creative&utm_medium=referral",
      },
    },
    kind: "concept",
    visual: "campaign",
    services: ["creative-social", "growth-performance"],
    content: {
      en: {
        title: "New Season Launch",
        category: "Creative & Social",
        summary:
          "A social-first launch campaign: one core idea carried through a key visual system, a content calendar and short-form video concepts.",
        visualLabel:
          "Concept visual for the fictional fashion brand MORA: a campaign poster and two phones showing a story and a social feed.",
        visualCopy: {
          brand: "MORA",
          season: "SS26 Collection",
          headline: "New season.",
          cta: "Discover",
          chip: "Reels · 0:15",
        },
        brief:
          "A brand introducing a new seasonal collection needs a launch that feels like one campaign, not a set of unrelated posts. The campaign has to work across feed posts, stories and short-form video, and lead people to a page where they can act.",
        approach: [
          {
            title: "One idea, many formats",
            body: "Start from a single campaign line and a key visual, then design how it adapts to each format instead of creating each piece from scratch.",
          },
          {
            title: "A calendar with a shape",
            body: "Plan the content in three phases (tease, launch, sustain) so the campaign builds momentum rather than peaking on day one.",
          },
          {
            title: "Video built for the first seconds",
            body: "Write short-form video concepts that show the product and the idea immediately, with captions for viewers watching without sound.",
          },
          {
            title: "A destination that converts",
            body: "Pair the campaign with a focused landing page and tracking, so every channel leads to one measurable action.",
          },
        ],
        deliverables: [
          "Campaign idea and key visual",
          "Format system for feed, stories and video",
          "Three-phase content calendar",
          "Short-form video concepts and scripts",
          "Campaign landing page brief",
        ],
      },
      tr: {
        title: "Yeni Sezon Lansmanı",
        category: "Kreatif & Sosyal Medya",
        summary:
          "Tek bir fikirden yola çıkan, sosyal medya odaklı bir lansman: ana görsel, içerik takvimi ve kısa videolar.",
        visualLabel:
          "Kurgusal moda markası MORA için konsept görsel: bir kampanya afişi ve hikâye ile sosyal medya akışı gösteren iki telefon.",
        visualCopy: {
          brand: "MORA",
          season: "SS26 Koleksiyonu",
          headline: "Yeni sezon.",
          cta: "Keşfet",
          chip: "Reels · 0:15",
        },
        brief:
          "Yeni sezon koleksiyonunu tanıtan bir marka, birbirinden kopuk gönderiler yerine tek bir kampanya gibi hissettiren bir lansman istiyor. Kampanyanın akış gönderilerinde, hikâyelerde ve kısa videolarda aynı etkiyi yaratması ve insanları harekete geçebilecekleri bir sayfaya yönlendirmesi gerekiyor.",
        approach: [
          {
            title: "Tek fikir, birçok format",
            body: "Tek bir kampanya cümlesi ve ana görselle başlamak; her parçayı sıfırdan üretmek yerine bu fikrin her formata nasıl uyarlanacağını tasarlamak.",
          },
          {
            title: "Kurgusu olan bir takvim",
            body: "İçeriği üç aşamada planlamak: merak uyandırma, lansman ve devamlılık. Böylece kampanya ilk gün zirve yapıp sönmek yerine giderek güçlenir.",
          },
          {
            title: "İlk saniyelere odaklanan videolar",
            body: "Ürünü ve fikri ilk anda gösteren kısa video konseptleri yazmak; sesi kapalı izleyenler için altyazı eklemek.",
          },
          {
            title: "Dönüşüm sağlayan bir varış noktası",
            body: "Kampanyayı odaklı bir açılış sayfası ve ölçümleme ile desteklemek; böylece her kanal ölçülebilir tek bir eyleme yönlenir.",
          },
        ],
        deliverables: [
          "Kampanya fikri ve ana görsel",
          "Akış, hikâye ve video için format sistemi",
          "Üç aşamalı içerik takvimi",
          "Kısa video konseptleri ve senaryoları",
          "Kampanya açılış sayfası brifi",
        ],
      },
    },
  },
  {
    slug: "e-commerce-experience-concept",
    image: {
      src: "/images/projects/e-commerce-experience-concept.webp",
      alt: { en: "An unlabeled amber glass dropper bottle on a stone pedestal", tr: "Taş bir kaide üzerinde etiketsiz amber cam damlalıklı şişe" },
      position: "center",
      credit: {
        name: "Avtar Singh",
        profileUrl: "https://unsplash.com/@avtar9w?utm_source=kechy_creative&utm_medium=referral",
        photoUrl: "https://unsplash.com/photos/amber-glass-dropper-bottle-with-blank-label-on-concrete-block-MkuwnDkT1s0?utm_source=kechy_creative&utm_medium=referral",
      },
    },
    kind: "concept",
    visual: "commerce",
    services: ["web-technology", "growth-performance"],
    content: {
      en: {
        title: "Mobile-First Store",
        category: "Web & Technology",
        summary:
          "A storefront designed around fast product discovery, clear product pages and a shorter route to checkout.",
        visualLabel:
          "Concept visual for the fictional skincare brand LUME: two phones showing a product list and a product page.",
        visualCopy: {
          brand: "LUME",
          nav: "New in",
          product: "Hydrating serum",
          price: "₺640",
          cta: "Add to cart",
          chip: "Checkout · 2 steps",
          chip2: "Fast delivery",
        },
        brief:
          "A growing product brand sells mostly through social media messages and wants an online store of its own. Customers should find products quickly on mobile, understand them without asking questions, and check out in as few steps as possible.",
        approach: [
          {
            title: "Mobile first, by default",
            body: "Design the catalogue, filters and product pages for a phone screen first, since that's where social traffic arrives.",
          },
          {
            title: "Product pages that answer questions",
            body: "Structure each product page around the questions customers ask in messages today: sizing, materials, delivery and returns.",
          },
          {
            title: "A shorter checkout",
            body: "Remove steps that don't need to be there, support guest checkout and keep delivery costs visible from the start.",
          },
          {
            title: "Measured from launch",
            body: "Set up e-commerce tracking before launch so marketing and product decisions are based on real behavior.",
          },
        ],
        deliverables: [
          "Store structure and navigation",
          "Product listing and detail page design",
          "Streamlined checkout flow",
          "Storefront development",
          "E-commerce analytics setup",
        ],
      },
      tr: {
        title: "Mobil Öncelikli Mağaza",
        category: "Web & Teknoloji",
        summary:
          "Hızlı ürün keşfi, anlaşılır ürün sayfaları ve daha kısa bir ödeme süreci üzerine kurulu bir online mağaza.",
        visualLabel:
          "Kurgusal cilt bakım markası LUME için konsept görsel: ürün listesi ve ürün sayfası gösteren iki telefon.",
        visualCopy: {
          brand: "LUME",
          nav: "Yeni gelenler",
          product: "Nemlendirici serum",
          price: "₺640",
          cta: "Sepete ekle",
          chip: "Ödeme · 2 adım",
          chip2: "Hızlı teslimat",
        },
        brief:
          "Ürünlerini çoğunlukla sosyal medya mesajları üzerinden satan, büyümekte olan bir marka kendi online mağazasını kurmak istiyor. Müşterilerin ürünleri mobilde hızla bulabilmesi, soru sormadan anlayabilmesi ve ödemeyi olabildiğince az adımda tamamlayabilmesi gerekiyor.",
        approach: [
          {
            title: "Önce mobil",
            body: "Sosyal medyadan gelen ziyaretçilerin çoğu telefondan geldiği için katalog, filtreler ve ürün sayfalarını önce mobil ekrana göre tasarlamak.",
          },
          {
            title: "Soruları yanıtlayan ürün sayfaları",
            body: "Her ürün sayfasını, müşterilerin bugün mesajla sorduğu konular etrafında kurgulamak: beden, malzeme, teslimat ve iade.",
          },
          {
            title: "Daha kısa bir ödeme süreci",
            body: "Gereksiz adımları kaldırmak, üye olmadan alışverişi mümkün kılmak ve kargo ücretini en baştan göstermek.",
          },
          {
            title: "İlk günden ölçümleme",
            body: "Pazarlama ve ürün kararlarının gerçek kullanıcı davranışına dayanması için e-ticaret takibini yayından önce kurmak.",
          },
        ],
        deliverables: [
          "Mağaza yapısı ve navigasyon",
          "Ürün listeleme ve detay sayfası tasarımı",
          "Sadeleştirilmiş ödeme akışı",
          "Mağaza geliştirme",
          "E-ticaret analitiği kurulumu",
        ],
      },
    },
  },
  {
    slug: "digital-platform-concept",
    image: {
      src: "/images/projects/digital-platform-concept.webp",
      alt: { en: "A person reviewing business charts on a laptop", tr: "Dizüstü bilgisayarda iş grafiklerini inceleyen bir kişi" },
      position: "50% 45%",
      credit: {
        name: "Loui Kiær",
        profileUrl: "https://unsplash.com/@plutonicmedia?utm_source=kechy_creative&utm_medium=referral",
        photoUrl: "https://unsplash.com/photos/person-analyzing-business-charts-on-laptop-CielzQJR0SQ?utm_source=kechy_creative&utm_medium=referral",
      },
    },
    kind: "concept",
    visual: "platform",
    services: ["web-technology", "growth-performance"],
    content: {
      en: {
        title: "Operations in One Place",
        category: "Web & Technology · Growth",
        summary:
          "A custom web platform connected to existing tools through integrations, with a reporting view built in from day one.",
        visualLabel:
          "Concept visual for the fictional platform Atlas: a dashboard with a daily schedule, a weekly chart and connected tools.",
        visualCopy: {
          brand: "Atlas",
          today: "Today",
          kpi1: "Bookings",
          kpi2: "New clients",
          kpi3: "Open invoices",
          schedule: "Schedule",
          chart: "This week",
          int1: "Calendar",
          int2: "Invoicing",
          int3: "CRM",
        },
        brief:
          "A service business manages bookings, customer records and invoices in separate tools, copying data between them by hand. It needs one place to run day-to-day operations and a clear view of how the business is performing.",
        approach: [
          {
            title: "Map the real workflow",
            body: "Document how work actually moves through the team today before deciding what to build, connect or leave alone.",
          },
          {
            title: "Integrate before rebuilding",
            body: "Connect the tools that already work well instead of replacing them, and build only the parts that are missing.",
          },
          {
            title: "Reporting built in",
            body: "Design the reporting view alongside the platform, so the numbers the business cares about are available from day one.",
          },
          {
            title: "Ship in stages",
            body: "Release the most time-consuming workflow first, learn from how the team uses it, then extend.",
          },
        ],
        deliverables: [
          "Workflow mapping and technical scope",
          "Custom web application",
          "Integrations with existing tools",
          "Reporting dashboard",
          "Staged release plan",
        ],
      },
      tr: {
        title: "Tek Ekranda Operasyon",
        category: "Web & Teknoloji · Büyüme",
        summary:
          "Mevcut araçlara entegrasyonlarla bağlanan ve ilk günden bir raporlama ekranı içeren özel bir web platformu.",
        visualLabel:
          "Kurgusal platform Atlas için konsept görsel: günlük program, haftalık grafik ve bağlı araçlar içeren bir panel.",
        visualCopy: {
          brand: "Atlas",
          today: "Bugün",
          kpi1: "Randevu",
          kpi2: "Yeni müşteri",
          kpi3: "Bekleyen fatura",
          schedule: "Program",
          chart: "Bu hafta",
          int1: "Takvim",
          int2: "Fatura",
          int3: "CRM",
        },
        brief:
          "Bir hizmet işletmesi randevuları, müşteri kayıtlarını ve faturaları ayrı araçlarda yönetiyor ve verileri bunlar arasında elle taşıyor. Günlük operasyonu tek bir yerden yürütebileceği ve işlerin nasıl gittiğini net görebileceği bir sisteme ihtiyacı var.",
        approach: [
          {
            title: "Gerçek iş akışını çıkarmak",
            body: "Neyin geliştirileceğine, neyin bağlanacağına ya da neyin olduğu gibi kalacağına karar vermeden önce işlerin ekip içinde bugün nasıl yürüdüğünü belgelemek.",
          },
          {
            title: "Önce entegrasyon",
            body: "İyi çalışan araçları değiştirmek yerine birbirine bağlamak ve yalnızca eksik olan parçaları geliştirmek.",
          },
          {
            title: "Raporlama en baştan",
            body: "Raporlama ekranını platformla birlikte tasarlamak; böylece işletmenin önem verdiği rakamlar ilk günden görünür olur.",
          },
          {
            title: "Aşamalı yayın",
            body: "En çok zaman alan iş akışını ilk olarak yayına almak, ekibin kullanımından öğrenmek ve ardından genişletmek.",
          },
        ],
        deliverables: [
          "İş akışı analizi ve teknik kapsam",
          "Özel web uygulaması",
          "Mevcut araçlarla entegrasyonlar",
          "Raporlama paneli",
          "Aşamalı yayın planı",
        ],
      },
    },
  },
];

function localize(project: ProjectDefinition, locale: Locale): Project {
  const { content, image, ...base } = project;
  return {
    ...base,
    ...content[locale],
    href: caseStudyHref(locale, project.slug),
    image: image ? { ...image, alt: image.alt[locale] } : undefined,
  };
}

export function getProjects(locale: Locale): Project[] {
  return projects.map((project) => localize(project, locale));
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  const project = projects.find((candidate) => candidate.slug === slug);
  return project ? localize(project, locale) : undefined;
}
