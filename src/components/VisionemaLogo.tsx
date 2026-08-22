import React from 'react';
import logo from '../assets/logo/logo.png';

export default function VisionemaLogo({ className = "h-8" }: { className?: string }) {
  const logoSrc = typeof logo === 'string' ? logo : logo.src;
  return (
    <img
      src={logoSrc}
      alt="Visionema Logo"
      className={className}
    />
  );
}

