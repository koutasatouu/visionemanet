import React from 'react';
import VisionemaLogo from './VisionemaLogo';
import StaggeredMenu from './StaggeredMenu';

const menuItems = [
  { label: 'Beranda', ariaLabel: 'Beranda', link: '/' },
  { label: 'Portofolio', ariaLabel: 'Portofolio', link: '#projects' },
  { label: 'Paket Layanan', ariaLabel: 'Paket Layanan', link: '#packages' },
  { label: 'Tentang Kami', ariaLabel: 'Tentang Kami', link: '#about' },
  { label: 'Tim Kami', ariaLabel: 'Tim Kami', link: '#team' },
  { label: 'Hubungi Kami', ariaLabel: 'Hubungi Kami', link: '#contact' },
];

const socialItems = [
  { label: 'Instagram', link: 'https://instagram.com/visionema_net' },
  { label: 'Lynk.id', link: 'https://lynk.id/visionema.id' }
];

export default function Header() {
  const logoNode = (
    <a
      href="/"
      className="flex h-12 sm:h-16 font-extrabold tracking-tight text-base sm:text-xl items-center justify-center rounded-xl sm:rounded-2xl text-white bg-white/5 backdrop-blur-xl px-4 sm:px-5 shadow-sm hover:scale-[1.02] transition-transform duration-300 gap-2"
    >
      <VisionemaLogo className="h-6 sm:h-8 w-auto" />
      <span className="text-white font-medium">visionema.net</span>
    </a>
  );

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      changeMenuColorOnOpen={true}
      colors={['#16161a', '#0a0a0c']}
      logo={logoNode}
      accentColor="#ff7000"
      isFixed={true}
    />
  );
}
