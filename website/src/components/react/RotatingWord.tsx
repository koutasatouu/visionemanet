import { useEffect, useState } from 'react';

const words = [
  { text: 'shine', color: '#FFCC00' },
  { text: 'grow', color: '#33CCFF' },
  { text: 'convert', color: '#EF2A2A' },
  { text: 'win', color: '#FFFFFF' },
];

export default function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 1800);
    return () => clearInterval(id);
  }, []);
  const w = words[i];
  return (
    <span style={{ display: 'inline-flex', position: 'relative', height: '1em', overflow: 'hidden', verticalAlign: 'baseline' }}>
      <span
        key={w.text}
        style={{
          color: w.color,
          fontFamily: 'Instrument Serif, serif',
          fontStyle: 'italic',
          fontWeight: 400,
          animation: 'rot-in 0.7s cubic-bezier(.2,.7,.2,1)',
          whiteSpace: 'nowrap',
        }}
      >
        {w.text}
      </span>
      <style>{`
        @keyframes rot-in {
          from { transform: translateY(80%); opacity: 0; }
          to { transform: none; opacity: 1; }
        }
      `}</style>
    </span>
  );
}
