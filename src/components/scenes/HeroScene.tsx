import React from "react";
import { motion } from "motion/react";
import AtherLogo from "../AtherLogo";
import { ArrowLeft, Sparkles, Send, LayoutGrid } from "lucide-react";

interface HeroSceneProps {
  onNavigate: (index: number) => void;
}

export default function HeroScene({ onNavigate }: HeroSceneProps) {
  // Floating services centered list for circles
  const floatingServices = [
    { name: "CV", x: "-180px", y: "-110px", delay: 0.1 },
    { name: "ATS Scan", x: "180px", y: "-90px", delay: 0.3 },
    { name: "LinkedIn Profile", x: "-150px", y: "135px", delay: 0.5 },
    { name: "Cover Letter", x: "130px", y: "145px", delay: 0.2 },
    { name: "PowerPoint", x: "-190px", y: "10px", delay: 0.4 },
    { name: "أبحاث علمية", x: "190px", y: "20px", delay: 0.6 },
    { name: "برمجة & IT", x: "0px", y: "-190px", delay: 0.7 },
    { name: "لوجو & هوية", x: "-80px", y: "-160px", delay: 0.8 },
    { name: "مونتاج & ريلز", x: "80px", y: "-170px", delay: 0.9 },
    { name: "Maya", x: "120px", y: "-70px", delay: 1.0 },
    { name: "Power BI", x: "-100px", y: "180px", delay: 1.1 },
    { name: "دعوات زفاف", x: "70px", y: "190px", delay: 1.2 },
  ];

  return (
    <div
      dir="rtl"
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-20 lg:px-20 overflow-hidden bg-gradient-to-b from-[#050008] via-[#100018] to-[#050008] select-none z-10"
    >
      {/* 1. Brand Cinematic Video Vignette & Backlights */}
      <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[15%] w-[380px] h-[380px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 2. Visual Side: Floating Logo Orbits Constellation */}
      <div className="relative flex-1 flex items-center justify-center order-1 lg:order-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[420px] md:h-[420px]"
        >
          {/* Centered Large Ather Glowing Frame */}
          <div className="relative group p-4 rounded-full bg-black/45 hover:bg-black/20 border border-purple-500/20 shadow-[0_0_80px_rgba(155,53,255,0.15)] flex items-center justify-center filter drop-shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-700 select-none">
            {/* Ambient revolving highlight beam around the logo */}
            <div className="absolute inset-x-0 inset-y-0 rounded-full border border-dashed border-[#D4AF37]/20 animate-spin" style={{ animationDuration: "120s" }} />
            <div className="absolute inset-x-2 inset-y-2 rounded-full border border-dotted border-purple-500/30 animate-spin" style={{ animationDuration: "80s" }} />
            <AtherLogo size={250} />
          </div>

          {/* Orbit Nodes representing Digital Services */}
          {floatingServices.map((node, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                delay: node.delay,
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                transform: `translate(${node.x}, ${node.y})`,
              }}
              className="px-2.5 py-1.5 rounded-full bg-black/80 border border-purple-400/30 text-purple-200 text-[10px] md:text-xs font-mono font-sans tracking-wide hover:border-[#D4AF37] hover:scale-110 shadow-lg shadow-black/60 cursor-pointer whitespace-nowrap z-20 hover:text-white"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-[#D4AF37] animate-pulse" />
                {node.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3. Text & Copy Side: Premium Presentation Layout */}
      <div className="flex-1 text-center lg:text-right flex flex-col justify-center order-2 lg:order-1 max-w-xl z-20">
        {/* Animated tag bar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-[#160020]/80 border border-purple-500/20 px-3.5 py-1.5 rounded-full self-center lg:self-start mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          <span className="text-xs font-semibold text-purple-200 tracking-wider">
            منصة أثير للخدمات الرقمية المتكاملة
          </span>
        </motion.div>

        {/* Cinematic Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F7F2FF] tracking-tight leading-tight md:leading-snug text-transparent bg-gradient-to-l from-white via-[#F7F2FF] to-purple-200 bg-clip-text font-sans"
        >
          شغلك يستحق أن يظهر{" "}
          <span className="bg-gradient-to-l from-[#D4AF37] via-[#F5C542] to-[#FFF2B2] bg-clip-text text-transparent underline decoration-[#D4AF37]/40 decoration-wavy">
            باحتراف
          </span>
        </motion.h2>

        {/* Animated Accent Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-1 bg-linear-to-r from-[#D4AF37]/50 to-transparent w-36 my-6 self-center lg:self-start origin-right rounded-full"
        />

        {/* Subhead and descriptive pitch */}
        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-medium text-purple-200 mb-4 font-sans leading-relaxed"
        >
          خدمات رقمية احترافية بجودة عالية وأسعار مراعية.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm md:text-base text-purple-300 text-stretch leading-relaxed mb-10 opacity-90 font-sans font-light"
        >
          في أثير، نحول فكرتك، ملفك، أو مشروعك إلى نتيجة مرتبة، واضحة، وجاهزة
          لتترك أثرًا بليغًا من أول نظرة. لا نساوم على الجودة ونسلّم في الوقت
          المحدد.
        </motion.p>

        {/* Dynamic CTAs Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start"
        >
          {/* Primary CTA: "راسلنا الآن" */}
          <button
            onClick={() => onNavigate(7)}
            className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-xl bg-linear-to-r from-purple-800 to-purple-600 border border-[#D4AF37]/50 hover:border-[#F5C542] transition-all duration-300 hover:scale-105 active:scale-95 text-[#F7F2FF] font-sans font-bold flex items-center justify-center gap-2.5 shadow-xl shadow-purple-950/70 select-none cursor-pointer"
          >
            {/* Shifting background shimmer */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <Send className="w-4 h-4 text-[#D4AF37] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            <span>راسلنا الآن للطلب</span>
          </button>

          {/* Secondary CTA: "استعرض الخدمات" */}
          <button
            onClick={() => onNavigate(1)}
            className="w-full sm:w-auto overflow-hidden px-8 py-4 rounded-xl bg-[#160020]/60 hover:bg-purple-950/30 border border-purple-500/25 hover:border-purple-400/50 transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-purple-950/50 text-[#F7F2FF] font-sans font-medium flex items-center justify-center gap-2.5 select-none cursor-pointer"
          >
            <LayoutGrid className="w-4 h-4 text-purple-400" />
            <span>استعرض الخدمات</span>
          </button>
        </motion.div>
      </div>

      {/* 4. Downward slide navigation prompt at bottom center */}
      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 cursor-pointer transition-opacity text-purple-400/80 hover:text-purple-200 z-20" onClick={() => onNavigate(1)}>
        <span className="text-[10px] uppercase font-sans tracking-widest font-mono">
          انزل للاستكشاف
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-0.5"
        >
          <ArrowLeft className="w-4 h-4 -rotate-90 text-[#D4AF37]" />
        </motion.div>
      </div>
    </div>
  );
}
