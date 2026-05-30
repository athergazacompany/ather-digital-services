import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Palette, Video, Share2, Film, Sparkles, Wand2 } from "lucide-react";

interface DesignSceneProps {
  onNavigate: (index: number) => void;
}

export default function DesignScene({ onNavigate }: DesignSceneProps) {
  const [logoIsPolished, setLogoIsPolished] = useState<boolean>(false);
  const [playheadPos, setPlayheadPos] = useState<number>(10);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Playhead loop simulation for video editing visualizer
  useEffect(() => {
    const handle = setInterval(() => {
      setPlayheadPos((prev) => {
        if (prev >= 90) return 10;
        return prev + 1.2;
      });
    }, 50);
    return () => clearInterval(handle);
  }, []);

  // Automatic horizontal swipe on social media mockups
  useEffect(() => {
    const slideHandle = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(slideHandle);
  }, []);

  const items = [
    {
      title: "تصميم الشعارات والهوية البصرية",
      desc: "نبدأ من الفكرة العفوية والاسكتش اليدوي لنسلهب منها شعاراً ثابتاً، رصيناً، يرسخ بذاكرة عملائك مدى الدهر.",
    },
    {
      title: "تصاميم سوشيال ميديا وبوستات إعلانية",
      desc: "منشورات ستوريات وبوستات مدروسة الأبعاد تتجانس مع روح الهوية، لتجعل محتواك يتصدّر ويجلب التفاعلات.",
    },
    {
      title: "مونتاج وصناعة فيديوهات وريلز (Reels)",
      desc: "عمليات مونتاج احترافية مفعمة بالمؤثرات الصوتية والانتقالات التي تحافظ على تيقظ المتابع من أول ثانية للثانية الأخيرة.",
    },
    {
      title: "تصميم الموشن جرافيك المتكامل",
      desc: "تحريك النصوص والأشكال الهندسية والرسوم التوضيحية لتبسيط الخدمات المعقدة وشرحها بصورة ممتعة ترفيهية ذكية.",
    },
  ];

  const socialSlides = [
    {
      platform: "Instagram",
      tag: "@AtherStudio",
      content: "أول لوحة من الهوية البصرية للوكالة الإعلانية الباذخة",
      stat: "تفاعل: ممتاز +45%",
      bgColor: "bg-linear-to-tr from-[#8a1a9e] to-[#c21f75]",
    },
    {
      platform: "Snapchat Ad",
      tag: "عرض ترويجي",
      content: "تغطية كاملة لفعاليات المؤتمر التقني المعاصر - الرياض 2026",
      stat: "مشاهدات: 120K",
      bgColor: "bg-linear-to-tr from-yellow-500 to-amber-600",
    },
    {
      platform: "X - Twitter Thread",
      tag: "سلسلة تقنية",
      content: "كيف تعزز سبيكة الذهب في الهوية البصرية انطباع الفخامة والأصالة لموقعك؟",
      stat: "مشاركة: +350",
      bgColor: "bg-linear-to-tr from-zinc-800 to-black",
    },
  ];

  return (
    <div
      dir="rtl"
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-20 lg:px-20 bg-gradient-to-b from-[#050008] via-[#130026] to-[#050008] overflow-hidden select-none z-10"
    >
      {/* Background radial glowing gradients */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-pink-500/5 rounded-full blur-[110px] pointer-events-none" />

      {/* 1. Left Section: Descriptive List */}
      <div className="flex-1 text-right max-w-xl z-20">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/5 px-3 py-1 rounded-full border border-[#D4AF37]/20 font-sans">
          التصميم وصناعة المحتوى الإبداعي
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#F7F2FF] mt-3 mb-5 font-sans leading-tight">
          محتوى مميز وبصريات <br />
          <span className="bg-gradient-to-l from-[#D4AF37] via-pink-400 to-[#F7F2FF] bg-clip-text text-transparent">
            تلفت الانتباه وتأسر القلوب
          </span>
        </h2>
        <p className="text-sm md:text-base text-purple-200/80 mb-8 font-sans leading-relaxed">
          الفضاء الرقمي مليء بالضجيج والمستندات المكررة. في أثير، نتميز باللمسة الفنية الفاخرة التي تجعل منشوراتك، شعاراتك، وفيديوهاتك تبرز وسط الفوضى، وتوصل فكرتك بنقاء وأناقة تليق بك.
        </p>

        {/* Dynamic Descriptive Items Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-black/45 hover:bg-black/25 border border-purple-500/5 hover:border-pink-500/35 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
                <h4 className="text-sm md:text-base font-bold text-[#F7F2FF] font-sans">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs text-purple-300 font-sans font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Right Section: Beautiful Dynamic Interactive Creative Sandbox */}
      <div className="flex-1 w-full flex flex-col items-center justify-center gap-6 relative z-20">
        
        {/* Interactive Widget A: Logo Sketch-to-Polished gold Logo */}
        <div className="relative w-full max-w-sm bg-[#050008]/80 border border-purple-500/15 p-5 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden group">
          <div className="absolute inset-0 bg-[#D4AF37]/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-bold font-sans text-purple-400">تفاعل: إسكتش الهوية البصرية</span>
            <button
              onClick={() => setLogoIsPolished(!logoIsPolished)}
              className="px-2.5 py-1 rounded bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/45 text-[9px] font-sans font-bold text-[#FFF2B2] cursor-pointer active:scale-95 transition-all flex items-center gap-1.5"
            >
              <Wand2 className="w-3 h-3 text-[#D4AF37]" />
              <span>{logoIsPolished ? "إرجاع للإسكتش" : "معاينة التصميم النهائي"}</span>
            </button>
          </div>

          <div className="h-28 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {!logoIsPolished ? (
                <motion.div
                  key="sketch"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center"
                >
                  {/* Styled outline mockup to represent drawing */}
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-purple-400/40 p-2 flex items-center justify-center relative animate-pulse">
                    <span className="text-purple-400 font-serif font-black text-2xl opacity-60">A</span>
                    <div className="absolute -bottom-1 -left-2 w-3 h-3 rounded-full bg-pink-500/70" />
                  </div>
                  <span className="text-[9px] font-mono text-purple-400/80 mt-2 font-sans">تخطيط مبدئي يدوي (Sketch Logo)</span>
                </motion.div>
              ) : (
                <motion.div
                  key="polished"
                  initial={{ opacity: 0, scale: 1.05, rotate: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="flex flex-col items-center justify-center filter drop-shadow-[0_0_15px_rgba(212,175,55,0.45)]"
                >
                  <div className="w-16 h-16 rounded-full bg-[#160020] border-2 border-[#D4AF37] px-2 flex items-center justify-center relative shadow-[0_0_20px_#9B35FF]">
                    <span className="text-[#D4AF37] font-serif font-extrabold text-3xl">A</span>
                    {/* Glowing Star emblem on top left */}
                    <div className="absolute top-1 left-2 text-[8px] text-[#D4AF37] animate-ping">✦</div>
                  </div>
                  <span className="text-[9px] font-bold text-[#FFF2B2] mt-2 font-sans tracking-wide">النتيجة بعد التحسين والصياغة برونق الذهب</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Interactive Widget B: Video Editing Timeline Visualizer */}
        <div className="relative w-full max-w-sm bg-[#050008]/80 border border-purple-500/15 p-4 rounded-2xl shadow-xl flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <Film className="w-4 h-4 text-pink-500" />
              <span className="text-[10px] font-bold font-sans text-purple-200">مونتاج وتحريك لقطات Reels / Shorts</span>
            </div>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
              <span className="text-[8px] text-zinc-400 font-mono">00:04:12 HD</span>
            </div>
          </div>

          {/* Virtual video display layer */}
          <div className="relative h-24 rounded-lg overflow-hidden bg-[#100018]/90 border border-purple-500/10 flex items-center justify-center">
            {/* Speed lines in backdrop */}
            <div className="absolute inset-0 bg-[#9B35FF]/2 opacity-50 z-0 flex justify-between px-4">
              <div className="h-full w-[1px] bg-linear-to-b from-transparent via-[#D4AF37]/25 to-transparent animate-pulse" />
              <div className="h-full w-[1px] bg-linear-to-b from-transparent via-pink-500/20 to-transparent animate-pulse" />
              <div className="h-full w-[1px] bg-linear-to-b from-transparent via-purple-500/20 to-transparent animate-pulse" />
            </div>

            {/* Simulated editing overlays */}
            <div className="relative z-10 text-center space-y-1">
              <Play className="w-6 h-6 text-[#D4AF37] mx-auto opacity-75 backdrop-blur-sm p-1 rounded-full border border-[#D4AF37]/50" />
              <p className="text-[8px] font-semibold text-white font-sans max-w-[220px] mx-auto truncate">تأثيرات بصرية وانتقالات صوتية متزامنة</p>
              <div className="flex justify-center gap-1">
                <span className="text-[6px] text-emerald-400 font-sans border border-emerald-500/30 px-1 rounded-xs bg-emerald-500/5">كتم خلفية</span>
                <span className="text-[6px] text-[#D4AF37] font-sans border border-[#D4AF37]/30 px-1 rounded-xs bg-[#D4AF37]/5">صوت سينمائي</span>
              </div>
            </div>
          </div>

          {/* Timeline track and playhead */}
          <div className="relative h-9 rounded-md bg-black/45 border border-purple-500/5 py-1 px-2.5 select-none overflow-hidden">
            {/* Waveform lines */}
            <div className="absolute inset-x-2 inset-y-1.5 flex items-center justify-between opacity-35">
              {[2,5,3,6,4,8,4,5,7,3,5,4,2,6,4,8,5,3,6,4,5,2].map((val, idx) => (
                <div key={idx} className="w-[1.5px] bg-pink-500 rounded-full" style={{ height: `${val * 10}%` }} />
              ))}
            </div>

            {/* Playhead bar */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-linear-to-b from-pink-500 via-pink-400 to-transparent z-10"
              style={{ left: `${playheadPos}%` }}
            >
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(244,63,94,1)]" />
            </div>
          </div>
        </div>

        {/* Carousel of social slides */}
        <div className="relative w-full max-w-sm h-18 bg-[#0c0114]/90 rounded-xl border border-purple-500/20 overflow-hidden flex items-center p-3 sm:px-4">
          <div className="absolute top-1.5 right-3 text-[7px] text-purple-400">معرض السوشيال ميديا التفاعلي</div>
          <AnimatePresence mode="wait">
            {socialSlides.map((slide, idx) => {
              if (activeSlide !== idx) return null;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="w-full flex justify-between items-center pt-2 gap-4"
                >
                  <div className="text-right">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-bold text-white font-sans">{slide.platform}</span>
                      <span className="text-[8px] text-purple-300 font-sans">{slide.tag}</span>
                    </div>
                    <p className="text-[9px] text-[#F7F2FF] font-sans mt-0.5 font-light leading-snug truncate max-w-[220px]">
                      {slide.content}
                    </p>
                  </div>
                  <div className="shrink-0 bg-black/40 border border-[#D4AF37]/20 rounded-md py-1 px-2">
                    <span className="text-[7px] text-[#D4AF37] font-sans block">{slide.stat}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
