import React from "react";
import { motion } from "motion/react";
import { BadgeCheck, ShieldCheck, Zap, HandCoins, Heart, ArrowLeftRight, CheckCircle2 } from "lucide-react";

interface WhyAtherSceneProps {
  onNavigate: (index: number) => void;
}

export default function WhyAtherScene({ onNavigate }: WhyAtherSceneProps) {
  const points = [
    {
      title: "نرتب فكرتك الارتجالية ونبلورها إلى مخرج نهائي جاهز",
      desc: "يكفي أن ترسل لنا فكرتك أو ملفك الأولي، ونحن في أثير نتولى التنظيم، والتصنيف، والصياغة لتصبح النتيجة جاهزة للمشاركة أو النشر.",
    },
    {
      title: "نهتم بأدق التفاصيل والجزئيات الصغيرة التي تصنع الفارق",
      desc: "تصميم الهوامش، اختيار العناوين، ترتيب تسلسل الفقرات، تهيئة الأبعاد؛ كلها لمسات صغيرة نقوم بفرزها لنمنح مخرجاتك قيمة باذخة.",
    },
    {
      title: "تصاميم هادفة وصياغات مخصصة تصيب أهدافك وتطموحاتك",
      desc: "كل نص نصيغه وكل تصميم ننجزه يتم بناؤه بما يناسب هدفك، حتى تظهر هويتك ورسالتك بشكل واضح ومقنع.",
    },
    {
      title: "دقة وسرعة متناهية في الإنجاز مع الحفاظ الصارم على الجودة",
      desc: "نحترم مواعيد التسليم، ونراجع كل ملف بعناية قبل إرساله ليصل إليك بشكل متقن ومرتب.",
    },
    {
      title: "الخصوصية وسرية الملفات وضمان أمان البيانات للعملاء",
      desc: "ملفاتك، بياناتك الشخصية، طبيعة أبحاثك، ومحتوى سيرة أعمالك هي أسرار مقدسة لدينا نقوم بفرزها وتخزينها بأمان تام وخصوصية مطلقة.",
    },
  ];

  const badges = [
    {
      title: "جودة عالية",
      desc: "صنع خبير وتدقيق احترافي مزدوج",
      icon: <BadgeCheck className="w-8 h-8 text-[#D4AF37]" />,
      color: "from-[#1d1203] via-black to-[#130d01]",
      borderColor: "border-[#D4AF37]/30 hover:border-[#D4AF37]/80",
    },
    {
      title: "تسليم سريع",
      desc: "نحترم مواعيدك بدقة الثواني",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      color: "from-[#1b0826] via-black to-[#0e0018]",
      borderColor: "border-purple-500/20 hover:border-purple-500/80",
    },
    {
      title: "خصوصية تامة",
      desc: "حماية بياناتك وملفاتك بسرية تامة",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      color: "from-[#082218] via-black to-black",
      borderColor: "border-emerald-500/20 hover:border-emerald-500/80",
    },
    {
      title: "أسعار مراعية",
      desc: "قيمة عالية تليق بجميع الميزانيات",
      icon: <HandCoins className="w-8 h-8 text-pink-400" />,
      color: "from-[#22081d] via-black to-black",
      borderColor: "border-pink-500/20 hover:border-pink-500/80",
    },
  ];

  return (
    <div
      dir="rtl"
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-20 lg:px-16 bg-gradient-to-b from-[#050008] via-[#10001e] to-[#050008] overflow-hidden select-none z-10"
    >
      {/* Heartbeat glowing core center backdrop */}
      <div className="absolute top-[40%] right-[30%] w-[320px] h-[320px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: "3s" }} />

      {/* 1. Left Side: Core features list */}
      <div className="flex-1 text-right max-w-xl z-20">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/5 px-3 py-1 rounded-full border border-[#D4AF37]/20 font-sans">
          رؤيتنا وبصمتنا
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#F7F2FF] mt-3 mb-6 font-sans leading-tight">
          لماذا يختار النخبة <br />
          <span className="bg-gradient-to-l from-[#D4AF37] via-purple-300 to-white bg-clip-text text-transparent">
            منصة أثير الرقمية؟
          </span>
        </h2>

        {/* Vertical Stagger Feature Checklists */}
        <div className="space-y-4">
          {points.map((pt, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="flex gap-3 p-1.5"
            >
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <h4 className="text-sm md:text-base font-bold text-[#F7F2FF] font-sans">
                  {pt.title}
                </h4>
                <p className="text-[11px] md:text-xs text-purple-300/80 font-sans mt-1 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. Right Side: Bento trust badges grid */}
      <div className="flex-1 w-full max-w-md z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`p-5 rounded-2xl border bg-gradient-to-br ${badge.color} ${badge.borderColor} transition-all duration-300 shadow-xl shadow-black/50 flex flex-col justify-between h-48 relative overflow-hidden group`}
            >
              {/* Subtle light streak behind on hover */}
              <div className="absolute inset-x-0 bottom-0 top-0 translate-y-[100%] group-hover:translate-y-0 bg-purple-500/5 duration-500 transition-transform pointer-events-none" />

              <div>
                <div className="p-2 w-12 h-12 rounded-lg bg-black/40 border border-purple-500/10 flex items-center justify-center mb-4 group-hover:border-[#D4AF37]/35 transition-all">
                  {badge.icon}
                </div>
                <h4 className="text-sm md:text-base font-black text-white font-sans">
                  {badge.title}
                </h4>
              </div>

              <p className="text-[11px] text-purple-300/85 font-sans mt-1 leading-snug">
                {badge.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mini quick-contact reminder box */}
        <div className="mt-6 p-4 rounded-xl bg-purple-950/20 border border-purple-500/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Heart className="w-5 h-5 text-[#D4AF37] animate-pulse shrink-0" />
            <span className="text-xs text-purple-200 font-sans">
              انطباعك وموثوقيتك هي غايتنا الأسمى!
            </span>
          </div>
          <button
            onClick={() => onNavigate(7)}
            className="text-xs font-bold font-sans text-[#FFF2B2] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>اطلب خدمتك الآن</span>
            <span className="text-sm font-sans">←</span>
          </button>
        </div>
      </div>
    </div>
  );
}
