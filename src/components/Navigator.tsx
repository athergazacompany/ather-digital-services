import React from "react";
import { SCENES, SceneId } from "../types";

interface NavigatorProps {
  currentSceneIndex: number;
  onNavigate: (index: number) => void;
}

export default function Navigator({ currentSceneIndex, onNavigate }: NavigatorProps) {
  return (
    <>
      {/* 1. Elegant Right-Side Floating Navigation Dots (Standard for modern luxury pitch decks) */}
      <nav
        dir="rtl"
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5 bg-black/30 backdrop-blur-md px-3 py-6 rounded-full border border-purple-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
      >
        {SCENES.map((scene, index) => {
          const isActive = currentSceneIndex === index;
          return (
            <button
              key={scene.id}
              onClick={() => onNavigate(index)}
              className="group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:bg-purple-950/20 cursor-pointer"
              aria-label={`الانتقال إلى ${scene.title}`}
            >
              {/* Pulsating Glowing Outer Ring for Active */}
              {isActive && (
                <span className="absolute inset-x-0 inset-y-0 rounded-full border border-[#D4AF37] animate-ping opacity-30 scale-125" />
              )}

              {/* Central Circle */}
              <span
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  isActive
                    ? "bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,85,1)] scale-125"
                    : "bg-purple-400/40 group-hover:bg-purple-300"
                }`}
              />

              {/* Floating Tooltip Label (Appears on hover) */}
              <div className="absolute right-12 opacity-0 pointer-events-none translate-x-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-x-0 transition-all duration-300 ease-out bg-[#160020]/95 border border-[#D4AF37]/30 text-xs text-[#F7F2FF] px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md">
                <div className="flex gap-2 items-center">
                  <span className="text-[#D4AF37] font-bold font-mono">
                    0{index + 1}
                  </span>
                  <span className="font-sans font-medium">{scene.title}</span>
                </div>
              </div>
            </button>
          );
        })}
      </nav>

      {/* 2. Bottom Slide Progress Bar Bar for Deck-Style feeling */}
      <div className="fixed bottom-0 left-0 right-0 h-1.5 bg-purple-950/30 z-50">
        <div
          className="h-full bg-linear-to-r from-purple-800 via-[#9B35FF] to-[#D4AF37] transition-all duration-700 ease-out"
          style={{ width: `${((currentSceneIndex + 1) / SCENES.length) * 100}%` }}
        />
        <div className="absolute bottom-3 left-6 z-50 text-[10px] md:text-xs font-mono font-sans text-purple-400 flex items-center gap-2">
          <span>أثير | Ather - عرض تقديمي تفاعلي</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          <span>المشهد {currentSceneIndex + 1} من {SCENES.length}</span>
        </div>
      </div>
    </>
  );
}
