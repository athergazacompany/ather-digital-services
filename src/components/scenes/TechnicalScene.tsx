import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2, Cpu, BarChart3, RotateCw, Heart, Calendar, ArrowUpRight, Laptop, Sparkles } from "lucide-react";

interface TechnicalSceneProps {
  onNavigate: (index: number) => void;
}

export default function TechnicalScene({ onNavigate }: TechnicalSceneProps) {
  const [activeSegment, setActiveSegment] = useState<string>("dev_dashboard");
  const [weddingFlipped, setWeddingFlipped] = useState<boolean>(false);
  const [chartValue, setChartValue] = useState<number>(65);

  // Power BI chart loop
  useEffect(() => {
    const handle = setInterval(() => {
      setChartValue((prev) => {
        const next = Math.floor(60 + Math.random() * 35);
        return next;
      });
    }, 2800);
    return () => clearInterval(handle);
  }, []);

  const segments = [
    {
      id: "dev_dashboard",
      title: "البرمجة وهندسة الحاسوب",
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      sub: "مشاريع تقنية وهندسية بمعايير مثالية",
      desc: "نصمم ونطور الأكواد البرمجية بكفاءة ونقدم الدعم في نظم الحاسوب والبرمجة وحل المشكلات الهندسية لتسريع الأداء وجعل البرامج تعمل بسلاسة.",
      details: ["صياغة تطبيقات مخصصة بلغات البرمجة الحديثة", "تطبيق وهندسة نظم الاتصالات والبنية التحتية IT", "شرح وتدقيق الخوارزميات وهياكل البيانات بنقاء وهدوء"],
    },
    {
      id: "power_bi_maya",
      title: "Power BI & Maya 3D",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      sub: "تحليلات البيانات والنمذجة ثلاثية الأبعاد",
      desc: "نربط وقائع مشروعك بأقوى لوحات البيانات الإحصائية في Power BI، ونصنع لك تصاميم غنية ثرية الأطوار ثلاثية الأبعاد ببرنامج Maya لتجسيم أفكارك.",
      details: ["بناء لوحات مؤشرات الأداء التفاعلية لوضح الحقائق والمؤشرات", "نمذجة ثلاثية الأبعاد وتشكيل كائنات المجسمات المعقدة", "تنظيف ومعالجة وتصنيف مخازن البيانات الرقمية"],
    },
    {
      id: "wedding_cards",
      title: "دعوات وكروت الزفاف",
      icon: <Heart className="w-5 h-5 text-pink-400" />,
      sub: "دعوات زفاف إلكترونية تليق بليلة العمر",
      desc: "دعوة زفافك مروية بلغة شاعرية رصينة ومصممة بصورة رقمية حديثة مطعمة ببريق الذهب العثماني، تعبر ببهجة عن تفاصيل فرحتكم.",
      details: ["تصاميم بطاقات زفاف ثابتة ومتحركة بالطلب والمشاهد", "صياغة نصوص شعرية وترتيب فاخر لتسلسل فقرات الحفل", "دعوات تفاعلية تتيح لضيوفكم تأكيد الحضور والموقع بنقرة واحدة"],
    },
  ];

  const currentSegment = segments.find((s) => s.id === activeSegment) || segments[0];

  return (
    <div
      dir="rtl"
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-20 lg:px-20 bg-gradient-to-b from-[#050008] via-[#090014] to-[#050008] overflow-hidden select-none z-10"
    >
      {/* Dynamic ambient lights */}
      <div className="absolute top-[20%] left-[8%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[380px] h-[380px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 1. Explanatory Section to the right */}
      <div className="flex-1 text-right max-w-xl z-20">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/5 px-3 py-1 rounded-full border border-[#D4AF37]/20 font-sans">
          مشاريع تخصصية وخدمات تقنية خاصة
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#F7F2FF] mt-3 mb-5 font-sans leading-tight">
          من الأفكار المعقدة <br />
          <span className="bg-gradient-to-l from-emerald-400 via-[#D4AF37] to-white bg-clip-text text-transparent">
            إلى تطبيق مرتب ونتيجة واضحة
          </span>
        </h2>
        <p className="text-sm md:text-base text-purple-200/80 mb-8 font-sans leading-relaxed">
          سواء كان مشروعك يخص كود برمجي دقيق، أو لوحة بيانات وتحليل إحصائي، أو عملاً هندسياً بـ Maya، أو حتى تصميم بطاقة زفاف فاخرة بلمسة ذهبية دافئة، فريق أثير في خدمتك بصياغة تخصصية.
        </p>

        {/* Dynamic Nav Tabs */}
        <div className="space-y-3 mb-6">
          {segments.map((seg) => {
            const isSel = activeSegment === seg.id;
            return (
              <button
                key={seg.id}
                onClick={() => setActiveSegment(seg.id)}
                className={`w-full text-right p-3.5 rounded-xl border flex items-center justify-between gap-4 transition-all duration-300 transform active:scale-98 cursor-pointer ${
                  isSel
                    ? "bg-[#160020] border-[#D4AF37] text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                    : "bg-black/45 border-purple-500/5 text-purple-300 hover:border-purple-500/25 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg ${isSel ? "bg-[#D4AF37]/10 text-[#D4AF37]" : "bg-purple-950/40 text-purple-400"}`}>
                    {seg.icon}
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold font-sans">{seg.title}</h4>
                    <p className="text-[10px] text-purple-400 font-sans mt-0.5">{seg.sub}</p>
                  </div>
                </div>
                <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isSel ? "text-[#D4AF37] rotate-45 scale-110" : "text-purple-500"}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Visual Sandbox: Interactive Code / Dashboard / Wedding Flip Card on Left */}
      <div className="flex-1 w-full flex items-center justify-center relative z-20">
        <div className="relative w-full max-w-md h-[440px] bg-[#0c0114]/90 rounded-2xl border border-purple-500/10 p-5 shadow-2xl overflow-hidden shadow-purple-950/40">
          
          <AnimatePresence mode="wait">
            {activeSegment === "dev_dashboard" && (
              <motion.div
                key="dev"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-full flex flex-col justify-between py-2"
              >
                <div className="flex justify-between items-center border-b border-purple-500/10 pb-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="text-emerald-400 w-4 h-4 animate-pulse" />
                    <span className="text-xs font-mono text-purple-200">Ather Sandbox Terminal</span>
                  </div>
                  <Laptop className="w-3.5 h-3.5 text-zinc-500" />
                </div>

                {/* Simulated Linux IDE screen */}
                <div className="flex-1 bg-black/60 border border-emerald-500/10 rounded-lg p-4 font-mono text-[10px] md:text-xs text-emerald-300 space-y-2 text-left select-text">
                  <div className="text-zinc-500 text-[8px] border-b border-zinc-800/50 pb-1 flex justify-between">
                    <span>File: system_controller.ts</span>
                    <span>TS v5.8.2</span>
                  </div>
                  <div>
                    <span className="text-purple-400">import </span>
                    <span>{"{ AtherEngine }"} </span>
                    <span className="text-purple-400">from </span>
                    <span className="text-amber-300">"ather-core"</span>
                    <span>;</span>
                  </div>
                  <div>
                    <span className="text-purple-400">const </span>
                    <span>service = </span>
                    <span className="text-purple-400">new </span>
                    <span className="text-blue-400">AtherEngine</span>
                    <span>();</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-zinc-500">// تحويل السير والمشروعات لتكون سليمة</span><br />
                    <span>await service.</span>
                    <span className="text-[#D4AF37]">rearrangeYourWork</span>
                    <span>({"{ text: \"معياري\" }"});</span>
                  </div>
                  <div className="text-green-400 font-bold pt-2">
                    ▶ run build --prod <br />
                    <span className="text-white">✓ Bundle successfully compiled. [24ms]</span>
                  </div>
                </div>

                <div className="text-[9px] text-zinc-400 font-sans mt-3 text-center">
                  أكواد برمجية خالية من الثغرات ومنظمة مع التوثيق الكامل للتسليم
                </div>
              </motion.div>
            )}

            {activeSegment === "power_bi_maya" && (
              <motion.div
                key="bi"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-full flex flex-col justify-between py-2"
              >
                <div className="flex justify-between items-center border-b border-[#D4AF37]/20 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="text-amber-400 w-4 h-4" />
                    <span className="text-xs font-bold text-white font-sans">لوحة بيانات إحصائية Power BI</span>
                  </div>
                  <div className="flex gap-1.5 items-center bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded text-[8px] text-[#FFF2B2] font-semibold">
                    <span>قراءة حية</span>
                    <RotateCw className="w-2.5 h-2.5 animate-spin" />
                  </div>
                </div>

                {/* Dashboard simulated charts */}
                <div className="flex-1 grid grid-cols-2 gap-4 my-2">
                  <div className="bg-black/45 border border-purple-500/5 p-3 rounded-lg flex flex-col justify-between">
                    <span className="text-[9px] text-purple-400 font-sans">معدل التحسن والنمو</span>
                    <span className="text-2xl font-black font-mono text-white">%{chartValue}</span>
                    <div className="h-2 bg-purple-950 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-linear-to-r from-purple-500 to-[#D4AF37]"
                        animate={{ width: `${chartValue}%` }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>

                  <div className="bg-black/45 border border-purple-500/5 p-3 rounded-lg flex flex-col justify-between relative overflow-hidden">
                    <span className="text-[9px] text-purple-400 font-sans">كائن Maya 3D</span>
                    <div className="border border-purple-500/20 rounded-md p-1 h-14 flex items-center justify-center bg-linear-to-br from-[#120022] to-black">
                      {/* Simulated rotating 3D wireframe box */}
                      <motion.div
                        animate={{ rotateX: 360, rotateY: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="w-7 h-7 border border-[#D4AF37]/50 border-dashed rounded flex items-center justify-center"
                      >
                        <div className="w-3.5 h-3.5 border border-purple-400" />
                      </motion.div>
                    </div>
                    <span className="text-[7px] text-zinc-500 text-center font-mono uppercase">Render: Maya 2026</span>
                  </div>
                </div>

                <div className="bg-black/40 border border-purple-500/5 p-3 rounded-lg text-right">
                  <h5 className="text-[9px] font-bold text-[#D4AF37] font-sans">تطبيقات ومؤشرات تخصصية</h5>
                  <p className="text-[8px] text-purple-300 font-sans mt-0.5 font-light leading-relaxed">
                    نأخذ الأرقام الصامتة ونحولها إلى استراتيجية واضحة يفهمها عملاؤكم ومستثمروكم من النظرة الأولى.
                  </p>
                </div>
              </motion.div>
            )}

            {activeSegment === "wedding_cards" && (
              <motion.div
                key="wedding"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-full flex flex-col justify-between py-2"
              >
                <div className="flex justify-between items-center border-b border-pink-500/20 pb-2">
                  <div className="flex items-center gap-1.5">
                    <Heart className="text-pink-400 w-4 h-4" />
                    <span className="text-xs font-bold text-[#F7F2FF] font-sans">دعوة زفاف إلكترونية ملكية</span>
                  </div>
                  <span className="text-[8px] text-zinc-500 font-sans">تفاعلية بالكامل</span>
                </div>

                {/* Flip wedding card animation on hover/click */}
                <div className="flex-1 flex items-center justify-center my-4">
                  <div
                    className="relative w-full max-w-[280px] h-[190px] cursor-pointer group"
                    onClick={() => setWeddingFlipped(!weddingFlipped)}
                  >
                    {/* Simulated Card Wrapper with 3D perspective effect */}
                    <motion.div
                      animate={{ rotateY: weddingFlipped ? 180 : 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="w-full h-full relative"
                    >
                      {/* CARD FRONT SIDE */}
                      <div className="absolute inset-0 w-full h-full bg-linear-to-br from-[#1b002b] to-[#04000a] border-2 border-dashed border-[#D4AF37]/50 rounded-xl p-4 flex flex-col justify-between items-center text-center backface-hidden shadow-xl"
                           style={{ backfaceVisibility: "hidden" }}>
                        
                        <div className="text-[#D4AF37] text-xs">✦ ✦ ✦</div>
                        <div>
                          <p className="text-[8px] font-medium text-pink-300 uppercase tracking-widest font-sans">دعوة فرح باذخة</p>
                          <h4 className="text-base font-black text-white font-sans mt-1">آل مكتوم & آل خضر</h4>
                        </div>
                        <p className="text-[8px] text-[#D4AF37] font-sans flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#D4AF37]" />
                          <span>اضغط لقلب كارت الدعوة ومعاينة التفاصيل</span>
                        </p>
                      </div>

                      {/* CARD BACK SIDE */}
                      <div className="absolute inset-0 w-full h-full bg-linear-to-br from-[#10001a] to-black border-2 border-[#D4AF37] rounded-xl p-4 flex flex-col justify-between text-center shadow-xl"
                           style={{ transform: "rotateY(180s)", backfaceVisibility: "hidden" }}>
                        
                        <div className="flex gap-1 items-center justify-center">
                          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span className="text-[9px] font-sans text-pink-300 font-bold">بشريات الفرح والسرور</span>
                        </div>
                        <p className="text-[10px] text-white leading-relaxed font-sans px-2 font-medium">
                          "ندعوكم لمشاركتنا فرحة العمر في قاعة الفورسيزنز الكبرى بالرياض، بحضوركم يكتمل سرورنا وتضيء ليالينا البهية"
                        </p>
                        <div className="flex justify-between items-center border-t border-purple-500/20 pt-2 text-[7px] text-[#D4AF37] font-sans">
                          <span>الجمعة، 15 مايو 2026</span>
                          <span>موقع القاعة بنقرة واحدة</span>
                        </div>
                      </div>

                    </motion.div>
                  </div>
                </div>

                <div className="text-[9px] text-center text-purple-400 font-sans">
                  دعوات رقمية فاخرة بلمسة ذهبية دافئة وكارت تأكيد الحضور التفاعلي
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
