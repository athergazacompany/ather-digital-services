import React from "react";

interface AtherLogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export default function AtherLogo({ className = "", size = 200, glow = true }: AtherLogoProps) {
  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Interactive Ambient Purple Glow Behind Logo */}
      {glow && (
        <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-xl animate-pulse" />
      )}

      <svg
        id="ather-brand-logo"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 transition-transform duration-500 hover:scale-105"
      >
        <defs>
          {/* Metallic Gold Gradient for Outer Rings and Laurel */}
          <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#AA7C11" />
            <stop offset="90%" stopColor="#F5C542" />
            <stop offset="100%" stopColor="#FFF2B2" />
          </linearGradient>

          {/* Glowing Purple Sweep Gradient */}
          <linearGradient id="purpleGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7B1FA2" />
            <stop offset="50%" stopColor="#9B35FF" />
            <stop offset="100%" stopColor="#D58CFF" />
          </linearGradient>

          {/* Deep Dark Badge Gradient */}
          <radialGradient id="darkBadge" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E0A2E" />
            <stop offset="70%" stopColor="#0B0214" />
            <stop offset="100%" stopColor="#050008" />
          </radialGradient>

          {/* Subtle reflection on outer rim */}
          <linearGradient id="rimShine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
          </linearGradient>

          {/* Gold Drop Shadow */}
          <filter id="goldShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#9B35FF" floodOpacity="0.3" />
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#D4AF37" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* 1. Deep Dark Circular Canvas Badge */}
        <circle cx="250" cy="250" r="235" fill="url(#darkBadge)" filter="url(#goldShadow)" stroke="url(#rimShine)" strokeWidth="1" />

        {/* 2. Outer Dual-Layer Golden Border Rings */}
        <circle cx="250" cy="250" r="225" stroke="url(#goldMetallic)" strokeWidth="4" />
        <circle cx="250" cy="250" r="215" stroke="url(#goldMetallic)" strokeWidth="1.5" opacity="0.8" />

        {/* Inner Ring Accent Line */}
        <circle cx="250" cy="250" r="220" stroke="#9B35FF" strokeWidth="1" opacity="0.3" strokeDasharray="10 15" />

        {/* 3. Golden Laurel Wreath (Olive Leaves Branches) on Left & Right */}
        {/* Left Laurel */}
        <g id="left-laurel" stroke="url(#goldMetallic)" strokeWidth="1" fill="url(#goldMetallic)">
          <path d="M 100,250 C 95,210 105,170 125,140" fill="none" strokeWidth="2.5" />
          {/* Leaves */}
          <path d="M 100,250 C 92,246 84,248 80,255 C 86,258 94,256 100,250 Z" />
          <path d="M 100,230 C 88,222 84,228 80,238 C 88,240 94,234 100,230 Z" />
          <path d="M 102,208 C 88,200 86,210 82,218 C 92,218 96,212 102,208 Z" />
          <path d="M 107,185 C 93,178 94,188 90,198 C 100,196 102,190 107,185 Z" />
          <path d="M 115,165 C 102,158 105,168 102,176 C 110,174 112,168 115,165 Z" />
          <path d="M 125,145 C 115,138 120,146 118,154 C 126,152 126,146 125,145 Z" />
        </g>

        {/* Right Laurel */}
        <g id="right-laurel" stroke="url(#goldMetallic)" strokeWidth="1" fill="url(#goldMetallic)">
          <path d="M 400,250 C 405,210 395,170 375,140" fill="none" strokeWidth="2.5" />
          {/* Leaves */}
          <path d="M 400,250 C 408,246 416,248 420,255 C 414,258 406,256 400,250 Z" />
          <path d="M 400,230 C 412,222 416,228 420,238 C 412,240 406,234 400,230 Z" />
          <path d="M 398,208 C 412,200 414,210 418,218 C 408,218 404,212 398,208 Z" />
          <path d="M 393,185 C 407,178 406,188 410,198 C 400,196 398,190 393,185 Z" />
          <path d="M 385,165 C 398,158 395,168 398,176 C 390,174 388,168 385,165 Z" />
          <path d="M 375,145 C 385,138 380,146 382,154 C 374,152 374,146 375,145 Z" />
        </g>

        {/* 4. Elegant Stylized Central Golden 'A' */}
        <g id="central-letter-A" filter="url(#goldShadow)">
          {/* Left thick golden bar of A */}
          <path
            d="M 230,135 
               C 220,150 180,240 160,285 
               C 152,305 145,310 135,312
               C 152,316 175,316 190,312
               C 200,310 205,302 212,282
               C 218,268 228,245 232,235
               L 205,235
               Z"
            fill="url(#goldMetallic)"
          />
          {/* Right serif leg of A */}
          <path
            d="M 270,135
               L 338,285
               C 344,298 350,305 360,310
               C 345,314 325,314 316,310
               C 308,306 304,298 298,285
               L 250,180
               Z"
            fill="url(#goldMetallic)"
          />
          
          {/* Crown joint of the Letter A */}
          <path
            d="M 243,110
               L 257,110
               L 282,165
               L 218,165
               Z"
            fill="url(#goldMetallic)"
          />

          {/* Sleek Golden Swoosh underneath the bar */}
          <path
            d="M 135,312
               C 165,305 190,270 215,220
               C 217,215 221,215 222,220
               C 210,250 195,285 160,312
               Z"
            fill="url(#goldMetallic)"
            opacity="0.8"
          />
        </g>

        {/* 4.5. Floating 4-Point Star at Upper Right of the 'A' */}
        <path
          d="M 330,155 
             C 330,165 332,168 342,168 
             C 332,168 330,171 330,181 
             C 330,171 328,168 318,168 
             C 328,168 330,165 330,155 Z"
          fill="url(#goldMetallic)"
          filter="url(#goldShadow)"
        />

        {/* 5. Glowing Neon-Purple Checkmark/Swoosh (Crossing over the A) */}
        <path
          d="M 215,215
             C 230,190 255,180 275,188
             L 305,150
             C 310,144 314,142 318,145
             L 280,205
             C 265,225 245,245 225,260
             C 215,245 210,230 215,215 Z"
          fill="url(#purpleGlow)"
          filter="url(#goldShadow)"
        />

        {/* 6. Typography: "Ather | أثير" Elegant Serif Style */}
        <g id="brand-typography">
          <text
            x="250"
            y="375"
            fontFamily="'Cairo', 'Playfair Display', 'Georgia', serif"
            fontSize="44"
            fontWeight="500"
            fill="url(#goldMetallic)"
            textAnchor="middle"
            letterSpacing="2"
          >
            Ather | أثير
          </text>
        </g>

        {/* 7. Bottom Elegant Divider and Accent Diamond */}
        <g id="bottom-divider" stroke="url(#goldMetallic)" strokeWidth="1.5">
          {/* Centered Golden Horizontal Lines */}
          <line x1="170" y1="410" x2="230" y2="410" strokeLinecap="round" />
          <line x1="270" y1="410" x2="330" y2="410" strokeLinecap="round" />
          
          {/* Golden Four-Pointed Star in center of divider */}
          <path
            d="M 250,402 
               C 250,407 251,410 256,410 
               C 251,410 250,413 250,418 
               C 250,413 249,410 244,410 
               C 249,410 250,407 250,402 Z"
            fill="url(#goldMetallic)"
            stroke="none"
          />
        </g>
      </svg>
    </div>
  );
}
