import { useRef, useState, type ReactNode, type CSSProperties } from 'react';

export default function TiltCard({ children, className, style, testId }: { children: ReactNode; className?: string; style?: CSSProperties; testId?: string; }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, sx: 50, sy: 50 });
  function onMove(e: React.MouseEvent) {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setT({ rx: (0.5 - py) * 8, ry: (px - 0.5) * 8, sx: px * 100, sy: py * 100 });
  }
  function onLeave() { setT({ rx: 0, ry: 0, sx: 50, sy: 50 }); }
  return (
    <div
      ref={ref}
      className={className}
      data-testid={testId}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
        transition: 'transform .25s cubic-bezier(.2,.6,.2,1)',
        position: 'relative',
        ...style,
      }}
    >
      <div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', background: `radial-gradient(300px circle at ${t.sx}% ${t.sy}%, rgba(255,255,255,0.12), transparent 45%)`, pointerEvents: 'none' }} />
      {children}
    </div>
  );
}
