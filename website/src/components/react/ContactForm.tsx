import { useState } from 'react';
import { SITE } from '../../config';

type Props = { lang: 'id' | 'en' };
const copy = {
  id: {
    name: 'Nama kamu',
    business: 'Nama bisnis',
    wa: 'Nomor WhatsApp',
    need: 'Butuh bantuan apa? (Cerita bebas)',
    submit: 'Kirim ke WhatsApp',
    ok: 'Siap! Kami tunggu chat kamu di WhatsApp ✨',
  },
  en: {
    name: 'Your name',
    business: 'Business name',
    wa: 'WhatsApp number',
    need: 'What do you need? (feel free to ramble)',
    submit: 'Send via WhatsApp',
    ok: 'Nice! We just opened WhatsApp — see you there ✨',
  },
};

export default function ContactForm({ lang }: Props) {
  const c = copy[lang];
  const [f, setF] = useState({ name: '', business: '', wa: '', need: '' });
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg =
      `Halo Visionema.net!%0A%0A` +
      `Nama: ${f.name}%0A` +
      `Bisnis: ${f.business}%0A` +
      `WhatsApp: ${f.wa}%0A%0A` +
      `Kebutuhan: ${f.need}`;
    const url = `https://wa.me/${SITE.whatsappNumber}?text=${msg}`;
    window.open(url, '_blank');
    setSent(true);
  }

  const field: React.CSSProperties = {
    width: '100%',
    padding: '18px 20px',
    borderRadius: 16,
    background: 'rgba(255,255,255,0.05)',
    border: '1.5px solid rgba(255,255,255,0.12)',
    color: '#fff',
    fontFamily: 'inherit',
    fontSize: 16,
    outline: 'none',
  };

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }} data-testid="contact-form">
      <input required style={field} placeholder={c.name} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} data-testid="contact-name" />
      <input required style={field} placeholder={c.business} value={f.business} onChange={(e) => setF({ ...f, business: e.target.value })} data-testid="contact-business" />
      <input required style={field} placeholder={c.wa} value={f.wa} onChange={(e) => setF({ ...f, wa: e.target.value })} data-testid="contact-wa" />
      <textarea required rows={4} style={field} placeholder={c.need} value={f.need} onChange={(e) => setF({ ...f, need: e.target.value })} data-testid="contact-need" />
      <button
        type="submit"
        data-testid="contact-submit"
        style={{
          marginTop: 8,
          padding: '18px 24px',
          borderRadius: 999,
          background: '#FFCC00',
          color: '#0B0F1A',
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 700,
          fontSize: 16,
        }}
      >
        {c.submit} →
      </button>
      {sent && <div style={{ padding: 14, borderRadius: 12, background: 'rgba(51,204,255,0.12)', color: '#33CCFF', fontSize: 14 }}>{c.ok}</div>}
    </form>
  );
}
