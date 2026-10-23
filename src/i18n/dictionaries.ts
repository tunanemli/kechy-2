import type { Locale } from "@/i18n/routing";

const en = {
  meta: {
    ogLocale: "en_US",
    tagline: "Creative × Technology Studio",
    description:
      "Kechy Creative is a creative and technology studio. We bring social media marketing and software development together to build brands that stand out and businesses that move forward.",
    homeTitle: "Kechy Creative — We make brands grow",
    homeDescription:
      "A creative and technology studio combining social media marketing and web development. Campaigns, websites and custom software for brands that want to grow.",
  },
  common: {
    skipToContent: "Skip to content",
    homeLabel: "Kechy Creative — home",
    mainNavLabel: "Main",
    mobileNavLabel: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contact: "Contact",
    contactUs: "Contact us",
    languageLabel: "Language",
    comingSoon: "coming soon",
    concept: "Concept",
    viewCaseStudy: "View case study",
    allWork: "All work",
    allServices: "All services",
    servicePrefix: "Service",
  },
  nav: { work: "Work", services: "Services", about: "About" },
  footer: {
    statement:
      "A creative and technology studio. We combine social media marketing and software development to help brands stand out and businesses move forward.",
    studio: "Studio",
    services: "Services",
    privacy: "Privacy policy",
    cookies: "Cookie policy",
    rights: "All rights reserved.",
  },
  hero: {
    eyebrowA: "Creative",
    eyebrowB: "Technology Studio",
    lines: ["We make", "brands"],
    highlight: "grow.",
    lead: "We bring creative thinking and technology together to build brands that stand out and businesses that move forward.",
    primary: "Let's build something",
    secondary: "Explore our work",
    visual: {
      creative: "Creative",
      technology: "Technology",
      idea: "distinctive",
      build: "fast & solid",
      goal: "grow",
    },
  },
  servicesPreview: {
    eyebrow: "What we do",
    titleA: "Ideas that get noticed.",
    titleB: "Technology that works.",
    description:
      "Social media marketing and software development under one roof, so strategy, content and code move in the same direction.",
    explore: (title: string) => `Explore ${title}`,
  },
  selectedWork: {
    eyebrow: "Selected work",
    title: "Concepts that show how we think.",
    description:
      "Our first client case studies are in preparation. Until they are published, these clearly labeled concept projects show how we approach campaigns, digital products and platforms.",
    viewAll: "View all work",
    pitchTitle: "Your project could be our first featured case study.",
    pitchBody: "Tell us what you're working on and we'll show you how we would approach it.",
    pitchAction: "Start a project",
  },
  approach: {
    eyebrow: "Our approach",
    title: "A clear process, from first conversation to results.",
    serviceEyebrow: "How we work",
    serviceTitle: "The same clear process on every project.",
    steps: [
      { title: "Discover", body: "Understand the business, audience, and problem." },
      { title: "Strategize", body: "Define the creative direction, technical scope, and success criteria." },
      { title: "Build", body: "Design, develop, produce, and implement." },
      { title: "Improve", body: "Measure performance, learn, and optimize." },
    ],
  },
  aboutPreview: {
    eyebrow: "About Kechy",
    titleA: "Two disciplines.",
    titleB: "One focused team.",
    body: "We combine creative thinking and technical execution to build digital experiences that look distinctive and work hard for your business.",
    disciplines: [
      {
        title: "Marketing & creative",
        body: "Social media strategy, content, campaigns and creative production, planned around what your audience responds to.",
      },
      {
        title: "Development & technology",
        body: "Websites, custom software, integrations and automation, built to be fast, maintainable and easy to grow.",
      },
    ],
    more: "More about us",
  },
  cta: {
    titleA: "Have a project",
    titleB: "in mind?",
    body: "Tell us what you're building. Let's explore how we can make it happen.",
    action: "Start a conversation",
  },
  workPage: {
    metaTitle: "Work",
    metaDescription:
      "Concept projects from Kechy Creative showing how we approach brand campaigns, e-commerce experiences and digital platforms.",
    eyebrow: "Work",
    title: "Selected work",
    lead: "Our first client case studies are in preparation. Until they are published, these concept projects show how we approach campaigns, digital products and platforms. Each one is clearly marked as a concept.",
    listHeading: "Projects",
    ctaTitleA: "Your project",
    ctaTitleB: "could be next.",
    ctaBody:
      "We're taking on our first featured projects. Tell us what you're working on and we'll show you how we would approach it.",
    ctaAction: "Start a project",
  },
  caseStudy: {
    conceptSuffix: "(concept)",
    conceptNote:
      "This is a self-initiated concept that shows how we would approach a brief like this. It is not client work.",
    brief: "The brief",
    approach: "Our approach",
    deliverables: "Deliverables",
    servicesInvolved: "Services involved",
    nextProject: "Next project",
    ctaTitleA: "Have a similar",
    ctaTitleB: "challenge?",
  },
  servicesPage: {
    metaTitle: "Services",
    metaDescription:
      "Social media and creative, web development and technology, and growth and performance marketing from one focused team.",
    eyebrow: "Services",
    title: "Creative ideas, solid engineering.",
    lead: "Social media marketing and software development under one roof. Choose one discipline or combine them. Either way, strategy, content and code move in the same direction.",
    listHeading: "Our services",
    whyEyebrow: "Why one team",
    whyTitle: "Two disciplines that work better together.",
    reasons: [
      {
        title: "One brief, one team",
        body: "Campaigns, websites and tracking are planned together, so nothing gets lost between agencies.",
      },
      {
        title: "Direct communication",
        body: "You talk to the people doing the work. No account layers, no messages passed along.",
      },
      {
        title: "Built to be measured",
        body: "Every project starts with clear success criteria and the tracking to see whether we're meeting them.",
      },
    ],
  },
  serviceDetail: {
    talkAbout: (title: string) => `Talk to us about ${title.toLowerCase()}`,
    offeringsEyebrow: "What's included",
    offeringsTitle: "What we can do for you.",
    fitTitle: "A good fit if…",
    relatedEyebrow: "Related work",
    relatedTitle: "See the approach in practice.",
    otherServices: "Other services",
  },
  aboutPage: {
    metaTitle: "About",
    metaDescription:
      "Kechy Creative is a small, focused studio combining social media marketing and software development.",
    teamEyebrow: "Who we are",
    teamTitle: "A marketer and a developer, working as one.",
    teamDescription:
      "Kechy is a two-person studio. Most projects need both perspectives, so we built a team where they sit side by side from day one.",
    disciplineLabel: "Discipline",
    disciplines: [
      {
        title: "Marketing & creative",
        body: "One of us focuses on social media and digital marketing: understanding audiences, shaping a brand's voice and turning ideas into content and campaigns.",
        areas: ["Social media strategy", "Content and campaigns", "Creative production", "Digital marketing"],
      },
      {
        title: "Development & technology",
        body: "The other focuses on software: building websites and applications, connecting systems and automating the work that slows teams down.",
        areas: ["Web development", "Custom software", "Integrations", "Automation"],
      },
    ],
    principlesEyebrow: "What we believe",
    principlesTitle: "How we like to work.",
    principles: [
      {
        title: "Small on purpose",
        body: "You work directly with the people doing the work. Decisions are quick and nothing gets lost in hand-offs.",
      },
      {
        title: "Ideas and execution together",
        body: "A good idea needs to be built well, and good technology needs an idea worth building. We plan both at the same table.",
      },
      {
        title: "Honest by default",
        body: "We only show work and results we can stand behind. Concepts are labeled as concepts, and estimates are realistic.",
      },
      {
        title: "Built to last",
        body: "Clean code, clear documentation and content systems you can run yourself, so you're never locked in.",
      },
    ],
  },
  contactPage: {
    metaTitle: "Contact",
    metaDescription: "Tell Kechy Creative about your project. Send us a message or write to us by email.",
    eyebrow: "Contact",
    title: "Let's talk about your project.",
    lead: "Write to us about a new project, a collaboration or a quote. We'll read your message and get back to you through the most suitable channel.",
    reachTitle: "Get in touch",
    reachBody: "We work flexibly, both in person and remotely. Email is the best way to reach us.",
    addressLabel: "Location",
    address: "Istanbul · Working remotely worldwide",
    emailLabel: "Email",
    formTitle: "Send a message",
    formIntro: "Fill in the fields and press Send: your email app will open with your message ready to go.",
    form: {
      name: "Full name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "name@example.com",
      message: "Your message",
      messagePlaceholder: "Tell us briefly about your project…",
      submit: "Send",
      subject: "New message from the Kechy Creative website",
      opened: "Your email app is opening. Remember to send the message from there.",
      fallback: "If nothing opened, you can write to us directly:",
    },
  },
  notFound: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has moved.",
    home: "Back to the homepage",
  },
};

export type Dictionary = typeof en;

const tr: Dictionary = {
  meta: {
    ogLocale: "tr_TR",
    tagline: "Kreatif × Teknoloji Stüdyosu",
    description:
      "Kechy Creative bir kreatif ve teknoloji stüdyosudur. Sosyal medya pazarlamasını ve yazılım geliştirmeyi bir araya getirerek markaların öne çıkmasını, işletmelerin ilerlemesini sağlıyoruz.",
    homeTitle: "Kechy Creative — Markalar bizimle büyür",
    homeDescription:
      "Sosyal medya pazarlamasını ve web geliştirmeyi bir araya getiren kreatif ve teknoloji stüdyosu. Büyümek isteyen markalar için kampanyalar, web siteleri ve özel yazılımlar.",
  },
  common: {
    skipToContent: "İçeriğe geç",
    homeLabel: "Kechy Creative — ana sayfa",
    mainNavLabel: "Ana menü",
    mobileNavLabel: "Mobil menü",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    contact: "İletişim",
    contactUs: "Bize ulaşın",
    languageLabel: "Dil",
    comingSoon: "yakında",
    concept: "Konsept",
    viewCaseStudy: "Vaka çalışmasını inceleyin",
    allWork: "Tüm işler",
    allServices: "Tüm hizmetler",
    servicePrefix: "Hizmet",
  },
  nav: { work: "İşler", services: "Hizmetler", about: "Hakkımızda" },
  footer: {
    statement:
      "Kreatif ve teknoloji stüdyosuyuz. Sosyal medya pazarlamasını yazılım geliştirmeyle birleştirerek markaların öne çıkmasına, işletmelerin ilerlemesine yardımcı oluyoruz.",
    studio: "Stüdyo",
    services: "Hizmetler",
    privacy: "Gizlilik politikası",
    cookies: "Çerez politikası",
    rights: "Tüm hakları saklıdır.",
  },
  hero: {
    eyebrowA: "Kreatif",
    eyebrowB: "Teknoloji Stüdyosu",
    lines: ["Markalar", "bizimle"],
    highlight: "büyür.",
    lead: "Yaratıcı fikirleri teknolojiyle buluşturuyor, markaların fark edilmesini ve işletmelerin ilerlemesini sağlıyoruz.",
    primary: "Projenizi konuşalım",
    secondary: "İşlerimizi inceleyin",
    visual: {
      creative: "Kreatif",
      technology: "Teknoloji",
      idea: "özgün",
      build: "hızlı & sağlam",
      goal: "büyümek",
    },
  },
  servicesPreview: {
    eyebrow: "Ne yapıyoruz",
    titleA: "Akılda kalan fikirler.",
    titleB: "Sorunsuz çalışan teknoloji.",
    description:
      "Sosyal medya pazarlaması ve yazılım geliştirme aynı çatı altında. Böylece strateji, içerik ve kod aynı hedefe doğru ilerler.",
    explore: (title: string) => `${title} hizmetini inceleyin`,
  },
  selectedWork: {
    eyebrow: "Seçili işler",
    title: "Nasıl düşündüğümüzü gösteren konseptler.",
    description:
      "İlk müşteri vaka çalışmalarımız hazırlanıyor. Yayınlanana kadar kampanyalara, dijital ürünlere ve platformlara nasıl yaklaştığımızı, açıkça konsept olarak işaretlediğimiz bu projelerle gösteriyoruz.",
    viewAll: "Tüm işleri görün",
    pitchTitle: "İlk vaka çalışmamız sizin projeniz olabilir.",
    pitchBody: "Üzerinde çalıştığınız işi anlatın, nasıl yaklaşacağımızı birlikte konuşalım.",
    pitchAction: "Proje başlatın",
  },
  approach: {
    eyebrow: "Yaklaşımımız",
    title: "İlk görüşmeden sonuca, net bir süreç.",
    serviceEyebrow: "Nasıl çalışıyoruz",
    serviceTitle: "Her projede aynı net süreç.",
    steps: [
      { title: "Keşif", body: "İşletmeyi, hedef kitleyi ve çözülmesi gereken sorunu anlıyoruz." },
      { title: "Strateji", body: "Yaratıcı yönü, teknik kapsamı ve başarı ölçütlerini belirliyoruz." },
      { title: "Üretim", body: "Tasarlıyor, geliştiriyor, üretiyor ve hayata geçiriyoruz." },
      { title: "İyileştirme", body: "Performansı ölçüyor, sonuçlardan öğreniyor ve sürekli iyileştiriyoruz." },
    ],
  },
  aboutPreview: {
    eyebrow: "Kechy hakkında",
    titleA: "İki disiplin.",
    titleB: "Tek bir ekip.",
    body: "Yaratıcı düşünceyi teknik uygulamayla birleştiriyor; hem dikkat çeken hem de işinize gerçekten katkı sağlayan dijital deneyimler oluşturuyoruz.",
    disciplines: [
      {
        title: "Pazarlama & Kreatif",
        body: "Sosyal medya stratejisi, içerik, kampanyalar ve kreatif prodüksiyon; hepsi kitlenizin neye ilgi gösterdiğine göre planlanır.",
      },
      {
        title: "Yazılım & Teknoloji",
        body: "Web siteleri, özel yazılımlar, entegrasyonlar ve otomasyon; hızlı, bakımı kolay ve büyümeye hazır şekilde geliştirilir.",
      },
    ],
    more: "Bizi daha yakından tanıyın",
  },
  cta: {
    titleA: "Bir fikriniz",
    titleB: "mi var?",
    body: "Fikrinizi anlatın; nasıl hayata geçirebileceğimizi birlikte konuşalım.",
    action: "Bize ulaşın",
  },
  workPage: {
    metaTitle: "İşler",
    metaDescription:
      "Kechy Creative'in marka kampanyalarına, e-ticaret deneyimlerine ve dijital platformlara yaklaşımını gösteren konsept projeler.",
    eyebrow: "İşler",
    title: "Seçili işler",
    lead: "İlk müşteri vaka çalışmalarımız hazırlanıyor. Yayınlanana kadar kampanyalara, dijital ürünlere ve platformlara nasıl yaklaştığımızı bu konsept projelerle gösteriyoruz. Her biri açıkça konsept olarak işaretlenmiştir.",
    listHeading: "Projeler",
    ctaTitleA: "Sıradaki proje",
    ctaTitleB: "sizinki olabilir.",
    ctaBody:
      "İlk vaka çalışmalarımız için yeni projeler alıyoruz. Üzerinde çalıştığınız işi anlatın, size nasıl yaklaşacağımızı gösterelim.",
    ctaAction: "Proje başlatın",
  },
  caseStudy: {
    conceptSuffix: "(konsept)",
    conceptNote:
      "Bu, böyle bir brife nasıl yaklaşacağımızı göstermek için hazırladığımız bir konsept çalışmadır. Müşteri işi değildir.",
    brief: "Brif",
    approach: "Yaklaşımımız",
    deliverables: "Çıktılar",
    servicesInvolved: "İlgili hizmetler",
    nextProject: "Sonraki proje",
    ctaTitleA: "Benzer bir",
    ctaTitleB: "ihtiyacınız mı var?",
  },
  servicesPage: {
    metaTitle: "Hizmetler",
    metaDescription:
      "Sosyal medya ve kreatif, web geliştirme ve teknoloji, büyüme ve performans pazarlaması; hepsi tek bir odaklı ekipten.",
    eyebrow: "Hizmetler",
    title: "Yaratıcı fikirler, sağlam mühendislik.",
    lead: "Sosyal medya pazarlaması ve yazılım geliştirme aynı çatı altında. İster tek bir alanda ister ikisini birlikte çalışalım; strateji, içerik ve kod her zaman aynı hedefe yönelir.",
    listHeading: "Hizmetlerimiz",
    whyEyebrow: "Neden tek ekip",
    whyTitle: "Birlikte daha güçlü olan iki disiplin.",
    reasons: [
      {
        title: "Tek brif, tek ekip",
        body: "Kampanyalar, web siteleri ve ölçümleme birlikte planlanır; farklı ajanslar arasında hiçbir şey kaybolmaz.",
      },
      {
        title: "Doğrudan iletişim",
        body: "İşi yapan kişilerle doğrudan konuşursunuz. Araya giren temsilciler ya da elden ele dolaşan mesajlar yoktur.",
      },
      {
        title: "Ölçülebilir sonuçlar",
        body: "Her proje net başarı ölçütleriyle ve bu ölçütlere ulaşıp ulaşmadığımızı gösteren bir takip altyapısıyla başlar.",
      },
    ],
  },
  serviceDetail: {
    talkAbout: () => "Bu hizmet hakkında konuşalım",
    offeringsEyebrow: "Neler dahil",
    offeringsTitle: "Sizin için neler yapabiliriz?",
    fitTitle: "Şu durumdaysanız konuşalım.",
    relatedEyebrow: "İlgili çalışma",
    relatedTitle: "Yaklaşımımızı uygulamada görün.",
    otherServices: "Diğer hizmetler",
  },
  aboutPage: {
    metaTitle: "Hakkımızda",
    metaDescription:
      "Kechy Creative, sosyal medya pazarlamasını ve yazılım geliştirmeyi bir araya getiren küçük ve odaklı bir stüdyodur.",
    teamEyebrow: "Biz kimiz",
    teamTitle: "Bir pazarlamacı ve bir yazılımcı, tek bir ekip.",
    teamDescription:
      "Kechy iki kişilik bir stüdyo. Çoğu proje iki bakış açısına da ihtiyaç duyduğu için bu iki uzmanlığı ilk günden yan yana getiren bir ekip kurduk.",
    disciplineLabel: "Disiplin",
    disciplines: [
      {
        title: "Pazarlama & Kreatif",
        body: "Birimiz sosyal medya ve dijital pazarlamaya odaklanıyor: hedef kitleyi anlamak, markanın sesini şekillendirmek ve fikirleri içeriğe ve kampanyalara dönüştürmek.",
        areas: ["Sosyal medya stratejisi", "İçerik ve kampanyalar", "Kreatif prodüksiyon", "Dijital pazarlama"],
      },
      {
        title: "Yazılım & Teknoloji",
        body: "Diğerimiz yazılıma odaklanıyor: web siteleri ve uygulamalar geliştirmek, sistemleri birbirine bağlamak ve ekipleri yavaşlatan işleri otomatikleştirmek.",
        areas: ["Web geliştirme", "Özel yazılım", "Entegrasyonlar", "Otomasyon"],
      },
    ],
    principlesEyebrow: "İnandıklarımız",
    principlesTitle: "Çalışma ilkelerimiz.",
    principles: [
      {
        title: "Bilinçli olarak küçük",
        body: "İşi yapan kişilerle doğrudan çalışırsınız. Kararlar hızlı alınır, işler el değiştirirken hiçbir şey kaybolmaz.",
      },
      {
        title: "Fikir ve uygulama bir arada",
        body: "İyi bir fikir iyi uygulanmalı, iyi bir teknoloji de değerli bir fikre hizmet etmeli. İkisini aynı masada planlıyoruz.",
      },
      {
        title: "Her zaman dürüst",
        body: "Yalnızca arkasında durabileceğimiz işleri ve sonuçları paylaşırız. Konseptleri konsept olarak belirtir, gerçekçi tahminler veririz.",
      },
      {
        title: "Uzun ömürlü işler",
        body: "Temiz kod, anlaşılır dokümantasyon ve kendi başınıza yönetebileceğiniz içerik sistemleri. Böylece hiçbir zaman bize bağımlı kalmazsınız.",
      },
    ],
  },
  contactPage: {
    metaTitle: "İletişim",
    metaDescription: "Projenizi Kechy Creative ile konuşun. Bize mesaj gönderin ya da e-postayla ulaşın.",
    eyebrow: "İletişim",
    title: "Projenizi konuşalım.",
    lead: "Yeni bir proje, iş birliği veya teklif için bize yazın. Mesajınızı okuyup size en uygun kanaldan dönüş yapacağız.",
    reachTitle: "Bize ulaşın",
    reachBody: "Hem yüz yüze hem de uzaktan esnek bir şekilde çalışıyoruz. Bize ulaşmanın en kolay yolu e-posta.",
    addressLabel: "Konum",
    address: "İstanbul · Dünya genelinde uzaktan",
    emailLabel: "E-posta",
    formTitle: "Mesaj gönderin",
    formIntro: "Alanları doldurup Gönder'e bastığınızda e-posta uygulamanız, mesajınız hazır olarak açılır.",
    form: {
      name: "Ad soyad",
      namePlaceholder: "Adınız ve soyadınız",
      email: "E-posta",
      emailPlaceholder: "ornek@eposta.com",
      message: "Mesajınız",
      messagePlaceholder: "Projenizden kısaca bahsedin…",
      submit: "Gönder",
      subject: "Kechy Creative web sitesinden yeni mesaj",
      opened: "E-posta uygulamanız açılıyor. Mesajınızı oradan göndermeyi unutmayın.",
      fallback: "Uygulama açılmadıysa bize doğrudan yazabilirsiniz:",
    },
  },
  notFound: {
    title: "Sayfa bulunamadı",
    body: "Aradığınız sayfa mevcut değil ya da taşınmış olabilir.",
    home: "Ana sayfaya dön",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
