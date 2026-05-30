# Ather | أثير — GitHub + Vercel Ready

هذه نسخة آمنة للرفع على GitHub:
- تم حذف ملف `.env` الحقيقي حتى لا يتم تسريب Gmail App Password.
- تم إضافة `.env.example` كقالب فقط.
- تم إضافة `api/contact.ts` حتى يعمل نموذج التواصل على Vercel كـ Serverless API.
- تم إضافة `vercel.json` لتحديد إعدادات البناء.

## التشغيل المحلي

```bash
npm install
npm run dev
```

افتح:

```text
http://localhost:3000
```

## البناء

```bash
npm run build
```

## متغيرات Vercel المطلوبة

أضف هذه القيم في Vercel من:
Project Settings → Environment Variables

```env
CONTACT_EMAIL=bunat007@gmail.com
WHATSAPP_NUMBER=+972595468757
NEXT_PUBLIC_WHATSAPP_NUMBER=972595468757

SMTP_SERVICE=gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=bunat007@gmail.com
SMTP_PASS=ضع_كلمة_مرور_تطبيق_Gmail_هنا_بدون_مسافات
MAIL_FROM=Ather Website <bunat007@gmail.com>
```

بعد إضافة المتغيرات في Vercel، اعمل Redeploy.

## ملاحظة أمنية مهمة

لا ترفع أي ملف اسمه `.env` أو `.env.local` على GitHub.
كلمة مرور التطبيق الخاصة بجوجل مكانها فقط داخل Vercel Environment Variables.
