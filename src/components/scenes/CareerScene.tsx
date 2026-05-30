import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Search, Briefcase, Award, ShieldAlert, BadgeCheck } from "lucide-react";

interface CareerSceneProps {
  onNavigate: (index: number) => void;
}

export default function CareerScene({ onNavigate }: CareerSceneProps) {
  const [atsScore, setAtsScore] = useState<number>(45);

  // Animate the ATS score over time to simulate scanning progress
  useEffect(() => {
    const interval = setInterval(() => {
      setAtsScore((prev) => {
        if (prev >= 98) return 45; // loop
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "صياغة CV متوافق مع أنظمة الـ ATS",
      desc: "نضمن للملف الفرز الناجح لدى كبريات الشركات باستخدام الكلمات المفتاحية الذكية والترتيب البرمجي السليم.",
    },
    {
      title: "كتابة وتنسيق الـ Cover Letter",
      desc: "رسائل تغطية احترافية باللغتين تعزز اهتمام مسؤولي التوظيف وخوارزميات مراجعة السير.",
    },
    {
      title: "تحسين وترتيب حساب LinkedIn",
      desc: "تهيئة صفحة لينكدإن الخاصة بك من العناوين والملخص والخبرات لتسهيل العثور عليك من قبل مستقطبي الكفاءات.",
    },
    {
      title: "مراجعة شاملة وتطوير الملفات",
      desc: "إعادة بناء وتنسيق وتدقيق السير الذاتية الحالية وترقية صياغتها لتكون أكثر جاذبية واحترافية.",
    },
  ];

  return (
    <div
      dir="rtl"
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-20 lg:px-20 bg-linear-to-b from-[#050008] via-[#0e001a] to-[#050008] overflow-hidden select-none z-10"
    >
      {/* Background glow flares */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. Copy & Explanations Panel */}
      <div className="flex-1 text-right max-w-xl z-20">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/5 px-3 py-1 rounded-full border border-[#D4AF37]/20 font-sans">
          خدمات التوظيف المهني
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#F7F2FF] mt-3 mb-4 font-sans leading-tight">
          ملفك المهني هو <br />
          <span className="bg-gradient-to-l from-[#D4AF37] via-[#F5C542] to-white bg-clip-text text-transparent">
            أول انطباع عنك وعن كفاءتك
          </span>
        </h2>
        <p className="text-sm md:text-base text-purple-200/80 mb-8 font-sans leading-relaxed">
          نحن في أثير لا نكتفي بملء القوالب، بل ندرس مهاراتك ونصنع لها صياغة تسويقية تضمن انتصار ملفك على أنظمة الفلترة التلقائية وخطف أنظار مسؤولي التوظيف.
        </p>

        {/* Feature Cards Checklist Grid */}
        <div className="flex flex-col gap-4">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-purple-500/10 hover:border-[#D4AF37]/35 transition-all duration-300"
            >
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm md:text-base font-bold text-[#F7F2FF] font-sans">
                  {feat.title}
                </h4>
                <p className="text-[11px] md:text-xs text-purple-300/80 font-sans mt-1 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. visual Mockup Panel: Interactive ATS CV Scanner */}
      <div className="flex-1 w-full flex items-center justify-center relative z-20 order-last lg:order-none">
        <div className="relative w-full max-w-md h-[460px] bg-black/55 rounded-2xl border border-purple-500/20 p-6 shadow-2xl overflow-hidden shadow-purple-950/40">
          
          {/* Subtle Grid backing */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(155,53,255,0.05)_1px,transparent_1px)] [background-size:12px_12px] opacity-70" />

          {/* Floating LinkedIn Overlay Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="absolute top-4 left-4 z-30 bg-[#160020]/95 border-2 border-[#D4AF37]/50 rounded-xl p-3.5 shadow-xl w-44 hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500 flex items-center justify-center text-blue-400 font-bold font-mono text-xs">
                in
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-white font-sans">ملف LinkedIn</h5>
                <p className="text-[8px] text-[#D4AF37] font-sans">نشط وجذاب للمستقطبين</p>
              </div>
            </div>
            <div className="space-y-1.5 text-[8px] text-purple-300">
              <div className="h-1 bg-purple-500/30 rounded-full w-full" />
              <div className="h-1 bg-purple-500/30 rounded-full w-3/4" />
              <div className="flex justify-between items-center mt-2 pt-1 border-t border-purple-500/10">
                <span className="text-emerald-400 font-semibold font-mono text-[7px]">بحث نشط +120%</span>
                <BadgeCheck className="w-3 h-3 text-emerald-400" />
              </div>
            </div>
          </motion.div>

          {/* Header of Virtual Scanner Console */}
          <div className="flex justify-between items-center mb-5 pb-3 border-b border-purple-500/10 z-20 relative">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-mono font-bold font-sans text-purple-200">
                فحص السيرة والفرز الذكي
              </span>
            </div>
            {/* Realtime scoring badge */}
            <div className="px-2.5 py-1 rounded-md bg-[#160020] border border-[#D4AF37]/30 text-right">
              <span className="text-[9px] text-[#D4AF37] font-sans block leading-none">مؤشر ATS:</span>
              <span className="text-sm font-black font-sans text-white font-mono leading-none">%{atsScore}</span>
            </div>
          </div>

          {/* Simulated White/Light Document to Premium Mockup */}
          <div className="relative h-[330px] w-full rounded-lg bg-[#FAF9F6]/95 p-4 shadow-inner overflow-hidden text-slate-800">
            {/* Dynamic Scanning Neon Violet Laser Line */}
            <motion.div
              animate={{ y: [0, 300, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 right-0 h-1 bg-linear-to-r from-transparent via-purple-600 to-transparent shadow-[0_0_12px_#9B35FF] z-20"
              style={{ top: 0 }}
            />

            {/* Glowing gold/purple scanning overlay mask matching laser movement */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-purple-800/5 to-transparent pointer-events-none z-10" style={{ height: "40%" }} />

            {/* Document Header */}
            <div className="text-center border-b border-slate-350 pb-2 mb-4">
              <h4 className="text-sm font-extrabold text-slate-900 leading-none">أحمد الخالدي - سيرة ذاتية</h4>
              <p className="text-[8px] text-slate-500 mt-1">مدير مشاريع نظم المعلومات | IT Project Manager</p>
            </div>

            {/* Body Lines of CV */}
            <div className="space-y-4">
              {/* Profile Summary */}
              <div>
                <h5 className="text-[8px] font-bold text-slate-900 border-b border-slate-300 pb-0.5 mb-1 text-right">الملخص المهني</h5>
                <div className="space-y-1.5">
                  <div className="h-1.5 bg-slate-400/40 rounded-full w-full" />
                  <div className="h-1.5 bg-slate-400/45 rounded-full w-11/12" />
                  <div className="h-1.5 bg-slate-400/35 rounded-full w-5/6" />
                </div>
              </div>

              {/* Experience Block transforms from plain to highlighted gold */}
              <div>
                <h5 className="text-[8px] font-bold text-slate-900 border-b border-slate-300 pb-0.5 mb-1 text-right">الخبرات المهنية</h5>
                <div className="bg-purple-100/50 p-2 rounded-md border border-purple-200/50 space-y-1.5 relative">
                  {/* Highlight stamp */}
                  <span className="absolute top-1 left-2 text-[6px] font-bold font-sans px-1 rounded-sm bg-emerald-500 text-white shadow-xs">
                    مستحسن الـ ATS
                  </span>
                  <div className="h-2 bg-[#120022] rounded-full w-1/3" />
                  <div className="h-1.5 bg-slate-600 rounded-full w-11/12" />
                  <div className="h-1.5 bg-slate-500 rounded-full w-5/6" />
                  {/* Gold keyword accents */}
                  <div className="flex gap-1.5 mt-2">
                    <span className="text-[6px] font-bold font-sans bg-amber-200 text-amber-900 px-1 py-0.5 rounded-xs">تطوير الأعمال</span>
                    <span className="text-[6px] font-bold font-sans bg-amber-200 text-amber-900 px-1 py-0.5 rounded-xs">نظم IT</span>
                    <span className="text-[6px] font-bold font-sans bg-amber-200 text-amber-900 px-1 py-0.5 rounded-xs">إدارة الرقمنة</span>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="flex justify-end pt-2 border-t border-slate-200 items-center gap-1">
                <span className="text-[7px] text-slate-500 font-sans">تمت الهيكلة طبقاً لمعايير التوظيف الخليجية لعام 2026</span>
                <Award className="w-3 h-3 text-[#D4AF37]" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
