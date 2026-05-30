import dotenv from "dotenv";
import express from "express";
import fs from "fs/promises";
import nodemailer from "nodemailer";
import path from "path";
import { createServer as createViteServer } from "vite";

dotenv.config();

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "bunat007@gmail.com";
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || "+972595468757";

type ContactPayload = {
  name?: string;
  serviceType?: string;
  contactMethod?: string;
  details?: string;
};

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildEmailHtml(payload: Required<ContactPayload>) {
  return `
    <div dir="rtl" style="font-family:Arial,Tahoma,sans-serif;background:#050008;color:#f7f2ff;padding:24px;border-radius:14px">
      <h2 style="color:#f5c542;margin:0 0 14px">طلب خدمة جديد من موقع Ather | أثير</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:10px;border-bottom:1px solid #3b155c;color:#d58cff">الاسم</td><td style="padding:10px;border-bottom:1px solid #3b155c">${escapeHtml(payload.name)}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #3b155c;color:#d58cff">نوع الخدمة</td><td style="padding:10px;border-bottom:1px solid #3b155c">${escapeHtml(payload.serviceType)}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #3b155c;color:#d58cff">طريقة التواصل</td><td style="padding:10px;border-bottom:1px solid #3b155c">${escapeHtml(payload.contactMethod)}</td></tr>
        <tr><td style="padding:10px;color:#d58cff;vertical-align:top">التفاصيل</td><td style="padding:10px;white-space:pre-wrap">${escapeHtml(payload.details || "لا توجد تفاصيل إضافية")}</td></tr>
      </table>
      <p style="margin-top:18px;color:#d4af37">واتساب أثير: ${WHATSAPP_NUMBER}</p>
    </div>
  `;
}

async function sendLeadEmail(payload: Required<ContactPayload>) {
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
    text: `طلب خدمة جديد من موقع Ather | أثير\n\nالاسم: ${payload.name}\nالخدمة: ${payload.serviceType}\nطريقة التواصل: ${payload.contactMethod}\nالتفاصيل:\n${payload.details || "لا توجد تفاصيل إضافية"}\n\nواتساب أثير: ${WHATSAPP_NUMBER}`,
    html: buildEmailHtml(payload),
  });

  return { sent: true, reason: "Email sent" };
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3000);

  app.use(express.json({ limit: "1mb" }));

  app.post("/api/contact", async (req, res) => {
    const raw = req.body as ContactPayload;
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

    console.log("============= ATHER | أثير =============");
    console.log(`[طلب جديد] الاسم: ${payload.name}`);
    console.log(`[نوع الخدمة]: ${payload.serviceType}`);
    console.log(`[طريقة التواصل]: ${payload.contactMethod}`);
    console.log(`[التفاصيل]: ${payload.details || "لا يوجد تفاصيل إضافية"}`);
    console.log("======================================");

    const leadRecord = {
      ...payload,
      contactEmail: CONTACT_EMAIL,
      whatsappNumber: WHATSAPP_NUMBER,
      timestamp: new Date().toISOString(),
    };

    await fs.mkdir(path.join(process.cwd(), "data"), { recursive: true });
    await fs.appendFile(
      path.join(process.cwd(), "data", "leads.jsonl"),
      JSON.stringify(leadRecord, null, 0) + "\n",
      "utf8"
    );

    try {
      const emailResult = await sendLeadEmail(payload);
      return res.status(200).json({
        success: true,
        emailSent: emailResult.sent,
        message: emailResult.sent
          ? "تم إرسال طلبك بنجاح إلى فريق أثير. سنراجع التفاصيل ونتواصل معك قريبًا."
          : "تم حفظ طلبك بنجاح. لإرسال الطلب إلى البريد تلقائيًا، فعّل بيانات SMTP في ملف البيئة.",
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      return res.status(200).json({
        success: true,
        emailSent: false,
        message: "تم حفظ طلبك بنجاح، لكن تعذر إرسال البريد تلقائيًا. سنراجع الطلبات المحفوظة.",
        timestamp: new Date().toISOString(),
      });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware integrated successfully.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Production static files server configured.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Ather Full-Stack Server listening on http://localhost:${PORT}`);
    console.log(`Contact receiver email: ${CONTACT_EMAIL}`);
    console.log(`WhatsApp number: ${WHATSAPP_NUMBER}`);
  });
}

startServer();
