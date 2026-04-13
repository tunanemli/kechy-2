export type ServiceItem = {
  id: string;
  title: string;
  body: string;
  icon: string;
  highlights: string[];
};

export const services: ServiceItem[] = [
  {
    id: "marka-stratejisi",
    title: "Marka stratejisi",
    body: "Öne çıkmanızı sağlayan konumlandırma ve anlatı—markanızın akılda kalmasını ve güven oluşturmasını sağlıyoruz.",
    icon: "◈",
    highlights: [
      "Konumlandırma ve mesaj mimarisi",
      "Ses tonu ve görsel yön",
      "Rakip ve kitle analizi",
      "Marka kılavuzu çıktıları",
    ],
  },
  {
    id: "ui-ux-tasarim",
    title: "UI/UX tasarım",
    body: "İnsan odaklı arayüzler, tasarım sistemleri ve dönüşüm odaklı prototipler—ürününüzle birlikte ölçeklenir.",
    icon: "◇",
    highlights: [
      "Kullanıcı araştırması ve akışlar",
      "Tasarım sistemi ve bileşen kütüphanesi",
      "Erişilebilirlik ve tutarlılık",
      "Prototip ve kullanılabilirlik testi",
    ],
  },
  {
    id: "web-gelistirme",
    title: "Web geliştirme",
    body: "Hızlı, erişilebilir arayüzler ve sağlam entegrasyonlar—Next.js, API’ler ve ölçülebilir performans.",
    icon: "⬡",
    highlights: [
      "Next.js ve modern frontend",
      "API ve üçüncü parti entegrasyonlar",
      "Performans ve çekirdek web vitals",
      "Yayın ve sürdürülebilir kod",
    ],
  },
  {
    id: "dijital-pazarlama",
    title: "Dijital pazarlama",
    body: "Kampanyalar, içerik ve analitik—kitlenizi kazanmak, elde tutmak ve büyütmek için bir arada.",
    icon: "◎",
    highlights: [
      "Performans ve içerik stratejisi",
      "Reklam ve ölçüm kurulumu",
      "SEO ve dönüşüm optimizasyonu",
      "Düzenli raporlama",
    ],
  },
  {
    id: "video-produksiyon",
    title: "Video prodüksiyon",
    body: "Konseptten kurguya hikâye odaklı hareket—sosyal kısalar, açıklayıcı videolar ve marka filmleri.",
    icon: "▣",
    highlights: [
      "Senaryo ve storyboard",
      "Çekim ve post-prodüksiyon",
      "Sosyal ve web formatları",
      "Marka uyumlu görsel dil",
    ],
  },
  {
    id: "web-tasarim",
    title: "Web tasarım",
    body: "Görsel dil, art direction ve pazarınıza özel, yüksek etkili deneyimler.",
    icon: "▲",
    highlights: [
      "Landing ve kampanya sayfaları",
      "Tipografi ve renk sistemi",
      "Motion ve mikro etkileşim",
      "Geliştirici ile uyumlu teslim",
    ],
  },
];
