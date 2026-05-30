# Ather | أثير Cinematic Luxury Experience

موقع تفاعلي بنظام مشاهد سينمائية لعرض خدمات أثير، مع نموذج تواصل وواتساب مباشر.

## التشغيل المحلي

1. ثبّت الحزم:

```bash
npm install
```

2. شغّل الموقع:

```bash
npm run dev
```

3. افتح:

```text
http://localhost:3000
```

## البناء للإنتاج

```bash
npm run build
npm start
```

## معلومات التواصل المضافة

- بريد استقبال الطلبات: `bunat007@gmail.com`
- واتساب مباشر: `+972595468757`

زر الواتساب يعمل مباشرة عبر الرابط:

```text
https://wa.me/972595468757
```

## إرسال الطلبات إلى البريد

تم تجهيز API على المسار:

```text
POST /api/contact
```

النموذج يحاول إرسال الطلبات إلى البريد `bunat007@gmail.com` إذا تم ضبط SMTP في ملف البيئة. بدون SMTP يتم حفظ الطلبات محليا داخل:

```text
data/leads.jsonl
```

للتفعيل مع Gmail:

1. فعّل التحقق بخطوتين على حساب Gmail المرسل.
2. أنشئ App Password من إعدادات Google Account.
3. أنشئ ملف `.env` أو `.env.local` وضع القيم:

```env
CONTACT_EMAIL="bunat007@gmail.com"
WHATSAPP_NUMBER="+972595468757"
SMTP_SERVICE="gmail"
SMTP_USER="bunat007@gmail.com"
SMTP_PASS="ضع App Password هنا بدون مسافات"
MAIL_FROM="Ather Website <bunat007@gmail.com>"
```

> ملاحظة: لا يمكن إرسال بريد تلقائي من السيرفر بدون بيانات SMTP أو خدمة بريد مفعلة على الاستضافة.

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
