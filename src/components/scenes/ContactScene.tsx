import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Mail, Phone, MessageCircle, Sparkles, Heart } from "lucide-react";
import { ContactFormInput } from "../../types";

export default function ContactScene() {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: "",
    serviceType: "CV متوافق مع ATS",
    contactMethod: "",
    details: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormInput>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const contactEmail = "bunat007@gmail.com";
  const whatsappNumber = "+972595468757";
  const whatsappLink = "https://wa.me/972595468757";

  const serviceOptions = [
    "CV متوافق مع ATS",
    "Cover Letter",
    "LinkedIn Profile",
    "أبحاث وتقارير",
    "عروض PowerPoint",
    "تصميم لوجو وهوية بصرية",
    "بوستات وستوريات",
    "مونتاج ريلز",
    "موشن جرافيك",
    "دعوات وكروت زفاف",
    "مشروع برمجة أو IT",
    "Power BI",
    "Maya",
    "خدمة أخرى",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name as keyof ContactFormInput]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<ContactFormInput> = {};
    if (!formData.name.trim()) {
      newErrors.name = "يرجى كتابة الاسم";
    }
    if (!formData.contactMethod.trim()) {
      newErrors.contactMethod = "يرجى تحديد طريقة التواصل (واتساب أو إيميل)";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Connect to full-stack API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "تعذر إرسال الطلب. يرجى المحاولة مرة أخرى.");
      }

      setStatusMessage(result.message || "تم إرسال طلبك بنجاح. سنراجع التفاصيل ونتواصل معك قريبًا.");
      setSubmitSuccess(true);
      setFormData({ name: "", serviceType: "CV متوافق مع ATS", contactMethod: "", details: "" });
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        details: "تعذر إرسال الطلب من المتصفح. تواصل معنا مباشرة عبر الواتساب أو البريد الظاهر في الصفحة.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      dir="rtl"
      className="relative w-full min-h-screen flex flex-col justify-between px-6 pt-24 pb-8 md:px-16 lg:px-20 bg-gradient-to-b from-[#050008] via-[#0b0114] to-[#040007] overflow-hidden select-none z-10"
    >
      {/* Background soft lighting flares */}
      <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="flex-1 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto z-20">
        
        {/* Left Side (5/12 cols): Contact copy */}
        <div className="lg:col-span-5 text-right flex flex-col justify-center">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/5 px-3 py-1 rounded-full border border-[#D4AF37]/20 self-start font-sans">
            تواصل مباشر وطلبات الخدمات
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#F7F2FF] mt-3 font-sans leading-tight">
            جاهز لتبدأ رحلتك؟ <br />
            <span className="bg-gradient-to-l from-purple-400 via-[#D4AF37] to-[#FFF2B2] bg-clip-text text-transparent">
              دعنا نرتب الخطوة التالية
            </span>
          </h2>
          <p className="text-sm md:text-base text-purple-200/80 mt-4 mb-8 font-sans leading-relaxed">
            اختر الخدمة التي تحتاجها، واكتب لنا التفاصيل. سيصل الطلب إلى بريد أثير، ويمكنك التواصل معنا مباشرة عبر الواتساب.
          </p>

          {/* Quick Info Grid */}
          <div className="space-y-4 text-purple-200/90 text-sm font-sans">
            <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 bg-black/35 py-3 px-4 rounded-xl border border-purple-500/5 hover:border-[#D4AF37]/40 transition-colors">
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <div className="text-right">
                <span className="text-[10px] text-zinc-500 block">بريد استقبال الطلبات</span>
                <span className="text-xs font-mono font-sans font-medium">{contactEmail}</span>
              </div>
            </a>
            
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-black/35 py-3 px-4 rounded-xl border border-purple-500/5 hover:border-emerald-400/40 transition-colors">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <div className="text-right">
                <span className="text-[10px] text-zinc-500 block">واتساب مباشر</span>
                <span className="text-xs font-mono font-sans font-medium" dir="ltr">{whatsappNumber}</span>
              </div>
            </a>

            <div className="flex items-center gap-3 bg-black/35 py-3 px-4 rounded-xl border border-purple-500/5">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <div className="text-right">
                <span className="text-[10px] text-zinc-500 block">طريقة العمل</span>
                <span className="text-xs font-semibold">أونلاين | استقبال طلبات من أي مكان</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (7/12 cols): Interactive Contact Form */}
        <div className="lg:col-span-7 w-full flex items-center justify-center">
          <div className="w-full max-w-lg bg-black/55 border border-purple-500/15 p-6 md:p-8 rounded-2xl shadow-2xl relative shadow-purple-950/40 min-h-[440px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 border-b border-purple-500/10 pb-3 mb-4">
                    <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
                    <span className="text-xs font-bold text-white font-sans">تعبئة نموذج طلب خدمة أثير</span>
                  </div>

                  {/* الاسم */}
                  <div className="flex flex-col gap-1.5 text-right">
                    <label className="text-xs font-bold text-purple-200 font-sans">الاسم الكامل *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="اكتب اسمك الكريم هنا"
                      className={`w-full px-4 py-3 rounded-lg bg-[#160020]/50 border font-sans text-xs md:text-sm text-white focus:outline-hidden focus:border-[#D4AF37] transition-all ${
                        errors.name ? "border-red-500/50" : "border-purple-500/15"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-400 font-sans">{errors.name}</span>
                    )}
                  </div>

                  {/* نوع الخدمة */}
                  <div className="flex flex-col gap-1.5 text-right">
                    <label className="text-xs font-bold text-purple-200 font-sans">الخدمة المطلوبة *</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#160020] border border-purple-500/15 font-sans text-xs md:text-sm text-white focus:outline-hidden focus:border-[#D4AF37] transition-all cursor-pointer"
                    >
                      {serviceOptions.map((opt, id) => (
                        <option key={id} value={opt} className="bg-purple-950 text-white font-sans py-2">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* طريقة التواصل */}
                  <div className="flex flex-col gap-1.5 text-right">
                    <label className="text-xs font-bold text-purple-200 font-sans">رقم الواتساب أو الإيميل *</label>
                    <input
                      type="text"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleInputChange}
                      placeholder="مثال: WhatsApp: +97259... أو email@example.com"
                      className={`w-full px-4 py-3 rounded-lg bg-[#160020]/50 border font-sans text-xs md:text-sm text-white focus:outline-hidden focus:border-[#D4AF37] transition-all ${
                        errors.contactMethod ? "border-red-500/50" : "border-purple-500/15"
                      }`}
                    />
                    {errors.contactMethod && (
                      <span className="text-[10px] text-red-400 font-sans">{errors.contactMethod}</span>
                    )}
                  </div>

                  {/* تفاصيل الطلب */}
                  <div className="flex flex-col gap-1.5 text-right">
                    <label className="text-xs font-bold text-purple-200 font-sans">تفاصيل طلبك والملفات (اختياري)</label>
                    <textarea
                      name="details"
                      rows={3}
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="يرجى وصف طلبك أو كتابة الروابط أو الملفات التي ترغب بمراجعتها"
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#160020]/50 border font-sans text-xs md:text-sm text-white focus:outline-hidden focus:border-[#D4AF37] transition-all resize-none ${
                        errors.details ? "border-red-500/50" : "border-purple-500/15"
                      }`}
                    ></textarea>
                    {errors.details && (
                      <span className="text-[10px] text-red-400 font-sans leading-relaxed">{errors.details}</span>
                    )}
                  </div>

                  {/* زر الإرسال مع الشينيرج */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden py-3 rounded-xl bg-linear-to-r from-purple-800 to-purple-600 border border-[#D4AF37]/45 hover:border-[#F5C542] text-[#F7F2FF] font-sans font-bold flex items-center justify-center gap-2 select-none cursor-pointer hover:scale-102 transition-all shadow-md shadow-purple-950/40"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>جاري إرسال الطلب إلى أثير...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#D4AF37] rotate-180" />
                        <span>إرسال الطلب</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-8 space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md"
                    />
                    <CheckCircle className="w-16 h-16 text-emerald-400 relative z-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-white font-sans">
                      تم إرسال طلبك بنجاح
                    </h3>
                    <p className="text-xs md:text-sm text-purple-300 font-sans max-w-sm mx-auto leading-relaxed">
                      {statusMessage || "تم إرسال طلبك بنجاح. سنراجع التفاصيل ونتواصل معك قريبًا عبر بيانات التواصل التي أرسلتها."}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href={whatsappLink} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-400/30 text-xs text-emerald-200 font-semibold hover:bg-emerald-500/20 transition-all font-sans">
                        فتح واتساب
                      </a>
                      <a href={`mailto:${contactEmail}`} className="px-4 py-2 rounded-lg bg-[#160020] border border-[#D4AF37]/30 text-xs text-[#FFF2B2] font-semibold hover:bg-black/40 transition-all font-sans">
                        إرسال بريد مباشر
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-5 py-2 rounded-lg bg-[#160020] border border-[#D4AF37]/30 text-xs text-[#FFF2B2] font-semibold hover:bg-black/40 transition-all font-sans cursor-pointer"
                  >
                    إرسال طلب جديد آخر
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>

      {/* Cinematic Final Brand Banner & RTL Luxury Footer */}
      <footer className="w-full max-w-5xl mx-auto border-t border-purple-500/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 z-20">
        <div className="text-right flex flex-col gap-0.5">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <h3 className="text-sm md:text-base font-black text-white font-sans">أثير | Ather</h3>
            <Heart className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
          </div>
          <p className="text-[10px] text-purple-400 font-sans">
            خدمات رقمية متكاملة | توظيف مهني | تصميم وصناعة المحتوى | دعم أكاديمي | مشاريع تخصصية
          </p>
        </div>

        <div className="text-center md:text-left flex flex-col gap-1">
          <p className="text-xs md:text-sm text-[#D4AF37] font-semibold font-sans italic tracking-wide">
            "خلي شغلك يعكس تميزك"
          </p>
          <p className="text-[8px] md:text-[10px] text-zinc-500 font-mono">
            &copy; 2026 Ather Studio. كافة الحقوق محفوظة لمنصة أثير لعام 2026.
          </p>
        </div>
      </footer>
    </div>
  );
}
