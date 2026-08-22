export type PackageFeature = { label: { id: string; en: string }; included: boolean };
export type Package = {
  id: string;
  name: string;
  price: string;
  positioning: { id: string; en: string };
  recommended?: boolean;
  color: string;
  groups: {
    title: { id: string; en: string };
    items: PackageFeature[];
  }[];
};

const F = (idT: string, enT: string, included = true): PackageFeature => ({
  label: { id: idT, en: enT },
  included,
});

export const packages: Package[] = [
  {
    id: 'mulai',
    name: 'Mulai Aja Dulu',
    price: 'Rp 2.699k',
    positioning: { id: 'Konsistensi & Presence', en: 'Consistency & Presence' },
    color: '#33CCFF',
    groups: [
      {
        title: { id: 'Content', en: 'Content' },
        items: [
          F('8 Videos', '8 Videos'),
          F('4 Photo Feeds', '4 Photo Feeds'),
          F('Design / Carousel', 'Design / Carousel', false),
        ],
      },
      {
        title: { id: 'Type', en: 'Type' },
        items: [
          F('Aesthetic B-Roll (No Script)', 'Aesthetic B-Roll (No Script)'),
          F('Strategic Script (Hook/CTA)', 'Strategic Script (Hook/CTA)', false),
          F('Full Narrative Scripting', 'Full Narrative Scripting', false),
        ],
      },
      {
        title: { id: 'Topping', en: 'Topping' },
        items: [
          F('Simple Posting & Caption', 'Simple Posting & Caption'),
          F('Setup Profil Awal', 'Initial Profile Setup'),
          F('Report Bulanan Sederhana', 'Simple Monthly Report'),
          F('Account Handling', 'Account Handling', false),
          F('Admin DM & Komentar', 'Admin DM & Comments', false),
          F('Analisis Performa & Strategi Report Bulanan', 'Performance Analysis & Strategy Report', false),
          F('Full Content Strategy Pillar', 'Full Content Strategy Pillar', false),
          F('Proactive Engagement', 'Proactive Engagement', false),
          F('SEO & Sorotan Update', 'SEO & Highlights Update', false),
          F('KPI Dashboard Reporting', 'KPI Dashboard Reporting', false),
          F('Monthly Brand Strategy Audit', 'Monthly Brand Strategy Audit', false),
        ],
      },
    ],
  },
  {
    id: 'level',
    name: 'Level Up',
    price: 'Rp 4.699k',
    positioning: { id: 'Engagement & Konversi', en: 'Engagement & Conversion' },
    recommended: true,
    color: '#FFCC00',
    groups: [
      {
        title: { id: 'Content', en: 'Content' },
        items: [
          F('12 Videos', '12 Videos'),
          F('8 Photo Feeds', '8 Photo Feeds'),
          F('2 Design / Carousel', '2 Design / Carousel'),
        ],
      },
      {
        title: { id: 'Type', en: 'Type' },
        items: [
          F('Aesthetic B-Roll (No Script)', 'Aesthetic B-Roll (No Script)'),
          F('Strategic Script (Hook/CTA)', 'Strategic Script (Hook/CTA)'),
          F('Full Narrative Scripting', 'Full Narrative Scripting', false),
        ],
      },
      {
        title: { id: 'Topping', en: 'Topping' },
        items: [
          F('Simple Posting & Caption', 'Simple Posting & Caption', false),
          F('Setup Profil Awal', 'Initial Profile Setup'),
          F('Report Bulanan Sederhana', 'Simple Monthly Report', false),
          F('Account Handling', 'Account Handling'),
          F('Admin DM & Komentar', 'Admin DM & Comments'),
          F('Analisis Performa & Strategi Report Bulanan', 'Performance Analysis & Strategy Report'),
          F('Full Content Strategy Pillar', 'Full Content Strategy Pillar', false),
          F('Proactive Engagement', 'Proactive Engagement', false),
          F('SEO & Sorotan Update', 'SEO & Highlights Update', false),
          F('KPI Dashboard Reporting', 'KPI Dashboard Reporting', false),
          F('Monthly Brand Strategy Audit', 'Monthly Brand Strategy Audit', false),
        ],
      },
    ],
  },
  {
    id: 'scale',
    name: 'Scale Up',
    price: 'Rp 8.699k',
    positioning: { id: 'Building Brand & ROI', en: 'Building Brand & ROI' },
    color: '#1E56E8',
    groups: [
      {
        title: { id: 'Content', en: 'Content' },
        items: [
          F('20 Videos', '20 Videos'),
          F('12 Photo Feeds', '12 Photo Feeds'),
          F('4 Design / Carousel', '4 Design / Carousel'),
        ],
      },
      {
        title: { id: 'Type', en: 'Type' },
        items: [
          F('Aesthetic B-Roll (No Script)', 'Aesthetic B-Roll (No Script)'),
          F('Strategic Script (Hook/CTA)', 'Strategic Script (Hook/CTA)'),
          F('Full Narrative Scripting', 'Full Narrative Scripting'),
        ],
      },
      {
        title: { id: 'Topping', en: 'Topping' },
        items: [
          F('Simple Posting & Caption', 'Simple Posting & Caption', false),
          F('Setup Profil Awal', 'Initial Profile Setup'),
          F('Report Bulanan Sederhana', 'Simple Monthly Report', false),
          F('Account Handling', 'Account Handling'),
          F('Admin DM & Komentar', 'Admin DM & Comments'),
          F('Analisis Performa & Strategi Report Bulanan', 'Performance Analysis & Strategy Report'),
          F('Full Content Strategy Pillar', 'Full Content Strategy Pillar'),
          F('Proactive Engagement', 'Proactive Engagement'),
          F('SEO & Sorotan Update', 'SEO & Highlights Update'),
          F('KPI Dashboard Reporting', 'KPI Dashboard Reporting'),
          F('Monthly Brand Strategy Audit', 'Monthly Brand Strategy Audit'),
        ],
      },
    ],
  },
];
