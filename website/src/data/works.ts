// Curated placeholders using Unsplash — clearly marked for later replacement
// with actual Visionema client visuals.
export type Work = {
  id: string;
  client: string;
  service: { id: string; en: string };
  year: string;
  image: string;
  size: 'tall' | 'wide' | 'square';
  accent: string;
  isPlaceholder: true;
};

export const works: Work[] = [
  {
    id: 'w1',
    client: 'Tomorrow Coffee',
    service: { id: 'Social Media / Content', en: 'Social Media / Content' },
    year: '2025',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80',
    size: 'tall',
    accent: '#FFCC00',
    isPlaceholder: true,
  },
  {
    id: 'w2',
    client: 'Sekar Aroma',
    service: { id: 'Content & Reels', en: 'Content & Reels' },
    year: '2025',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80',
    size: 'square',
    accent: '#33CCFF',
    isPlaceholder: true,
  },
  {
    id: 'w3',
    client: 'Balai Kopi',
    service: { id: 'Photography', en: 'Photography' },
    year: '2025',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80',
    size: 'wide',
    accent: '#1E56E8',
    isPlaceholder: true,
  },
  {
    id: 'w4',
    client: 'Studio Kayu',
    service: { id: 'Branding & Feed', en: 'Branding & Feed' },
    year: '2024',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80',
    size: 'tall',
    accent: '#EF2A2A',
    isPlaceholder: true,
  },
  {
    id: 'w5',
    client: 'Nusa Skin',
    service: { id: 'Campaign', en: 'Campaign' },
    year: '2024',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80',
    size: 'square',
    accent: '#FFCC00',
    isPlaceholder: true,
  },
  {
    id: 'w6',
    client: 'Lokal Bites',
    service: { id: 'Videography', en: 'Videography' },
    year: '2024',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80',
    size: 'wide',
    accent: '#33CCFF',
    isPlaceholder: true,
  },
  {
    id: 'w7',
    client: 'Kembang Studio',
    service: { id: 'Content Direction', en: 'Content Direction' },
    year: '2024',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=900&q=80',
    size: 'square',
    accent: '#1E56E8',
    isPlaceholder: true,
  },
  {
    id: 'w8',
    client: 'Warung Sinar',
    service: { id: 'Full SMM', en: 'Full SMM' },
    year: '2025',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80',
    size: 'tall',
    accent: '#EF2A2A',
    isPlaceholder: true,
  },
];
