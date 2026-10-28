# پنل ادمین (Keystatic)

پنل در آدرس `/keystatic` است. هر چیزی که آنجا ذخیره کنی در پوشه‌ی `content/` (متن‌ها، به صورت JSON) و `public/` (عکس‌ها و PDF رزومه) نوشته می‌شود و سایت از روی همین فایل‌ها ساخته می‌شود.

| بخش پنل | چه چیزی را عوض می‌کند |
| --- | --- |
| Profile & contact | اسم، عنوان شغلی، تگ‌لاین، فایل رزومه (انگلیسی و فارسی)، ایمیل، تلفن، آدرس، لینک‌های GitHub/LinkedIn/Telegram |
| Experience & education | سوابق کاری و تحصیلی (خودکار از جدید به قدیم مرتب می‌شود؛ تاریخ پایان خالی = «Present / اکنون») |
| Skills | لیست مهارت‌ها و آیکون‌شان (یا لوگوی دلخواه) |
| Home page sections | آمار بالای صفحه، متن و آیتم‌های خدمات، متن بخش تماس |
| Projects | نمونه‌کارها: عکس کاور، توضیحات، تگ، فناوری‌ها، لینک سایت و کد |

- هر متن یک ستون English و یک ستون فارسی دارد. اگر فارسی را خالی بگذاری، نسخه‌ی فارسی سایت همان انگلیسی را نشان می‌دهد.
- عددهای آمار را انگلیسی بنویس (مثلاً `2+`)؛ در `/fa` خودکار فارسی می‌شوند.
- پروژه فقط وقتی روی سایت می‌آید که «Show on the site» تیک داشته باشد. بخش Works و لینکش در منو فقط وقتی دیده می‌شوند که حداقل یک پروژه‌ی منتشرشده باشد.

## روی سیستم خودت

```
npm run dev
```

بعد `http://localhost:3000/keystatic` را باز کن. تغییرات مستقیم در فایل‌های پروژه ذخیره می‌شوند؛ بعد خودت commit و push کن.

## روی سایت آنلاین (یک بار راه‌اندازی)

روی Vercel هر «Save» در پنل یک commit روی GitHub می‌سازد و Vercel سایت را دوباره می‌سازد (حدود ۱–۲ دقیقه). ورود با اکانت GitHub است و فقط کسی که دسترسی نوشتن روی ریپو دارد می‌تواند ذخیره کند. تا وقتی این مراحل انجام نشده، `/keystatic` روی سایت آنلاین بسته است.

1. یک فایل `.env` در ریشه‌ی پروژه بساز و این خط را در آن بگذار:
   ```
   NEXT_PUBLIC_KEYSTATIC_STORAGE=github
   ```
2. `npm run dev` را اجرا کن و `http://localhost:3000/keystatic` را باز کن. Keystatic پیشنهاد ساخت یک GitHub App می‌دهد؛ اسمش را بگذار (مثلاً `kimiya-portfolio-admin`) و بساز. بعد از برگشت، Keystatic این چهار متغیر را در `.env` می‌نویسد:
   `KEYSTATIC_GITHUB_CLIENT_ID`، `KEYSTATIC_GITHUB_CLIENT_SECRET`، `KEYSTATIC_SECRET`، `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`
3. App را فقط روی ریپوی `purpleportfolio` نصب کن (Keystatic لینک نصب را نشان می‌دهد).
4. در تنظیمات همان GitHub App (GitHub → Settings → Developer settings → GitHub Apps) در بخش **Callback URL** این آدرس را هم اضافه کن:
   ```
   https://kimiyakhoshnood.vercel.app/api/keystatic/github/oauth/callback
   ```
5. در Vercel → Project → Settings → Environment Variables همان چهار متغیر مرحله‌ی ۲ را اضافه کن و یک Redeploy بزن.
6. خط `NEXT_PUBLIC_KEYSTATIC_STORAGE=github` را از `.env` پاک کن تا روی سیستم خودت دوباره حالت محلی داشته باشی.

فایل `.env` در `.gitignore` است و commit نمی‌شود؛ این مقادیر را جایی عمومی نگذار.
