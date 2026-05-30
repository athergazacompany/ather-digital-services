import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  serviceType?: string;
  contactMethod?: string;
  details?: string;
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildEmailHtml(payload: Required<ContactPayload>, whatsappNumber: string) {
  return `
    <div dir="rtl" style="font-family:Arial,Tahoma,sans-serif;background:#050008;color:#f7f2ff;padding:24px;border-radius:14px">
      <h2 style="color:#f5c542;margin:0 0 14px">طلب خدمة جديد من موقع Ather | أثير</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:10px;border-bottom:1px solid #3b155c;color:#d58cff">الاسم</td><td style="padding:10px;border-bottom:1px solid #3b155c">${escapeHtml(payload.name)}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #3b155c;color:#d58cff">نوع الخدمة</td><td style="padding:10px;border-bottom:1px solid #3b155c">${escapeHtml(payload.serviceType)}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #3b155c;color:#d58cff">طريقة التواصل</td><td style="padding:10px;border-bottom:1px solid #3b155c">${escapeHtml(payload.contactMethod)}</td></tr>
        <tr><td style="padding:10px;color:#d58cff;vertical-align:top">التفاصيل</td><td style="padding:10px;white-space:pre-wrap">${escapeHtml(payload.details || "لا توجد تفاصيل إضافية")}</td></tr>
      </table>
      <p style="margin-top:18px;color:#d4af37">واتساب أثير: ${escapeHtml(whatsappNumber)}</p>
    </div>
  `;
}

async function sendLeadEmail(payload: Required<ContactPayload>) {
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "bunat007@gmail.com";
  const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || "+972595468757";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  if (!user || !pass) {
    return { sent: false, reason: "SMTP credentials are not configured" };
  }

  const transporter = nodemailer.createTransport(
    host
      ? { host, port, secure, auth: { user, pass } }
      : { service: process.env.SMTP_SERVICE || "gmail", auth: { user, pass } }
  );

  await transporter.sendMail({
    from: process.env.MAIL_FROM || `Ather Website <${user}>`,
    to: CONTACT_EMAIL,
    replyTo: payload.contactMethod.includes("@") ? payload.contactMethod : undefined,
    subject: `طلب خدمة جديد من ${payload.name} - ${payload.serviceType}`,
    text: `طلب خدمة جديد من موقع Ather | أثير

الاسم: ${payload.name}
الخدمة: ${payload.serviceType}
طريقة التواصل: ${payload.contactMethod}
التفاصيل:
${payload.details || "لا توجد تفاصيل إضافية"}

واتساب أثير: ${WHATSAPP_NUMBER}`,
    html: buildEmailHtml(payload, WHATSAPP_NUMBER),
  });

  return { sent: true, reason: "Email sent" };
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const raw = (typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {}) as ContactPayload;

    const payload: Required<ContactPayload> = {
      name: String(raw.name || "").trim(),
      serviceType: String(raw.serviceType || "خدمة غير محددة").trim(),
      contactMethod: String(raw.contactMethod || "").trim(),
      details: String(raw.details || "").trim(),
    };

    if (!payload.name || !payload.contactMethod) {
      return res.status(400).json({
        success: false,
        message: "يرجى كتابة الاسم وطريقة التواصل.",
      });
    }

    const emailResult = await sendLeadEmail(payload);

    return res.status(200).json({
      success: true,
      emailSent: emailResult.sent,
      message: emailResult.sent
        ? "تم إرسال طلبك بنجاح إلى فريق أثير. سنراجع التفاصيل ونتواصل معك قريبًا."
        : "تم حفظ طلبك مبدئيًا. لإرسال الطلب إلى البريد تلقائيًا، تأكد من ضبط بيانات SMTP في Vercel.",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Ather contact API failed:", error);
    return res.status(500).json({
      success: false,
      message: "تعذر إرسال الطلب الآن. يرجى التواصل عبر الواتساب أو المحاولة لاحقًا.",
    });
  }
}
