import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, GraduationCap, Palette, Zap, ArrowRight, Star, Heart } from "lucide-react";

interface ServicesUniverseProps {
  onNavigate: (index: number) => void;
}

interface CategoryData {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
  targetIndex: number; // scene to navigate to on click
  items: string[];
}

export default function ServicesUniverse({ onNavigate }: ServicesUniverseProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<number>(0);

  const categories: CategoryData[] = [
    {
      id: 0,
      title: "خدمات التوظيف المهني",
      subtitle: "ملفات مهنية تفتح لك الفرص",
      icon: <Briefcase className="w-6 h-6 text-purple-400" />,
      color: "from-purple-900 to-indigo-900",
      glowColor: "rgba(139, 92, 246, 0.4)",
      targetIndex: 2, // Scene 3 is Career
      items: [
        "سيرة ذاتية (CV) احترافية ومتوافقة مع أنظمة ATS",
        "كتابة وتنسيق رسالة التغطية (Cover Letter)",
        "تحسين وترتيب الحساب المهني في LinkedIn بشكل متكامل",
        "صياغة احترافية ومراجعة لغوية للمصطلحات والمهارات",
      ],
    },
    {
      id: 1,
      title: "الدعم الأكاديمي والجامعي",
      subtitle: "متابعة تضمن أفضل النتائج والملفات",
      icon: <GraduationCap className="w-6 h-6 text-amber-400" />,
      color: "from-amber-950 to-purple-950",
      glowColor: "rgba(245, 197, 66, 0.3)",
      targetIndex: 3, // Scene 4 is Academic
      items: [
        "إعداد وتنسيق الأبحاث والتقارير الجامعية بكفاءة",
        "دعم ومتابعة المشاريع الجامعية بجميع مراحلها",
        "تنظيم ملفات التسليم والمرفقات ومراجعتها بدقة",
        "تصميم عروض PowerPoint تفاعلية واحترافية مميزة",
      ],
    },
    {
      id: 2,
      title: "التصميم وصناعة المحتوى",
      subtitle: "لمسة فنية تعكس رصانة هويتك",
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      color: "from-pink-950 to-indigo-950",
      glowColor: "rgba(244, 63, 94, 0.35)",
      targetIndex: 4, // Scene 5 is Design
      items: [
        "تصميم لوجوهات (شعارات) وهوية بصرية كاملة",
        "تصميم بوستات، ستوريات، وإعلانات شبكات التواصل الاجتماعي",
        "إنتاج ومونتاج احترافي للفيديوهات القصيرة والريلز (Reels)",
        "صناعة وتصميم فيديوهات موشن جرافيك (Motion Graphics)",
      ],
    },
    {
      id: 3,
      title: "المشاريع التخصصية والتقنية",
      subtitle: "حلول تكنولوجية وهندسية دقيقة للمبرمجين",
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      color: "from-[#082a1e] to-black",
      glowColor: "rgba(16, 185, 129, 0.35)",
      targetIndex: 5, // Scene 6 is Tech
      items: [
        "حلول ودعم مشاريع البرمجة المتخصصة",
        "إعداد شبكات واتصالات وبنية تحتية تفصيلية (IT)",
        "مهام وتصاميم هندسة الحاسوب التقنية",
        "لوحات بيانات وتحليل إحصائي عبر Power BI",
        "نمذجة وتصاميم ثلاثية الأبعاد باستخدام Maya",
        "كروت ودعوات زفاف إلكترونية عصرية مطلية بمعدن فاخر وورد",
      ],
    },
  ];

  return (
    <div
      dir="rtl"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 md:px-12 bg-linear-to-b from-[#050008] via-[#120022] to-[#050008] select-none z-10"
    >
      {/* Background radial soft ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-950/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Slide Heading */}
      <div className="text-center mb-10 max-w-xl z-20">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/5 px-3 py-1 rounded-full border border-[#D4AF37]/20 font-sans"
        >
          الكون الخدمي بأكمله
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-[#F7F2FF] mt-3 font-sans"
        >
          خدمات أثير المتكاملة
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base text-purple-200/80 mt-2 font-sans"
        >
          كل ما تحتاجه لتقديم نفسك أو مشروعك كخبير بصورة ملهمة وأكثر إقناعاً.
        </motion.p>
      </div>

      {/* Interactive Orbital Desktop Panel */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-20">
        {/* Orbital Control Panel on the Left (5/12 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {categories.map((cat, idx) => {
            const isActive = activeCategoryId === idx;
            return (
              <motion.div
                key={cat.id}
                onMouseEnter={() => setActiveCategoryId(cat.id)}
                onClick={() => onNavigate(cat.targetIndex)}
                whileHover={{ scale: 1.02 }}
                className={`relative px-5 py-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 ${
                  isActive
                    ? "bg-[#1d002e]/80 border-[#D4AF37]/70 shadow-[0_0_20px_rgba(212,175,85,0.15)]"
                    : "bg-[#0b0214]/65 border-purple-500/10 hover:border-purple-500/30"
                }`}
              >
                {/* Visual Active Left Highlight Line */}
                {isActive && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#D4AF37] rounded-r-xl" />
                )}

                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg flex items-center justify-center transition-all ${
                      isActive ? "bg-[#D4AF37]/10" : "bg-purple-950/40"
                    }`}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-[#F7F2FF] font-sans">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-purple-300 font-sans mt-0.5">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-purple-400 font-mono">0{cat.id + 1}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] rotate-180 transition-transform group-hover:-translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Display Center Star Core (7/12 cols) */}
        <div className="lg:col-span-7 h-[330px] md:h-[400px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            {categories.map((cat, idx) => {
              if (activeCategoryId !== idx) return null;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, scale: 0.96, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 rounded-2xl bg-linear-to-br ${cat.color} p-6 md:p-8 border border-purple-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden`}
                  style={{
                    boxShadow: `0 0 45px ${cat.glowColor}`,
                  }}
                >
                  {/* Subtle vector grid watermark inside */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(155,53,255,0.06)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  {/* Top content */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-black/40 border border-[#D4AF37]/30">
                          {cat.icon}
                        </div>
                        <span className="text-xs font-mono font-sans font-semibold text-[#D4AF37] tracking-wider uppercase">
                          مجموعة خدمات 0{cat.id + 1}
                        </span>
                      </div>
                      <Star className="w-4 h-4 text-[#D4AF37] animate-pulse" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-extrabold text-[#F7F2FF] font-sans">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-purple-300 font-sans mt-1.5 mb-5 opacity-90">
                      {cat.subtitle}
                    </p>

                    {/* Interactive List checking out custom bullet entries */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {cat.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-start gap-2.5 bg-black/25 px-3 py-2 rounded-lg border border-purple-500/5 hover:border-[#D4AF37]/25 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                          <p className="text-xs md:text-sm text-purple-100 font-sans font-light leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Button calling next page */}
                  <button
                    onClick={() => onNavigate(cat.targetIndex)}
                    className="w-full relative group overflow-hidden py-3 rounded-lg bg-black/40 border border-[#D4AF37]/40 hover:border-[#F5C542] hover:bg-black/55 text-xs text-[#FFF2B2] font-semibold text-center tracking-wide transition-all uppercase flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <div className="absolute inset-x-0 inset-y-0 translate-y-[100%] group-hover:translate-y-0 bg-[#D4AF37]/10 transition-transform duration-300" />
                    <span>تصفّح تفاصيل هذا القسم ومعاينته</span>
                    <ArrowRight className="w-3.5 h-3.5 rotate-180 text-[#D4AF37]" />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
