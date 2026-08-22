import { useRef, useState, type ReactNode, type CSSProperties } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  strength?: number;
  href?: string;
  target?: string;
  testId?: string;
};

export default function MagneticButton({ children, className, style, strength = 22, href, target, testId }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * strength;
    const y = ((e.clientY - r.top) / r.height - 0.5) * strength;
    setT({ x, y });
  }
  function onLeave() { setT({ x: 0, y: 0 }); }

  const props = {
    ref: ref as any,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    className,
    'data-testid': testId,
    style: { ...style, transform: `translate3d(${t.x}px, ${t.y}px, 0)`, transition: 'transform 0.2s cubic-bezier(.2,.6,.2,1)' } as CSSProperties,
  };

  if (href) return <a {...(props as any)} href={href} target={target} rel={target === '_blank' ? 'noopener' : undefined}>{children}</a>;
  return <button {...(props as any)}>{children}</button>;
}
