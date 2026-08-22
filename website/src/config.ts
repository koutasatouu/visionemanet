export const SITE = {
  name: 'Visionema.net',
  tagline: 'Start, Grow, Win!',
  description:
    'Visionema.net — Social Media Management & Creative Content Agency dari Magelang. Bantu brand kamu tumbuh lewat konten & strategi yang jujur.',
  whatsappNumber: '6281234567890', // TODO: replace with real Visionema.net WA number
  whatsappMessage: 'Halo Visionema.net! Aku tertarik ngobrol soal social media management buat brand-ku.',
  instagram: 'https://instagram.com/visionema_net',
  email: 'hello@visionema.net',
  location: 'Magelang, Indonesia',
} as const;

export const waLink = (extra?: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(extra || SITE.whatsappMessage)}`;
