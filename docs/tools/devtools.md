---
title: ابزارهای توسعه مرورگر (DevTools)
description: بررسی Elements، Console و Network
outline: deep
---

# آشنایی با Browser DevTools

**Developer Tools (DevTools)** مجموعه‌ای از ابزارهای داخلی مرورگر است که برای بررسی، آزمایش و اشکال‌زدایی صفحات وب استفاده می‌شود.

در مرورگرهایی مانند Google Chrome می‌توان با فشردن کلید `F12` یا `Ctrl + Shift + I` ابزار DevTools را باز کرد.

## ۱. بخش Elements
بخش **Elements** برای بررسی ساختار DOM صفحه و مشاهده یا آزمایش تغییرات HTML و CSS استفاده می‌شود.
- مشاهده ساختار عناصر HTML.
- مشاهده قوانین CSS اعمال‌شده.
- ایجاد تغییرات موقتی در HTML و CSS.

::: tip نکته
تغییراتی که از طریق DevTools انجام می‌دهیم، معمولاً موقتی هستند و مستقیماً فایل‌های اصلی پروژه را تغییر نمی‌دهند.
:::

## ۲. بخش Console
بخش **Console** برای مشاهده پیام‌ها، هشدارها و خطاهای JavaScript و همچنین اجرای مستقیم کدهای JavaScript استفاده می‌شود.

```javascript
const username = "Ali";
console.log(username);
console.error("Something went wrong!");