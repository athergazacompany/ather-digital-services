import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Presentation, FolderDot, GraduationCap, CheckCircle2, Layers3 } from "lucide-react";

interface AcademicSceneProps {
  onNavigate: (index: number) => void;
}

export default function AcademicScene({ onNavigate }: AcademicSceneProps) {
  const [activeTab, setActiveTab] = useState<string>("research");

  const categories = [
    {
      id: "research",
      title: "أبحاث وتقارير",
      sub: "أبحاث جامعية منقحة وموثقة",
      desc: "إعداد وتنسيق كامل للأبحاث، التقارير العلمية، والواجبات الجامعية طبقاً للمعايير والأنظمة المعتمدة وصياغات دقيقة ممتعة للقراءة خالية من الحشو والخطأ اللغوي.",
      points: [
        "توثيق المراجع بنظام APA أو Harvard بدقة متناهية",
        "تنسيق الجداول، الرسوم، والخطوط طبقا لأكاديمية جامعتك",
        "تدقيق ومراجعة لغوية مع صياغة أكاديمية واضحة ومنظمة",
      ],
      icon: <FileText className="w-5 h-5 text-purple-400" />,
    },
    {
      id: "ppt",
      title: "عروض PowerPoint",
      sub: "عروض تقديمية خاطفة للأبصار",
      desc: "نصمم شرائح PowerPoint تبتعد عن التكرار والجمود وتجمع بين البساطة البصرية والحداثة الحركية لتضمن عرض فكرتك أمام المشرفين بامتياز وقوة.",
      points: [
        "تصميم هوية بصرية مخصصة ومطابقة لموضوع مشروعك",
        "حركات وانتقالات سينمائية ذكية لا تشتت الانتباه",
        "إنفوجرافيك وتوزيع هندسي مريح للنصوص والبيانات",
      ],
      icon: <Presentation className="w-5 h-5 text-amber-500" />,
    },
    {
      id: "submission",
      title: "مشاريع وملفات تسليم",
      sub: "ترتيب وتنظيم ملفات التسليم الجامعية",
      desc: "نختصر عليك فوضى ملفات الأكواد، التصاميم والواجبات المتناثرة، حيث نرتبها ونضمن تسميتها بالشكل المعياري لتسهيل الفهم والحصول على التقييم الأكمل.",
      points: [
        "جمع وترتيب الملفات البرمجية والأكواد بصيغ سليمة",
        "إنتاج كتيبات دليل الاستخدام والتشغيل السريع (Readme Docs)",
        "تقفيل ملف تسليم نهائي مغلق ومطابق لتعليمات المشرفين",
      ],
      icon: <FolderDot className="w-5 h-5 text-emerald-400" />,
    },
  ];

  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <div
      dir="rtl"
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-20 lg:px-20 bg-gradient-to-b from-[#050008] via-[#110024] to-[#050008] overflow-hidden select-none z-10"
    >
      {/* Heavy Backlit Glow panels */}
      <div className="absolute top-[30%] right-[5%] w-[450px] h-[450px] bg-[#9B35FF]/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[380px] h-[380px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 1. Left Section: Descriptive Tab Controllers */}
      <div className="flex-1 text-right max-w-xl z-20">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/5 px-3 py-1 rounded-full border border-[#D4AF37]/20 font-sans">
          الدعم الجامعي والأكاديمي
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#F7F2FF] mt-3 mb-5 font-sans leading-tight">
          نرتب مشروعك الدراسي <br />
          <span className="bg-gradient-to-l from-amber-400 via-[#D4AF37] to-white bg-clip-text text-transparent">
            ونختصر عليك الجهد والوقت
          </span>
        </h2>
        <p className="text-sm md:text-base text-purple-200/80 mb-8 font-sans leading-relaxed">
          الدراسة الجامعية مرهقة، وضغط التسليمات لا ينتهي. نحن في أثير نسندك ونضمن ترتيب وتحرير أبحاثك ومشاريعك وتنسيق عروضك التقديمية بصورة تلائم مستوى طموحك وتحصد إعجاب مشرفيك.
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((cat) => (
            <button
               key={cat.id}
               onClick={() => setActiveTab(cat.id)}
               className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-xs md:text-sm font-sans font-bold transition-all duration-300 transform active:scale-95 cursor-pointer ${
                 activeTab === cat.id
                   ? "bg-[#D4AF37]/10 border-[#D4AF37] text-white shadow-[0_0_15px_rgba(212,175,85,0.15)]"
                   : "bg-black/40 border-purple-500/10 text-purple-300 hover:border-purple-500/35 hover:text-white"
               }`}
            >
              {cat.icon}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Detail panel is animated smoothly */}
        <div className="min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <h4 className="text-base md:text-lg font-bold text-[#D4AF37] font-sans">
                {activeCategory.sub}
              </h4>
              <p className="text-xs md:text-sm text-purple-200/85 font-sans leading-relaxed">
                {activeCategory.desc}
              </p>

              {/* Checklist items */}
              <div className="space-y-2 pt-2">
                {activeCategory.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-black/20 p-2.5 rounded-lg border border-purple-500/5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span className="text-xs md:text-sm text-purple-100 font-sans">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 2. Right Section: Beautiful Live Virtual Slideshow & Document simulation */}
      <div className="flex-1 w-full flex items-center justify-center relative z-20">
        <div className="relative w-full max-w-md h-[440px] bg-black/45 rounded-2xl border border-purple-500/10 p-6 shadow-2xl flex flex-col justify-between overflow-hidden shadow-purple-950/40">
          
          {/* Stack effect in background */}
          <div className="absolute top-2 right-2 left-2 bottom-2 bg-purple-900/5 rounded-2xl border border-purple-600/10 -z-10 transform translate-y-3 scale-98" />
          <div className="absolute top-4 right-4 left-4 bottom-4 bg-[#D4AF37]/5 rounded-2xl border border-gold/10 -z-20 transform translate-y-6 scale-95" />

          {/* Simulation Header */}
          <div className="flex justify-between items-center border-b border-purple-500/10 pb-3">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-[#D4AF37] w-5 h-5 animate-bounce" />
              <span className="text-xs font-bold font-sans text-purple-200">صالة عرض المخرجات الأكاديمية</span>
            </div>
            <Layers3 className="w-4 h-4 text-purple-400" />
          </div>

          {/* Interactive Frame depending on Active Tab */}
          <div className="flex-1 my-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeTab === "research" && (
                <motion.div
                  key="research-img"
                  initial={{ rotate: -5, opacity: 0, scale: 0.9 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 5, opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#FAF9F6] w-full max-w-[280px] h-[250px] p-5 rounded-lg shadow-lg text-slate-800 border-t-8 border-purple-800 flex flex-col justify-between relative"
                >
                  <div className="h-5 bg-purple-100 rounded-sm mb-3 text-[8px] flex items-center px-1.5 font-bold justify-between text-purple-950 font-sans">
                    <span>جامعة الملك عبد العزيز</span>
                    <span>2026</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-900 rounded-full w-4/6" />
                    <div className="h-1 bg-slate-400 rounded-full w-full" />
                    <div className="h-1 bg-slate-400 rounded-full w-11/12" />
                    <div className="h-1 bg-slate-350 rounded-full w-5/6" />
                    <div className="h-1.5 bg-[#D4AF37]/35 rounded-full w-3/4 my-2" />
                    <div className="h-1 bg-slate-400 rounded-full w-1/2" />
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-2 text-[6px] text-slate-500 font-sans mt-3">
                    <span>تحقيق النسبة: 0% سرقة</span>
                    <span>معتمد APA v7</span>
                  </div>
                </motion.div>
              )}

              {activeTab === "ppt" && (
                <motion.div
                  key="ppt-img"
                  initial={{ rotateY: -30, opacity: 0, scale: 0.9 }}
                  animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                  exit={{ rotateY: 30, opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative bg-linear-to-br from-[#1c012b] to-[#07000c] w-full max-w-[320px] h-[200px] rounded-lg border-2 border-[#D4AF37]/70 p-4 shadow-2xl flex flex-col justify-between"
                  style={{ perspective: "1000px" }}
                >
                  {/* Glowing core indicator */}
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  
                  {/* Presentation slide watermark */}
                  <div className="absolute top-2 right-6 text-[7px] text-purple-400 uppercase font-mono tracking-widest">
                    Slide 04 - مشروع التخرج
                  </div>

                  <div className="border-r-2 border-[#D4AF37] pr-2.5 mt-2">
                    <h5 className="text-[11px] font-black font-sans text-white leading-none">مدخل في حوكمة تكنولوجيا الذكاء الاصطناعي</h5>
                    <p className="text-[8px] text-purple-300 font-sans mt-1">تنسيق ومعالجة: أثير</p>
                  </div>

                  {/* Bullet slide details */}
                  <div className="space-y-1.5 my-3 px-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <div className="h-1 bg-purple-200/50 rounded-full w-3/4" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <div className="h-1 bg-purple-200/50 rounded-full w-1/2" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[7px] border-t border-purple-500/15 pt-2 text-[#D4AF37] font-sans">
                    <span>انتقالات سينمائية ذكية</span>
                    <span>عروض PowerPoint ممتازة</span>
                  </div>
                </motion.div>
              )}

              {activeTab === "submission" && (
                <motion.div
                  key="submission-img"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-zinc-950 border border-emerald-500/45 w-full max-w-[280px] h-[220px] p-4 rounded-xl flex flex-col justify-between font-mono relative shadow-xl shadow-emerald-950/20"
                >
                  <div className="flex justify-between items-center border-b border-purple-500/10 pb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[8px] text-emerald-400 font-sans">final_release.zip</span>
                  </div>

                  <div className="space-y-2 my-2 text-right">
                    <div className="text-[9px] text-zinc-400 font-mono">
                      $ tar -xvf graduate_project.tar.gz
                    </div>
                    <div className="text-[8px] text-emerald-400 text-right pr-2">
                      ✔ index.py (مرتب وموثق)<br />
                      ✔ database.sql (مصمم بكفاءة)<br />
                      ✔ README.md (كتيب شرح الاستخدام الجاهز)
                    </div>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-md py-1 px-2.5 flex items-center justify-between text-[7px] text-emerald-400 font-sans">
                    <span>تم التغليف والدعم الفني بنجاح</span>
                    <span>100% منظم للتسليم</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick interactive action trigger to help navigation */}
          <div className="text-center text-[10px] text-purple-400/80 font-sans border-t border-purple-500/10 pt-3">
            اضغط على التبويبات باليسار لعرض المخرجات التوضيحية
          </div>

        </div>
      </div>
    </div>
  );
}
