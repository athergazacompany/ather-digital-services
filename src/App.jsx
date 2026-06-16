import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import "./App.css";

const WHATSAPP_NUMBER = "972595468757";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "مرحباً Ather | أثير، أريد الاستفسار عن خدماتكم."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const icons = {
  cv: "M6 3h9l3 3v15H6V3zm8 1.5V7h2.5M8 11h8M8 14h8M8 17h5",
  study: "M3 8l9-4 9 4-9-4zm4 3v5c3 2 7 2 10 0v-5M21 8v6",
  research: "M4 5h7a4 4 0 014 4v10H8a4 4 0 01-4-4V5zm11 0h5v14h-5",
  ppt: "M4 4h16v11H4V4zm8 11v5m-4 0h8M8 8h3m2 0h3",
  design:
    "M12 3a9 9 0 100 18h1.2a2 2 0 001.4-3.4 1.7 1.7 0 011.2-2.9H18a3 3 0 003-3C21 6.8 17 3 12 3zM7.5 10h.1M10 7.5h.1M14 7.5h.1M16.5 10h.1",
  video: "M4 6h11a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm13 4l5-3v10l-5-3",
  code: "M8 9l-4 3 4 3m8-6l4 3-4 3m-2-10l-4 14",
  wedding:
    "M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z",
};

const services = [
  {
    type: "cv",
    title: "CV احترافي متوافق مع ATS",
    eyebrow: "مسار مهني",
    text: "صياغة وتصميم سيرة ذاتية واضحة وقوية، مرتبة للتقديم على الوظائف والمنح بثقة.",
    points: ["صياغة احترافية", "تصميم نظيف", "ATS Friendly"],
    img: "/images/cv-optimized.jpg",
  },
  {
    type: "study",
    title: "دعم جامعي ومشاريع",
    eyebrow: "دراسة ومتابعة",
    text: "تنظيم أفكارك، ترتيب الملفات، متابعة المشروع، وتجهيز التسليم النهائي بصورة مقنعة.",
    points: ["شرح وتوجيه", "تنسيق تقارير", "متابعة منظمة"],
    img: "/images/academic-optimized.jpg",
  },
  {
    type: "research",
    title: "أبحاث وتقارير أكاديمية",
    eyebrow: "بحث وتوثيق",
    text: "إعداد أبحاث وتقارير بصياغة عربية واضحة، فهرسة منظمة، وتنسيق مراجع يليق بالتسليم.",
    points: ["تدقيق", "فهرسة", "تنسيق مراجع"],
    img: "/images/research-optimized.jpg",
  },
  {
    type: "ppt",
    title: "عروض PowerPoint فخمة",
    eyebrow: "عرض وتقديم",
    text: "سلايدات راقية ومنظمة للمناقشات، العروض الجامعية، عروض الأعمال، والعروض التعريفية.",
    points: ["تنظيم محتوى", "هوية بصرية", "جاهز للعرض"],
    img: "/images/powerpoint-optimized.jpg",
  },
  {
    type: "design",
    title: "تصميم بوستات وستوريات",
    eyebrow: "سوشيال ميديا",
    text: "تصاميم إعلانات، بوستات، ستوريات، كروت، وهوية بصرية خفيفة تناسب النشر السريع.",
    points: ["بوستات", "ستوريات", "إعلانات"],
    img: "/images/design-optimized.jpg",
  },
  {
    type: "video",
    title: "مونتاج وموشن جرافيك",
    eyebrow: "فيديو وحركة",
    text: "مونتاج ريلز وفيديوهات قصيرة مع إيقاع بصري، مؤثرات، نصوص، وإخراج مناسب للنشر.",
    points: ["ريلز", "Motion Graphic", "إخراج احترافي"],
    img: "/images/video-optimized.jpg",
  },
  {
    type: "code",
    title: "مشاريع تخصصية وبرمجة",
    eyebrow: "تقنية وتنفيذ",
    text: "دعم مشاريع البرمجة، IT، Power BI، Maya، ومشاريع التخصصات التقنية وإدارة الأعمال.",
    points: ["Programming", "Power BI", "Maya"],
    img: "/images/code-optimized.jpg",
  },
  {
    type: "wedding",
    title: "دعوات وكروت مناسبات",
    eyebrow: "مناسبات خاصة",
    text: "تصميم دعوات وكروت زفاف ومناسبات بلمسة أنيقة، مرتبة، وجاهزة للطباعة أو المشاركة.",
    points: ["دعوات", "كروت", "تصميم أنيق"],
    img: "/images/wedding-optimized.jpg",
  },
];

const metrics = [
  ["+5", "سنوات خبرة"],
  ["360°", "خدمات متكاملة"],
  ["Premium", "إخراج بصري راق"],
];

const signaturePoints = [
  "صياغة دقيقة",
  "هوية ذهبية هادئة",
  "تسليم مرتب",
  "جاهز للنشر والتقديم",
];

const processSteps = [
  ["01", "نفهم المطلوب", "نحدد نوع الخدمة والهدف والموعد والملفات المطلوبة."],
  ["02", "نرتب الخطة", "نجهز الهيكل ونقسم العمل بطريقة واضحة من البداية."],
  ["03", "ننفذ باحتراف", "تصميم وصياغة ومراجعة وتنسيق بجودة ثابتة."],
  ["04", "نسلم جاهز", "ملفات مرتبة وجاهزة للنشر أو التقديم أو التسليم."],
];

const reveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

function Icon({ type }) {
  return (
    <svg viewBox="0 0 24 24" className="icon" fill="none" aria-hidden="true">
      <path d={icons[type]} />
    </svg>
  );
}

function BrandLogo({ hero = false }) {
  return (
    <div className={hero ? "brand-logo brand-logo-hero" : "brand-logo"}>
      <span className={hero ? "logo-mark logo-mark-hero" : "logo-mark"}>
        <img src="/images/ather-mark-new-optimized.jpg" alt="" />
      </span>
      <span className="brand-text">
        <span>Ather</span>
        <b>|</b>
        <span>أثير</span>
      </span>
    </div>
  );
}

function HeroLogoLockup() {
  return (
    <div className="hero-logo-lockup">
      <img className="hero-logo-emblem" src="/images/ather-mark-new-optimized.jpg" alt="" />
      <div className="hero-logo-type" dir="ltr">
        <span>Ather</span>
        <b>|</b>
        <span>أثير</span>
      </div>
      <p>Design • Digital Services • Creative Solutions</p>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="actions">
      <a className="primary-btn" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        راسلنا الآن
      </a>
      <a className="secondary-btn" href="#services">
        شاهد الخدمات
      </a>
    </div>
  );
}

function CinematicHero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.08, 0.98]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -54]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [20, -28]);
  const wordY = useTransform(scrollYProgress, [0, 1], [0, -32]);

  const featured = [services[4], services[3], services[0], services[2]];

  return (
    <motion.section
      ref={heroRef}
      className="hero hero-scrub"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.div className="hero-copy" variants={reveal}>
        <span className="eyebrow">Ather Signature Studio</span>
        <motion.h1 style={{ y: wordY }}>
          <span dir="ltr">Ather | أثير</span>
          إخراج فاخر لأعمالك
        </motion.h1>
        <p>
          نرتب لك السيرة الذاتية، الأبحاث، العروض، التصاميم، الفيديوهات، والمشاريع
          المتخصصة بأسلوب بصري هادئ يرفع قيمة العمل من أول نظرة.
        </p>
        <ActionButtons />

        <motion.div
          className="hero-stats"
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.22 } } }}
        >
          {metrics.map(([value, label]) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <strong>{value}</strong>
              <span>{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="hero-stage" variants={reveal} style={{ y: mediaY }}>
        <img
          className="hero-wide-watermark"
          src="/images/ather-logo-wide-new-optimized.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="stage-rail" aria-hidden="true" />
        <motion.div
          className="hero-brand-card scrub-card"
          style={{ scale: cardScale, y: cardY, rotate: cardRotate }}
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
        >
          <HeroLogoLockup />
          <span className="scrub-caption">Digital Services & Creative Solutions</span>
        </motion.div>

        {featured.map((service, index) => (
          <motion.figure
            className={`stage-shot stage-shot-${index + 1}`}
            key={service.title}
            animate={{ y: [0, index % 2 ? 12 : -12, 0] }}
            transition={{
              duration: 5.4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.18,
            }}
          >
            <img src={service.img} alt={service.title} />
            <figcaption>{service.eyebrow}</figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </motion.section>
  );
}

function App() {
  const [active, setActive] = useState(services[0]);

  return (
    <main className="site-shell" dir="rtl">
      <div className="cinematic-bg" aria-hidden="true">
        <div className="mesh-layer" />
        <div className="beam-layer">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="grain-layer" />
      </div>

      <nav className="nav">
        <BrandLogo />
        <div className="nav-links" aria-label="روابط الموقع">
          <a href="#services">الخدمات</a>
          <a href="#portfolio">المعرض</a>
          <a href="#process">طريقة العمل</a>
          <a href="#contact">تواصل</a>
        </div>
        <a className="nav-btn" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          واتساب
        </a>
      </nav>

      <CinematicHero />

      <section className="signature-strip" aria-label="ملامح هوية أثير">
        {signaturePoints.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </section>

      <motion.section
        id="services"
        className="section services-section scene-panel"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={reveal}
      >
        <div className="scene-kicker">01 / SERVICES</div>
        <div className="section-head">
          <span>خدمات أثير</span>
          <h2>كل خدمة مصممة كقطعة نهائية: محتوى مرتب، شكل فخم، وتسليم جاهز للاستخدام.</h2>
        </div>

        <div className="services-layout">
          <motion.div
            className="service-tabs"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ show: { transition: { staggerChildren: 0.05 } } }}
          >
            {services.map((service) => (
              <motion.button
                key={service.title}
                type="button"
                onClick={() => setActive(service)}
                className={active.title === service.title ? "active" : ""}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  show: { opacity: 1, x: 0 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon type={service.type} />
                <span>
                  <b>{service.eyebrow}</b>
                  {service.title}
                </span>
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.article
              className="service-preview"
              key={active.title}
              initial={{ opacity: 0, x: -26 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ duration: 0.34, ease: "easeOut" }}
            >
              <div className="service-media">
                <img src={active.img} alt={active.title} />
              </div>
              <div className="service-copy">
                <div className="preview-icon">
                  <Icon type={active.type} />
                </div>
                <span className="service-eyebrow">{active.eyebrow}</span>
                <h3>{active.title}</h3>
                <p>{active.text}</p>
                <div className="chips">
                  {active.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn small"
                >
                  اطلب الخدمة
                </a>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </motion.section>

      <motion.section
        id="portfolio"
        className="section portfolio-section scene-panel"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={reveal}
      >
        <div className="scene-kicker">02 / VISUAL SYSTEM</div>
        <div className="section-head">
          <span>الهوية البصرية</span>
          <h2>لقطات أثير تعتمد على العمق، الذهب، والبنفسجي الداكن حتى تبان الخدمة كعمل مصقول.</h2>
        </div>

        <motion.div
          className="portfolio-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {services.map((item) => (
            <motion.article
              className="portfolio-card"
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <div className="portfolio-img-wrap">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="portfolio-content">
                <span>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="process"
        className="section process-section scene-panel"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={reveal}
      >
        <div className="scene-kicker">03 / DELIVERY</div>
        <div className="section-head">
          <span>طريقة العمل</span>
          <h2>تجربة طلب واضحة، من أول رسالة إلى ملف نهائي جاهز للتقديم أو النشر.</h2>
        </div>

        <div className="process-grid">
          {processSteps.map(([num, title, text], index) => (
            <motion.article
              className="process-card"
              key={num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <b>{num}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <section id="contact" className="cta">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span>جاهز نرتبها؟</span>
          <h2>ابعث المطلوب، وخلي الإخراج علينا.</h2>
          <p>
            ارسل نوع الخدمة والموعد والملفات المتوفرة، ونرجع لك بخطة واضحة وشغل جاهز
            للتقديم أو النشر.
          </p>
          <a className="primary-btn" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            تواصل معنا عبر واتساب
          </a>
        </motion.div>
      </section>

      <footer>
        <BrandLogo />
        <p>© Ather | أثير - خدمات مهنية وأكاديمية وتصميمية باحتراف</p>
      </footer>
    </main>
  );
}

export default App;
