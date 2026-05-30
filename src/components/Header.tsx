import React from "react";
import AtherLogo from "./AtherLogo";

interface HeaderProps {
  onNavigate: (sceneIndex: number) => void;
  currentSceneIndex: number;
}

export default function Header({ onNavigate, currentSceneIndex }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-gradient-to-b from-[#050008]/90 to-[#050008]/0 backdrop-blur-xs flex items-center justify-between px-6 md:px-12 border-b border-purple-500/10">
      {/* Left Area: Sleek Action Buttons & Status */}
      <div className="flex items-center gap-4">
        {/* Dynamic status line for "Active Agency Status" to give real immersion */}
        <div className="hidden sm:flex items-center gap-2 bg-[#160020]/80 border border-purple-500/20 px-3 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-mono text-purple-300 font-medium tracking-wide font-sans">
            قنوات الخدمة نشطة الآن
          </span>
        </div>

        {/* Cinematic CTA Button: 'راسلنا الآن' */}
        <a
          href="https://wa.me/972595468757"
          target="_blank"
          rel="noreferrer"
          className="relative overflow-hidden group px-5 py-2.5 rounded-full bg-linear-to-r from-purple-800 to-purple-600 border border-[#D4AF37]/30 text-[#F7F2FF] text-xs md:text-sm font-medium tracking-wide transition-all duration-300 shadow-md shadow-purple-950/40 hover:scale-105 active:scale-95 hover:border-[#F5C542] cursor-pointer"
        >
          {/* Inner metallic gold scan shine */}
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className="relative z-10 font-bold">واتساب مباشر</span>
        </a>
      </div>

      {/* Center/Right Area: Custom Ather Branding in RTL layout */}
      <div
        className="flex items-center gap-3 cursor-pointer select-none group"
        onClick={() => onNavigate(0)} // Navigate to home
      >
        <div className="text-right flex flex-col justify-center">
          <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-l from-[#F7F2FF] to-[#D4AF37] bg-clip-text text-transparent font-sans tracking-wide transition-transform duration-300 group-hover:translate-x-1">
            أثير | Ather
          </h1>
          <p className="text-[9px] md:text-xs font-medium text-purple-300 tracking-wider font-sans uppercase">
            الريادة في الخدمات الرقمية
          </p>
        </div>

        {/* Small Elegant Mini Logo */}
        <div className="w-11 h-11 bg-black/40 rounded-full border border-purple-500/30 flex items-center justify-center p-0.5 group-hover:border-[#D4AF37]/60 group-hover:shadow-[0_0_15px_rgba(155,53,255,0.4)] transition-all duration-500">
          <AtherLogo size={36} glow={false} />
        </div>
      </div>
    </header>
  );
}
